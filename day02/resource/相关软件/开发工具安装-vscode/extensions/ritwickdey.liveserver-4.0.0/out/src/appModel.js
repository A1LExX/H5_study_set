'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const LiveServerHelper_1 = require("./LiveServerHelper");
const StatusbarUi_1 = require("./StatusbarUi");
const Config_1 = require("./Config");
const Helper_1 = require("./Helper");
const opn = require("opn");
const ips = require("ips");
class AppModel {
    constructor() {
        const _ips = ips();
        this.localIps = _ips.local ? _ips.local : Config_1.Config.getHost;
        this.IsServerRunning = false;
        this.runningPort = null;
        this.HaveAnySupportedFile(() => {
            StatusbarUi_1.StatusbarUi.Init();
        });
    }
    Golive(pathUri) {
        if (!vscode_1.window.activeTextEditor && !vscode_1.workspace.rootPath) {
            this.showPopUpMsg(`Open a file or folder...`, true);
            return;
        }
        const workspacePath = vscode_1.workspace.rootPath || '';
        const openedDocUri = pathUri || (vscode_1.window.activeTextEditor ? vscode_1.window.activeTextEditor.document.fileName : '');
        let pathInfos = Helper_1.Helper.ExtractFilePath(workspacePath, openedDocUri, Config_1.Config.getRoot);
        if (this.IsServerRunning) {
            this.openBrowser(this.runningPort, Helper_1.Helper.getSubPathIfSupported(pathInfos.rootPath, openedDocUri) || '');
            return;
        }
        if (pathInfos.HasVirtualRootError) {
            this.showPopUpMsg('Invaild Path in liveServer.settings.root settings. live Server will serve from workspace root', true);
        }
        if (this.IsStaging)
            return;
        let params = Helper_1.Helper.generateParams(pathInfos.rootPath, workspacePath, () => {
            this.tagMissedCallback();
        });
        LiveServerHelper_1.LiveServerHelper.StartServer(params, (serverInstance) => {
            if (serverInstance && serverInstance.address) {
                this.LiveServerInstance = serverInstance;
                this.runningPort = serverInstance.address().port;
                this.ToggleStatusBar();
                this.showPopUpMsg(`Server is Started at port : ${this.runningPort}`);
                if (!Config_1.Config.getNoBrowser) {
                    this.openBrowser(this.runningPort, Helper_1.Helper.getSubPathIfSupported(pathInfos.rootPath, openedDocUri) || '');
                }
            }
            else {
                if (!serverInstance.errorMsg)
                    this.showPopUpMsg(`Error on port ${Config_1.Config.getPort}. Please try to change the port through settings or report on GitHub.`, true);
                else
                    this.showPopUpMsg(`Something is went wrong! Please check into Developer Console or report on GitHub.`, true);
                this.IsServerRunning = true; // to revert status - cheat :p
                this.ToggleStatusBar(); // reverted
            }
        });
        this.IsStaging = true;
        StatusbarUi_1.StatusbarUi.Working('Starting...');
    }
    GoOffline() {
        if (this.IsStaging)
            return;
        if (!this.IsServerRunning) {
            this.showPopUpMsg(`Server is not already running`);
            return;
        }
        LiveServerHelper_1.LiveServerHelper.StopServer(this.LiveServerInstance, () => {
            this.showPopUpMsg('Server is now offline.');
            this.ToggleStatusBar();
            this.LiveServerInstance = null;
            this.runningPort = null;
        });
        this.IsStaging = true;
        StatusbarUi_1.StatusbarUi.Working('Disposing...');
    }
    tagMissedCallback() {
        this.showPopUpMsg('Live Reload is not possible without body or head tag.', null, true);
    }
    showPopUpMsg(msg, isErrorMsg = false, isWarning = false) {
        if (isErrorMsg) {
            vscode_1.window.showErrorMessage(msg);
        }
        else if (isWarning && !Config_1.Config.getDonotVerifyTags) {
            const donotShowMsg = 'I understand, Don\'t show again';
            vscode_1.window.showWarningMessage(msg, donotShowMsg)
                .then(choise => {
                if (choise && choise === donotShowMsg) {
                    Config_1.Config.setDonotVerifyTags(true, true);
                }
            });
        }
        else if (!Config_1.Config.getDonotShowInfoMsg) {
            const donotShowMsg = 'Don\'t show again';
            vscode_1.window.showInformationMessage(msg, donotShowMsg)
                .then(choise => {
                if (choise && choise === donotShowMsg) {
                    Config_1.Config.setDonotShowInfoMsg(true, true);
                }
            });
        }
    }
    ToggleStatusBar() {
        this.IsStaging = false;
        if (!this.IsServerRunning) {
            StatusbarUi_1.StatusbarUi.Offline(this.runningPort || Config_1.Config.getPort);
        }
        else {
            StatusbarUi_1.StatusbarUi.Live();
        }
        this.IsServerRunning = !this.IsServerRunning;
    }
    HaveAnySupportedFile(callback) {
        const globFormat = `**/*[${Helper_1.SUPPRORTED_EXT.join(' | ')}]`;
        vscode_1.workspace.findFiles(globFormat, '**/node_modules/**').then((files) => {
            if (files && files.length !== 0) {
                return callback();
            }
            let textEditor = vscode_1.window.activeTextEditor;
            if (!textEditor)
                return;
            // If a HTML file open without Workspace
            if (vscode_1.workspace.rootPath === undefined && Helper_1.Helper.IsSupportedFile(textEditor.document.fileName)) {
                return callback();
            }
        });
    }
    openBrowser(port, path) {
        const host = Config_1.Config.getLocalIp ? this.localIps : Config_1.Config.getHost;
        const protocol = Config_1.Config.getHttps.enable ? 'https' : 'http';
        let params = [];
        let advanceCustomBrowserCmd = Config_1.Config.getAdvancedBrowserCmdline;
        if (path.startsWith('\\') || path.startsWith('/')) {
            path = path.substring(1, path.length);
        }
        path = path.replace(/\\/gi, '/');
        if (advanceCustomBrowserCmd) {
            advanceCustomBrowserCmd
                .split('--')
                .forEach((command, index) => {
                if (command) {
                    if (index !== 0)
                        command = '--' + command;
                    params.push(command.trim());
                }
            });
        }
        else {
            let CustomBrowser = Config_1.Config.getCustomBrowser;
            let ChromeDebuggingAttachmentEnable = Config_1.Config.getChromeDebuggingAttachment;
            if (CustomBrowser && CustomBrowser !== 'null') {
                let browserDetails = CustomBrowser.split(':');
                let browserName = browserDetails[0];
                params.push(browserName);
                if (browserDetails[1] && browserDetails[1] === 'PrivateMode') {
                    if (browserName === 'chrome')
                        params.push('--incognito');
                    else if (browserName === 'firefox')
                        params.push('--private-window');
                }
                if (browserName === 'chrome' && ChromeDebuggingAttachmentEnable) {
                    params.push(...[
                        '--new-window',
                        '--no-default-browser-check',
                        '--remote-debugging-port=9222',
                        '--user-data-dir=' + __dirname
                    ]);
                }
            }
        }
        if (params[0] && params[0] === 'chrome') {
            switch (process.platform) {
                case 'darwin':
                    params[0] = 'google chrome';
                    break;
                case 'linux':
                    params[0] = 'google-chrome';
                    break;
                case 'win32':
                    params[0] = 'chrome';
                    break;
                default:
                    params[0] = 'chrome';
            }
        }
        else if (params[0] && params[0].startsWith('microsoft-edge')) {
            params[0] = `microsoft-edge:${protocol}://${host}:${port}/${path}`;
        }
        try {
            opn(`${protocol}://${host}:${port}/${path}`, { app: params || [''] });
        }
        catch (error) {
            this.showPopUpMsg(`Server is started at ${this.runningPort} but failed to open browser. Try to change the CustomBrowser settings.`, true);
            console.log('\n\nError Log to open Browser : ', error);
            console.log('\n\n');
        }
    }
    dispose() {
        StatusbarUi_1.StatusbarUi.dispose();
    }
}
exports.AppModel = AppModel;
//# sourceMappingURL=appModel.js.map