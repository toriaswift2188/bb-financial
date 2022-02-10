import React from 'react';
import Card from "./card.js";

const Home = () => {
    return (
        
   <Card 
   className="home-page"
   hdrcolor="#D6CFD1"
   hdrtext="#516971"
   bodycolor="#F1E8E9"
   bodytext="#FFFFF"
   header="BB Financial"
   title="YOUR MONEY IS SAFE WITH US"
   text="Bank with ease and receive no late fees!* "
   body={(<img src="bb.png" 
            className="img-fluid w-100 h-40" 
            alt="bb" ></img>)}
   />
    
);}
export default Home;