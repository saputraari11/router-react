import React from "react"
import Trash from "./image/trash.svg"
import $ from 'jquery';

class Beranda extends React.Component {
    read = () =>{
        $(".isi").css({"height":"250","transition":"all 0.5s ease-in"})
        $(".btn-content-beranda").css({"display":"none"})
    }
    render() {
        return (
<div className="Main1">
    <div className="row">
        <div className="col-1">
            <div className="header">
                <p className="judul">
                Apa Itu Kebersihan ?
                </p>
            </div>
            <div className="body">
                <p className="isi">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            <button className="btn-content-beranda" onClick={this.read}>Read More</button>
        </div>
        <div className="col-2">
            <img src={Trash} alt="tidak ada" width="650px" className="trash"/>
        </div>
    </div>
</div>
        )
    }
}
export default Beranda;