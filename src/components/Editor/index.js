import React from 'react';
import PropTypes from 'prop-types';
import { ControlledEditor, monaco } from '@monaco-editor/react';
import { draculaish } from './themes';

function Editor({ theme, value, language, onChange }) {
  monaco.init().then(monacoInstance => {
    monacoInstance.editor.defineTheme('dracula', draculaish);
    monacoInstance.languages.typescript.javascriptDefaults.setCompilerOptions({
      noLib: true,
      allowNonTsExtensions: true,
    });
  });

  const editorOptions = {
    suggest: {
      filterGraceful: false,
      showIcons: false,
      maxVisibleSuggestions: 3,
    },
    lineDecorationsWidth: '8px',
    renderLineHighlight: 'gutter',
    quickSuggestions: false,
    acceptSuggestionOnCommitCharacter: false,
    parameterHints: {
      enabled: false,
    },
    lightbulb: {
      enabled: false,
    },
    minimap: {
      enabled: false,
    },
  };

  return (
    <ControlledEditor
      loading=""
      height="100%"
      theme={theme}
      value={value}
      language={language}
      options={editorOptions}
      onChange={onChange}
    />
  );
}

Editor.propTypes = {
  theme: PropTypes.string,
  value: PropTypes.string,
  language: PropTypes.string,
  onChange: PropTypes.func,
};

Editor.defaultProps = {
  theme: 'dracula',
  value: '',
  language: 'javascript',
  onChange: () => {},
};

export default Editor;
