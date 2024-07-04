// import { useState } from "react";
// import ConfirmMessage from "./ConfirmMessage";

function TrainingOpen(props) {

    ////////////////////////////////////////// retrive data from the database instead //////////////////////////////////////////

    /*intial values for informtions*/
    const trainingName = props.trainingName;     // Ex. UI/UX OR AI 
    const description = props.description;      // DESCRIBE TRAIN
    const imageOne = props.imageOne;      // GET IMAGE
    const entityName = props.entityName;    // NAME ENTITY LIKE STC OR ARAMCO
    const RequiredSpecializations = props.RequiredSpecializations;        // 
    const period = props.period;         // how many weeks the trinning will be
    const handleNotfy = props.handleNotfy;
    const numberOfSeats = props.numberOfSeats;
    const city          = props.city
    const outComes = props.outComes;

    ////////////////////////////////////////// //////// //////////////////////////////////////////




    return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="max-w-7xl w-full bg-gray-100 border border-gray-200 rounded-lg shadow-lg overflow-hidden dark:bg-gray-900 dark:border-gray-700 mt-10">

                <img className="w-full h-auto rounded-t-lg object-cover object-center" src={imageOne} alt="Training" />

                    <div className="p-5">

                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{trainingName}</h5>



                    <h5 className="text-xl font-bold dark:text-white">الجهة التدريب</h5>

                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{entityName}</p>


                        
                    <h5 className="text-xl font-bold dark:text-white mt-10">وصف التدريب</h5>

                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>


                            <h5 className="text-xl font-bold dark:text-white mt-10">التخصصات المطلوبه</h5>

                            <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                                {RequiredSpecializations.map((element, index) => (
                                    <li key={index}>{element}</li>
                                ))}
                            </ul>

                            <h5 className="text-xl font-bold dark:text-white mt-10">المنطقة</h5>

                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{city}</p>

                                <h5 className="text-xl font-bold dark:text-white mt-10">المخرجات</h5>

                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{outComes}</p>
   

                                    <h5 className="text-xl font-bold dark:text-white mt-10">مدة التدريب</h5>

                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{period} أسابيع </p>

                                            <h5 className="text-xl font-bold dark:text-white mt-10">عدد المقاعد</h5>

                                                <p className="mb-3 font-bold  text-gray-700 dark:text-gray-400">{numberOfSeats} مقعد </p>


                        <a href="#conf" className="flex justify-center">
                            <button onClick={handleNotfy} type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">تقدم الأن</button>
                        </a>
                    </div>

                    
                </div>
            </div>
    )
}

export default TrainingOpen;



















