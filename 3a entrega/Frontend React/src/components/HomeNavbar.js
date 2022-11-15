import React from 'react';

import Logo from '../img/logo118x120.png';

const HomeNavbar = () => {
    return (
        <>
            <header>
                <div className="container">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="index.html"><img
                                src={Logo} alt="Logo Inteligência Escolar" /></a>
                            <button className="navbar-toggler" type="button"
                                data-bs-toggle="collapse" data-bs-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item"><a className="nav-link active"
                                        aria-current="page" href="/">Home</a></li>
                                    <li className="nav-item"><a className="nav-link"
                                        href="views/equipe.html">Quem Somos</a></li>
                                    <li className="nav-item"><a className="nav-link"
                                        href="views/login.html">Login</a></li>
                                    <li className="nav-item"><a className="nav-link"
                                        href="views/usuarios/cadastro-usuario.jsp">Cadastre-se</a></li>
                                    <li className="nav-item"><a className="nav-link"
                                        href="views/contato.html">Contato</a></li>
                                    <li className="nav-item"><a className="nav-link"
                                        href="views/admin/admin-login.html">Admin</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default HomeNavbar;