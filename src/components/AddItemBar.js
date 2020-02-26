import React from 'react';
import ToolBar from '../controls/ToolBar';
import TextInput from '../controls/TextInput';
import Button from '../controls/Button';


export default class AddItemBar extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.checkValidations = this.checkValidations.bind(this);
  }

  checkValidations(e){
    e.target.setCustomValidity('');
    e.target.checkValidity();
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
    else {
      //Establezco los errores detectdados
      form.title.setCustomValidity(newItem.titleError||'')
      form.category.setCustomValidity(newItem.categoryError||'')
    }
  }

  render() {

    const { movies } = this.props;

    return (<ToolBar autoComplete="off" onSubmit={this.onSubmit} title="Añadir elemento">

      <TextInput name="title" placeholder="Movie" onInput={this.checkValidations} />

      <TextInput name="category" placeholder="Genre" list="categoriesList" onInput={this.checkValidations} />

      <datalist id="categoriesList">
        {movies.
          //Reduce las lista de películas a una de categorias únicas 
          reduce((items, el) => (!items.includes(el.category) && items.push(el.category), items), []).
          //Muestro cada elementos
          map((category, i) => <option value={category} key={i}> {category} </option>)}
      </datalist>

      <Button type="submit"><b style={{ margin: 6 }}>+</b></Button>

    </ToolBar>);
  }
};