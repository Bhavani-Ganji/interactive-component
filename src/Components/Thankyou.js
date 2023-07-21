import React from "react";
import Card from "./Card";
import './Thankyou.css';
import { ReactComponent  as Tqimage } from "../images/illustration-thank-you.svg";
function Thankyou({rating}){
    
    return <>

    <Card>
        <div className="tqimage">
        < Tqimage/>

        </div>
        <div className="selected" >
            You selected {rating} out of 5
            
            </div>
        <h2 className="title">Thank you!</h2>
        <p className="text">We appreciate you taking the time to give a rating.
        If you ever need more support,don't hesitate to get in touch!</p>
       


    </Card>
    </>
}
export default Thankyou;