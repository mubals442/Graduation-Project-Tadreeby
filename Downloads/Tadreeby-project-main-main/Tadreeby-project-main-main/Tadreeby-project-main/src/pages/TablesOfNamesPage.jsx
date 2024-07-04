import React, { createContext, useState ,useEffect } from 'react'
import TableOfStudent from '../TablesOfNames/TableOfStudent'
import NumberOfSeats from '../Components/NumberOfSeats';

export const  TableOfContext= createContext();

function TablesOfNamesPage() {

    const[students , setStudents] = useState(
        [{
            personalImage:"https://via.placeholder.com/50",
            firstName :"مصعب ",
            lastName  :"السيد",
            specialization:"علوم حاسب",
            status:"متقدم",
            Gpa       :"4.0",
            maxGpa    :"4",
            TrainingOfRequired:"تعلم الألة",
            university:"جامعة أم القرى",
            isAcceptable:null,
            answer:null
        },{
            personalImage:"https://via.placeholder.com/50",
            firstName:"محمد ",
            lastName :"الغامدي",
            specialization:"علوم حاسب",
            status:"متقدم",
            Gpa      :"3.5",
            maxGpa    :"5",
            TrainingOfRequired:"تعلم الألة",
            university:"جامعة الملك عبد العزيز",
            isAcceptable:null,
            answer:null
        },{
            personalImage:"https://via.placeholder.com/50",
            firstName:"يوسف ",
            lastName :"اندرقيري",
            specialization:"علوم حاسب",
            status:"متقدم",
            Gpa      :"3.6",
            maxGpa    :"4",
            TrainingOfRequired:"تعلم الألة",
            university:"جامعة أم القرى",
            isAcceptable:null,
            answer:null
        },{
            personalImage:"https://via.placeholder.com/50",
            firstName:"خالد",
            lastName :"الدوسري",
            specialization:"علوم حاسب",
            status:"متقدم",
            Gpa      :"4.8",
            maxGpa    :"5",
            TrainingOfRequired:"تعلم الألة",
            university:"جامعة الملك سعود",
            isAcceptable:null,
            answer:null
        },{
            personalImage:"https://via.placeholder.com/50",
            firstName:"خالد",
            lastName :"الدوسري",
            specialization:"علوم حاسب",
            status:"متقدم",
            Gpa      :"4.8",
            maxGpa    :"5",
            TrainingOfRequired:"تعلم الألة",
            university:"جامعة الملك سعود",
            isAcceptable:null,
            answer:null
        },{
            personalImage:"https://via.placeholder.com/50",
            firstName :"مصعب ",
            lastName  :"السيد",
            specialization:"علوم حاسب",
            status:"متقدم",
            Gpa       :"4.0",
            maxGpa    :"4",
            TrainingOfRequired:"تعلم الألة",
            university:"جامعة أم القرى",
            isAcceptable:null,
            answer:null
        },{
            personalImage:"https://via.placeholder.com/50",
            firstName:"محمد ",
            lastName :"الغامدي",
            specialization:"علوم حاسب",
            status:"متقدم",
            Gpa      :"3.5",
            maxGpa    :"5",
            TrainingOfRequired:"تعلم الألة",
            university:"جامعة الملك عبد العزيز",
            isAcceptable:null,
            answer:null
        },{
            personalImage:"https://via.placeholder.com/50",
            firstName:"يوسف ",
            lastName :"اندرقيري",
            specialization:"علوم حاسب",
            status:"متقدم",
            Gpa      :"3.6",
            maxGpa    :"4",
            TrainingOfRequired:"تعلم الألة",
            university:"جامعة أم القرى",
            isAcceptable:null,
            answer:null
        },{
            personalImage:"https://via.placeholder.com/50",
            firstName:"خالد",
            lastName :"الدوسري",
            specialization:"علوم حاسب",
            status:"متقدم",
            Gpa      :"4.8",
            maxGpa    :"5",
            TrainingOfRequired:"تعلم الألة",
            university:"جامعة الملك سعود",
            isAcceptable:null,
            answer:null
        },{
            personalImage:"https://via.placeholder.com/50",
            firstName:"خالد",
            lastName :"الدوسري",
            specialization:"علوم حاسب",
            status:"متقدم",
            Gpa      :"4.8",
            maxGpa    :"5",
            TrainingOfRequired:"تعلم الألة",
            university:"جامعة الملك سعود",
            isAcceptable:null,
            answer:null
        },
        
    ]);

    useEffect(() => {
        document.title = " تدريبي / قائمة الطلاب المتقدمين";
      }, []);



  return (
    <div>
        <div>
            <h1 className="text-5xl font-extrabold dark:text-white text-center">قائمة الطلاب المتقدمين </h1>
                <p className="text-lg text-gray-900 dark:text-white text-center text-red-600">(هذه القائمة مرتبة بوسطة اعلى معدل تراكمي)</p>
            <NumberOfSeats/>
        </div>
        


            {/* ///////////////////////////////////////////////////////////////////////////////////////////////////*/}
                
                    <TableOfStudent namesOfStudent = {students} />
    </div>
  )
}

export default TablesOfNamesPage;





