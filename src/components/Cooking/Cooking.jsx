import PropTypes from 'prop-types';

const Cooking = ({cooking, idx}) => {
    return (
        <div className="flex justify-between items-center p-2 bg-[#28282808] rounded-lg">
            <p className="w-1/10">{idx + 1}</p>
            <p className="w-2/6">{cooking.name}</p>
            <p className="w-1/6 ml-4">{cooking.preparing_time} <br /> minutes</p>
            <p className="w-1/6">{cooking.calories} <br /> calories</p>
        </div>
    );
};

Cooking.propTypes={
    cooking : PropTypes.object.isRequired,
    idx : PropTypes.number.isRequired
}

export default Cooking;