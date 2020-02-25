import React from 'react';
import ToolBar from './ToolBar'
import TextInput from './TextInput'



export default class SeachBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (<ToolBar>          
        <TextInput value={this.state.value} onChange={this.handleChange} placeholder="Title" />
        <TextInput value={this.state.value} onChange={this.handleChange} placeholder="Category" />
    </ToolBar>
    );
  }
};