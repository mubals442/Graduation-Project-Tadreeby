import { useEffect } from "react"
import SignInStudentForm from "../LogSignInComp/SignInStudentForm.jsx"
import Aos from 'aos'
import 'aos/dist/aos.css'

function SignInStudentPage() {

    useEffect(()=>{
        document.title = "تدريبي / إنشاء حساب / طلاب"
    },[])
    
    useEffect(()=>{
        Aos.init({
           duration: 1000, 
        });
    },[])

    return (
        <main  data-aos="fade-down">
            <SignInStudentForm />
        </main>
    )
}

export default SignInStudentPage
