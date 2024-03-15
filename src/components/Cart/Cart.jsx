import PropTypes from 'prop-types';

const Cart = ({cart, idx, handelPreparing}) => {
    return (
        <div className="flex justify-between items-center p-2 bg-[#28282808] rounded-lg">
            <p className="w-1/10">{idx + 1}</p>
            <p className="w-2/6">{cart.name}</p>
            <p className="w-1/6">{cart.preparing_time} <br /> minutes</p>
            <p className="w-1/6">{cart.calories} <br /> calories</p>
            <button onClick={() => handelPreparing(cart)} className="w-1/5 btn py-1 px-4 bg-[#0BE58A] rounded-2xl ">preparing</button>
        </div>
    );
};

Cart.propTypes={
    cart : PropTypes.object,
    idx : PropTypes.number,
    handelPreparing : PropTypes.func.isRequired
}

export default Cart;