import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

function SideBar({ isOpen, setIsOpen ,user }) {
    if (!isOpen) return null;

    const handleClose = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        Aos.init({
            duration: 1000,
        });
    }, []);

    function getSidebarItems(role) {
        switch (role) {
          case 'student':
            return [
                { 
                    logo :"src/assets/Tadreeby_Gold.png",
                    nameOfButtons: "الصفحة الرئيسية", LinkOfPage: "/", 
                    icon1: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7z"/></svg> ,
                },
                { 
                    nameOfButtons: "الحساب الشخصي", LinkOfPage: "/ProfailPage", 
                    icon1: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M5.85 17.1q1.275-.975 2.85-1.537T12 15t3.3.563t2.85 1.537q.875-1.025 1.363-2.325T20 12q0-3.325-2.337-5.663T12 4T6.337 6.338T4 12q0 1.475.488 2.775T5.85 17.1M12 13q-1.475 0-2.488-1.012T8.5 9.5t1.013-2.488T12 6t2.488 1.013T15.5 9.5t-1.012 2.488T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q1.325 0 2.5-.387t2.15-1.113q-.975-.725-2.15-1.112T12 17t-2.5.388T7.35 18.5q.975.725 2.15 1.113T12 20m0-9q.65 0 1.075-.425T13.5 9.5t-.425-1.075T12 8t-1.075.425T10.5 9.5t.425 1.075T12 11m0 7.5"/></svg>
                 },
                { 
                    nameOfButtons: "التدريبات", LinkOfPage: "/TrainingPage", 
                    icon1: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m21.47 4.35l-1.34-.56v9.03l2.43-5.86c.41-1.02-.06-2.19-1.09-2.61m-19.5 3.7L6.93 20a2.01 2.01 0 0 0 1.81 1.26c.26 0 .53-.05.79-.16l7.37-3.05c.75-.31 1.21-1.05 1.23-1.79c.01-.26-.04-.55-.13-.81L13 3.5a1.95 1.95 0 0 0-1.81-1.25c-.26 0-.52.06-.77.15L3.06 5.45a1.994 1.994 0 0 0-1.09 2.6m16.15-3.8a2 2 0 0 0-2-2h-1.45l3.45 8.34"/></svg>,
                },
                { 
                    nameOfButtons: 'التقييمات', LinkOfPage: '/EntityCardsPages',
                    icon1: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"/></svg>
                },
                { 
                    nameOfButtons: "تدريبي", LinkOfPage: "/MyTrainingPage",
                    icon1: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="M4 5H2v13h10v-2H4zm13.9-1.6l-1.3-1.3c-.4-.4-1.1-.5-1.6-.1l-1 1H5v12h9V9l4-4c.4-.5.3-1.2-.1-1.6m-5.7 6l-2.5.9l.9-2.5L15 3.4L16.6 5z"/></svg>,
                },
                {
                    nameOfButtons: "تواصل معنا", LinkOfPage: "/ContactPage",
                    icon1: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M12.422 13.424h-9.33a1.473 1.473 0 1 1 0-2.947h8.348a.982.982 0 0 0 .982-.982V1.638a.982.982 0 0 0-.982-.982H3.092A1.473 1.473 0 0 0 1.62 2.09v9.821m9.82-1.434v2.947"/><path d="M7.524 8.236a1.702 1.702 0 0 0 1.957-.461l.246-.247a.533.533 0 0 0 .096-.732l-.796-.795a.533.533 0 0 0-.732.095a.533.533 0 0 1-.731.095L6.29 4.92a.533.533 0 0 1 .095-.732a.533.533 0 0 0 .096-.732l-.796-.796a.533.533 0 0 0-.732.096L4.708 3a1.71 1.71 0 0 0-.462 1.957a9.546 9.546 0 0 0 3.278 3.278Z"/></g></svg>               
                },
                {  
                    nameOfButtons: "تسجيل خروج", LinkOfPage: "#",
                    icon1:<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 18h2v2h12V4H6v2H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm2-7h7v2H6v3l-5-4l5-4z"/></svg>
                }
            ];
          case 'entity':
            return [
                                   
                {  
                    logo :"src/assets/Tadereeby_Green.png",
                    nameOfButtons: "الصفحة الرئيسية", LinkOfPage: "/MainTrainingEntityPage", 
                    icon1: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7z"/></svg> ,
                },
                { 
                    nameOfButtons: "الحساب الشخصي", LinkOfPage: "/ProfailPage", 
                    icon1: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M5.85 17.1q1.275-.975 2.85-1.537T12 15t3.3.563t2.85 1.537q.875-1.025 1.363-2.325T20 12q0-3.325-2.337-5.663T12 4T6.337 6.338T4 12q0 1.475.488 2.775T5.85 17.1M12 13q-1.475 0-2.488-1.012T8.5 9.5t1.013-2.488T12 6t2.488 1.013T15.5 9.5t-1.012 2.488T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q1.325 0 2.5-.387t2.15-1.113q-.975-.725-2.15-1.112T12 17t-2.5.388T7.35 18.5q.975.725 2.15 1.113T12 20m0-9q.65 0 1.075-.425T13.5 9.5t-.425-1.075T12 8t-1.075.425T10.5 9.5t.425 1.075T12 11m0 7.5"/></svg>
                },
                { 
                    nameOfButtons: 'إنشاء تدريب', LinkOfPage: '/CreateTrainingPage',
                    icon1: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="M4 5H2v13h10v-2H4zm13.9-1.6l-1.3-1.3c-.4-.4-1.1-.5-1.6-.1l-1 1H5v12h9V9l4-4c.4-.5.3-1.2-.1-1.6m-5.7 6l-2.5.9l.9-2.5L15 3.4L16.6 5z"/></svg>,
                },
                { 
                    nameOfButtons: 'الطلاب المتقدمين', LinkOfPage: '/TablesOfNamesPage',
                    icon1: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4h4.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.427.218.987.218 2.105V9h-8m0-5H6.2c-1.12 0-1.68 0-2.108.218a1.999 1.999 0 0 0-.874.874C3 5.52 3 6.08 3 7.2V9m8-5v5M3 9v6m0-6h8m-8 6v1.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218H11V9m-8 6h8m4 1h3m0 0h3m-3 0v3m0-3v-3"/></svg>,
                },
                { 
                    nameOfButtons: ' إدارة الطلبة', LinkOfPage: '/TableOfAcceptedStudentsPage',
                    icon1: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2M3 8v6m0-6h6m12 0v6m0-6H9m12 6v4a2 2 0 0 1-2 2H9m12-6H9m-6 0v4a2 2 0 0 0 2 2h4m-6-6h6m0-6v6m0 0v6m6-12v12"/><path fill="currentColor" d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2H3z"/></g></svg>,
                },
                {
                    nameOfButtons: "تواصل معنا", LinkOfPage: "/ContactPage",
                    icon1: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M12.422 13.424h-9.33a1.473 1.473 0 1 1 0-2.947h8.348a.982.982 0 0 0 .982-.982V1.638a.982.982 0 0 0-.982-.982H3.092A1.473 1.473 0 0 0 1.62 2.09v9.821m9.82-1.434v2.947"/><path d="M7.524 8.236a1.702 1.702 0 0 0 1.957-.461l.246-.247a.533.533 0 0 0 .096-.732l-.796-.795a.533.533 0 0 0-.732.095a.533.533 0 0 1-.731.095L6.29 4.92a.533.533 0 0 1 .095-.732a.533.533 0 0 0 .096-.732l-.796-.796a.533.533 0 0 0-.732.096L4.708 3a1.71 1.71 0 0 0-.462 1.957a9.546 9.546 0 0 0 3.278 3.278Z"/></g></svg>               
                },
                { 
                    nameOfButtons: "تسجيل خروج", LinkOfPage: "#",
                    icon1:<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 18h2v2h12V4H6v2H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm2-7h7v2H6v3l-5-4l5-4z"/></svg>
                }
            ];
          case 'university':
            return [
                {
                    logo :"src/assets/Tadreeby_Blue.png",
                    nameOfButtons: 'الصفحة الرئيسية', LinkOfPage: '/UniHomePage', 
                    icon1: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7z"/></svg> ,
                },
                { 
                    nameOfButtons: "الحساب الشخصي", LinkOfPage: "/ProfailPage",
                    icon1: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M5.85 17.1q1.275-.975 2.85-1.537T12 15t3.3.563t2.85 1.537q.875-1.025 1.363-2.325T20 12q0-3.325-2.337-5.663T12 4T6.337 6.338T4 12q0 1.475.488 2.775T5.85 17.1M12 13q-1.475 0-2.488-1.012T8.5 9.5t1.013-2.488T12 6t2.488 1.013T15.5 9.5t-1.012 2.488T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q1.325 0 2.5-.387t2.15-1.113q-.975-.725-2.15-1.112T12 17t-2.5.388T7.35 18.5q.975.725 2.15 1.113T12 20m0-9q.65 0 1.075-.425T13.5 9.5t-.425-1.075T12 8t-1.075.425T10.5 9.5t.425 1.075T12 11m0 7.5"/></svg>
                },
                { 
                    nameOfButtons: 'الطلاب المتدربين', LinkOfPage: '/TableToUniPage',
                    icon1: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2M3 8v6m0-6h6m12 0v6m0-6H9m12 6v4a2 2 0 0 1-2 2H9m12-6H9m-6 0v4a2 2 0 0 0 2 2h4m-6-6h6m0-6v6m0 0v6m6-12v12"/><path fill="currentColor" d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2H3z"/></g></svg>
                },
                { 
                    nameOfButtons: 'التقييمات', LinkOfPage: '/EntityCardsPages',
                    icon1: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"/></svg>
                },
                {  
                    nameOfButtons: 'تسجيل خروج',
                    LinkOfPage:null,
                    icon1:<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 18h2v2h12V4H6v2H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm2-7h7v2H6v3l-5-4l5-4z"/></svg>
                }
            ];
          default:
            return [  
                { 
                    logo :"src/assets/Tadreeby_Gold.png",
                    nameOfButtons: "الصفحة الرئيسية", LinkOfPage: "/",
                    icon1: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7z"/></svg> ,
                },
                {
                    nameOfButtons: "التدريبات", LinkOfPage: "/TrainingPage",
                    icon1: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m21.47 4.35l-1.34-.56v9.03l2.43-5.86c.41-1.02-.06-2.19-1.09-2.61m-19.5 3.7L6.93 20a2.01 2.01 0 0 0 1.81 1.26c.26 0 .53-.05.79-.16l7.37-3.05c.75-.31 1.21-1.05 1.23-1.79c.01-.26-.04-.55-.13-.81L13 3.5a1.95 1.95 0 0 0-1.81-1.25c-.26 0-.52.06-.77.15L3.06 5.45a1.994 1.994 0 0 0-1.09 2.6m16.15-3.8a2 2 0 0 0-2-2h-1.45l3.45 8.34"/></svg>,
                },
                { 
                    nameOfButtons: 'التقييمات', LinkOfPage: '/EntityCardsPages',
                    icon1: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"/></svg> 
                },
                {
                    nameOfButtons: "تواصل معنا", LinkOfPage: "/ContactPage",
                    icon1: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M12.422 13.424h-9.33a1.473 1.473 0 1 1 0-2.947h8.348a.982.982 0 0 0 .982-.982V1.638a.982.982 0 0 0-.982-.982H3.092A1.473 1.473 0 0 0 1.62 2.09v9.821m9.82-1.434v2.947"/><path d="M7.524 8.236a1.702 1.702 0 0 0 1.957-.461l.246-.247a.533.533 0 0 0 .096-.732l-.796-.795a.533.533 0 0 0-.732.095a.533.533 0 0 1-.731.095L6.29 4.92a.533.533 0 0 1 .095-.732a.533.533 0 0 0 .096-.732l-.796-.796a.533.533 0 0 0-.732.096L4.708 3a1.71 1.71 0 0 0-.462 1.957a9.546 9.546 0 0 0 3.278 3.278Z"/></g></svg>               
                },
                { 
                    nameOfButtons: "تسجيل دخول", LinkOfPage: "/LogInPage",
                    icon1: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm6-4V8l5 4l-5 4v-3H2v-2z"/></svg>,
                    icon2: ''
                },
                { 
                    nameOfButtons: "إنشاء حساب", LinkOfPage: "/WhoSignInPage",
                    icon1: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 2048 2048"><path fill="currentColor" d="M1728 1152q26 0 45 19t19 45t-19 45t-45 19t-45-19t-19-45t19-45t45-19m-603-19q-79-54-170-81t-187-28q-88 0-170 23t-153 64t-129 100t-100 130t-65 153t-23 170H0q0-117 35-229t101-207t157-169t203-113q-56-36-100-83t-76-103t-47-118t-17-130q0-106 40-199t109-163T568 40T768 0t199 40t163 109t110 163t40 200q0 67-16 129t-48 119t-75 103t-101 83q81 29 156 80zM384 512q0 80 30 149t82 122t122 83t150 30q79 0 149-30t122-82t83-122t30-150q0-79-30-149t-82-122t-123-83t-149-30q-80 0-149 30t-122 82t-83 123t-30 149m1280 384q79 0 149 30t122 82t83 123t30 149q0 80-30 149t-82 122t-123 83t-149 30q-65 0-128-23v151h-128v128h-128v128H896v-282l395-396q-11-46-11-90q0-79 30-149t82-122t122-83t150-30m0 640q53 0 99-20t82-55t55-81t20-100q0-53-20-99t-55-82t-81-55t-100-20q-53 0-99 20t-82 55t-55 81t-20 100q0 35 9 64t21 61l-414 413v102h128v-128h128v-128h128v-91l93-92q40 23 77 39t86 16"/></svg>,
                }
            ];
        }
    }



    const role = user; // this should be dynamic based on the user's actual role
    const sidebarItems = getSidebarItems(role);

    return (
        <div id="drawer-navigation" className="fixed top-0 right-0 z-40 w-64 h-screen p-4 overflow-y-auto bg-gray-100 dark:bg-gray-900" aria-labelledby="drawer-navigation-label" >

            <button
                onClick={handleClose}
                type="button"
                data-drawer-hide="drawer-navigation"
                aria-controls="drawer-navigation"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
                
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
                <span className="sr-only">Close menu</span>
            </button>




            <div className="py-4 overflow-y-auto">

                <Link to ={sidebarItems[0].LinkOfPage} className="flex items-center ps-2.5 mb-5 h-20 w-40">
                    <img src={sidebarItems[0].logo} className="h-10 me-3 sm:h-20 absolute" alt="Flowbite Logo" />
                    {/* <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
                </Link>


                <ul className="space-y-2">
                    {sidebarItems.map(item => (
                        <li key={item.nameOfButtons}>
                            <Link to={item.LinkOfPage} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group ">    
                                        {item.icon1}
                                    <span className="ms-3">{item.nameOfButtons}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default SideBar;




























































