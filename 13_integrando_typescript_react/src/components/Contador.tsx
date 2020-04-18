import React, { Component } from "react";

import ContadorValor from "./ContadorValor";

import "./Contador.css";

interface IContadorProps {
  valorInicial?: number;
}

interface IContadorState {
  valor: number;
}

export default class Contador extends Component<IContadorProps> {
  state = {
    valor: this.props.valorInicial || 0,
  };

  private setValor = (valor: number) => {
    this.setState({
      valor: this.state.valor + valor,
    });
  };

  render() {
    return (
      <>
        <ContadorValor contador={this.state.valor} />
        <button type="button" onClick={() => this.setValor(-10)}>
          -
        </button>
        <button type="button" onClick={() => this.setValor(10)}>
          +
        </button>
      </>
    );
  }
}
