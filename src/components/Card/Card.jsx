import clock from "../../assets/image/clock.png";
import fire from "../../assets/image/fire.png";

import PropTypes from 'prop-types';

const Card = ({ card ,handelCook}) => {
    //console.log(card);
    const{calories, preparing_time, ingredients, description, name, recipe_image} = card;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl border border-[#0BE58A66]">
                <figure className="px-10 pt-10">
                    <img src={recipe_image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p className="text-[#878787]">{description}</p>
                    
                    <div className="w-full border-t-2 border-b-2 p-3 text-left my-0">
                        <h3 className="text-xl font-semibold">Ingredients: {ingredients.length}</h3>
                        <ul className="list-disc list-inside">
                            {
                                ingredients.map((item, idx) => <li className="text-[#878787]" key={idx}>{item}</li> )
                            }
                        </ul>
                    </div>
                    
                    <div className="flex justify-between w-full">
                        <div className="flex gap-2">
                            <img src={clock} alt="" />
                            <h3 className="text-[#282828CC] font-semibold">{preparing_time} minutes</h3>
                        </div>
                        <div className="flex gap-2">
                            <img src={fire} alt="" />
                            <h3 className="text-[#282828CC] font-semibold">{calories} calories</h3>
                        </div>
                    </div>
                    <div className="card-actions  w-full">
                        <button onClick={() => handelCook(card)} className="btn bg-[#0BE58A] font-bold">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes={
    card : PropTypes.object,
    handelCook : PropTypes.func.isRequired
}

export default Card;