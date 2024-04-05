import styled from "styled-components"

export const Section = styled.section`
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media(min-width: 320px) and (max-width: 780px){
        display: flex;
        flex-direction: column;
    }

`

export const Apresentacao = styled.div`
    display: flex;
    align-items: center;
    width: 70vw;
    justify-content: space-around;
    font-size: 2rem;
    font-family: "Cinzel Decorative", serif;


    @media(min-width: 320px) and (max-width: 780px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        }
`
export const H1 = styled.h1`
    @media(min-width: 320px) and (max-width: 780px){
        font-size: 20px;
   }

   @media(min-width: 767px) and (max-width: 780px){
        font-size: 30px;
   }
`

export const Foto = styled.img`
    width: 20vw;
    height: 42vh;
    border-radius: 100%;

    @media(min-width: 320px) and (max-width: 780px){
        width: 70vw;
        height: 33vh;
        margin-bottom: 3rem;
    }

    @media(min-width: 670px) and (max-width: 780px){
        width: 50vw;
        height: 36vh;
    }

    @media(min-width: 780px) and (max-width: 1199px){
        width: 50vw;
        height: 34vh;
    }

    @media(min-width: 1200px) and (max-width: 1300px){
        width: 25vw;
        height: 34vh;
    }

`

export const Redes = styled.div`
    display: flex;
    align-items: center;
    width: 20vw;
    flex-direction: initial;

    @media(min-width: 320px) and (max-width: 780px){
        display: flex;
        flex-direction: column;
        }

`

export const LogoLink = styled.img`
    width: 2.7rem;
    height: 2,7rem;
   
    @media(min-width: 320px) and (max-width: 780px){
        width: 4rem;
        height: 3,5rem;
    }
`

export const LogoGit = styled.img`
    width: 4rem;
    height: 3rem;
   
    @media(min-width: 320px) and (max-width: 780px){
        width: 6rem;
        height: 4.5rem;
    }
`