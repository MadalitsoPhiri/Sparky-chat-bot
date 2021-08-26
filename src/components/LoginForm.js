import React,{useState} from 'react'
import Loading from './Loading';

export default function LoginForm({history}) {
 const [loading,setLoading] = useState(false)
    const handleLogin = (e)=>{
        history.push('/chat')
        // setLoading(true)
    }
    return (
        <div className="flex flex-col bg-gray-100 h-full overflow-y-auto w-full p-4">
        {!loading? <div className="bg-white shadow-sm rounded-lg p-4 gap-5 flex flex-col">
                <div className="">
                <p className="mb-2">Your name</p>
                <input type="text" name="price" id="name" className="focus-ring-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full px-3 p-2 sm:text-sm border-2  border-gray-300 rounded-lg focus:outline-none shadow-sm"  type="text"></input>
                </div>

                <div className="">
                <p className="mb-2">Email address</p>
                <input type="text" name="price" id="email" className="focus-ring-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full px-3 p-2 sm:text-sm border-2  border-gray-300 rounded-lg focus:outline-none shadow-sm" autoComplete="email" type="email"></input>
                </div>

                <div className="flex flex-col gap-2">
                    <p>I agree to have my personal data processed by Sparky, for chat support.</p>
                    <div className="flex flex-row items-center gap-2">
                    <input type="checkbox" name="agreement"/>
                    <p>Agree</p>
                    </div>
                   
                </div>

                <button className="w-full bg-yellow-500 p-2 rounded-xl text-white" onClick={handleLogin}>Start chat</button>
         
          </div>:<Loading/>}
          </div>
    )
}
