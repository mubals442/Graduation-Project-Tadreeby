import React, { useState } from 'react'

function TableOfTrainings(props) {


    const [tableOfData, setTableOfData] = useState([...props.tableOfData]);
    


  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg" >

    <h1 class="text-5xl font-extrabold dark:text-white text-center mb-10">تدريباتي</h1>

   
    <table  className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-lg">


        <thead className="text-xs text-gray-700 uppercase bg-Gold dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3 text-center">
                    التدريب
                </th>

                <th scope="col" className="px-6 py-3 text-center">
                    الجهة
                </th>

                <th scope="col" className="px-6 py-3 text-center">
                    المنطقة
                </th>

                <th scope="col" className="px-6 py-3 text-center">
                    الحالة
                </th>
            </tr>
        </thead>


        <tbody>
            {tableOfData.map((element , index ) =>(
            <tr key={index} className="bg-gray-100 dark:bg-gray-900 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="flex items-center justify-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                    <img className="w-10 h-10 rounded-full" src={element.trainingImage}  alt="Jese image"/>
                        <div className="ps-3">
                            <div className="text-base font-semibold">{element.NameOfTraining}</div>
                        </div>  
                </th>



                <td className="px-6 py-4 text-center">{element.entityOfTraining}</td>


                <td className="px-6 py-4 text-center">{element.city}</td>




                <td className="px-6 py-4 flex items-center justify-center">

                    

                    {/* <div className="flex items-center me-4">
                        <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">تراجع</button>
                    </div> */}

                    <div className="flex items-center me-4">
                        <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">تأكيد</button>
                        <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">رفض</button>
                    </div>

                </td> 


            </tr>
        ))}
        </tbody>

    </table>
</div>
  )
}

export default TableOfTrainings