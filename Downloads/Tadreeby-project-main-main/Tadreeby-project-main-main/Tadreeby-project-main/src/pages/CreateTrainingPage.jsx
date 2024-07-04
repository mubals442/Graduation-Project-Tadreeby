import React from 'react'
import CreateTrainingForm from '../CreateTrainingComp/CreateTrainingForm.jsx'
import Aos from 'aos'
import 'aos/dist/aos.css'

import { useEffect } from 'react';

export default function CreateTrainingPage() {

    useEffect(() => {
        // This code will run after the component mounts
        document.title = " تدريبي / إنشاء تدريب";
      }, []);

      useEffect(()=>{
        Aos.init({
           duration: 1000, 
        });
    },[])

  return (
    <div  data-aos="fade-down">
        <h1 className="text-5xl font-extrabold dark:text-white text-center mb-10">إنشاء تدريب</h1>

            <CreateTrainingForm/>
    </div>
  )
}
