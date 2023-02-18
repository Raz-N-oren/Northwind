import "./Desserts.css";

function Desserts(): JSX.Element {
const items = [
    {id:1 ,name: "Ice Cream"},
    {id:1 ,name: "Pavlova"},
    {id:1 ,name: "Eclair"},
    {id:1 ,name: "Apple pie"}
];

    return (
        <div className="Desserts Box">
			{items.map(item =><span>{item.name} | </span>)}
        </div>
    );
}

export default Desserts;
