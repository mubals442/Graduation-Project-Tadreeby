import React, { useState } from 'react'

function TableOfAcceptedStudents(props) {

    const [ acceptedStudentData , setAcceptedStudentData ] = useState([...props.nameAcceptedStudent]);

    const { nameAcceptedStudent, filter } = props;

    const filteredData = nameAcceptedStudent.filter(student => student.TrainingOfRequired === filter || filter === '');




    return (

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
   
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">


                <thead className="text-xs text-gray-700 uppercase bg-Green dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-center">
                            الأسم
                        </th>

                        <th scope="col" className="px-6 py-3 text-center">
                            التخصص
                        </th>

                        <th scope="col" className="px-6 py-3 text-center">
                            الجامعات
                        </th>

                        <th scope="col" className="px-6 py-3 text-center">
                            التدريب
                        </th>

                        <th scope="col" className="px-6 py-3 text-center">
                            المعدل التراكمي
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            الحضور و الغياب  
                        </th>
                    </tr>
                </thead>


                <tbody>
                {filteredData.map((A, index) => (
                    <tr key={index} className="bg-gray-100 dark:bg-gray-900 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                        <th scope="row" className="flex items-center justify-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                            <img className="w-10 h-10 rounded-full" src={A.personalImage} alt="Jese image"/>
                                <div className="ps-3">
                                    <div className="text-base font-semibold">{A.firstName} {A.lastName}</div>
                                </div>  
                        </th>



                        <td className="px-6 py-4 text-center">{A.specialization}</td>


                        <td className="px-6 py-4 text-center">{A.university}</td>


                        <td className="px-6 py-4">
                            <div className="flex items-center justify-center">
                                {A.TrainingOfRequired}
                            </div>
                        </td>


                        <td className="px-6 py-4">
                            <div className="flex items-center justify-center">
                                {A.Gpa} / {A.maxGpa}
                            </div>
                        </td>



                        <td className="px-6 py-4 flex items-center justify-center">

                            <div className="flex items-center me-4">
                                    <input id={`inline-radio ${index}`} type="radio" value="present" name={`inline-radio-group ${index}`} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label htmlFor={`inline-radio ${index}`} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">حاضر</label>
                            </div>
                            <div className="flex items-center me-4">
                                <input id={`inline-2-radio ${index}`} type="radio" value="absent" name={`inline-radio-group ${index}`} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor={`inline-2-radio ${index}`} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">غائب</label>
                            </div>

                        </td> 


                    </tr>
                ))}

                </tbody>

            </table>
    </div>
    
  )
}

export default TableOfAcceptedStudents;




