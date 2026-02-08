import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faKey} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Cookies from 'js-cookie'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState('')
    const [err, SetErrors] = useState("") 
    const [showError, setShowError] = useState(false)
    const navigate = useNavigate()
    const [offBtn, setOffbtn] = useState(false)
    const [onText, setChange] = useState(false) 
    
    const onLoginSubmit = event => {
        event.preventDefault()
        axios.post('https://groceryshoppingbackend.onrender.com/auth/Login', {email, password})
        .then(result => {
            console.log(result.data)
            if (result.data.message === 'Success'){
                Cookies.set('jwt_token', result.data.jwtToken, {expires: 1})
                localStorage.setItem('user_name',result.data.userId)
                navigate('/')
            }else{
                SetErrors(result.data)
                setShowError(true)
            }
        })
        .catch(err => SetErrors(err))
    }
    const handleBtn = () => {
        setOffbtn((pre) => !pre)
    }
    const Ontext = onText ? 'text' : 'password'
    const Onview = offBtn ? '/LightOn.jpg' : '/LightOff.jpg'
    const SmallView = offBtn ? '/LampOn.png' : '/Lampoff.png'
    const ScreenView = offBtn ? 'LoginCardContainer2' : 'LoginCardContainer2Off'
    const SmallLightclass = offBtn ? 'smallLampImgOn' : 'smallLampImg'
    const onClick = () => {
        setChange((pre) => !pre)
    } 
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined){
        navigate('/')
    }
    return(
        <div className='LoginContainer'>
            <div className='LoginCardContainer1'>
               <img src={Onview} alt="Lamp" className='LampImg' onClick={handleBtn}/> 
               <img src={SmallView} alt="smallLamp" onClick={handleBtn} className={SmallLightclass} />
            </div>
            <div className={ScreenView}>
                <h1 className="WelcomeText">𝚆𝚎𝚕𝚌𝚘𝚖𝚎 𝚋𝚊𝚌𝚔 𝚝𝚘 𝙻𝚘𝚐𝚒𝚗!</h1>
                <form onSubmit={onLoginSubmit} className='LoginCardDetails'>
                    <div className='LoginCard1'>
                        <FontAwesomeIcon icon={faEnvelope} shake className='LoginIcon'  />
                        <input type='email' value={email} onChange={e => setEmail(e.target.value)} className='LoginInput' placeholder='Enter Email'/>
                    </div>
                    <div className='LoginCard1'>
                        <FontAwesomeIcon icon={faKey} beat className='LoginIcon'  />
                        <input type={Ontext} value={password} onChange={e => setPassword(e.target.value)} className='LoginInput' placeholder="Enter Password"/>
                    </div>
                    <div className='LoginCard2'>
                        <input onClick={onClick} type='checkbox'/>
                        <p>𝙎𝙝𝙤𝙬 𝙋𝙖𝙨𝙨𝙬𝙤𝙧𝙙</p>
                    </div>
                    <button type='submit' className='LoginBtn'>𝘓𝘰𝘨𝘪𝘯</button>
                    <p className="AccountPara">Don't have an Account? <Link className='LoginLink' to="/register">Register</Link></p>
                    {showError && <p className='para_errorS'>{err}*</p>}
                </form>
            </div>
        </div>
    )
}

export default Login