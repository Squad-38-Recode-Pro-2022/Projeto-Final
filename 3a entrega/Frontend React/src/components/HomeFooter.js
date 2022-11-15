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
                                <li><a href="/quem-somos">Quem Somos</a></li>
                                <li><a href="/login">Login</a></li>
                                <li><a href="/contato">Contato</a></li>
                                <li><a href="/admin-login">Admin</a></li>
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