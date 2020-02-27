import React from 'react';
import ToolBar from '../controls/ToolBar';
import TextInput from '../controls/TextInput';
import Button from '../controls/Button';
import Icon from '../controls/Icon'


export default class AddItemBar extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {

    let form = e.target;
    
    //evito el comportamiento por defecto del formulario
    e.preventDefault();
    
    const newItem = {
      category: form.category.value.trim(),
      title: form.title.value.trim()
    };

    //Si logra añadir el elemento
    if (this.props.onNewItem(newItem))
      //Reseteo el formulario
      form.reset();

  }

  render() {

    const { movies } = this.props;

    return (<ToolBar autoComplete="off" onSubmit={this.onSubmit} title="Añadir película...">

      <TextInput name="title" flex="20%" placeholder="Filme" required />

      <TextInput name="category" placeholder="Género" list="categoriesList" required />

      <Button type="submit"><Icon icon="plus" size={24} /><span>AGREGAR</span></Button>

    </ToolBar>);
  }
};