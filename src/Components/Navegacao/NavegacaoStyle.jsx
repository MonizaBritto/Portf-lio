import styled from "styled-components"

export const Nav = styled.nav`
    background-color: black;
    height: 15vh;
    display:flex;
    align-items:center;
`

export const Ul = styled.ul `
    width: 100vw;
    display:flex;
    justify-content: space-around;
    list-style: none; 
    font-family: "Vollkorn SC", serif;

a{
    text-decoration:none;
    color: #ffffff;
    font-size: 1.3rem;
}
`