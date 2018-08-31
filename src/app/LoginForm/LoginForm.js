import React, { Component } from 'react';


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    console.log(this.props)
  }

  handleChange(event) {
    const state = {};
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onLogin(true);
  }


  render() {
    return (
      <div id="section-login">
        <form method="post" onSubmit={this.handleSubmit}>
          <div className="form-input">
            <label htmlFor="email">Login</label>
            <input id="email" name="email" type="email" required value={this.state.email} onChange={this.handleChange} placeholder="email" />
          </div>
          <div className="form-input">
            <label htmlFor="password">Senha</label>
            <input id="password" name="password" type="password" required value={this.state.password} onChange={this.handleChange} placeholder="senha" />
          </div>
          <div className="form-submit">
            <button type="submit" className="button-submit w-100-per">Entrar</button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
