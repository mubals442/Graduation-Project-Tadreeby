import React, { createContext, useEffect, useState } from 'react'
import StudentsToUniTable from '../TablesOfNames/StudentsToUniTable'

export const  TableOfContext= createContext();

function TableToUniPage() {

    const[students , setStudents] = useState(
        [{
            personalImage:"https://via.placeholder.com/50",
            firstName :"مصعب ",
            lastName  :"السيد",
            entity : "stc",
            TrainingName:"تطوير المواقع والبرمجيات",
            absences : 5,
            stuDoc : '',
            entDOc : ''
        },{
            personalImage:"https://via.placeholder.com/50",
            firstName :"مصعب ",
            lastName  :"السيد",
            entity : "stc",
            TrainingName:"تطوير المواقع والبرمجيات",
            absences : 0,
            stuDoc : '',
            entDOc : ''
        },{
            personalImage:"https://via.placeholder.com/50",
            firstName :"مصعب ",
            lastName  :"السيد",
            entity : "stc",
            TrainingName:"تطوير المواقع والبرمجيات",
            absences : 12,
            stuDoc : '',
            entDOc : ''
        },{
            personalImage:"https://via.placeholder.com/50",
            firstName :"مصعب ",
            lastName  :"السيد",
            entity : "stc",
            TrainingName:"تطوير المواقع والبرمجيات",
            absences : 35,
            stuDoc : '',
            entDOc : ''
        },{
            personalImage:"https://via.placeholder.com/50",
            firstName :"مصعب ",
            lastName  :"السيد",
            entity : "sadaya",
            TrainingName:"تطوير المواقع والبرمجيات",
            absences : 1,
        },{
            personalImage:"https://via.placeholder.com/50",
            firstName :"مصعب ",
            lastName  :"السيد",
            entity : "elictricity",
            TrainingName:"تطوير المواقع والبرمجيات",
            absences : 5,
        },{
            personalImage:"https://via.placeholder.com/50",
            firstName :"مصعب ",
            lastName  :"السيد",
            entity : "stc",
            TrainingName:"تطوير المواقع والبرمجيات",
            absences : 35,
            stuDoc : '',
            entDOc : ''
        },{
            personalImage:"https://via.placeholder.com/50",
            firstName :"مصعب ",
            lastName  :"السيد",
            entity : "sadaya",
            TrainingName:"تطوير المواقع والبرمجيات",
            absences : 1,
        },{
            personalImage:"https://via.placeholder.com/50",
            firstName :"مصعب ",
            lastName  :"السيد",
            entity : "elictricity",
            TrainingName:"تطوير المواقع والبرمجيات",
            absences : 5,
        },{
            personalImage:"https://via.placeholder.com/50",
            firstName :"مصعب ",
            lastName  :"السيد",
            entity : "stc",
            TrainingName:"تطوير المواقع والبرمجيات",
            absences : 35,
            stuDoc : '',
            entDOc : ''
        },{
            personalImage:"https://via.placeholder.com/50",
            firstName :"مصعب ",
            lastName  :"السيد",
            entity : "sadaya",
            TrainingName:"تطوير المواقع والبرمجيات",
            absences : 1,
        },{
            personalImage:"https://via.placeholder.com/50",
            firstName :"مصعب ",
            lastName  :"السيد",
            entity : "elictricity",
            TrainingName:"تطوير المواقع والبرمجيات",
            absences : 5,
        },{
            personalImage:"https://via.placeholder.com/50",
            firstName :"مصعب ",
            lastName  :"السيد",
            entity : "stc",
            TrainingName:"تطوير المواقع والبرمجيات",
            absences : 35,
            stuDoc : '',
            entDOc : ''
        },{
            personalImage:"https://via.placeholder.com/50",
            firstName :"مصعب ",
            lastName  :"السيد",
            entity : "sadaya",
            TrainingName:"تطوير المواقع والبرمجيات",
            absences : 1,
        },{
            personalImage:"https://via.placeholder.com/50",
            firstName :"مصعب ",
            lastName  :"السيد",
            entity : "elictricity",
            TrainingName:"تطوير المواقع والبرمجيات",
            absences : 5,
        },
        
    ]);

    useEffect(()=>{
        document.title = "تدريبي / قائمة الطلاب المتدربين"
    },[]) 


    return (
        <div>
            <h1 className="text-5xl font-extrabold dark:text-white text-center mb-10">قائمة الطلاب المتدربين </h1>

            
            <StudentsToUniTable namesOfStudent={students} />
        </div>
    );
}

export default TableToUniPage;