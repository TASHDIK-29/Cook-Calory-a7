
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
      alert('Already Exist!!!');
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

      <div className='text-center w-1/2 mx-auto'>
        <h1 className='text-3xl font-bold'>Our Recipes</h1>
        <p className='text-xl font-normal'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
      </div>
    {/* card & cart container */}
      <div className='flex gap-5 my-12 container mx-auto'>
        <Cards handelCook={handelCook}></Cards>
        <Carts carts={carts} handelPreparing={handelPreparing} cooking={cooking}></Carts>
      </div>
    </>
  )
}

export default App
