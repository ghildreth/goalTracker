import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    goals: "",
    }
  componentDidMount(){
    let goalTypes = document.getElementsByClassName('dropdown-content');
    console.log('works?', goalTypes[0]);
    this.setState({goals: goalTypes[0]})
    
  }
  render() {

    function handleClick(e){
      e.preventDefault();
      console.log(this.state.goals.classList.toggle('open'));


    }
    console.log('state', this.state)
    
    return (
      <div className="App">
        <form>
          <label htmlFor="goal">What do you want to-"done"?</label>
            <input type="text" name="goal" id="goal"/>
              <div className="dropdown">
                <span onClick={handleClick.bind(this)}>Mouse over me</span>
                  <div className="dropdown-content">
                    <p>Hello World!</p>
                  </div>
              </div>
        </form>
        
        <div className="columns">
          <div className="daily">
            <h2>Daily</h2>
          </div>
          <div className="core">
            <h2>Core</h2>
          </div>
          <div className="short-term">
            <h2>Short-term</h2>
          </div>
          <div className="long-term">
            <h2>Long-term</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
