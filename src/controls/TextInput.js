import styled from 'styled-components'

export default styled.input`
    border: 0;
    background: #ffffff40;
    padding: 8px 16px;
    border-bottom: 2px solid gray;
    outline: none;
    border-radius: 18px;
    margin: 4px;

    &::placeholder{
        color: white;
    }

    &:invalid {
        border-bottom: 2px solid red;
    }
`;