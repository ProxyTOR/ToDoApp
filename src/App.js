import React, { Component } from 'react';
import Todo from './Todo';

class App extends Component {
  state = {
    todos: [
      {id: 1, item: 'Play Badminton'},
      {id: 2, item: 'Evaluate Assignment'}
    ]
  }
  render() {
    return (
      <div className="App container">
        <h3 className='center brown-text'>My TODOs</h3>
        <Todo todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
