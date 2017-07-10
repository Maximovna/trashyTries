import React, { Component } from 'react';

const arr = [{name: 'Kek', age: '30'}, {name: 'Kotovski', age: '23'}, {name: 'Gowniana Marionetka', age: '18'}];

constructor(props) {
    super(props);

    this.state = {
        name: arr.name(),
        age: arr.age({ full: true })
    };
}

const mapped = this.state.data.map(function(data, idx) {
  return ([
    <p key={idx}>{mapped.name}></p>,
    <p key={idx}>{mapped.age}></p>,
  ]);
});


class App extends React.Component {
  render() {
    return (
      <div>
      {mapped}
      </div>,
    );
  }

}

export default App;
