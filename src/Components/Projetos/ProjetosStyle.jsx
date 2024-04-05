import styled from "styled-components"

export const Section= styled.section `
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: space-around;
    height: 150vh;
    color: white;
    align-items: center;
    width: 98.9vw;
    flex-wrap: wrap;

    
    @media(min-width: 320px) and (max-width: 780px){
        flex-direction: column;
        flex-wrap: nowrap;
        height: 300vh;
    }
`

export const Wiki = styled.div`
    display: flex;
    background-color:#151d28;
    border: orange solid 2px;
    width: 40vw;
    height: 45vh;
    padding: 1rem;
    align-items: center;

    @media(min-width: 320px) and (max-width: 780px){
        width: 90vw;
    }
`
export const Text = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-size: 14px;
    padding: 2rem;

`
export const P = styled.p`
    padding-top: 0.5rem;
`

export const icon = styled.img `
    width: 14rem;
    height: 15rem;
    border-radius: 10%;

    @media(min-width: 320px) and (max-width: 780px){
        width: 8rem;
        height: 10rem;
    }
`