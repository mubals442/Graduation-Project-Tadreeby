import { useEffect } from "react"
import ContactForm from "../ContactcComp/ContactForm.jsx"
import Aos from 'aos'
import 'aos/dist/aos.css'

function ContactPage() {

    useEffect(()=>{
        document.title = "تدريبي / تواصل معنا"
    },[]) 

    useEffect(()=>{
        Aos.init({
           duration: 1000, 
        });
    },[])

    return (
        <div  data-aos="fade-right">         
            <ContactForm/>
        </div>
    )
}

export default ContactPage
