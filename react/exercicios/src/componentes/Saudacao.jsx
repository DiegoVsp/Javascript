import React, { Component } from 'react';

// Componetes de Classe #01
export default class Saudacao extends Component {
  state = {
    tipo: this.props.tipo,
    nome: this.props.nome
  }
// com constructor
  constructor(props) {
    super(props)
    this.setTipo = this.setTipo.bind(this)
  }

  setTipo(e) {
    // let i = 0;
    // setInterval(() => {
    //   this.setState({ tipo: ++i })
    // }, 1000)
    this.setState({ tipo: e.target.value })
  }
  setNome(e) {
    this.setState({ nome: e.target.value })
  }
  render() {
    const { tipo, nome } = this.state
    return (
      <>
        <h1>{tipo} {nome}!</h1>
        <hr />
        <input type="text" placeholder="Tipo"
          value={tipo} onChange={this.setTipo} />
        <input type="text" placeholder="Nome"
          value={nome} onChange={e => this.setNome(e)} />
      </>
    )
  }
}