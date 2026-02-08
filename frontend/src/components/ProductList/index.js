import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping, faStar, faStarHalfStroke} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
const ProductList = props => {
    const {appdetails} = props
    const {category,price,imageUrl,_id,itemName,quantity} = appdetails
    const Quantity = quantity === undefined ? '1kg' : quantity 
    return (
        <Link to={`/Products/${_id}`} className='LinkPro'>
        <li className='ItemLi'>
            <div className="ItemContainer">
                <img src={imageUrl} alt={category} className="ItemImage" />
                <div className='ItemCard1P'>
                    <p className='CategoryText'>{category}</p>
                    <p className='QuantityText'>{Quantity}</p>
                </div>
                <div className='ItemCard3P'>
                    <p className='ItemName'>{itemName}</p>
                    <div className="categoryStarIcon">
                        <FontAwesomeIcon icon={faStar} className='CategoryPageIcon'/>  
                        <FontAwesomeIcon icon={faStar} className='CategoryPageIcon'/>  
                        <FontAwesomeIcon icon={faStar} className='CategoryPageIcon'/>  
                        <FontAwesomeIcon icon={faStar} className='CategoryPageIcon'/>  
                        <FontAwesomeIcon icon={faStarHalfStroke} className='CategoryPageIcon'/>
                    </div>
                </div>
                <div className='ItemCard2P'>
                    <p className="PriceText">₹{price}</p>
                    <button className='AddCartBtn'><FontAwesomeIcon icon={faCartShopping} className='AddIcon'/>Add</button>
                </div>
            </div>
        </li>
        </Link>
    )
}

export default ProductList