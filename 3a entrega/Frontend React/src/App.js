import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './css/style.css';

import Home from './pages/Home';
import Contato from './pages/contato';
import AdminLogin from './pages/admin/AdminLogin';
import AdminPainel from './pages/admin/AdminPainel';
import UsuarioList from './pages/admin/usuarios/UsuarioList';
import UsuarioEdit from './pages/admin/usuarios/UsuarioEdit';

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/contato' component={Contato}/>
            <Route path='/admin-login' component={AdminLogin}/>
            <Route path='/admin-painel' component={AdminPainel}/>
            <Route path='/cadastro-usuario' exact={true} component={UsuarioList}/>
            <Route path='/cadastro-usuario/:id' component={UsuarioEdit}/>
          </Switch>
        </Router>
    )
  }
}

export default App;