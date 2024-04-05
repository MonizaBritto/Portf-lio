import React from "react"
import minhafoto from "./img.inicio/minhafoto.jpg"
import linkedin from "./img.inicio/Linkedin.png"
import github from "./img.inicio/GitHub.png"
import background from "../../assets/wallpaper.jpg"
import * as S from "./InicioStyle.jsx"

function Inicio() {
    return (
        <S.Section style={{ backgroundImage: `url(${background})` }}>
            <S.Apresentacao>
                <S.Foto src={minhafoto} alt="Minha Foto" />
                <S.H1>Olá! Eu sou Moniza.</S.H1>
            </S.Apresentacao>

            <S.Redes>
                <a href="https://www.linkedin.com/in/moniza-britto-7b4a63281/?originalSubdomain=br" target="_blank"><S.LogoLink src={linkedin} alt="Logo do Linkedin" /></a>
                <a href="https://github.com/MonizaBritto" target="_blank"><S.LogoGit src={github} alt="Logo do Github" /></a>
            </S.Redes>
        </S.Section>
    )
}

export default Inicio