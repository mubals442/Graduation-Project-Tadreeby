import React, { useEffect, useState } from 'react';
import Button from '../Components/Button';

function TableOfStudent(props) {
    const [students, setStudents] = useState([...props.namesOfStudent]);
    
    useEffect(() => {
        const sortedStudentsByGpa  = [...students].sort((a,b) => b.Gpa - a.Gpa ) ;
        setStudents(sortedStudentsByGpa)
    },[props.namesOfStudent])


    const handleAccept = (index) => {
        setStudents(students =>
            students.map((student, i) => 
                i === index ? { ...student, isAcceptable: true } : student
            )
        );
    };


    const handleReject = (index) => {
        setStudents(students =>
            students.map((student, i) => 
                i === index ? { ...student, isAcceptable: false } : student
            )
        );
    };



    function handleStute(accept) {
        if(accept){
            return "إنتظار الرد الطالب"
        }else if(accept === false){
            return "تم الرفض"
        }else{
            return "متقدم"
        }
    }
    
    function handleStuteColor(accept) {
        if(accept){
            return "orange-300"
        }else if(accept === false){
            return "red-500"
        }else{
            return "blue-600"
        }
    } 





    return (


<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
   
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">


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
                    الحالة
                </th>

                <th scope="col" className="px-6 py-3 text-center">
                    التدريب
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                    المعدل التراكمي
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                    السيرة الذاتيه
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                    القبول و الرفض  
                </th>
            </tr>
        </thead>


        <tbody>
        {students.map((student, index) => (
            <tr key={index} className="border-b bg-gray-100 dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">



                <th scope="row" className="flex items-center justify-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                    <img className="w-10 h-10 rounded-full" src={student.personalImage} alt="Jese image"/>
                    <div className="ps-3">
                        <div className="text-base font-semibold">{student.firstName} {student.lastName}</div>
                    </div>  
                </th>



                <td className="px-6 py-4 text-center">{student.specialization}</td>


                <td className="px-6 py-4 text-center">{student.university}</td>


                <td className="px-6 py-4">
                    <div className="flex items-center justify-center">
                        <div className={`h-2.5 w-2.5 rounded-full bg-${handleStuteColor(student.isAcceptable)} me-2`}></div>
                        {handleStute(student.isAcceptable)}
                    </div>
                </td>




                <td className="px-6 py-4">
                    <div className="flex items-center justify-center">
                        {student.TrainingOfRequired}
                    </div>
                </td>


                <td className="px-6 py-4">
                    <div className="flex items-center justify-center">
                         {student.Gpa} / {student.maxGpa}
                    </div>
                </td>

                <td>
                    <a href='#' className="flex items-center justify-center font-medium text-blue-500 hover:underline dark:text-cyan-500" to='/'> اظهار السيرة الذاتيه</a>
                </td>

                <td className="px-6 py-4 flex items-center justify-center">
                    <Button
                        Ac={student.isAcceptable}
                        statusText = {student.status}
                        setAcceptTrue={()  =>  handleAccept(index)}
                        setAcceptFalse={() =>  handleReject(index)}
                    />
                </td>



            </tr>
                ))}
        </tbody>

    </table>
</div>


        
    );
}

export default TableOfStudent;



