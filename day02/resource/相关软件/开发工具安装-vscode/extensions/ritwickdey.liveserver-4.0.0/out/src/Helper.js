'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const Config_1 = require("./Config");
exports.SUPPRORTED_EXT = [
    '.html', '.htm', '.svg'
];
class Helper {
    static ExtractFilePath(workSpacePath, openedDocUri, virtualRoot) {
        let documentPath = path.dirname(openedDocUri);
        // WorkSpacePath will be NULL if only a single file is opened.
        let rootPath = workSpacePath ? workSpacePath : documentPath;
        virtualRoot = path.join(rootPath, virtualRoot);
        let HasVirtualRootError = !fs.existsSync(virtualRoot);
        if (!HasVirtualRootError) {
            rootPath = virtualRoot;
        }
        if (process.platform === 'win32') {
            if (!rootPath.endsWith('\\'))
                rootPath = rootPath + '\\';
        }
        else {
            if (!rootPath.endsWith('/'))
                rootPath = rootPath + '/';
        }
        return {
            HasVirtualRootError: HasVirtualRootError,
            rootPath: rootPath
        };
    }
    /**
     * This function return the remaining path from root to target.
     * e.g. : root is `c:\user\rootfolder\` and target is `c:\user\rootfolder\subfolder\index.html`
     * then this function will return `subfolder\index.html` as html is a supported otherwise it will return null.
     *
     * @param rootPath
     * @param targetPath
     */
    static getSubPathIfSupported(rootPath, targetPath) {
        if (!Helper.IsSupportedFile(targetPath) || !targetPath.startsWith(rootPath)) {
            return null;
        }
        return targetPath.substring(rootPath.length, targetPath.length);
    }
    /**
     * It returns true if file is supported. input can be in full file path or just filename with extension name.
     * @param file: can be path/subpath/file.ts or file.ts
     */
    static IsSupportedFile(file) {
        let ext = path.extname(file) || (file.startsWith('.') ? file : `.${file}`);
        return exports.SUPPRORTED_EXT.indexOf(ext.toLowerCase()) > -1;
    }
    /**
     *
     * @param rootPath
     * @param workspacePath
     * @param onTagMissedCallback
     */
    static generateParams(rootPath, workspacePath, onTagMissedCallback) {
        workspacePath = workspacePath || '';
        const port = Config_1.Config.getPort;
        const ignorePathGlob = Config_1.Config.getIgnoreFiles || [];
        let ignoreFiles = [];
        ignorePathGlob.forEach((ignoredPath, index) => {
            if (!ignoredPath.startsWith('/') || !ignoredPath.startsWith('\\')) {
                if (process.platform === 'win32') {
                    ignoreFiles[index] = workspacePath + '\\' + ignoredPath;
                }
                else {
                    ignoreFiles[index] = workspacePath + '/' + ignoredPath;
                }
            }
        });
        const proxy = Helper.getProxySetup();
        const https = Helper.getHttpsSetup();
        const mount = Config_1.Config.getMount;
        // In live-server mountPath is reslove by `path.resolve(process.cwd(), mountRule[1])`.
        // but in vscode `process.cwd()` is the vscode extensions path.
        // The correct path should be resolve by workspacePath.
        mount.forEach((mountRule) => {
            if (mountRule.length === 2 && mountRule[1]) {
                mountRule[1] = path.resolve(workspacePath, mountRule[1]);
            }
        });
        const file = Config_1.Config.getFile;
        return {
            port: port,
            host: '0.0.0.0',
            root: rootPath,
            file: file,
            open: false,
            https: https,
            ignore: ignoreFiles,
            disableGlobbing: true,
            proxy: proxy,
            cors: true,
            wait: Config_1.Config.getWait || 100,
            fullReload: Config_1.Config.getfullReload,
            useBrowserExtension: Config_1.Config.getUseWebExt,
            onTagMissedCallback: onTagMissedCallback,
            mount: mount
        };
    }
    static getHttpsSetup() {
        const httpsConfig = Config_1.Config.getHttps;
        let https = null;
        if (httpsConfig.enable === true) {
            let cert = fs.readFileSync(httpsConfig.cert, 'utf8');
            let key = fs.readFileSync(httpsConfig.key, 'utf8');
            https = {
                cert: cert,
                key: key,
                passphrase: httpsConfig.passphrase
            };
        }
        return https;
    }
    static getProxySetup() {
        const proxySetup = Config_1.Config.getProxy;
        let proxy = [[]];
        if (proxySetup.enable === true) {
            proxy[0].push(proxySetup.baseUri, proxySetup.proxyUri);
        }
        else {
            proxy = null; // required to change the type [[]] to black array [].
        }
        return proxy;
    }
}
exports.Helper = Helper;
//# sourceMappingURL=Helper.js.map