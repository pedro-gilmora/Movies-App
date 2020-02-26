import '@mdi/font/css/materialdesignicons.min.css'
import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles'
import AddItemBar from './components/AddItemBar'
import SearchBar from './components/SearchBar'
import MovieList from './components/MovieList'
import Icon from './controls/Icon'

const AppWrapper = styled.div`
  max-width:650px;
  margin: 0 auto;
  padding:20px 0 0 0;

  & * {
    font-size: 16px;
  }
`

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      filtered: [],
      movies: [
        { title: 'Star Wars: 1', category: 'Sci-Fi' },
        { title: 'Star Wars: 2', category: 'Sci-Fi' },
        { title: 'Star Wars: 3', category: 'Sci-Fi' },
        { title: 'Star Wars: 4', category: 'Sci-Fi' },
        { title: 'A walk to remember', category: 'Drama' },
      ],
      filter: { title: '', category: '' }
    };

    this.onNewItem = this.onNewItem.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.onDelete = this.onDelete.bind(this);

  }

  onNewItem(e) {

    if (!e.title)
      e.titleError = 'El título está vacío';
    else if (!e.category)
      e.categoryError = 'La categoría está vacía';
    //Chequeo la existencia en la lista
    else if (this.state.movies.some(movie => movie.title.toLowerCase() == e.title && movie.category.toLowerCase() == e.category))
      alert('Ya existe el elemento');
    else
      return (this.setState({ movies: [...this.state.movies, e], filter: { title: '', category: '' } }), true);

  }

  onSearch(e) {
    this.setState({ filter: e });
  }

  onDelete(e) {
    let movies = this.state.movies.slice();
    movies.splice(e, 1);
    this.setState({ movies }); g
  }

  render() {
    return (
      <>
        <GlobalStyles />
        <AppWrapper>
          
          <h1 style={{ textAlign: "center", fontSize: 28 }}><Icon icon="movie" size={28}/>Catálogo de filmes</h1>
          <section style={{ borderRadius: 8, background: "lightgrey" }}>
            <SearchBar onSearch={this.onSearch} movies={this.state.movies} />
            <AddItemBar onNewItem={this.onNewItem} movies={this.state.movies} />
          </section>
          <MovieList movies={this.state.movies} filter={this.state.filter} onDelete={this.onDelete} />
          
        </AppWrapper>
      </>
    );
  }

};