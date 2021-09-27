import React from 'react'

export default function ConversationPreview() {
    return (
        <div className="w-full flex flex-row h-auto  items-center  border-b border-gray-200 py-5 px-4 cursor-pointer hover:bg-[#eae1f5]">


        <div className="relative flex flex-row py-2  w-9 justify-center items-center mr-6">
                            
                            <div className="absolute -top-2 left-0 bg-red-500 h-9 w-9 rounded-full border-2  border-white "></div>
                            <div className="absolute -top-2 left-2 bg-green-500 h-9 w-9 rounded-full border-2  border-white "></div>
                            <div className="absolute -top-2 left-4 bg-blue-500 h-9 w-9  rounded-full border-2  border-white ">
                            <img src="https://scontent.flun1-1.fna.fbcdn.net/v/t1.6435-9/39500132_10155573310807401_2542865486727610368_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEm7xlGIvoPy-vPuTYQQcwd1CQcxXR2lHTUJBzFdHaUdE13lgeOOMBVodwGBoY-GaNGLMD27Oh1fRcIQ_yyGOz6&_nc_ohc=4R2AYO8JjY4AX8kTjkO&_nc_ht=scontent.flun1-1.fna&oh=b5037090e4d50eb00979a37aff2600fa&oe=61718E5E" className="bg-black rounded-full "/>
                            </div>
                            

                                
                        </div>
                <div className="flex-1 w-32">
                <p className=" text-xs font-light text-gray-400 mb-1">Sparky • just now</p>
                <p className="text-xs font-light truncate">Sparky:Asked for email hhhhggvgfcfcfcfcfcfvfcfcfcfcfcfcfcf</p>
                </div>
                
                <svg className="w-6 h-6 text-[#602E9E] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>



        </div>
    )
}
