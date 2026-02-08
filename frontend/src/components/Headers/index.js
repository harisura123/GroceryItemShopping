import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faBasketShopping, faCircleUser, faHeart, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {Link, useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'
import { useState } from 'react'

const Headers = () => {
    const [showBar, setShowBar] = useState('false')
    const navigate = useNavigate()
    const onClickLogout = () => {
        Cookies.remove('jwt_token')
        localStorage.removeItem('user_name')
        navigate('/login')
    }
    const onClickBar = () => {
        setShowBar((pre) => !pre)
    }
    const SetShowBar = showBar ? "SmallLongDeviceDetails" : "SmallDeviceDetails" 
    return(
    <div className='HeaderMainContainer'>
    <div className='HeaderContainer1'>
        <nav className='HeaderContainer2'>
            <div className='HeaderContainer3'>
                <FontAwesomeIcon icon={faBasketShopping} style={{color: "green", height: '5vh', width: "8vw"}} />
                <h1 className='HeaderText'>𝙶𝚛𝚘𝚌𝚎𝚛𝚢</h1>
            </div>
            <ul className='HeaderContainer4'>
                <li><Link className='HeaderLi' to='/'>𝖧𝗈𝗆𝖾</Link></li>                
                <li className='HeaderLi'><Link to='/Products' className='HeaderLi'>𝖯𝗋𝗈𝖽𝗎𝖼𝗍𝗌</Link></li>
                <Link className='HeaderLi' to='/category'><li className='HeaderLi'>𝖢𝖺𝗍𝖾𝗀𝗈𝗋𝗂𝖾𝗌</li></Link>
                <li className='HeaderLi'>𝖱𝖾𝗏𝗂𝖾𝗐</li>
            </ul>
            <ul className='HeaderButton'>
                <button className='HeaderIconBtn'>
                    <FontAwesomeIcon className='IconBtn' icon={faHeart} />
                </button>
                <Link to='/cart'>
                <button className='HeaderIconBtn'>
                    <FontAwesomeIcon className='IconBtn' icon={faShoppingCart}  />
                </button>
                </Link>
                <button type='button' onClick={onClickLogout} className='HeaderIconBtn'>
                    <FontAwesomeIcon className='IconBtn' icon={faCircleUser} />
                </button>
            </ul>
            <button type="button" onClick={onClickBar} className='IconFaBar'>
                <FontAwesomeIcon className='IconBtn' icon={faBars}  />
            </button>
        </nav>
    </div>
    <div className={SetShowBar}>
        <Link className='HeaderLi' to='/'><li>𝖧𝗈𝗆𝖾</li></Link>                
        <Link to='/Products' className='HeaderLi'><li>𝖯𝗋𝗈𝖽𝗎𝖼𝗍𝗌</li></Link>
        <Link className='HeaderLi' to='/category'><li>𝖢𝖺𝗍𝖾𝗀𝗈𝗋𝗂𝖾𝗌</li></Link>
        <Link className='HeaderLi' to='/cart'><li>𝖢𝖺𝗋𝗍</li></Link>
        <li className='HeaderLi'>𝖱𝖾𝗏𝗂𝖾𝗐</li>   
        <button className='HeaderLiBtn' onClick={onClickLogout}>
            <li>𝖫𝗈𝗀𝗈𝗎𝗍</li>
        </button>
    </div>
    </div>
)
}
export default Headers