import React, {Component} from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas : [
      { name: 'Ryu', age: 30, belt: 'black', id: 1},
      { name: 'Peter', age: 22, belt: 'green', id: 2},
      { name: 'Kevin', age: 10, belt: 'black', id: 4}
    ]
  }

  addNinja = (ninja) => {
    console.log(ninja)
    ninja.id = Math.random();
    let copyNinjaArray = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: copyNinjaArray
    })
    // console.log(copyNinjaArray);
  }

  deleteNinja =(id) => {
    // console.log(id);
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    });
    this.setState({
      ninjas:ninjas
    })
  }


  render(){
    return (
      <div className="App">
        <h1>My first app</h1>
        <p>Welcome!!!</p>

        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja  addNinja = {this.addNinja} />
        
      </div>
    );
  }
}

export default App;
