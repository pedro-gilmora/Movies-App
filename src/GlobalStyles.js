import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

html, #app, body {
  height: 100%;
  width: 100%;
  margin:0;
  padding:0;
}

* {
    font-family: Roboto;
    font-weight: normal;
}
h1, h2, h3{
    font-weight: 300;
}

`