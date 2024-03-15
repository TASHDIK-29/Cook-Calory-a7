import clock from "../../assets/image/clock.png";
import fire from "../../assets/image/fire.png";
const Card = ({ card }) => {
    console.log(card);
    const{calories, preparing_time, ingredients, description, name, recipe_image, id} = card;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl border border-slate-300">
                <figure className="px-10 pt-10">
                    <img src={recipe_image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    
                    <div className="w-full border-t-2 border-b-2 p-3 text-left my-0">
                        <h3 className="text-xl font-bold">Ingredients: {ingredients.length}</h3>
                        <ul>
                            {
                                ingredients.map((item, idx) => <li key={idx}>{item}</li> )
                            }
                        </ul>
                    </div>
                    
                    <div className="flex justify-between w-full">
                        <div className="flex gap-2">
                            <img src={clock} alt="" />
                            <h3>{preparing_time} minutes</h3>
                        </div>
                        <div className="flex gap-2">
                            <img src={fire} alt="" />
                            <h3>{calories} calories</h3>
                        </div>
                    </div>
                    <div className="card-actions  w-full">
                        <button className="btn btn-primary">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;