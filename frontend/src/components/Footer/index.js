import './index.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight, faBasketShopping, faEnvelope, faLocationDot, faPhoneFlip} from '@fortawesome/free-solid-svg-icons'
import {faFacebookF, faInstagram, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return(
        <div className='FooterMainContainer'>
            <div className='FooterContainer'>
            <div className='FooterCard1'>
                <div className='FooterCardDetails1'>
                    <h1>𝙶𝚛𝚘𝚌𝚎𝚛𝚢 <FontAwesomeIcon icon={faBasketShopping} style={{color: "green", height: '4.5vh', width: "5vw"}} /></h1>
                    <p>Feel Free TO Follow Us On Our Social Media Handles All The Links Are Given Below.</p>
                </div>
                <div>
                    <button className='HeaderIconBtn'>
                        <FontAwesomeIcon icon={faFacebookF}  />
                    </button>
                    <button className='HeaderIconBtn'>
                        <FontAwesomeIcon icon={faTwitter} />
                    </button>
                    <button className='HeaderIconBtn'>
                        <FontAwesomeIcon icon={faInstagram} />
                    </button>
                    <button className='HeaderIconBtn'>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </button>
                    </div>
            </div>
            <div className="FooterCard2">
                <h1 className='FooterCardLi HeadingFooter'>𝖢𝗈𝗇𝗍𝖺𝖼𝗍 𝖨𝗇𝖿𝗈</h1>
                <div>
                    <li className='FooterCardLis'><FontAwesomeIcon className='FontAwesomeIconText' icon={faPhoneFlip} style={{color: "green",}} /> +123-456-7890</li>
                    <li className='FooterCardLis'><FontAwesomeIcon className='FontAwesomeIconText' icon={faPhoneFlip} style={{color: "green",}} /> +111-222-3333</li>
                    <li className='FooterCardLis'><FontAwesomeIcon className='FontAwesomeIconText' icon={faEnvelope} style={{color: "green",}} />hari76800surya@Gmail.com</li>
                    <li className='FooterCardLis'><FontAwesomeIcon className='FontAwesomeIconText' icon={faLocationDot} style={{color: "green",}} />Narasaraopet, Palnadu, AndhraPradesh, India-522601</li>
                </div>
            </div>
            <div className="FooterCard2">
                <h1 className='FooterCardLi HeadingFooter'>𝖰𝗎𝗂𝖼𝗄 𝖫𝗂𝗇𝗄𝗌</h1>
                <div>
                    <li className='FooterCardLis'><FontAwesomeIcon className='FontAwesomeIconText' icon={faArrowRight} style={{color: "green",}} />Home</li>
                    <li className='FooterCardLis'><FontAwesomeIcon className='FontAwesomeIconText' icon={faArrowRight} style={{color: "green",}} />Features</li>
                    <li className='FooterCardLis'><FontAwesomeIcon className='FontAwesomeIconText' icon={faArrowRight} style={{color: "green",}} />Products</li>
                    <li className='FooterCardLis'><FontAwesomeIcon className='FontAwesomeIconText' icon={faArrowRight} style={{color: "green",}} />Categories</li>
                    <li className='FooterCardLis'><FontAwesomeIcon className='FontAwesomeIconText' icon={faArrowRight} style={{color: "green",}} />Review</li>
                    <li className='FooterCardLis'><FontAwesomeIcon className='FontAwesomeIconText' icon={faArrowRight} style={{color: "green",}} />Blogs</li>
                </div>
            </div>
            <div className="FooterCard4">
                <h1 className='FooterCardLi HeadingFooter'>𝖭𝖾𝗐𝗌𝗅𝖾𝗍𝗍𝖾𝗋</h1>
                <p>Subscribe For Latest Updates</p>
                <input type='email' placeholder="Your email" />
                <button>Subscribe</button>
                <img src="https://i.pinimg.com/1200x/d7/14/04/d71404b4936a571f6d62471de379b224.jpg" alt="Subscribe" className='CarImg' />
            </div>
        </div>
        <div className='FooterContainer1'>
            <p>Created By <span>HariSurya Manepalli</span> | All Rights Reserved</p>
        </div>  
        </div>
    )
}

export default Footer