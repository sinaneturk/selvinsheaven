import {React ,Component} from 'react';
import ReactPlayer from 'react-player';
import './styles.home.scss';

class Home extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return <div className="home">
            <div className="intro-vid" >
            <ReactPlayer
                url="https://www.youtube.com/watch?v=ug50zmP9I7s"
            />
            </div>
        </div>
    }
}

export default Home;