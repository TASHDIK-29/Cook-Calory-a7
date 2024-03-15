
import './App.css'
import Cards from './components/Cards/Cards'
import Carts from './components/Carts/Carts'
import Header from './components/Header/Header'

function App() {
  

  return (
    <>
      <Header></Header>

      <div className='text-center w-1/2 mx-auto'>
        <h1 className='text-3xl font-bold'>Our Recipes</h1>
        <p className='text-xl font-normal'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
      </div>
    {/* card & cart container */}
      <div className='flex my-12 container mx-auto'>
        <Cards></Cards>
        <Carts></Carts>
      </div>
    </>
  )
}

export default App
