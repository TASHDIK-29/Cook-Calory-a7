import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";

const Cards = () => {

    const [cards, setCards] = useState([]);

    useEffect(() =>{
        fetch("./recipes.json")
        .then(res => res.json())
        .then(data => setCards(data))
    }, [])





    return (
        <div className="border w-2/3 grid grid-cols-2 gap-5">
            
            {
                cards.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

export default Cards;