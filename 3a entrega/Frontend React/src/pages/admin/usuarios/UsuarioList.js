import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AdminNavbar from '../../../components/AdminNavbar';
import AdminFooter from '../../../components/AdminFooter';
import { Link } from 'react-router-dom';

class UsuarioList extends Component {

    constructor(props) {
        super(props);
        this.state = { usuarios: [] };
    }

    componentDidMount() {
        fetch('/cadastro-usuario')
            .then(response => response.json())
            .then(data => this.setState({ usuarios: data }));
    }

    async remove(id) {
        await fetch(`/cadastro-usuario/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedUsuarios = [...this.state.usuarios].filter(i => i.id !== id);
            this.setState({ usuarios: updatedUsuarios });
        });
    }

    render() {
        const { usuarios } = this.state;

        const usuarioList = usuarios.map(usuario => {
            return <tr key={usuario.id}>
                <td>{usuario.nome}</td>
                <td>{usuario.telefone}</td>
                <td>{usuario.email}</td>
                <td>{usuario.senha}</td>
                <td>{usuario.categoria}</td>
                <td>{usuario.escola}</td>
                <td>
                    <ButtonGroup>
                        <Button color="primary" tag={Link} to={"/cadastro-usuario/" + usuario.id}>Editar</Button>
                        <Button color="danger" onClick={() => this.remove(usuario.id)}>Apagar</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <AdminNavbar />
                <Container>
                    <div className="mt-4 p-5 bg-secondary text-white rounded">
                        <h1>Painel Administrador</h1>
                    </div>
                    <br />
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/cadastro-usuario/new" >Adicionar Usuário</Button>{' '}
                        <Button color="warning" tag={Link} to="/admin-painel" >Voltar</Button>
                    </div>
                    <br />
                    <h3>Cadastro de Destinos</h3>
                    <div className="table-responsive">
                        <Table className="mt-4">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Telefone</th>
                                    <th>E-mail</th>
                                    <th>Senha</th>
                                    <th>Categoria</th>
                                    <th>Escola</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usuarioList}
                            </tbody>
                        </Table>
                    </div>
                </Container >
                <AdminFooter />
            </div >
        );
    }
}

export default UsuarioList;