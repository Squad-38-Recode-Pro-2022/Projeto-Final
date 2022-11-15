import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import FaleConosco from '../img/fale-conosco.png';

const Contato = () => {
    return (
        <>
            <Navbar />
            <main>
                <div class="container">
                    <div class="col-lg-12 col-sm-12 d-flex justify-content-center">
                        <img src={FaleConosco} alt="Imagem Fale Conosco" />
                    </div>
                    <div class="row">
                        <div class="col-lg-3">

                        </div>
                        <div class="col-lg-6 col-sm-12 mt-4">
                            <form action="">
                                <div class="input-group mb-3">
                                    <span class="input-group-text bg-danger text-light">Nome:</span>
                                    <input type="text" class="form-control" required />
                                </div>
                                <div class="input-group mb-3">
                                    <span class="input-group-text bg-danger text-light">Telefone:</span>
                                    <input type="tel" class="form-control" required />
                                    <span class="input-group-text bg-danger text-light">E-mail:</span>
                                    <input type="email" class="form-control" required />
                                </div>
                                <div class="input-group mb-3">
                                    <span class="input-group-text bg-danger text-light">Assunto:</span>
                                    <select class="form-control" required>
                                        <option value="">--Selecione um assunto</option>
                                        <option value="">Sugestões</option>
                                        <option value="">Reclamações</option>
                                        <option value="">Solicitar conteúdo</option>
                                        <option value="">Outros</option>
                                    </select>
                                </div>
                                <div class="input-group mb-3">
                                    <span class="input-group-text bg-danger text-light">Mensagem:</span>
                                    <textarea cols="" rows="5" class="form-control" required></textarea>
                                </div>
                                <div class="d-grid gap-2 mb-3">
                                    <button type="reset" class="btn btn-danger">Limpar</button>
                                </div>
                                <div class="d-grid gap-2 mb-3">
                                    <button type="submit" class="btn btn-danger btn-lg">Enviar</button>
                                </div>
                            </form>
                        </div>
                        <div class="col-lg-3">

                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Contato;
