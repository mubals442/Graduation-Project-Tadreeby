import HomeDescribe from "../Home/HomeDescribe"
import HomeTitle from "../Home/HomeTitle"
import TrainingView from "../TrainingComp/TrainingView.jsx"
import { useEffect, useState } from "react"
import HomeSponsors from "../Home/HomeSponsors.jsx"
import HomeWelcomMessage from "../Home/HomeWelcomMessage.jsx"

import Aos from 'aos'
import 'aos/dist/aos.css'



function HomePage({user}) {
    const [trainings, setTrainings] = useState([
        {   
            trainingName: "UI/UX تصميم واجهة المستخدم",
            entityName: "STC",
            imageOne: 'src/assets/img1-figma.png',
            avgStars: 5,
            duration: 4,
            numberOfSeats: 33
        },
        {
            trainingName: "تعلم الألة",
            entityName: "Another Entity",
            imageOne: 'src/assets/HomePic.png',
            avgStars: 4.8,
            duration: 5,
            numberOfSeats: 20
        },
        {
            trainingName: "تطوير المواقع",
            entityName: "الراجحي",
            imageOne: 'src/assets/ImagePrototype2.png',
            avgStars: 2.9,
            duration: 6,
            numberOfSeats: 50
        },
        {
            trainingName: "تطوير المواقع",
            entityName: "الراجحي",
            imageOne: 'src/assets/ImagePrototype2.png',
            avgStars: 4.9,
            duration: 6,
            numberOfSeats: 50
        },
        {
            trainingName: "تطوير المواقع",
            entityName: "الراجحي",
            imageOne: 'src/assets/ImagePrototype2.png',
            avgStars: 4.9,
            duration: 6,
            numberOfSeats: 50
        }
    ]);

    const mostStarTraining     = trainings.filter((element) => element.avgStars >= 4.8 );
    const mostStarTrainingCopy = mostStarTraining.sort((a,b)=> b.avgStars - a.avgStars).slice(0,4);
    
    useEffect(()=>{
        Aos.init({
           duration: 1000, 
        });
    },[])

    useEffect(()=>{
        document.title = "تدريبي / الصفحة الرئيسية"
    },[]) 


    return (
        <main>
                {
                    user === "student" ? <HomeWelcomMessage/> : (
                        <div className="d-flex flex-column align-items-center justify-content-center p-5 mt-20" data-aos="fade-right">
                            <HomeTitle />
                        </div>
                    )
                }


                <div className="mt-20 mb-30" data-aos= "fade-left">
                    <HomeDescribe />
                </div>

                <div className="mt-20" data-aos= "fade-right">
                    <HomeSponsors/>
                </div>

                <div data-aos= "fade-right" className="text-center m-20">
                    <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white text-up">التدريبات الأعلى تقيما⭐ </h2>
                </div>


                <div className="flex flex-wrap justify-center gap-10"  >
                    {mostStarTrainingCopy.map((training, index) =>(
                        <div 
                            data-aos="fade-down"
                            data-aos-duration="900"
                            data-aos-delay={`${index * 200}`}  // Incrementing delay by 200ms for each card
                            key={index}
                        >
                            
                            <TrainingView 
                            key           ={index}
                            trainingName  ={training.trainingName}
                            entityName    ={training.entityName}
                            imageOne      ={training.imageOne}
                            avgStars      ={training.avgStars}
                            duration      ={training.duration}
                            numberOfSeats ={training.numberOfSeats}
                        /></div>
                    ))
                        

                    }
                </div>
        </main>
    )
}

export default HomePage;



