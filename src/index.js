import React from 'react';
import ReactDOM from 'react-dom';


const elem = <CallName name="VALERA" />;
function CallName(props) {
  const item = <li>Bonjour, je suis {props.name}</li>;
  const list = <ul>{item}</ul>;
  return list;
}


ReactDOM.render(
  elem,
  document.getElementById('one')
);


const someNamesOrWhat = ['Valera', 'Matveische', 'Bol I Unizhenie', 'Theodor Vinograd', 'Vodka Daemon'];

ReactDOM.render(
  <ul>{someNamesOrWhat.map((elem) =>
        <li>{elem}</li>)}</ul>,
  document.getElementById('one')
);
