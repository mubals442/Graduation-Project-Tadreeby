import React, { useEffect } from 'react'
import SignInCard from '../WhoSignInComp/SignInCard'

import Aos from 'aos'
import 'aos/dist/aos.css'

 export default function WhoSignInPage() {

  useEffect(()=>{
    Aos.init();
  },[])

  
  useEffect(()=>{
    document.title = "تدريبي / إنشاء حساب"
},[]) 

   return (
    <main className='flex justify-center items-center h-screen'>

      <div data-aos="fade-down" data-aos-delay={100} className='mx-8 hover:-translate-y-4 hover:shadow-2xl transition duration-300'>
          <SignInCard linkPage='/SignInStudentPage' nameCard="طلاب" imageLogo ={"src/assets/Tadreeby_Gold_SignIn.png"} bgc = {"Gold"} hoverColor ={"orange"}/>  {/* this card with the informations we put it */}
      </div>

      <div data-aos="fade-down" data-aos-delay={200} className='mx-8 hover:-translate-y-4 hover:shadow-2xl transition duration-300 '>
          <SignInCard linkPage='/SignInEntityPage' nameCard="الجهات تدريبية" imageLogo ={"src/assets/Tadereeby_Green_SignIn.png"} bgc = {"Green"} hoverColor ={"green"}/>  {/* this card with the informations we put it */}
      </div>

      <div data-aos="fade-down" data-aos-delay={300} className='mx-8 hover:-translate-y-4 hover:shadow-2xl transition duration-300 '>
          <SignInCard linkPage='/SignInUniversityPage' nameCard="جامعات" imageLogo ={"src/assets/Tadreeby_Blue_SignIn.png"} bgc = {"Blue"} hoverColor ={"blue"}/>  {/* this card with the informations we put it */}
      </div>

  </main>
   )
  
}
    
