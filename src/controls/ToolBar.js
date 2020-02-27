import styled from 'styled-components'

export default styled.form`
    max-width: 650px;
    margin: 16px 0;
    padding: 18px;
    background: #ffffff1f;
    border-radius: 76px;
    align-items: center;
    position: relative;
    display: flex;

    & > input, & > button{
        margin: 4px;
        flex: 1;
    }

    & > button > span{
        display:none;
        color:black;
    }

    &::before{
        content: '${props => props.title}';    
        margin-left: 20px;
        padding: 4px 16px;
        font-size: 12px;
        text-transform: uppercase;
        font-weight: 100;
        letter-spacing: 2.64px;
        position: absolute;
        top: -10px;
        text-shadow: 0px 0px 5px black;
        background: #0000006b;
        border-radius: 18px;
    }

    @media screen and (max-width: 600px) {
        padding: 18px 20px;
        border-radius: 28px;
        flex-direction: column;
        align-items: stretch;

        & > button > i{
            display:none;
        }
        & > button{
            padding:6px 8px;
        }
        & > button > span{
            display:block;
        }
    }

`;