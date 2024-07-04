import HomeDescribe from "../Home/HomeDescribe"
// import HomeTrainings from "../Home/HomeTrainings.jsx"
import HomeUserOpinions from "../Home/HomeUserOpinions.jsx"
import TrainingView from "../TrainingComp/TrainingView.jsx"
import { useState } from "react"
import HomeSponsors from "../Home/HomeSponsors.jsx"


function HomeLoggedInPage() {
    const [trainings, setTrainings] = useState([
        {   
            trainingName: "UI/UX تصميم واجهة المستخدم",
            description: "أتقن فن إنشاء واجهات مستخدم بديهية (UI) وتعزيز تجارب المستخدم (UX). تعلم مبادئ التصميم والإطارات الشبكية والنماذج الأولية وتقنيات اختبار قابلية الاستخدام.",
            entityName: "STC",
            imageOne: 'src/assets/img1-figma.png',
            avgStars: 5,
            duration: 4,
            numberOfSeats: 33
        },
        {
            trainingName: "تعلم الألة",
            description: "Description of another training.",
            entityName: "Another Entity",
            imageOne: 'src/assets/HomePic.png',
            avgStars: 4.8,
            duration: 5,
            numberOfSeats: 20
        },
        {
            trainingName: "تطوير المواقع",
            description: "ابدأ رحلتك المهنية وتعلم أساسيات بناء وتطوير المواقع باستخدام HTML, CSS, JavaScript, React",
            entityName: "الراجحي",
            imageOne: 'src/assets/ImagePrototype2.png',
            avgStars: 2.9,
            duration: 6,
            numberOfSeats: 50
        }
    ]);

    const mostStarTraining     = trainings.filter((element) => element.avgStars >= 4.8 );
    const mostStarTrainingCopy = mostStarTraining.sort((a,b)=> b.avgStars - a.avgStars).slice(0,2);
    
    return (
        <main>
            <HomeImage />
            <br />
            <HomeDescribe/>
            <br />
                <HomeSponsors/>
            <br />
            {/* <HomeTrainings /> */}
            <h1 style={{textAlign:"center"}}>:⭐ التدريبات الأعلى تقيما</h1>
            {mostStarTrainingCopy.map((training, index) =>(
                <TrainingView 
                    key           ={index}
                    trainingName  ={training.trainingName}
                    description   ={training.description}
                    entityName    ={training.entityName}
                    imageOne      ={training.imageOne}
                    avgStars      ={training.avgStars}
                    duration      ={training.duration}
                    numberOfSeats ={training.numberOfSeats}
                />))
            }
            <br />
            <HomeUserOpinions />
        </main>
    )
}

export default HomeLoggedInPage;
