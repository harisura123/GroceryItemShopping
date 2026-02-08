import Headers from '../Headers'
import CartSummary from '../CartSummary'
import EmptyCartView from '../EmptyCartView'
import Footer from '../Footer'
import Cookies from 'js-cookie'
import CartItem from '../CartItem'
import './index.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
function Cart(){
    const [cartLis, setCartLis] = useState([])
    const showEmptyView = cartLis.length === 0 
    const cartL = cartLis.length
    const id = localStorage.getItem('user_name')
    useEffect(() => {
        axios.get('https://groceryshoppingbackend.onrender.com/auth/Card/'+id)
        .then(res => setCartLis(res.data))
        .catch(err => console.log(err))
    })
    
    const renderProductCartList = () => {
            const jwtToken = Cookies.get('jwt_token')
            if (jwtToken === undefined){
                return <h1>Please Login!</h1>   
            }
            else{
            return(
              <>
                {cartLis.map(each => (
                  <CartItem cartItem={each}/>
                ))}
              </>
            )
            }
        }

    return(
        <>
        <Headers />
        <div className="cart-container">
          {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">𝙼𝚢 𝙲𝚊𝚛𝚝</h1>
                {renderProductCartList()}
              </div>
            )}
          </div>
          <CartSummary cartLiss={cartL} cartLis={cartLis}/>
          <Footer />
        </>
    )
} 

export default Cart
