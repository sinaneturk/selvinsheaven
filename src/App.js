import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

import { BrowserRouter , Routes ,Link , Route} from 'react-router-dom'
import  Home  from './components/Home/component.home'
import About from './components/About/component.about';
import Volunteer from './components/Volunteers/component.volunteers';
import Contact from './components/Contact/component.contact';

import { connect } from "react-redux"

import {
  increaseCounter,
  decreaseCounter,
} from "./redux/Counter/counter.actions"

class App extends Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return (
      <div className="App">
        <h3>Selvin's Heaven</h3>

        <BrowserRouter>
          <nav>
            <Link className="nav-link" to= "" >Home</Link>
            <Link className="nav-link"  to= "about" >About</Link>
            <Link className="nav-link"  to= "volunteers" >Volunteers</Link>
            <Link className="nav-link"  to= "contact" >Contact</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/volunteers" element={<Volunteer />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>

        <div>Count: {this.props.count}</div>

        <button onClick={() => this.props.increaseCounter()}>Increase Count</button>

        <button onClick={() => this.props.decreaseCounter()}>Decrease Count</button>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    count: state.counter.count,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),

    decreaseCounter: () => dispatch(decreaseCounter()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
