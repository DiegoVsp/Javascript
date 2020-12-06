import React from 'react';
import ReactDOM from 'react-dom';

// import Multi, { BoaNoite } from './componentes/Multiplos';
// import BomDia from './componentes/BomDia'
import Saudacao from './componentes/Saudacao';

// const elemento = <h1>React 4</h1>

ReactDOM.render(

  <div>
    <Saudacao tipo="Bom dia" nome="Francisca Silva" />
    {/* <Multi.BoaTarde nome="Diego Vespa" />
    <Multi.BoaNoite nome="Francisca"/> */}
  </div>,
  document.getElementById('root')
)
