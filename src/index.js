import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './componentProps';

// function Welcome(props) {
//   console.log(props)
//   return <h1>Hello, {props.name}</h1>
// }

// function App () {
//   return (
//     <div>
//       <Welcome name="Budi" />
//       <Welcome name="Ani" />
//       <Welcome name="Lina" />
//     </div>
//   )
// }

ReactDOM.render(
  <Welcome name="Nikita" number={0} />,
  document.getElementById('app')
);
