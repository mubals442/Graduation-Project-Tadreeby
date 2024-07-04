import React, { useState, useEffect } from 'react';
import TrainingOpen from "../TrainingComp/TrainingOpen";
import ConfirmMessage from "../TrainingComp/ConfirmMessage"; 
import Aos from 'aos'
import 'aos/dist/aos.css'

function TrainingOpenPage() {
    const specialties = ["علوم الحاسب", "هندسة برمجيات" , "ذكاء إصطناعي"];

    useEffect(() => {
        document.title = "تدريبي/تدريبات/معلومات التدريب";
    }, []);

    const [display, setDisplay] = useState(false);

    const toggleDisplay = () => { 
        setDisplay(!display);
    };


    useEffect(()=>{
        Aos.init({
           duration: 1000, 
        });
    },[])

    return (
        <div  data-aos="fade-down">
            <h1 className="text-5xl font-extrabold dark:text-white text-center">معلومات التدريب</h1>
            <TrainingOpen
                trainingName="تطوير المواقع"
                RequiredSpecializations={specialties}
                entityName="الراجحي"
                period="4"
                description="يتم تدريب الطالب في أول اسبوع عن أساسيات HTML. وفي ثاني أسبوع يتم تدريب الطالب على التصميم باستخدام Figma و CSS. أما في ثالث أسبوع فيتم تدريب الطالب على JavaScript و React. و في أخر سبوع سيتعامل مع السيرفرات"
                city = "مكة المكرمة"
                outComes ="مخرجات"
                imageOne="src/assets/ImagePrototype2.png"
                handleNotfy = {toggleDisplay}
                numberOfSeats = {50}
            />

            {console.log(display)}

            
            {display && (
                <div className="absolute z-50" id='conf'> 
                    <ConfirmMessage handleNotfy = {toggleDisplay} />
                </div>
            )}
        </div>
    );
}

export default TrainingOpenPage;





