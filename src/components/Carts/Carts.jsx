
const Carts = () => {



    return (
        <div className="w-1/3 p-6 border border-slate-300">
            
            <div>
                <h1 className="text-2xl font-bold text-center">Want to cook: 01</h1>
                <div className="divider"></div>
                <div className="w-full flex justify-between">
                    <div className="w-1/3">
                        <h3 className="text-xl font-semibold">Name</h3>
                    </div>
                    <div className="flex w-2/3  gap-8">
                        <h3 className="text-xl font-semibold">Time</h3>
                        <h3 className="text-xl font-semibold">Calories</h3>
                    </div>
                </div>
            </div>


            
        </div>

    );
};

export default Carts;