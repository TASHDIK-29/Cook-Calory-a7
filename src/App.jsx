import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import Carts from './components/Carts/Carts'
import Header from './components/Header/Header'

function App() {

  const [carts, setCarts] = useState([]);

  const handelCook = recipe =>{
    const isExist1 = carts.find(cart => cart.id === recipe.id);
    const isExist2 = cooking.find(cart => cart.id === recipe.id);
    if(!isExist1 && !isExist2)
    {
      setCarts([...carts, recipe]);
    }
    else{
      toast.warning("Already Exist !");
    }
  }

  const [cooking, setCooking] = useState([]);

  const handelPreparing = cart =>{
    const newCarts = carts.filter(item => item.id !== cart.id);
    setCarts(newCarts);
    setCooking([...cooking, cart]);
  }
  

  return (
    <>
      <Header></Header>

      <div className='text-center w-1/2 mx-auto space-y-4'>
        <h1 className='text-4xl font-bold'>Our Recipes</h1>
        <p className='text-xl font-normal'>Discover a treasure trove of mouthwatering recipes crafted with love and expertise. From comforting classics to innovative delights, our collection promises culinary inspiration for every taste and occasion. </p>
      </div>
    {/* card & cart container */}
      <div className='flex gap-5 my-12 container mx-auto'>
        <Cards handelCook={handelCook}></Cards>
        <Carts carts={carts} handelPreparing={handelPreparing} cooking={cooking}></Carts>
        <ToastContainer />
      </div>

      
    </>
  )
}

export default App
