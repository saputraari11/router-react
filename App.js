import React from 'react';
import Main from "./Components/main"
import { Link } from "react-router-dom"
import $ from 'jquery';


class App extends React.Component {
    navbar = () =>{
        $("ul").css({"left":"-0.3vh","transition":"all 0.5s ease-in"})
        $(".Main1").css({"display":"none"})
        $(".Main2").css({"display":"none"})
        $(".Main3").css({"display":"none"})
    }
    link = () => {
        $("ul").css({"left":"-100vh","transition":"0s"})
        $(".Main1").css({"display":"block"})
        $(".Main2").css({"display":"block"})
        $(".Main3").css({"display":"block"})
    }
    render() {
            return(
                <div className="container">
                    <div className="navbar">
                        <label>AdiWiyata</label>
                        <ul className="utama">
                            <Link to="/" className="link" onClick={this.link}><li>Beranda</li></Link>
                            <Link to="/galery" className="link" onClick={this.link}><li>Galery</li></Link>
                           <Link to="/hari" className="link" onClick={this.link}> <li>Hari</li></Link>
                        </ul>
                        <button onClick={this.navbar} className="btn-navbar"><i className="fa fa-bars"></i></button>
                    </div>
                    <div className="content">
                        <Main />
                    </div>
                </div>
        )
    }
}


export default App;