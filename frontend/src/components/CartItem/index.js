import './index.css'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import {useState} from 'react'
function CartItem(props){
    const {cartItem} = props
    const {_id,imageUrl,itemName,category, price,itemQuantity} = cartItem
    const [count, setCount] = useState(itemQuantity)
    const totalItemPrice = count * price
    const onMinus = () => {
      if ((itemQuantity >= 1) && (count > 1)){
        setCount(count - 1)
      }
    }
    const onPlus = () => {
      setCount(count + 1)
    }

    const onRemoveItem = async(event) => {
      event.preventDefault()
      axios.delete('https://groceryshoppingbackend.onrender.com/auth/Card/'+_id)
      .then(res => {console.log(res)
        window.location.reload()})
      .catch(err => console.log(err))
    }
    return(
        <li className="cart-item">
          <img className="cart-product-image" src={imageUrl} alt={itemName} />
          <div className="cart-item-details-container">
            <div className="cart-product-title-brand-container">
              <p className="cart-product-title">{itemName}</p>
              <p className="cart-product-brand">by {category}</p>
            </div>
            <div className="cart-quantity-container">
              <button
                type="button"
                className="quantity-controller-button"
                data-testid="minus"
                onClick={onMinus}
              >
                -
              </button>
              <p className="cart-quantity">{count}</p>
              <button
                type="button"
                className="quantity-controller-button"
                data-testid="plus"
                onClick={onPlus}
              >
                +
              </button>
            </div>
            <div className="total-price-remove-container">
              <p className="cart-total-price">Rs {totalItemPrice}/-</p>
              <button
                className="remove-button"
                type="button"
                onClick={onRemoveItem}
              >
                Remove
              </button>
              <button
            className="delete-buttonIcon"
            type="button"
            data-testid="remove"
            onClick={onRemoveItem}
          >
            <FontAwesomeIcon icon={faXmark} style={{color: "green", height: '5vh', width: "8vw"}} /> 
          </button>
            </div>
          </div>
          
        </li>
    )
}


export default CartItem