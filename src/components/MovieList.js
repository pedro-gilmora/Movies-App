import React from 'react';
import styled from 'styled-components'
// import Button from '../controls/Button';
// import Icon from '../controls/Icon';

const MovieList = styled.ul`
    max-width:650px;
    list-style:none;
    padding: 0;
    margin:12px;
`;

const Item = styled.li`

  display:flex;
  justify-content: space-between;
   
  &.header{
    color:red;
  }

  &:nth-child(2n):not(:first-child){
    background-color:#d3d3d32b;
  }
  & > * {
    padding:12px;
  }

  @media screen and (max-width: 600px) {
    &{
      flex-direction: column;      
      justify-content: space-around;
    }
    &:first-child{
      display: none;
    }
    & > span:first-child{
      font-weight:400;
    }
    & > span{
      padding:10px;
    }
  }

`;

export default class SeachBar extends React.Component {
  
  render() {
    const { movies, filter, onDelete } = this.props; // ES6 destructuring
    return (<MovieList>
      {/* Header element */}
      <Item className="header">
        <b>Filme</b>
        <b>Género</b>
      </Item>

      {/* Movies row */}
      {movies
        .filter(item => item.title.toLocaleLowerCase().trim().includes(filter.title) && 
                        item.category.toLocaleLowerCase().trim().includes(filter.category))
        .map((el, i) => 
        <Item key={i}>
          <span>{el.title}</span>
          <span>{el.category}</span>
          {/* <Button onClick={() => onDelete(i)}>Eliminar</Button> */}
        </Item>)}

    </MovieList>
    );
  }
};
