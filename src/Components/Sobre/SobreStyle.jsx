import styled from "styled-components"

export const Section = styled.section`
    background-repeat: no-repeat;
    background-size: cover;
    height: 130vh;
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: "Vollkorn SC", serif;

    @media(min-width: 320px) and (max-width: 780px){
        flex-direction: column;
        padding: 1rem;
    }

`

export const Sobre = styled.section`
    background-color: #151d28;
    color: #ffffff;
    border: orange solid 2px;
    height: 85vh;
    width: 35vw;
    border-radius: 15%;
    display:flex;
    flex-direction: column;
    align-items: center; 

    @media(min-width: 320px) and (max-width: 780px){
        width: 90vw;
        height: 60vh;
    }
`

export const H2 = styled.h2`
    padding: 1rem;
`

export const CJ = styled.img`
    width: 8rem;
    height: 5.5rem;
`

export const logo = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    padding: 1rem;
`

export const estudos = styled.div`
    display: flex;
    align-items: center;
    width: 23rem;
    padding: 2rem;
`