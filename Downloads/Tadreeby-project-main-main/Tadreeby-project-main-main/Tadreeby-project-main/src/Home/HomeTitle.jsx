
import { Link } from 'react-router-dom';

function HomeTitle() {
    const logoHome = "./src/assets/TadreebyPic.png";
    return (
        <div className="text-center">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">إبدأ رحلتك التدريبة الآن</h1>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">ابدأ رحلتك المهنية في تطوير المهارات المتخصصة في مجالك من متخصصين وخبراء</p>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">سجل معنا للتدريب في المجال المرغوب مع خبراء في شتى المجالات</p>
            <div className="flex justify-center">
                <Link to="/WhoSignInPage" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-Gold rounded-lg hover:bg-yellow-500 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    سجل الآن
                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </Link>


                
            </div>
        </div>
    );
}

export default HomeTitle;
