import React from 'react';
import ReactDom from 'react-dom';

const container = document.getElementById('app');

export class App extends React.Component {
    render() {
     return(
         <div>
             hello~
         </div>
     )
    }
}

ReactDom.render(
    <App tab="home" />, container
  )
// DOM.createRoot(<App tab="home" />, container);
// DOM.createRoot(
//     document.getElementById('app')
// );