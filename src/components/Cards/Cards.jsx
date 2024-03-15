import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";

const Cards = ({handelCook}) => {

    const [cards, setCards] = useState([]);

    useEffect(() =>{
        fetch("./recipes.json")
        .then(res => res.json())
        .then(data => setCards(data))
    }, [])





    return (
        <div className="w-3/5 grid grid-cols-2 gap-5">
            
            {
                cards.map(card => <Card key={card.id} card={card} handelCook={handelCook}></Card>)
            }
        </div>
    );
};

export default Cards;