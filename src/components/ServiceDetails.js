import React from 'react';
import { useParams } from "react-router-dom";

function ServiceDetails() {
    const { id } = useParams();
  return (
    <div>
         <h1> Services details of {id} </h1>
             <div>jdfgcsinlhfiajs uiwrvui viurhewhadf dfjabf</div>
    </div>
  );
}



export default ServiceDetails;