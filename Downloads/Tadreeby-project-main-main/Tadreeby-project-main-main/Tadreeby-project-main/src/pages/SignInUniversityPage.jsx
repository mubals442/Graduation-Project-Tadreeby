import React, { useEffect } from 'react'
import SignInUniversityForm from '../LogSignInComp/SignInUniversityForm';
import Aos from 'aos'
import 'aos/dist/aos.css'

function SignInUniversityPage() {
    useEffect(()=>{
        document.title = "تدريبي / إنشاء حساب / جامعات "
    },[]) 

    useEffect(()=>{
      Aos.init({
         duration: 1000, 
      });
  },[])

  return (
    <div  data-aos="fade-down">
        <SignInUniversityForm/>
    </div>
  )
}

export default SignInUniversityPage;