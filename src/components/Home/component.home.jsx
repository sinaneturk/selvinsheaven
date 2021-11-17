import {React ,Component} from 'react';
import ReactPlayer from 'react-player';
import './styles.home.scss';
import { FaHeart } from 'react-icons/fa'

class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            access_key:'id7Cj4wzENBGGf98Mp3uh_TThMexx0-ZZwauwSdK_vo',
            secret_key:'rZFZpkWsmnEqPnXg85ZTCMgolWNJ09Fz0ssM42QmWkg',
            instagram_images:[]
        }
    }

    _volunteer = () =>{
       
    }

    async componentDidMount(){
        return fetch("https://api.unsplash.com/photos/?client_id=id7Cj4wzENBGGf98Mp3uh_TThMexx0-ZZwauwSdK_vo")
                .then((response) => response.json())
                .then((data) => this.setState({...this.state , instagram_images:data}));
    }
    

    render(){
        return  <div className="home">
            <div className="home-intro">
                <div className="intro-vid" >
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=ug50zmP9I7s"
                />
                </div>
                <div className="motto-n-btn-container">
                    <p className="motto" >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

                    <input type="button" className="volunteer-btn" onClick={()=>{this._volunteer()}} value="Volunteer Now" />
                </div>
            </div>

            <p className="section-header"> Our Instagram : @selvinsheaven </p>
            <div className="from-instagram" >
                    
                {
                    this.state.instagram_images.map((image,index)=><div className="image-bg-container" key={index}  
                                                                        style={{backgroundImage: `url(${image.urls.small})`}}  >
                                                                            <div className="image-info" >
                                                                            <FaHeart style={{color:'#ff0000c9', fontSize:'22px', opacity:'0.5'}}/>
                                                                            <p className="likes" >{image.likes}</p>
                                                                            </div>
                                                                        </div>)
                }
            </div>
        </div>
    }
}

export default Home;