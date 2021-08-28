import React,{useContext} from 'react'
import { AuthContext } from './AuthContext';
import { useHistory } from 'react-router';



export default function Options() {
    const {user} = useContext(AuthContext)
    const history = useHistory()
    console.log(user)
    const handleWeedGennie = (e)=>{
       history.push('/weedgennie')
    }
    const SpeaktoAgent = (e)=>{
        history.push('/chat')
    }
    return (
        <div className="w-full h-full flex flex-col justify-center items-center gap-5">
            <button onClick={handleWeedGennie} className="border-2 border-yellow-500 px-4 py-2 rounded-full text-xs">Find a strain</button>
            <button onClick={SpeaktoAgent} className="border-2 border-yellow-500 px-4 py-2 rounded-full text-xs">Speak to an agent</button>

        </div>
    )
}
