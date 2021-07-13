'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const StatusbarUi_1 = require("./StatusbarUi");
const appModel_1 = require("./appModel");
const Helper_1 = require("./Helper");
const index_1 = require("./announcement/index");
function activate(context) {
    const appModel = new appModel_1.AppModel();
    index_1.checkNewAnnouncement(context.globalState);
    context.subscriptions.push(vscode_1.commands
        .registerCommand('extension.liveServer.goOnline', (fileUri) => {
        vscode_1.workspace.saveAll().then(() => {
            appModel.Golive(fileUri ? fileUri.fsPath : null);
        });
    }));
    context.subscriptions.push(vscode_1.commands
        .registerCommand('extension.liveServer.goOffline', () => {
        appModel.GoOffline();
    }));
    context.subscriptions.push(vscode_1.window
        .onDidChangeActiveTextEditor(() => {
        if (vscode_1.window.activeTextEditor === undefined)
            return;
        if (vscode_1.workspace.rootPath === undefined && Helper_1.Helper.IsSupportedFile(vscode_1.window.activeTextEditor.document.fileName)) {
            StatusbarUi_1.StatusbarUi.Init();
        }
    }));
    context.subscriptions.push(appModel);
}
exports.activate = activate;
function deactivate() {
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map