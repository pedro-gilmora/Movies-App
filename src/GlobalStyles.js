import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

html, #app, body {
  height: 100%;
  width: 100%;
  margin:0;
  padding:0;
}

body{
    background: radial-gradient(circle at 50% 0, rgba(255,0,0,.5), rgba(255,0,0,0) 70.71%), 
                radial-gradient(circle at 6.7% 75%, rgba(0,0,255,.5), rgba(0,0,255,0) 70.71%), 
                radial-gradient(circle at 93.3% 75%, rgba(0, 137, 255, 0.5), rgba(0,255,0,0) 70.71%) #ffff9f;
}
b{
    font-weight:400;
}
* {
    font-family: Roboto;
    color:white;
    font-weight: 300;
}
h1, h2, h3{
    font-weight: 300;
}

`