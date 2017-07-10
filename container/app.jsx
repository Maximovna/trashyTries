import React, { Component } from 'react';

const arr = [{name: 'Kek', age: '30'}, {name: 'Kotovski', age: '23'}, {name: 'Gowniana Marionetka', age: '18'}];


class App extends Component {
  const mapped = this.props.data.map(function(data, idx) {
    return ([
      <p key={idx}>{mapped.name}></p>,
      <p key={idx}>{mapped.age}></p>,
    ]);
  });
  render() {
    return (
      <div>
      {mapped}
      </div>,
      document.getElementById('one')
    );
  }

}

export default App;
