import './index.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faKey} from '@fortawesome/free-solid-svg-icons'

import {Link, useNavigate} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'

function Register(){
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [onCheck, setCheck] = useState(false)
        const [err, SetError] = useState('')
        const [showError, setShowError] = useState(false)
        
        const onChecked = () => {
            setCheck(pre => !pre)
        }
        const ongetpassword = onCheck ? 'text' : 'password'
        const SmallImg = password===""  ? "https://i.pinimg.com/736x/82/3f/20/823f207b0d79a7c3bca130184f379b37.jpg" : "https://i.pinimg.com/736x/94/cb/bf/94cbbfcf497a7ded373dad611a71166e.jpg"
        
        const navigate = useNavigate()
        const onRegisterSubmit = async (event) => {
            event.preventDefault()
            axios.post('https://groceryshoppingbackend.onrender.com/auth/Register',{email, password})
            .then(result => {
            console.log(result.data)
                if (result.data.message === 'User Register SuccessFully!'){
                    navigate('/login')
                }else{
                    SetError(result.data.message)
                    setShowError(true)
                }
            })
            .catch(err => SetError(err))
        }

        return(
            <div className="RegisterContainer">
                <img src={SmallImg} alt="smallRegisterImage" className='SmallRegisterImage'/>
                <form onSubmit={onRegisterSubmit} className='RegisterCardContainer'>
                    <h1>Welcome To MoonLight</h1>
                    <div className='RegisterCard1'>
                        <FontAwesomeIcon icon={faEnvelope} shake className='RegisterIcon'  />
                        <input value={email} onChange={e => setEmail(e.target.value)} type='email' className='RegisterInput' placeholder='Enter Email'/>
                    </div>
                    <div className='RegisterCard1'>
                        <FontAwesomeIcon icon={faKey} beat className='RegisterIcon'  />
                        <input value={password} onChange={e => setPassword(e.target.value)} type={ongetpassword} className='RegisterInput' placeholder='Enter Password'/>
                    </div>
                    <div className='RegCard2'>
                        <input type='checkbox' onClick={onChecked}/>
                        <p className='RegPass'>𝙎𝙝𝙤𝙬 𝙋𝙖𝙨𝙨𝙬𝙤𝙧𝙙</p>
                    </div>
                    <button type='submit' className='RegisterBtn'>Register</button>
                    <p>Already Have an Account <Link className='LoginLink' to="/login">Login</Link></p> 
                    {showError && <p className='para_error'>{err}*</p>}   
            </form>
        </div>
    )
}

export default Register