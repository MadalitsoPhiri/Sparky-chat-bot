import React,{useState,useContext} from 'react'
import Loading from './Loading';
import { useHistory } from 'react-router';
import { AuthContext } from './AuthContext';
import { socket } from '../socket';

export default function LoginForm() {
 const history = useHistory()
 const {user,setUser} = useContext(AuthContext)   
 const [loading,setLoading] = useState(false)
 const [email,setEmail] = useState('')
 const [name,setName] = useState('')
 const [nameError,setNameError] = useState(false)
 const [emailError,setEmailError] = useState(false)
 const [acceptedError,setAcceptedError] = useState(false)
 const [checked, setChecked] = useState(false)


    const login = (customerDetails)=>{
        setLoading(true)
           fetch('https://sparkychatbot.ddns.net/api/customers/create',{method:"POST",headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },body:JSON.stringify(customerDetails)
          }).then((res)=>{
              return res.json()
          }).then((data)=>{
            console.log(data)
            setUser(data.customer)
            socket.emit('customer-login',data.customer)
            console.log('state:user',(user))
            history.push('/options')
        

          }).catch((err)=>{
              console.log(err)
         setLoading(false)

          })
      
    }

    const handleLogin = (e)=>{
       
        // setLoading(true)
        if(name == ''){
         setNameError(true)
         console.log("nameError")
        }
        if(!checked){
            setAcceptedError(true)
            console.log("not accepted")
        }
        if(email == ''){
            setEmailError(true)
            console.log("nameEmail")
        }

        if(name != '' && email != '' && checked){
            console.log({email:email.toLowerCase(),name:name.toLowerCase()})
            console.log('checked:',checked)
            login({customerDetails:{email:email.toLowerCase(),name:name.toLowerCase()}})
        }
       
    }
    const handleNameChange = (e)=>{
      setName(e.target.value)
      setNameError(false)
      
    }

    const handleEmailChange = (e)=>{
        setEmail(e.target.value)
        setEmailError(false)
       
      }

    const handleCheck = (e)=> {
        setChecked(!checked);
        setAcceptedError(false)

      }
    return (
        <div className="flex flex-col bg-gray-100 h-full overflow-y-auto w-full p-4">
        {!loading? <div className="bg-white shadow-sm rounded-lg p-4 gap-5 flex flex-col">
                <div className="flex flex-col">
                <p className="mb-2">Your name</p>
                <input  onChange={handleNameChange}  type="text" name="price" id="name" className={`focus-ring-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full px-3 p-2 sm:text-sm border-2  ${nameError ?'border-red-500':'border-gray-300'} rounded-lg focus:outline-none shadow-sm`}  type="text"></input>
                {nameError && <p className="text-red-500 text-xs mt-2">Please enter your name.</p>}
                </div>

                <div className="flex flex-col">
                <p className="mb-2">Email address</p>
                <input onChange={handleEmailChange} type="text" name="price" id="email" className={`focus-ring-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full px-3 p-2 sm:text-sm border-2  ${emailError ?'border-red-500':'border-gray-300'} rounded-lg focus:outline-none shadow-sm`} autoComplete="email" type="email"></input>
                {emailError && <p className="text-red-500 text-xs mt-2">Plesase enter your email.</p>}
                </div>

                <div className="flex flex-col gap-2">
                    <p>I agree to have my personal data processed by Sparky, for chat support.</p>
                    <div className="flex flex-row items-center gap-2">
                    <input type="checkbox" name="agreement" onChange={handleCheck} defaultChecked={checked}/>
                    <p>Agree</p>
                    </div>
                    {acceptedError && <p className="text-red-500 text-xs mt-2">Please accept the terms.</p>}
                </div>

                <button className="w-full bg-yellow-500 p-2 rounded-xl text-white font-bold" onClick={handleLogin}>Start chat</button>
         
          </div>:<Loading/>}
          </div>
    )
}
