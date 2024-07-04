import { useRef, useState } from "react";
import TextArea from "../Components/TextArea";

export default function CreateTrainingForm() {



    const [counter , setCounter ] = useState(1); 

    const handleAdd = () => {
        setCounter(prev => prev + 1)
    }


    const handleRemove = () => {
        if(counter > 1){
           setCounter(prev => prev - 1) 
        }
        
    }

    const numberOfSpecializations = [];

    for (let i = 1; i <= counter; i++) {
        numberOfSpecializations.push(<input key={i} type="text" name='requiredSpecializations'  id="requiredSpecializations" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5" placeholder={`التخصص ${i}`} required />)
        
    }
                        
  return (
    <div className="flex justify-center items-center min-h-scree ">  
        <form  className="w-full max-w-lg p-8 space-y-6 rounded-lg shadow-lg bg-gray-100 dark:bg-gray-900">
            

                <div className="mb-6">
                    <label htmlFor="TrainingName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">اسم البرنامج</label>
                    <input type="text" name='TrainingName' id="TrainingName"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="كتابة اسم البرنامج" required />
                </div>



                <div>
                    <label htmlFor="TrainingPeriod" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">فترة التدريب</label>
                    <input type="number" name='TrainingPeriod'   id="TrainingPeriod" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="المدة بالأسابيع" required />
                </div>

                <div>
                    <label htmlFor="requiredSpecializations" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">التخصصات المطلوبة</label>
                    {/* <input type="text" name='requiredSpecializations'  id="requiredSpecializations" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="التخصصات المطلوبة" required /> */}
                    {numberOfSpecializations}
                    <button onClick={handleAdd} type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2zm-1 11a10 10 0 1 1 0-20a10 10 0 0 1 0 20m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16"/></svg>
                        </button>

                    <button onClick={handleRemove} type="button" className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"/></svg>
                    </button>

                </div>

                <div>
                    <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">المنطقة</label>
                        <input type="text" name='city'  id="city" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="التخصصات المطلوبة" required />
                </div>


                <div>
                    <label htmlFor="DescriptionOfTraining" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">وصف التدريب</label>
                    <textarea id="DescriptionOfTraining" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="الرجاء كتابة وصف للتدريب ..." required></textarea>
                </div>

                <div>
                    <label htmlFor="outComes" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">المخرجات المتوقعة</label>
                    <textarea id="outComes" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="الرجاء كتابة المخرجات لهذا البرنامج ..." required></textarea>
                </div>


                <div>
                    <label htmlFor="numberOfWeeks" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">عدد الاسابيع</label>
                        <input type="number" name='numberOfWeeks'  id="numberOfWeeks" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="عدد الاسابيع" required />
                </div>


                <div>
                    <label htmlFor="numberOfSeats" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">عدد المقاعد</label>
                        <input type="number" name='numberOfSeats'  id="numberOfSeats" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="عدد المقاعد" required />
                </div>

                
                
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">صورة للتدريب</label>
                        <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" required/>
                </div>
                
            <div className="flex justify-center w-full">
                    <button type="submit" className="text-white bg-Green hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">إرسال</button>
                </div>

        </form>
    </div>
  )
}
