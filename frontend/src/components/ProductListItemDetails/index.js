import './index.css'
import {useEffect, useState} from 'react'
import { useParams} from 'react-router-dom';
import axios from 'axios'
import Headers from '../Headers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar, faStarHalfStroke} from '@fortawesome/free-solid-svg-icons'
import Footer from '../Footer';

function ProductListItemDetails(){
    const {_id} = useParams()
    const [itemQuantity, setCounterValue] = useState(1)
    const [list, setList] = useState({})
    const {imageUrl,itemName,category,price,itemId} = list
    useEffect(() => {
       axios.get('https://groceryshoppingbackend.onrender.com/auth/Product/'+_id)
        .then(result => setList(result.data))
        .catch(err => console.log(err))
    })
    const id = localStorage.getItem('user_name')
    
    const onAddCart = async(event) => {
        event.preventDefault()
        axios.post('https://groceryshoppingbackend.onrender.com/auth/Card/'+id, {id,imageUrl, itemName,category, price, itemQuantity, itemId})
        .then(result => console.log(result.data))
        .catch(err => console.log(err))
    }

    const onMinus = () => {
        if (itemQuantity > 1){
            setCounterValue(itemQuantity - 1)
        }
    }
    const onPlus = () => {
        setCounterValue(itemQuantity + 1)
    }
    return(
        <>
        <Headers />
            <div className='ProductListItemContainer'>
            <img src={list.imageUrl} alt={list.itemName} className='ProductListItemImg'/>
            <div className='ProductListItemContainer1'>
                <p className='ListCategoryText'>{list.category}</p>
                <div className='ListCategoryRow'>
                    <h1 className='ListCategoryItemName'>{list.itemName}</h1>
                    <p className='ListCategoryItemPrice'>₹{list.price}/-</p>
                </div>
                     <div className="categoryStarIcon">
                        <FontAwesomeIcon icon={faStar} className='CategoryCartPageIcon'/>  
                        <FontAwesomeIcon icon={faStar} className='CategoryCartPageIcon'/>  
                        <FontAwesomeIcon icon={faStar} className='CategoryCartPageIcon'/>  
                        <FontAwesomeIcon icon={faStar} className='CategoryCartPageIcon'/>  
                        <FontAwesomeIcon icon={faStarHalfStroke} className='CategoryCartPageIcon'/>
                    </div>
               <p className='CartAvailablePara'>Available: <span className='CartAvailableParaSpan'>In Stock</span></p>
            <div className='CounterBtnContainer'>
                <button type="button" className='CounterMinusBtn' onClick={onMinus}>-</button>
                <p className='CounterText'>{itemQuantity}</p>
                <button type='button' className='CounterPlusBtn' onClick={onPlus}>+</button>
            </div>
            <button type='button' onClick={onAddCart} className='AddTocartBtn'>ADD TO CART</button>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default ProductListItemDetails
