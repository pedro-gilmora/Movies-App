import React from 'react';
import styled from 'styled-components'
import Button from '../controls/Button';
import Icon from '../controls/Icon';

const MovieList = styled.ul`
    max-width:650px;
    list-style:none;
    padding: 0;
    margin:8px;
`;

const Item = styled.li`
  font-family:monospace;
  display:flex;
  align-content: space-between;
  justify-content: space-between;
  
  &:first-child{
    color:grey;
    font-size: 38px;
  }

  &:nth-child(2n+1):not(:first-child){
    background-color:lightgrey;
  }
  & > * {
    padding:8px;
  }
`;

export default class SeachBar extends React.Component {
  
  render() {
    const { movies, filter, onDelete } = this.props; // ES6 destructuring
    return (<MovieList>
      {/* Header element */}
      <Item>
        <b>Filme</b>
        <b>Género</b>
      </Item>

      {/* Movies row */}
      {movies
        .filter(item => item.title.toLocaleLowerCase().trim().includes(filter.title) && 
                        item.category.toLocaleLowerCase().trim().includes(filter.category))
        .map((el, i) => 
        <Item key={i}>
          <span><Icon icon="film" size={24}/>{el.title}</span>
          <b>{el.category}</b>
          {/* <Button onClick={() => onDelete(i)}>Eliminar</Button> */}
        </Item>)}

    </MovieList>
    );
  }
};
