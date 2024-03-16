import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";

import PropTypes from 'prop-types';

const Cards = ({handelCook}) => {

    const [cards, setCards] = useState([]);

    useEffect(() =>{
        fetch("./recipes.json")
        .then(res => res.json())
        .then(data => setCards(data))
    }, [])





    return (
        <div className="lg:w-3/5 grid grid-cols-1 lg:grid-cols-2 gap-5">
            
            {
                cards.map(card => <Card key={card.id} card={card} handelCook={handelCook}></Card>)
            }
        </div>
    );
};

Cards.propTypes={
    handelCook : PropTypes.func.isRequired
}

export default Cards;