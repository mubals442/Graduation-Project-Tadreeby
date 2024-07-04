import { useEffect } from "react"
import SignInEntityForm from "../LogSignInComp/SignInEntityForm.jsx"
import Aos from 'aos'
import 'aos/dist/aos.css'


function SignInEntityPage() {
    useEffect(()=>{
        document.title = "تدريبي / إنشاء حساب / جهات تدريبية"
    },[]) 

    useEffect(()=>{
        Aos.init({
           duration: 1000, 
        });
    },[])

    return (
        <main  data-aos="fade-down">
            <SignInEntityForm/>
        </main>
    )
}

export default SignInEntityPage
