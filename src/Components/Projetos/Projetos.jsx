import React from "react"
import MK from "./img.Projetos/miniwiki.png"
import lojinha from "./img.Projetos/lojinha.png"
import thewitcher from "./img.Projetos/thewitcher.png"
import fantastika from "./img.Projetos/fantastika.png"
import padaria from "./img.Projetos/padaria.png"
import cartoon from "./img.Projetos/cartoon.png"
import background from "../../assets/wallpaper.jpg"
import * as S from "./ProjetosStyle.jsx"

function Projetos(){
    return(
        <S.Section style={{ backgroundImage: `url(${background})` }}>
            <S.Wiki>
                <a href="https://vtqj9s.csb.app" target="_blank"><S.icon src={MK} alt="" /></a>
                    <S.Text>
                    <h3>MINI WIKI</h3>
                    <S.P>PROJETO BASEADO EM UMA MINI WIKI</S.P>
                    <S.P>HTML</S.P>
                </S.Text> 
            </S.Wiki>

                <S.Wiki>
                    <a href="https://monizabritto.github.io/Desafio-Moniza/" target="_blank"> <S.icon src={lojinha} alt="" /> </a>
                    <S.Text>
                        <h3>LOJINHA</h3>
                        <S.P>PROJETO BASEADO EM UMA LOJA DE ROUPAS</S.P>
                        <S.P>HTML, CSS</S.P>
                    </S.Text>
                </S.Wiki>

                <S.Wiki>
                <a href="https://monizabritto.github.io/Web--THE-WITCHER/" target="_blank"> <S.icon src={thewitcher} alt="" /> </a>
                    <S.Text>
                        <h3>THE WITCHER</h3>
                        <S.P>SITE BASEADO NO JOGO/FILME THE WITCHER</S.P>
                        <S.P>HTML, CSS</S.P>
                    </S.Text>
                </S.Wiki>
            
                <S.Wiki>
                <a href="https://monizabritto.github.io/FANTASTIKA/" target="_blank"> <S.icon src={fantastika} alt="" /> </a>
                    <S.Text>
                        <h3>FANTASTIKA</h3>
                        <S.P>SITE BASEADO EM UM PETSHOP</S.P>
                        <S.P>HTML, CSS</S.P>
                    </S.Text>
                </S.Wiki>
                
                <S.Wiki>
                <a href="https://padaria-pao-de-mel-eight.vercel.app" target="_blank"> <S.icon src={padaria} alt="" /> </a>
                    <S.Text>
                        <h3>PADARIA</h3>
                        <S.P>COMPONENTIZAÇÃO</S.P>
                        <S.P>REACT, STYLED-COMPONENTS</S.P>
                    </S.Text>
                </S.Wiki>

                <S.Wiki>
                <a href="https://cartoon-tan.vercel.app" target="_blank"> <S.icon src={cartoon} alt="" /> </a>
                    <S.Text>
                        <h3>CARTOON</h3>
                        <S.P>PROJETO BASEADO NO SITE CARTOON NETWORK</S.P>
                        <S.P>REACT, STYLED-COMPONENTS, RESPONSIVO, HOOK USESTATE</S.P>
                    </S.Text>
                </S.Wiki>
            </S.Section>
    )
}

export default Projetos