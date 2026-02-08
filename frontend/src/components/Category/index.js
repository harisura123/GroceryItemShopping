import './index.css'
import Headers from '../Headers'
import Footer from '../Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar, faStarHalfStroke} from '@fortawesome/free-solid-svg-icons'
const Category = () => {
    return(
        <>
        <Headers />
        <div className='FeaturesCardContainerCategoryPage'>
            <div className='FeaturesCardDetailsCategoryPage'>
                <img src="https://i.pinimg.com/736x/4f/17/b5/4f17b57612648054a1ba6f8cffeaecc1.jpg" alt="CategoryPage" className='FeaturesImgPage'/>
                    <div className='CategoryPage'>
                        <h1>Fruits & Veggies</h1>
                        <p>Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.</p>
                        <div className="categoryStarIcon">
                         <FontAwesomeIcon icon={faStar} className='CategoryPageIcon'/>  
                         <FontAwesomeIcon icon={faStar} className='CategoryPageIcon'/>  
                         <FontAwesomeIcon icon={faStar} className='CategoryPageIcon'/>  
                         <FontAwesomeIcon icon={faStar} className='CategoryPageIcon'/>  
                         <FontAwesomeIcon icon={faStarHalfStroke} className='CategoryPageIcon'/>
                        </div>
                    </div>
                </div>
                <div className='FeaturesCardDetailsCategoryPage'>
                    <img src="https://i.pinimg.com/736x/a2/97/ca/a297caaca573e1ea85623d3061c85a7e.jpg" alt="DairyEgg" className='FeaturesImgPage'/>
                    <div className='CategoryPage'>
                        <h1>Dairy & Eggs</h1>
                        <p>Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.</p>
                        <div className="categoryStarIcon">
                         <FontAwesomeIcon icon={faStar} className='CategoryPageIcon'/>  
                         <FontAwesomeIcon icon={faStar} className='CategoryPageIcon'/>  
                         <FontAwesomeIcon icon={faStar} className='CategoryPageIcon'/>  
                         <FontAwesomeIcon icon={faStar} className='CategoryPageIcon'/>  
                         <FontAwesomeIcon icon={faStarHalfStroke} className='CategoryPageIcon'/>
                        </div>
                    </div>
                </div>
                <div className='FeaturesCardDetailsCategoryPage'>
                    <img src="https://i.pinimg.com/1200x/36/64/86/366486bbf259b99df017d9992e455545.jpg" alt="MeatSeaFood" className='FeaturesImgPage'/>
                    <div className='CategoryPage'>
                        <h1>Meat & SeaFood</h1>
                        <p>High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.</p>
                        <div className="categoryStarIcon">
                         <FontAwesomeIcon icon={faStar} className='CategoryPageIcon'/>  
                         <FontAwesomeIcon icon={faStar} className='CategoryPageIcon'/>  
                         <FontAwesomeIcon icon={faStar} className='CategoryPageIcon'/>  
                         <FontAwesomeIcon icon={faStar} className='CategoryPageIcon'/>  
                         <FontAwesomeIcon icon={faStarHalfStroke} className='CategoryPageIcon'/>
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
        </>
    )
}

export default Category