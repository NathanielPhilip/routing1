import React from "react";
import { Link } from "react-router-dom";

function About(){
    return(
        <div>
            <h1>
                ABOUT
            </h1>
            <Link to="/ServiceDetails:name">ServicesDetails</Link>
        </div>
    );
}





export default About;