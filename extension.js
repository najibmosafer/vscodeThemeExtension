const vscode = require('vscode');
const updateTheme = require('./updateTheme');

function activate(context) {
  updateTheme();

  vscode.workspace.onDidChangeConfiguration(event => {
    if (event.affectsConfiguration('themeColorRahdarNajib')) {
      updateTheme();
    }
  });
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
