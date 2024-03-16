import img1 from "../../assets/image/banner.png";
import img2 from "../../assets/image/Frame.png"

import "./Header.css"

const Header = () => {
    return (
        <div className="container mx-auto space-y-7 mt-4 mb-20">
            {/* Nav */}
            <div className="navbar bg-base-100 space-y-2">
                <div className="navbar-start w-full lg:w-1/2 flex justify-center lg:justify-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li className="text-[#282828CC] font-semibold"><a>Home</a></li>
                            <li className="text-[#282828CC] font-semibold"><a>Recipes</a></li>
                            <li className="text-[#282828CC] font-semibold"><a>About</a></li>
                            <li className="text-[#282828CC] font-semibold"><a>Search</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-3xl font-bold">Cook <span className="text-[#02b76c]">&</span> Calories</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className="text-[#282828CC] font-semibold"><a>Home</a></li>
                        <li className="text-[#282828CC] font-semibold"><a>Recipes</a></li>
                        <li className="text-[#282828CC] font-semibold"><a>About</a></li>
                        <li className="text-[#282828CC] font-semibold"><a>Search</a></li>
                    </ul>
                </div>
                <div className="navbar-end w-full lg:w-1/2 flex justify-center lg:justify-end">
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                        <input type="text" className="grow" placeholder="Search" />
                    </label>
                    <button className="rounded-full bg-[#77fec5] ml-4"><img src={img2} alt="" /></button>
                </div>
            </div>
            {/* Banner */}
            <div className="hero min-h-[450px] rounded-2xl overflow-hidden" style={{ backgroundImage: `url(${img1})` } }>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="w-2/3 space-x-5 space-y-2">
                        <h1 className="mb-5 text-3xl lg:text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="mb-5">Embark on a culinary journey with our cooking classes! Learn essential techniques, explore diverse cuisines, and unleash your inner chef in a fun and interactive environment. Join us today!</p>
                        <button className="py-2 px-4 rounded-3xl bg-[#0BE58A] text-black font-bold">Explore Now</button>
                        <button className="py-2 px-4 rounded-3xl border border-[#0BE58A] font-bold">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;