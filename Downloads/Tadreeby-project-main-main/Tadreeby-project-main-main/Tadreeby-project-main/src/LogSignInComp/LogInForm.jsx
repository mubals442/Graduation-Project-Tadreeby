import { Link } from "react-router-dom";

function LogInForm() {
    return (

    <div className="flex items-center justify-center min-h-screen dark:bg-gray-900">
        {/* <div className="w-full max-w-md p-4 bg-gray-100 dark:bg-gray-900 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"> */}

            <form className="w-full max-w-lg p-8 space-y-6 rounded-lg shadow-lg bg-gray-100 dark:bg-gray-900 " action="#">
                <h5 className="text-center text-xl font-medium text-gray-900 dark:text-white">تسجيل الدخول</h5>

                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">الايميل</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                    </div>


                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">كلمة المرور</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                </div>

                <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                        <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">&nbsp; تذكرني</label>
                    </div>
                        <a href="#" className="text-end ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">نسيت كلمة المرور ؟</a>
                </div>


                    <button type="submit" className="w-full text-white bg-Gold hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">سجل الأن</button>
                
                
                <div className="text-sm text-center font-medium text-gray-500 dark:text-gray-300">
                    ليس لديك حساب؟<Link to='/WhoSignInPage' className="text-blue-700 hover:underline dark:text-blue-500">سجل الأن</Link>
                </div>


            </form>

        {/* </div> */}
    </div>

    );
}

export default LogInForm;



