import React from 'react';
import ToolBar from '../controls/ToolBar';
import TextInput from '../controls/TextInput';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.valueChanged = this.valueChanged.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    let form = e.target.tagName.toLowerCase() == 'form' ? (e.preventDefault(), e.target) : e.target.closest('form');
    this.props.onSearch({ category: form.category.value.toLowerCase().trim(), title: form.title.value.toLowerCase().trim() });
  }

  valueChanged(e) {
    this.onSubmit(e);
  }

  render() {

    return (<ToolBar onSubmit={this.onSubmit} title="Buscar películas...">
      
      <TextInput name="title" flex="1" type="search" placeholder="Buscar por nombre..." onChange={this.valueChanged} />

      <TextInput name="category" flex="1" type="search" placeholder="Filtrar por género..." onChange={this.valueChanged} list="categoriesList" />

    </ToolBar>);
  }
};