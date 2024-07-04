import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function SrudentsToUniTable(props) {
    const [students, setStudents] = useState([...props.namesOfStudent]);
    const weeksNum = 7;
    const dayNum = 5 * weeksNum;
    return (
 

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
   
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">


        <thead className="text-xs text-white uppercase bg-Blue dark:text-gray-400">
            <tr>
                

                <th scope="col" className="px-6 py-3 text-center">
                    الأسم
                </th>

                <th scope="col" className="px-6 py-3 text-center">
                اسم الجهة التدريبية
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                التدريب
                </th>

                <th scope="col" className="px-6 py-3 text-center">
                    نسبة الغياب
                </th>

                <th scope="col" className="px-6 py-3 text-center">
                    تقرير الطالب
                </th>
            </tr>
        </thead>


        <tbody>
        {students.map((student, index) => (
            <tr key={index} className="bg-gray-100 dark:bg-gray-900 border-b dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">


                <th scope="row" className="flex items-center justify-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                    <img className="w-10 h-10 rounded-full" src={student.personalImage} alt="Jese image"/>
                    <div className="ps-3">
                        <div className="text-base font-semibold">{student.firstName} {student.lastName}</div>
                    </div>  
                </th>



                


                <td className="px-6 py-4 text-center">{student.entity}</td>


                <td className="px-6 py-4">
                    <div className="flex items-center justify-center">
                        {student.TrainingName}
                    </div>
                </td>

                <td className="px-6 py-4">
                    <div className="flex items-center justify-center">
                        {((student.absences/ dayNum)*100).toFixed(1)} %
                    </div>
                </td>
                
                <td>
                <Link className="flex items-center justify-center font-medium text-blue-500 hover:underline dark:text-cyan-500" to='/MyTrainingPage'> اظهار التقارير</Link>
                </td>
            </tr>
                ))}
        </tbody>

    </table>
</div>


        
    );
}

export default SrudentsToUniTable;
