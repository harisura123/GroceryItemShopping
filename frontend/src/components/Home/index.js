import './index.css'
import Headers from '../Headers'
import Footer from '../Footer'
import { Link } from 'react-router-dom'

function Home(){
    return(
        <>
        <Headers/>
        <div className='HomeContainer1'>
            <div className='HomeContainer2'>
                <img src="https://i.pinimg.com/1200x/83/ce/33/83ce3396ce78df2b70e9cbd6aad2f430.jpg" alt='veg' className='VegImage'/>
                <div className='HomeContainer3'>
                    <h1 className='HomeText1'>𝙁𝙧𝙚𝙨𝙝 𝘼𝙣𝙙 <span className='HomeSpan1'>𝙊𝙧𝙜𝙖𝙣𝙞𝙘</span> 𝙋𝙧𝙤𝙙𝙪𝙘𝙩𝙨 𝙁𝙤𝙧 𝙔𝙤𝙪</h1>
                    <p className='HomeText2'>𝖳𝗁𝗂𝗌 𝖶𝖾𝖻𝗌𝗂𝗍𝖾 𝗂𝗌 𝖣𝖾𝗌𝗂𝗀𝗇𝖾𝖽 𝖡𝗒 𝖧𝖺𝗋𝗂𝖲𝗎𝗋𝗒𝖺 𝖬𝖺𝗇𝖾𝗉𝖺𝗅𝗅𝗂 𝖲𝗈 𝖳𝗁𝖺𝗍 𝖤𝗏𝖾𝗋𝗒𝗈𝗇𝖾 𝖢𝖺𝗇 𝖫𝖾𝖺𝗋𝗇 𝗂𝗇 𝖠𝗇 𝖤𝖺𝗌𝗒 𝖶𝖺𝗒 𝖳𝗁𝖺𝗍 𝖧𝗈𝗐 𝗍𝗈 𝖢𝗋𝖾𝖺𝗍𝖾 𝖠 𝖶𝖾𝖻𝗌𝗂𝗍𝖾. </p>
                     <Link to='/Products'>
                    <button className='ShopBtnHome'>Shop Now</button>
                    </Link>
                </div>
                <img src="https://i.pinimg.com/1200x/03/b3/38/03b338f9dfb6599c3f9fa5925bb64a47.jpg" alt='Fruits' className='FruitsImage' />
            </div>
        <div className='FeaturesContainer'>
            <h1>Our <span className="FeaturesTitle">Features</span></h1>
            <div className='FeaturesCardContainer'>
                <div className='FeaturesCardDetails'>
                    <div className="FeaturesBorder">
                        <img src="https://i.pinimg.com/1200x/e7/fb/07/e7fb0787e211846822a3bbd31cd93847.jpg" alt="orange" className='FeaturesImg'/>
                        <h1>Fresh And Organic</h1>
                        <p>Lorem, Ipsum Dolor Sit Amet Consectetur Adipiscing Elit. Deserunt, Earum!</p>
                        <button>Read More</button>
                    </div>
                </div>
                <div className='FeaturesCardDetails'>
                    <div className="FeaturesBorder">
                        <img src="https://i.pinimg.com/1200x/ac/55/e2/ac55e243a04097c71ae52c0ee16ef6d3.jpg" alt="free" className='FeaturesImg'/>
                        <h1>Free Delivery</h1>
                        <p>Lorem, Ipsum Dolor Sit Amet Consectetur Adipiscing Elit. Deserunt, Earum!</p>
                        <button>Read More</button>
                    </div>
                </div>
                <div className='FeaturesCardDetails'>
                    <div className="FeaturesBorder">
                        <img src="https://i.pinimg.com/736x/b9/19/fb/b919fb5c2d744f4429226289762a2f48.jpg" alt="easy" className='FeaturesImg'/>
                        <h1>Easy Payments</h1>
                        <p>Lorem, Ipsum Dolor Sit Amet Consectetur Adipiscing Elit. Deserunt, Earum!</p>
                        <button>Read More</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='FeaturesContainer'>
            <div className='FeaturesContainerProducts'>
            <h1>Our <span className="FeaturesTitle">Products</span></h1>
            <Link to="/Products"><button>See All</button></Link>
            </div>
            <div className='FeaturesCardContainer'>
                <div className='FeaturesCardDetails'>
                    <div className="FeaturesBorder">
                        <img src="https://i.pinimg.com/1200x/b1/19/6a/b1196a2f66ba89282b1adb972f43235b.jpg" alt="Prawns" className='FeaturesImg'/>
                        <h1>Fresh Meat</h1>
                        <p>₹300/-</p>
                        <Link to='/Products'>
                            <button>Read More</button>
                        </Link>
                    </div>
                </div>
                <div className='FeaturesCardDetails'>
                    <div className="FeaturesBorder">
                        <img src="https://i.pinimg.com/1200x/2f/f9/d6/2ff9d6a78f6e0383927522c5aa547ad4.jpg" alt="cabbage" className='FeaturesImg'/>
                        <h1>Fresh Cabbage</h1>
                        <p>₹15/-</p>
                        <Link to='/Products'>
                        <button>Read More</button>
                        </Link>
                    </div>
                </div>
                <div className='FeaturesCardDetails'>
                    <div className="FeaturesBorder">
                        <img src="https://i.pinimg.com/736x/01/f9/0a/01f90a367906ba88e4fdfcfc7abeaa71.jpg" alt="fres" className='FeaturesImg'/>
                        <h1>Fresh Orange</h1>
                        <p>₹70/-</p>
                        <Link to='/Products'>
                        <button>Read More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className='FeaturesContainer'>
            <div className='FeaturesContainerProducts'>
            <h1>Product <span className="FeaturesTitle">Categories</span></h1>
            <Link to="/category"><button>See All</button></Link>
            </div>
            <div className='FeaturesCardContainer'>
                <div className='FeaturesCardDetailsCategory'>
                        <img src="https://i.pinimg.com/736x/4f/17/b5/4f17b57612648054a1ba6f8cffeaecc1.jpg" alt="Fr" className='FeaturesImg'/>
                        <h1>Fruits & Veggies</h1>
                        <p>Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.</p>
                        <Link to="/category"><button>See All</button></Link>
                </div>
                <div className='FeaturesCardDetailsCategory'>
                        <img src="https://i.pinimg.com/736x/a2/97/ca/a297caaca573e1ea85623d3061c85a7e.jpg" alt="egg" className='FeaturesImg'/>
                        <h1>Dairy & Eggs</h1>
                        <p>Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.</p>
                        <Link to="/category"><button>See All</button></Link>
                </div>
                <div className='FeaturesCardDetailsCategory'>
                        <img src="https://i.pinimg.com/1200x/36/64/86/366486bbf259b99df017d9992e455545.jpg" alt="meat" className='FeaturesImg'/>
                        <h1>Meat & SeaFood</h1>
                        <p>High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.</p>
                        <Link to="/category"><button>See All</button></Link>
                </div>
            </div>
        </div>
        <div className='FeaturesContainer'>
            <h1>Customer's <span className="FeaturesTitle">Review</span></h1>
            <div className='FeaturesCardContainerReviews'>
                <div className='FeaturesCardDetails'>
                    <div className="FeaturesBorder">
                        <div className='FeaturesReview'>
                            <img src="/1.png" alt="a" className='FeaturesImgProfile'/>
                        <div>
                            <h1>Emily Johnson</h1>
                            <p>Food Blogger</p>
                        </div>
                        </div>
                        <p>FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface and variety of organic options!</p>
                    </div>
                </div>
                <div className='FeaturesCardDetails'>
                    <div className="FeaturesBorder">
                        <div className='FeaturesReview'>
                        <img src="/3.png" alt="b" className='FeaturesImgProfile'/>
                        <div>
                            <h1>David Smith</h1>
                            <p>Chef</p>
                        </div>
                        </div>
                        <p>As a chef, quality ingredients are everything. FreshBasket consistently delivers the best vegetables, herbs, and panty staples. Highly recommended!</p>
                    </div>
                </div>
                <div className='FeaturesCardDetails'>
                    <div className="FeaturesBorder">
                        <div className='FeaturesReview'>
                        <img src="/2.png" alt="c" className='FeaturesImgProfile'/>
                        <div>
                            <h1>Alya Zahra</h1>
                            <p>Model</p>
                        </div>
                        </div>
                        <p>Shopping online with FreshBasket has saved me so much time. I trust them for my family weekly groceries__Always fresh, affordable, and reliable.</p>
                    </div>
                </div>
                <div className='FeaturesCardDetails'>
                    <div className="FeaturesBorder">
                        <div className='FeaturesReview'>
                        <img src="/4.png" alt="d" className='FeaturesImgProfile'/>
                        <div>
                            <h1>Carlos Mendes</h1>
                            <p>Fitness Coach</p>
                        </div>
                        </div>
                        <p>I appreciate the selection of healthy foods and clean-label products. FreshBasket has been a great partner in my wellness journey!</p>
                    </div>
                </div>
                <div className='FeaturesCardDetails'>
                    <div className="FeaturesBorder">
                        <div className='FeaturesReview'>
                        <img src="/5.jpg" alt="e" className='FeaturesImgProfile'/>
                        <div>
                            <h1>Natcha Phongchai</h1>
                            <p>Nutritionist</p>
                        </div>
                        </div>
                        <p>FreshBasket offers high-quality groceries at reasonable prices. Their organic section is impressive, and their customer service is top-notch.</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </div>
        </>
    )
}

export default Home