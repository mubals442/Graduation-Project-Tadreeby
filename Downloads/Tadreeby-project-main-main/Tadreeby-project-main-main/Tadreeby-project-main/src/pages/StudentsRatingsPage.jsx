import React, { useState } from "react";
import UserOpinions from "../OppinionsComp/UserOpinions";
import Rating from '@mui/material/Rating';


function StudentsRatingsPage() {
    const [opinions, setStudents] = useState([
        {
            personalImage: "https://via.placeholder.com/50",
            name: "علي سعيد",
            entity_name: "stc",
            trainingName: "تطوير المواقع",
            opinions: "للأسف لم يكن التدريب جيد حيث المدربين لم يقوموا بواجبهم ولم يتعاونوا",
            rating: 2.5
        },
        {
            personalImage: "https://via.placeholder.com/50",
            name: "خالد عسيري",
            entity_name: "sadaya",
            trainingName: "الشبكات العصبية",
            opinions: "التدريب كان ممتاز حيث يغطي جميع الجوانب التي تم تدريسها في الجامعة وكان المدربين متعاونين بشكل كبير.",
            rating:5
        }
    ]);

    return (
        <div>
            {opinions.map((opinion, index) => (
                <div key={index} className="flex items-center space-x-4 p-4">
                    <img src={opinion.personalImage} alt={opinion.name} className="w-12 h-12 rounded-full" />
                    <div className="flex-1 min-w-0">
                        <div style={{display:'flex', justifyContent:'space-between', width:'20%'}}>
                            <p className="text-sm font-medium text-gray-900 truncate">{opinion.name}</p>
                            <Rating name="read-only" value={opinion.rating} readOnly  precision={0.5} sx={{ direction: 'ltr'}}/>
                        </div>
                        <div style={{display:'flex', justifyContent:'space-between', width:'35%'}}>
                            <p className="text-sm text-gray-500 truncate"> الشركة المدربة: {opinion.entity_name}</p>
                            <p className="text-sm text-gray-500 truncate">اسم التدريب: {opinion.trainingName}</p>
                        </div>
                        <p className="text-sm text-gray-700">{opinion.opinions}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default StudentsRatingsPage;