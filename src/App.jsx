import React from "react"
import Navegacao from "./Components/Navegacao/Navegacao.jsx"
import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

`

function App(){
  return(
    <>
    <GlobalStyle/>
    <Navegacao/>
    </>
  )
}

export default App 