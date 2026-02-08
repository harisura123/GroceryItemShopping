import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Products from './components/Products'
import Category from './components/Category'
import Login from './components/Login'
import ProductListItemDetails from './components/ProductListItemDetails'
import Register from './components/Register'
import Cart from './components/Cart'
function App(){
  return(
        <BrowserRouter>
        <Routes>
          <Route  path='/register' element={<Register/>}/>
          <Route  path='/login' element={<Login/>}/>
            <Route index path='/' element={<Home/>}/>
            <Route  path='/category' element={<Category/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route  path='/Products' element={<Products/>}/>
            <Route path='/Products/:_id' element={<ProductListItemDetails/>} />
        </Routes>
      </BrowserRouter>
  )
}
export default App;
