import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

/*
=============== 
Variables
===============
*/
:root {
 
  
  --clr-green-dark: hsl(125, 67%, 35%);
  --clr-red-dark: hsl(356, 80%, 46%);
  --clr-red-light: hsl(360, 71%, 66%);
  --clr-black: #000000;
  --clr-white: #fff;
  --clr-orange-1: #ff7112;
  --clr-orange-2: #FF3D12;
  --clr-white-transparency-8: rgba(255, 255, 255, 0.8);
  --ff-primary:  "Helvetica Neue", Helvetica, Arial, sans-serif;
  
  --ff-secondary: "Open Sans", sans-serif;
  --transition: all 0.3s linear;
  --spacing: 0.2rem;
  --radius: 0.25rem;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  --max-width: 117rem;
  --fixed-width: 70rem;
}


/*
=============== 
Global Styles
===============
*/

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--ff-primary);
  background-color: var(--clr-black);
  color: #fff;
  line-height: 1.5;
  font-size: 1.2rem;
  
}

p {
  margin-bottom: 24px;
  
  font-size: 24px;
}

`
export default GlobalStyle
