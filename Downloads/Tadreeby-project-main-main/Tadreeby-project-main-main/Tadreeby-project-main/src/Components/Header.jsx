import {Link} from "react-router-dom";  // use Link from the dom
import React, { useState,useEffect} from "react";
import SideBar from './SideBar.jsx';
import Aos from 'aos'
import 'aos/dist/aos.css'

function Header({user}){
        // Reda backend  - Search Bar - 
   
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);


    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(()=>{
        Aos.init({
           duration: 1000, 
        });
    },[])



    function loggedInHeader(roleH){
        switch(roleH){
            case 'student':
                return [
                    {
                        profile:true,
                        logo:"src/assets/Tadreeby_Gold.png",
                        urlHomePage:"/",
                        user:"student",
                        userName:"مصعب السيد"
                    }
                ]
            case 'entity':
                return[
                    {
                        profile:true,
                        logo:"src/assets/Tadereeby_Green.png",
                        urlHomePage:"/MainTrainingEntityPage",
                        user:"entity",
                        userName:"خالد الدوسري",
                    }
                ]
            case 'university':
                return[
                    {
                        profile:true,
                        user:"university",
                        logo:"src/assets/Tadreeby_Blue.png",
                        urlHomePage:"/UniHomePage",
                        userName:"عبد الله سمران",
                    }
                ]
            default:
                return[
                    {
                        profile:false,
                        logo:"src/assets/Tadreeby_Gold.png",
                        urlHomePage:"/",
                        user:''
                    }
                ]
 
        }

    }

    const roleH = user;
    const handleHeader = loggedInHeader(roleH);


    const [currentUrl, setCurrentUrl] = useState('');


    return(
        <nav className="bg-Back mb-20 ">

            <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
                
                <div className="text-center">
                                            <button
                                                onClick={toggleSidebar}
                                                data-collapse-toggle="mega-menu-icons"
                                                type="button"
                                                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                                aria-controls="mega-menu-icons"
                                                aria-expanded={isSidebarOpen}
                                            >

                                                <span className="sr-only">Open main menu</span>

                                                <svg className="w-5 h-5" aria-hidden="true" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 14">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                                                </svg>
                                                
                                            </button>
                </div>
                    
                    <SideBar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} user={roleH} />

                    <Link to={handleHeader[0].urlHomePage} className="flex items-center space-x-3 rtl:space-x-reverse ml-auto mt-5">
                        <img src={handleHeader[0].logo} className="h-20 absolute" alt="Tadreeby-Logo" />
                    </Link>


                    {handleHeader[0].profile === true && handleHeader[0].user === "student"? 
                    <Link to={'/ProfailPage'} className="flex items-center">
                        <img className="w-8 h-8 rounded-full cursor-pointer ml-2" src="https://via.placeholder.com/50" alt="user photo"/>
                            <p className="ml-2">{handleHeader[0].userName}</p>
                    </Link> : null}


                        {handleHeader[0].profile === true && handleHeader[0].user === "entity"? 
                        <Link to={'/ProfailPage'} className="flex items-center">
                            <img className="w-8 h-8 rounded-full cursor-pointer ml-2" src="https://via.placeholder.com/50" alt="user photo"/>
                                <p className="ml-2">{handleHeader[0].userName}</p>
                        </Link> : null}

                        
                        {handleHeader[0].profile === true && handleHeader[0].user === "university"? 
                        <Link to={'/ProfailPage'} className="flex items-center">
                            <img className="w-8 h-8 rounded-full cursor-pointer ml-2" src="https://via.placeholder.com/50" alt="user photo"/>
                                <p className="ml-2">{handleHeader[0].userName}</p>
                        </Link> : null}

            </div>
        </nav>

    )
}
export default Header;

















































