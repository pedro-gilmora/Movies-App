import styled from 'styled-components'

export default styled.input`
    font-family: monospace;
    flex:1 1 auto;
    border:0;
    margin: 8px;
    padding: 6px;
    border-bottom: 2px solid gray;
    outline:none;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;

    &:invalid {
        border-bottom: 2px solid red;
    }
`;