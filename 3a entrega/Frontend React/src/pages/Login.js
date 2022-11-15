import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Login = () => {
    return (
        <>
            <Navbar />
            <main>
                <div className="container">
                    <div className="mt-4 p-5 bg-success text-white rounded">
                        <h1>Faça o seu Login</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-3">

                        </div>
                        <div className="col-lg-6 col-sm-12 mt-4">
                            <form action="">
                                <div className="input-group mb-3">
                                    <span className="input-group-text bg-success text-light">E-mail:</span>
                                    <input type="email" className="form-control" />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text bg-success text-light">Senha:</span>
                                    <input type="password" className="form-control" />
                                </div>
                                <div className="d-grid gap-2 mb-3">
                                    <button type="reset" className="btn btn-success">Limpar</button>
                                </div>
                                <div className="d-grid gap-2 mb-3">
                                    <button type="button" className="btn btn-success">Esqueci minha senha</button>
                                </div>
                                <div className="d-grid gap-2 mb-3">
                                    <button type="submit" className="btn btn-success btn-lg">Enviar</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-3">

                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Login;