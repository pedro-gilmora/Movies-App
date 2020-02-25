import React from 'react';
import styled from 'styled-components';
import AddItemBar from './components/AddItemToolBar'
import SearchBar from './components/SearchBar'
import MovieList from './components/MovieList'

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width:100%;
  height:100%;
  padding: 8px;

  & * {
    font-size: 24px;
  }
`

export default class App extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppWrapper>
          <AddItemBar/>
          <SearchBar/>
          <MovieList/>
      </AppWrapper>
    );
  }

};