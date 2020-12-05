import React from 'react';
import ReactDOM from 'react-dom';

import Multi, { BoaNoite } from './componentes/Multiplos';
// import BomDia from './componentes/BomDia'

// const elemento = <h1>React 4</h1>

ReactDOM.render(

  <div>
    {/* <BoaNoite nome="Tiago Vespa" /> */}
    <Multi.BoaTarde nome="Diego Vespa" />
  </div>,
  document.getElementById('root')
)
