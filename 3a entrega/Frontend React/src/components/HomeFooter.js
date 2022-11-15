import React from 'react';

import ImgRodape from '../img/logoPreta.png';

const HomeFooter = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <section className="row-footer mt-3">
                        <div className="footer-menu">
                            <ul type="none">
                                <li><a href="/">Home</a></li>
                                <li><a href="views/equipe.html">Quem Somos</a></li>
                                <li><a href="views/login.html">Login</a></li>
                                <li><a href="./views/usuarios/cadastro-usuario.jsp">Cadastre-se</a></li>
                                <li><a href="views/contato.html">Contato</a></li>
                                <li><a href="views/admin/admin-login.html">Admin</a></li>
                            </ul>
                        </div>
                        <div className="footer-logo">
                            <h4>Apoio:</h4>
                            <img id="img-rodape" src={ImgRodape} alt="Logo Recode Pro" width="200px" />
                        </div>
                    </section>
                    <div className="row-endfooter">
                        <p>
                            Inteligência Escolar - &copy; 2022
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default HomeFooter;