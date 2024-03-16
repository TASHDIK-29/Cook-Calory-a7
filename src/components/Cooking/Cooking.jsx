import PropTypes from 'prop-types';

const Cooking = ({ cooking, idx }) => {
    return (
        <div>
            <div className="flex justify-between items-center p-2 bg-[#28282808] rounded-lg">
                <p className="w-1/10 text-[#282828CC] font-semibold">{idx + 1}</p>
                <p className="w-2/6 text-[#282828B3] font-semibold">{cooking.name}</p>
                <p className="w-2/6 lg:w-1/6 ml-4 text-[#282828B3] font-semibold">{cooking.preparing_time} <br /> minutes</p>
                <p className="w-1/6 text-[#282828B3] font-semibold">{cooking.calories} <br /> calories</p>
            </div>
        </div>
    );
};

Cooking.propTypes = {
    cooking: PropTypes.object.isRequired,
    idx: PropTypes.number.isRequired
}

export default Cooking;