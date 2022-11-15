import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AdminNavbar from '../../../components/AdminNavbar';
import AdminFooter from '../../../components/AdminFooter';

class UsuarioEdit extends Component {

    emptyItem = {
        nome: '',
        telefone: '',
        email: '',
        senha: '',
        categoria: '',
        escola: '',
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        if (this.props.match.params.id !== 'new') {
            const usuario = await (await fetch(`/cadastro-usuario/${this.props.match.params.id}`)).json();
            this.setState({ item: usuario });
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = { ...this.state.item };
        item[name] = value;
        this.setState({ item });
    }

    async handleSubmit(event) {
        event.preventDefault();
        const { item } = this.state;

        await fetch('/cadastro-usuario' + (item.id ? '/' + item.id : ''), {
            method: (item.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/cadastro-usuario');
    }

    render() {
        const { item } = this.state;
        const title = <h2>{item.id ? 'Editar Usuário' : 'Adicionar Usuário'}</h2>;

        return <div>
            <AdminNavbar />
            <Container>
                <div class="mt-4 p-5 bg-secondary text-white rounded">
                    <h1>Painel Administrador</h1>
                </div>
                <br />
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="nome">Nome</Label>
                        <Input type="text" name="nome" id="nome" value={item.nome || ''}
                            onChange={this.handleChange} autoComplete="nome" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="telefone">Telefone</Label>
                        <Input type="tel" name="telefone" id="telefone" value={item.telefone || ''}
                            onChange={this.handleChange} autoComplete="telefone" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">E-mail</Label>
                        <Input type="email" name="email" id="email" value={item.email || ''}
                            onChange={this.handleChange} autoComplete="email" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="senha">Senha</Label>
                        <Input type="password" name="senha" id="senha" value={item.senha || ''}
                            onChange={this.handleChange} autoComplete="senha" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="categoria">Categoria</Label>
                        <Input type="text" name="categoria" id="categoria" value={item.categoria || ''}
                            onChange={this.handleChange} autoComplete="categoria" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="escola">Escola</Label>
                        <Input type="text" name="escola" id="escola" value={item.escola || ''}
                            onChange={this.handleChange} autoComplete="escola" />
                    </FormGroup>
                    <br />
                    <FormGroup>
                        <Button color="primary" type="submit">Salvar</Button>{' '}
                        <Button color="secondary" tag={Link} to="/cadastro-usuario">Cancelar</Button>
                    </FormGroup>
                </Form>
            </Container>
            <AdminFooter />
        </div>
    }
}

export default withRouter(UsuarioEdit);