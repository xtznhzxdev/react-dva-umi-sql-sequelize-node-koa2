import React  from 'react';
import SimpleMDE from 'react-simplemde-editor';
import "simplemde/dist/simplemde.min.css";

class EditorView extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: ''
    }
  }

  handleChange = (value) => {
    this.props.onChange(value);
  }

  render(){
    return (
      <SimpleMDE
        id="article-content-write"
        onChange={this.handleChange}
        value={this.state.value}
        options={{
          autofocus: true,
          spellChecker: false,
          insertTexts: {
            horizontalRule: ["", "\n\n-----\n\n"],
            image: ["![](", ")"],
            link: ["[", "]()"],
            table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
          }
        }}
      />
    )
  }
}

export default EditorView;
