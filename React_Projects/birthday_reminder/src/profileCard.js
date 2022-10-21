import React,{useState} from 'react';
import data from './data';

const ProfileCard = ()=>{

    const [people,setPeople] = useState(data)

    return (
        <div>
        <div className=' w-40 h-72 bg-[#161D3F] mx-auto my-36 rounded-md relative'>
            <div className=' w-56 h-60 bg-slate-50 -mx-8 my-6 absolute rounded-lg bg-gradient-to-tr from-yellow-50 to-green-100'>

            <div className='columns-1 text-center'>
                <img className=' my-5 w-20 h-20 mx-auto rounded-full' src={people[0].image} alt={people[0].name} />

                <span className='block font-bold'>{people[0].name}</span>
                <span className='block italic'>{people[0].age} years</span>
                <button className=' capitalize  bg-black rounded-xl text-white px-2 py-1 my-5 font-thin'>view content</button>
            </div>
            
            </div>
        </div>
        </div>
    )
}

export default ProfileCard