import React from 'react';
import ReactDOM from 'react-dom';

// import Multi, { BoaNoite } from './componentes/Multiplos';
// import BomDia from './componentes/BomDia'
// import Saudacao from './componentes/Saudacao';
import Pai from './componentes/Pai';

// const elemento = <h1>React 4</h1>

ReactDOM.render(

  <div>
    <Pai nome="Diego" sobrenome="Vespa"/>
    {/* <Saudacao tipo="Bom dia" nome="Francisca Silva" /> */}
    {/* <Multi.BoaTarde nome="Diego Vespa" />
    <Multi.BoaNoite nome="Francisca"/> */}
  </div>,
  document.getElementById('root')
)
