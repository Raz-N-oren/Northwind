import { SyntheticEvent } from "react";
import "./Recommendations.css";

function Recommendations(): JSX.Element {

    function first():void{
        alert("Irish Coffee");
    }
    function second(args: SyntheticEvent):void{
        console.log((args.target as HTMLButtonElement).innerHTML);
        
        alert("Americano");
    }

    function third(item: string):void{
        alert(item);
    }

    return (
        <div className="Recommendations Box">
			<span> Recommendations:</span>
            <button onClick={first}>First </button>
            <button onClick={second}>Second </button>
            <button onClick={()=>third("Support Liverpool")}>third </button>
        </div>
    );
}

export default Recommendations;
