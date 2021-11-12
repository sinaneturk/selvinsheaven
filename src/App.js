import logo from './farm-logo.jpg';
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
import Blog from './components/Blog/component.blog';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    console.log('TR : ', window.location)
    return (
      <div className="App">
        
          <div className="body-container">
            <div className="header-container">
              <div className="logo-container">
                <img className="logo" src = {logo} alt="Logo"/>
              </div>
              <nav>
                <Link className="nav-link home" to= "" >Home</Link>
                <Link className="nav-link about"  to= "about" >About</Link>
                <Link className="nav-link volunteers"  to= "volunteers" >Volunteers</Link>
                <Link className="nav-link blog"  to= "blog" >Blog</Link>
                <Link className="nav-link contact"  to= "contact" >Contact</Link>
              </nav>
            </div>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/volunteers" element={<Volunteer />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
      

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
