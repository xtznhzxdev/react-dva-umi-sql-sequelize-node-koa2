import React  from 'react';
import SimpleMDE from 'react-simplemde-editor';
import "simplemde/dist/simplemde.min.css";

const EditorRead = ({
  value
}) => {
  return (
    <SimpleMDE
      id="article-content-write"
      value={value}
      options={{}}
    />
  )
}

export default EditorRead;
