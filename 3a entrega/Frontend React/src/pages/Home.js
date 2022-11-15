import React from 'react';

import HomeNavbar from '../components/HomeNavbar';
import HomeFooter from '../components/HomeFooter';

import LoginIcon from '../img/right-to-bracket-solid-white.png';

const Home = () => {
    return (
        <>
            <HomeNavbar />
            <main>
                <section id="capa">
                    <div className="container">
                        <h1 id="texto-capa">Bem-vindo(a) ao Inteligência Escolar</h1>
                        <h5 id="texto-capa">
                            Somos um projeto social integrado ao programa Recode Pro e temos
                            como desafio da ODS 4 <br /> das Nações Unidas, reduzir o acesso
                            desigual aos recursos escolares. Para isto, desenvolvemos <br />
                            este sistema, que possibilita o uso e o compartilhamento de
                            conteúdos educacionais de <br /> qualidade entre professores,
                            com acesso disponível também para estudantes ou interessados.
                        </h5>
                        <h5 id="texto-capa">Acesse e conheça o nosso sistema fazendo o
                            seu cadastro ou login abaixo.</h5>
                        <div className="botoes">
                            <a href="/login">
                                <button role="button" className="botao">
                                    <img src={LoginIcon} alt="Login icon"
                                        width="20px" height="16px" /> LOGIN
                                </button>
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <HomeFooter />
        </>
    )
}

export default Home;