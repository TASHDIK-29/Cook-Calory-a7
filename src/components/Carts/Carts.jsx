import Cart from "../Cart/Cart";
import Cooking from "../Cooking/Cooking";

import PropTypes from 'prop-types';

const Carts = ({ carts, handelPreparing, cooking ,totalTime, totalCalory}) => {

    console.log(carts);

    return (
        <div className="lg:w-2/5 lg:p-4 border border-[#0BE58A66] rounded-2xl space-y-5">

            <div>
                <h1 className="text-2xl font-bold text-center">Want to cook: {carts.length}</h1>
                <div className="divider"></div>
                <div className="w-full flex justify-between bg-[#d7ffef] rounded-lg p-2">
                    <div className="w-1/3 mx-auto">
                        <h3 className=" ml-2 lg:ml-16 text-xl font-semibold">Name</h3>
                    </div>
                    <div className="flex w-2/3  gap-8">
                        <h3 className="lg:ml-9 text-xl font-semibold">Time</h3>
                        <h3 className="text-xl font-semibold">Calories</h3>
                    </div>
                </div>
            </div>

            {
                carts.map((cart, idx) => <Cart key={idx} cart={cart} idx={idx} handelPreparing={handelPreparing}></Cart>)
            }


            <div>
                <h1 className="text-2xl font-bold text-center">Currently cooking: {cooking.length}</h1>
                <div className="divider"></div>
                <div className="w-full flex justify-between bg-[#d7ffef] rounded-lg p-2">
                    <div className="w-1/3 ml-12 lg:ml-14">
                        <h3 className="text-xl font-semibold">Name</h3>
                    </div>
                    <div className="flex w-2/3  gap-10">
                        <h3 className="text-xl font-semibold ml-5 lg:ml-20">Time</h3>
                        <h3 className="text-xl font-semibold">Calories</h3>
                    </div>
                </div>
            </div>

            {
                cooking.map((item, idx) => <Cooking key={idx} cooking={item} idx={idx}></Cooking>)
            }


            <div className="flex justify-end gap-8">
                <div>
                    <h3 className="text-base text-[#282828CC] font-semibold">Total Time = <br /> {totalTime} minutes</h3>
                </div>
                <div>
                    <h3 className="text-base text-[#282828CC] font-semibold">Total Calories = <br /> {totalCalory} calories</h3>
                </div>
            </div>


        </div>

    );
};

Carts.propTypes = {
    carts: PropTypes.array.isRequired,
    handelPreparing: PropTypes.func.isRequired,
    cooking: PropTypes.array.isRequired,
    totalTime : PropTypes.number,
    totalCalory : PropTypes.number
}

export default Carts;