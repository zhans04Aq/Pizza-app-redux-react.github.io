import {Routes,Route } from 'react-router-dom'


import Mainpage from './pages/mainPage'
import CartPage from './pages/cartPage'

function App() {

  return (
    <div className='md:p-10'>
      <Routes>
        <Route path='/' element={<Mainpage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
      </Routes>
    </div>
  )
}

export default App

{/* <div className='container mx-auto bg-white rounded-xl'>
        
</div>   */}