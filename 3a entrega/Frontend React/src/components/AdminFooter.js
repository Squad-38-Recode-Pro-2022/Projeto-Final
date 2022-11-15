import React from 'react';

import ImgRodape from '../img/logoPreta.png';

const AdminFooter = () => {
    return (
        <>
            <footer>
                <hr className='horizontal-line' />
                <div class="container">
                    <section class="row-footer mt-3">
                        <div class="footer-logo">
                            <img id="img-rodape" src={ImgRodape} alt="Logo Recode Pro" />
                        </div>
                        <div class="footer-menu">
                            <ul type="none">
                                <li><a href="/cadastro-usuario">Cadastro de Usuários</a></li>
                                <li><a href="/admin-login">Sair</a></li>
                            </ul>
                        </div>
                    </section>
                    <div class="row-endfooter">
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