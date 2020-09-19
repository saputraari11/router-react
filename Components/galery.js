import React from "react"
import Rescue_1 from "./galery/rescue/rescue_1.jpg"
import Rescue_2 from "./galery/rescue/rescue_2.jpg"
import Rescue_3 from "./galery/rescue/rescue_3.jpg"

import Reuse_1 from "./galery/reuse/reuse.jpg"
import Reuse_2 from "./galery/reuse/reuse_2.jpg"
import Reuse_3 from "./galery/reuse/reuse_3.jpg"

import Reduce_1 from "./galery/reduce/reduce_1.jpg"
import Reduce_2 from "./galery/reduce/reduce_2.jpg"
import Reduce_3 from "./galery/reduce/reduce_3.jpg"

import $ from 'jquery';



class Galery extends React.Component {
    rescue = () =>{
if($(".row-2-main .col").css("margin-left") == "-1367px"){
    $(".row-2-main .col").css({"margin-left":"0px"})
}
else if($(".row-2-main .col").css("margin-left") == "-2734px"){
    $(".row-2-main .col").css({"margin-left":"0px"})
    $(".row-2-main .col-1").css({"margin-left":"0px"})

    if($(".f-1").css("background-color")=="rgb(108, 236, 108)"){
            $(".f-1").css({"background-color":"rgb(108, 236, 108)","color":"white"})
            $(".f-3").css({"background":"white","color":"black"})
            $(".f-2").css({"background":"white","color":"black"})
       
    }
    else if($(".f-2").css("background-color")=="rgb(108, 236, 108)"){
        $(".f-2").css({"background-color":"rgb(108, 236, 108)","color":"white"})
        $(".f-1").css({"background":"white","color":"black"})
        $(".f-3").css({"background":"white","color":"black"})
    }
    else if($(".f-3").css("background-color")=="rgb(108, 236, 108)"){
        $(".f-3").css({"background-color":"rgb(108, 236, 108)","color":"white"})
        $(".f-1").css({"background":"white","color":"black"})
        $(".f-2").css({"background":"white","color":"black"})
    }
}
    }
    reuse = () =>{
        if($(".row-2-main .col").css("margin-left") == "0px"){
            $(".row-2-main .col").css({"margin-left":"-2734px"})
            $(".row-2-main .col-1").css({"margin-left":"-1367px"})
        }
        else if($(".row-2-main .col").css("margin-left") == "-1367px"){
            $(".row-2-main .col").css({"margin-left":"-2734px"})
            $(".row-2-main .col-1").css({"margin-left":"-1367px"})
                }
    
                if($(".f-1").css("background-color")=="rgb(108, 236, 108)"){
                    $(".f-1").css({"background-color":"rgb(108, 236, 108)","color":"white"})
                    $(".f-3").css({"background":"white","color":"black"})
                    $(".f-2").css({"background":"white","color":"black"})
               
            }
            else if($(".f-2").css("background-color")=="rgb(108, 236, 108)"){
                $(".f-2").css({"background-color":"rgb(108, 236, 108)","color":"white"})
                $(".f-1").css({"background":"white","color":"black"})
                $(".f-3").css({"background":"white","color":"black"})
            }
            else if($(".f-3").css("background-color")=="rgb(108, 236, 108)"){
                $(".f-3").css({"background-color":"rgb(108, 236, 108)","color":"white"})
                $(".f-1").css({"background":"white","color":"black"})
                $(".f-2").css({"background":"white","color":"black"})
            }
    }
    reduce = () =>{
        
        if($(".row-2-main .col").css("margin-left") === "0px"){
            $(".row-2-main .col").css({"margin-left":"-1367px"})
        }
        else if($(".row-2-main .col").css("margin-left") === "-2734px"){
            $(".row-2-main .col-2").css({"margin-left":"0px"})
            $(".row-2-main .col-1").css({"margin-left":"0px"})
            $(".row-2-main .col").css({"margin-left":"-1367px"})

        }
        if($(".f-1").css("background-color")=="rgb(108, 236, 108)"){
            $(".f-1").css({"background-color":"rgb(108, 236, 108)","color":"white"})
            $(".f-3").css({"background":"white","color":"black"})
            $(".f-2").css({"background":"white","color":"black"})
       
    }
    else if($(".f-2").css("background-color")=="rgb(108, 236, 108)"){
        $(".f-2").css({"background-color":"rgb(108, 236, 108)","color":"white"})
        $(".f-1").css({"background":"white","color":"black"})
        $(".f-3").css({"background":"white","color":"black"})
    }
    else if($(".f-3").css("background-color")=="rgb(108, 236, 108)"){
        $(".f-3").css({"background-color":"rgb(108, 236, 108)","color":"white"})
        $(".f-1").css({"background":"white","color":"black"})
        $(".f-2").css({"background":"white","color":"black"})
    }
    }
  enter=()=>{
    if($(".f-1").css("background-color")=="rgb(108, 236, 108)"){
        $(".f-2").mouseenter(()=>{
            $(".f-1").css({"background":"none","color":"black"})
            $(".f-2").css({"background-color":"rgb(108, 236, 108)","color":"white"})

        })
        $(".f-3").mouseenter(()=>{
            $(".f-1").css({"background":"none","color":"black"})
            $(".f-3").css({"background-color":"rgb(108, 236, 108)","color":"white"})

        })
       
    }
    else if($(".f-2").css("background-color")=="rgb(108, 236, 108)"){
        $(".f-1").mouseenter(()=>{
            $(".f-2").css({"background":"none","color":"black"})
            $(".f-1").css({"background-color":"rgb(108, 236, 108)","color":"white"})

        })
        $(".f-3").mouseenter(()=>{
            $(".f-2").css({"background":"none","color":"black"})
            $(".f-3").css({"background-color":"rgb(108, 236, 108)","color":"white"})

        })
       
    }
    else if($(".f-3").css("background-color")=="rgb(108, 236, 108)"){
        $(".f-1").mouseenter(()=>{
            $(".f-3").css({"background":"none","color":"black"})
            $(".f-1").css({"background-color":"rgb(108, 236, 108)","color":"white"})

        })
        $(".f-2").mouseenter(()=>{
            $(".f-3").css({"background":"none","color":"black"})
            $(".f-2").css({"background-color":"rgb(108, 236, 108)","color":"white"})

        })
       
    }
  }
  
    render() {
       
        return (
<div className="Main2">
    <div className="row-1-main">
        <div className="col">
        <button onClick={this.rescue} className="f-1"   onMouseEnter={this.enter}>Rescue</button>
        </div>
        <div className="col">
        <button onClick={this.reduce} className="f-2"   onMouseEnter={this.enter}>Reduce</button>
        </div>
         <div className="col">
         <button onClick={this.reuse} className="f-3"    onMouseEnter={this.enter} >Reuse</button>
        </div>
    </div>
    <div className="row-2-main">
        <div className="col">
        <img src={Rescue_1} alt=""/>
        <img src={Rescue_2} alt=""/>
         <img src={Rescue_3} alt=""/>
        </div>
        <div className="col-1">
        <img src={Reduce_1} alt=""/>
        <img src={Reduce_2} alt=""/>
         <img src={Reduce_3} alt=""/>
        
        </div>
        <div className="col-2">
        <img src={Reuse_1} alt=""/>
        <img src={Reuse_2} alt=""/>
         <img src={Reuse_3} alt=""/>
        </div>
    </div>
</div>
        )
    }
}
export default Galery;