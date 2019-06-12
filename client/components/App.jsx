import React from 'react';
import List from './List.jsx';
import AddListEntry from './AddListEntry.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ['Travel', 'Surfing', 'Backpacking']
    }
    //to keep the reference to do App while it's being passed down
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  deleteItem(index) {
    var currentTodos = [...this.state.todos]; //like this.state.todos.slice()
    currentTodos.splice(index, 1);
    this.setState({
      todos: currentTodos
    })
  }

  addItem(item) {
    var currentTOdos = [...this.state.todos];
    currentTodos.push(item);
    this.setState({
      todos: currentTodos
    })
  }

  render() {
    return( 
      <div id="mainApp" className="center vertical">
        <div className="title">Hello Where would you like to travel??</div>
        <AddListEntry addItem={this.addItem}/>
        <List todos={this.state.todos} deleteItem={this.deleteItem}/>
      </div> 
    );
  }
}

export default App;