import React, { useState } from 'react';

function BasicData() {

    // const [ data,useData ] = useState([{
    //                                     lable:"",
    //                                     type:"",
    //                                     for:"",
    //                                     value:"",
    //                                    },{
    //                                     lable:"",
    //                                     type:"",
    //                                     for:"",
    //                                     value:"",
    //                                    },{
    //                                     lable:"",
    //                                     type:"",
    //                                     for:"",
    //                                     value:"",
    //                                    },{
    //                                     lable:"",
    //                                     type:"",
    //                                     for:"",
    //                                     value:"",
    //                                    },{
    //                                     lable:"",
    //                                     type:"",
    //                                     for:"",
    //                                     value:"",
    //                                    },{
    //                                     lable:"",
    //                                     type:"",
    //                                     for:"",
    //                                     value:"",
    //                                    },{
    //                                     lable:"",
    //                                     type:"",
    //                                     for:"",
    //                                     value:"",
    //                                    },
    //                             ])

    const firstName       = "مصعب";
    const lastName        = "السيد";
    const university      = "جامعة ام القرى";
    const ID              = "11111111111";
    const Birth           = "05/05/2002";
    const Specialization  ="علوم حاسب";
    const gap             = "4.0";

    return (
        <form className="max-w-full mx-auto flex flex-wrap justify-between items-center">
            <div className="flex-1 min-w-[calc(50%-0.5rem)] mb-6">
                <label htmlFor="firstName" className="text-sm font-medium text-gray-900 dark:text-white">
                    :الإسم الأول
                </label>
                <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    disabled
                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>

            <div className="flex-1 min-w-[calc(50%-0.5rem)] mb-6">
                <label htmlFor="lastName" className="text-sm font-medium text-gray-900 dark:text-white">
                    إسم العائلة:
                </label>
                <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    disabled
                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-2"
                />
            </div>

            <div className="flex-1 min-w-[calc(50%-0.5rem)] mb-6">
                <label htmlFor="university" className="text-sm font-medium text-gray-900 dark:text-white">
                    الجامعة:
                </label>
                <input
                    type="text"
                    id="university"
                    value={university}
                    disabled
                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   />
            </div>

            <div className="flex-1 min-w-[calc(50%-0.5rem)] mb-6">
                <label htmlFor="Specialization" className="text-sm font-medium text-gray-900 dark:text-white">
                  التخصص: 
                </label>
                <input
                    type="text"
                    id="Specialization"
                    value={Specialization}
                    disabled
                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50  mr-2" 
               />
            </div>

            <div className="flex-1 min-w-[calc(50%-0.5rem)] mb-6">
                <label htmlFor="ID" className="text-sm font-medium text-gray-900 dark:text-white">
                    رقم الهوية:
                </label>
                <input
                    type="text"
                    id="ID"
                    value={ID}
                    disabled
                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " 
               />
            </div>

            <div className="flex-1 min-w-[calc(50%-0.5rem)] mb-6">
                <label htmlFor="Birth" className="text-sm font-medium text-gray-900 dark:text-white">
                    يوم الميلاد:
                </label>
                <input
                    type="text"
                    id="Birth"
                    value={Birth}
                    disabled
                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  mr-2"
                />
            </div>

            <div className="flex-1 min-w-[calc(50%-0.5rem)] mb-6">
                <label htmlFor="gap" className="text-sm font-medium text-gray-900 dark:text-white">
                    المعدل:
                </label>
                <input
                    type="text"
                    id="gap"
                    value={gap}
                    disabled
                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
        </form>
    );
}

export default BasicData;
