const fs = require('fs');
const path = require('path');
const vscode = require('vscode');

function updateTheme() {
  const config = vscode.workspace.getConfiguration('themeColorRahdarNajib');

  const theme = {
    "$schema": "vscode://schemas/color-theme",
    "name": "My Custom Theme",
    "colors": {
      "editor.background": "#1e1e1e",
      "editor.foreground": "#d4d4d4",
      "editor.lineHighlightBackground": "#333333",
      "editor.selectionBackground": "#264F78",
      "editorCursor.foreground": "#A7A7A7"
    },
    "tokenColors": [
      {
        "scope": "comment",
        "settings": {
          "foreground": config.get('commentColor')
        }
      },
      {
        "scope": "string",
        "settings": {
          "foreground": config.get('stringColor')
        }
      },
      {
        "scope": "keyword",
        "settings": {
          "foreground": config.get('keywordColor')
        }
      }
    ]
  };

  const themePath = path.join(__dirname, 'themes', 'theme color force-color-theme.json');
  fs.writeFileSync(themePath, JSON.stringify(theme, null, 2));
}

module.exports = updateTheme;
