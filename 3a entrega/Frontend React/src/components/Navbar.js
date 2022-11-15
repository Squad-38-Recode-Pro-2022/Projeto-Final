import React from 'react';

import Logo from '../img/logo118x120.png';

const Navbar = () => {
    return (
        <>
            <header>
                <div className="container">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="/"><img
                                src={Logo}
                                alt="Logo Inteligência Escolar" /></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/quem-somos">Quem Somos</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/login">Login</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/contato">Contato</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/admin-login">Admin</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <hr className='horizontal-line' />
            </header>
        </>
    )
}

export default Navbar;