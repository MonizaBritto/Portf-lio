import React from "react"
import vnw from "./img.sobre/vnw.png"
import html from "./img.sobre/html.png"
import js from "./img.sobre/javascript.png"
import css from "./img.sobre/css.png"
import cjcc from "./img.sobre/CJCC.png"
import background from "../../assets/wallpaper.jpg"
import * as S from "./SobreStyle.jsx"

function Sobre() {
    return (
        <S.Section style={{ backgroundImage: `url(${background})` }}>
            <S.Sobre> 
                <S.H2>Estudos</S.H2>
                <S.estudos>
                    <div>
                        <h3>Desenvolvendo Ideias</h3>
                        <p>MAR/2023 - MAIO/2023</p>
                    </div>
                    <S.CJ src={cjcc} alt="Logo do Cjcc" />
                </S.estudos>
                <S.estudos>
                    <div>
                        <h3>Desenvolvimento Front-end</h3>
                        <p>AGO/2023 - MAIO/2024</p>
                    </div>
                    <img src={vnw} alt="Logo da Vai na Web" />
                </S.estudos>
            </S.Sobre>

            <S.Sobre>
                <S.H2>Habilidades</S.H2>
                <S.logo>
                    <img src={html} alt="" />
                    <h3>HTML</h3>
                </S.logo>
                <S.logo>
                    <img src={js} alt="" />
                    <h3>Javascript</h3>
                </S.logo>
                <S.logo>
                    <img src={css} alt="" />
                    <h3>CSS</h3>
                </S.logo>
            </S.Sobre>
        </S.Section>
    )
}

export default Sobre