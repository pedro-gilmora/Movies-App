import React from 'react';
import styled from 'styled-components'

const MovieList = styled.ul`
    
`;

export default class SeachBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {list: [
        {name:'Star Wars: 1', category: 'Sci-Fi'},
        {name:'Star Wars: 2', category: 'Sci-Fi'},
        {name:'Star Wars: 3', category: 'Sci-Fi'},
        {name:'Star Wars: 4', category: 'Sci-Fi'},
        {name:'A walk to remember', category: 'Drama'},
    ]};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (<MovieList>          
        {this.state.list.map(el =><li>{el.name}: {el.category}</li>)}
    </MovieList>
    );
  }
};