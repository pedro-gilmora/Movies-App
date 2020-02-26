import React from 'react';
import ToolBar from '../controls/ToolBar';
import TextInput from '../controls/TextInput';
import Button from '../controls/Button';

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

    const { movies } = this.props;

    return (<ToolBar onSubmit={this.onSubmit}>

      <TextInput name="title" type="search" placeholder="Search by name..." onChange={this.valueChanged} />

      <TextInput name="category" type="search" placeholder="Filter by genre..." onChange={this.valueChanged} list="categoriesListSearch" />

      <datalist id="categoriesListSearch">
        {movies.
          //Reduce las lista de películas a una de categorias únicas 
          reduce((items, el) => (!items.includes(el.category) && items.push(el.category), items), []).
          //Muestro cada elementos
          map((category, i) => <option value={category} key={i}> {category} </option>)}
      </datalist>

    </ToolBar>);
  }
};