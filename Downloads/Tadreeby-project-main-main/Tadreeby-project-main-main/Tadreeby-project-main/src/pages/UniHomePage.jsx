import { useEffect } from 'react';
import uquImg from '../assets/uquImg.jpg';
import Aos from 'aos'
import 'aos/dist/aos.css'



function UniHomePage() {
    const logo = uquImg;

    useEffect(()=>{
        Aos.init({
           duration: 1000, 
        });
    },[])


    useEffect(()=>{
        document.title = "تدريبي / الصفحة الرئيسية"
    },[]) 


    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">الجامعات</h1>

            <img src={logo} className="h-80 w-80 rounded-lg bg-gray-100 dark:bg-gray-900 shadow-lg mt-10"  data-aos="fade-down"></img>
                <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 mt-10"  data-aos="fade-right">مرحبا <span className='text-Blue'>عبدالله الحربي</span> من <span className='text-Blue'>جامعة ام القرى</span></p>



            {/* <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white mt-10 mb-10">خدماتنا</h2> */}
            <h3 className="text-3xl font-bold dark:text-white mt-20"  data-aos="fade-right">خدماتنا</h3>



            <div className="flex mt-10 gap-20 ">

                {/* Card Style added here */}
                <div className="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 shadow-lg p-4 rounded-lg h-60 w-60" data-aos="fade-down">
                    <div className="flex justify-center items-center">
                        <svg className="w-40 h-40 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule ="evenodd" d="M9 2.221V7H4.221a2 2 0 0 1 .365-.5L8.5 2.586A2 2 0 0 1 9 2.22ZM11 2v5a2 2 0 0 1-2 2H4v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-7ZM8 16a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm1-5a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z" clipRule="evenodd"/>
                        </svg>    
                    </div> 
                    <h1 className="mt-2 text-xl font-bold dark:text-white">الوصول السريع لتقارير</h1>
                </div>

                {/* Card Style added here */}
                <div className="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 shadow-lg p-4 rounded-lg h-60 w-60 " data-aos="fade-down">
                    <div className="flex justify-center items-center">
                        <svg className="w-40 h-40 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20">
                            <path fill="currentColor" d="M4 5H2v13h10v-2H4zm13.9-1.6l-1.3-1.3c-.4-.4-1.1-.5-1.6-.1l-1 1H5v12h9V9l4-4c.4-.5.3-1.2-.1-1.6m-5.7 6l-2.5.9l.9-2.5L15 3.4L16.6 5z"/>
                        </svg>   
                    </div>
                    <h1 className="mt-2 text-xl font-bold dark:text-white"> حضور و غياب الطلبة</h1>
                </div>


                <div className="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 shadow-lg p-4 rounded-lg h-60 w-60" data-aos="fade-down">
                    <div className="flex justify-center items-center">
                        <svg className="w-40 h-40 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2M3 8v6m0-6h6m12 0v6m0-6H9m12 6v4a2 2 0 0 1-2 2H9m12-6H9m-6 0v4a2 2 0 0 0 2 2h4m-6-6h6m0-6v6m0 0v6m6-12v12"/>
                            <path fill="currentColor" d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2H3z"/></g>
                        </svg>    
                    </div>
                    <h1 className="mt-2 text-xl font-bold dark:text-white">قائمة الطلاب المتدربين</h1>
                </div>

                
                <div className="text-center flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 shadow-lg p-4 rounded-lg h-60 w-60" data-aos="fade-down">
                    <div className="flex justify-center space-x-1">
                        {[...Array(3)].map((_, i) => (
                            <svg className="w-10 h-10 text-gray-800 dark:text-white" key={i} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 .587l3.668 7.429 8.332.779-6.367 5.82 1.747 8.317L12 18.897l-7.38 4.035 1.747-8.317L.25 8.795l8.332-.779L12 .587z"/>
                            </svg>
                        ))}
                        {[...Array(2)].map((_, i) => (
                            <svg className="w-10 h-10 text-gray-800 dark:text-white" key={i} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M12 .587l3.668 7.429 8.332.779-6.367 5.82 1.747 8.317L12 18.897l-7.38 4.035 1.747-8.317L.25 8.795l8.332-.779L12 .587z"/>
                            </svg>
                        ))}
                    </div>
                    <h1 className="mt-2 text-xl font-bold dark:text-white">التقييمات</h1>
                </div>
            </div>
        </div>
    );
}

export default UniHomePage;
