import LogInForm from "../LogSignInComp/LogInForm"

import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

function LogInPage() {

    useEffect(()=>{
        Aos.init({
           duration: 1000, 
        });
    },[])

        useEffect(()=>{
            document.title = "تدريبي / تسجيل دخزل"
        },[]) 

    return (
        <main>
            <div data-aos= "fade-down">
                <LogInForm/> {/* call combonant and put it in log in page */}
            </div>
        </main>
    )
}

export default LogInPage;
