import React, { useEffect, useState } from 'react'
import Informtions from '../ProfailComp/Informtions';
import AvatarProfail from '../ProfailComp/AvatarProfail';
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function ProfailPage({user}) {

    useEffect(()=>{
        Aos.init({
           duration: 1000, 
        });
    },[])


    useEffect(()=>{
        document.title = "تدريبي / الحساب الشخصي"
    },[]) 

  return (
        <main className="flex flex-col justify-center items-center p-4" >
            <div className="flex flex-col justify-center items-center w-full" data-aos="fade-down">
                <AvatarProfail/>
            </div>
            <div className="w-full mt-4" data-aos="fade-left">
                <Informtions user={user}/>
            </div>
        </main>

)
}
