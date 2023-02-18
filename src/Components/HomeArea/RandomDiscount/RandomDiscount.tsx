import { useEffect, useState } from "react";
import "./RandomDiscount.css";

function RandomDiscount(): JSX.Element {

    useEffect(()=>{
        console.log("Performing Side-Effect");
        
    },[]); //[] is a dependency array - a list of variables to watch if one changed- call again the call back.
    
    const [randomDiscount, setRandomDiscount] = useState(0);
    function generateRandomDiscount() {
        setRandomDiscount(Math.floor(Math.random() * 91));
    }

    return (
        <div className="RandomDiscount Box">
            <button onClick={generateRandomDiscount}>Random Discount</button>
            <span>Random discount: {randomDiscount}%</span>
        </div>
    );
}

export default RandomDiscount;
