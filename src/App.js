import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

import { BrowserRouter , Routes ,Link , Route} from 'react-router-dom'
import  Home  from './components/Home/component.home'
import About from './components/About/component.about';
import Volunteer from './components/Volunteers/component.volunteers';
import Contact from './components/Contact/component.contact';

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
      </div>
    );
  }

}

export default App;
