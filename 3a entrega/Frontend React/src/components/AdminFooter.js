import React from 'react';

import ImgRodape from '../img/logoPreta.png';

const AdminFooter = () => {
    return (
        <>
            <footer>
                <hr className='horizontal-line' />
                <div className="container">
                    <section className="row-footer mt-3">
                        <div className="footer-menu">
                            <ul type="none">
                                <li><a href="/cadastro-usuario">Cadastro de Usuários</a></li>
                                <li><a href="/admin-login">Sair</a></li>
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

export default AdminFooter;