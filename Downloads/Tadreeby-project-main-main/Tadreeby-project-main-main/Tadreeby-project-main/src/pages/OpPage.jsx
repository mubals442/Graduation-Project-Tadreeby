import React, { useEffect, useState } from 'react'; // Import useState
import UserOpinions from "../OppinionsComp/UserOpinions"; // Check path spelling if it's really "OppinionsComp"
import Aos from 'aos'
import 'aos/dist/aos.css'


function OpPage() {
    const [opinions, setOpinions] = useState([
        {
            personalImage: "https://via.placeholder.com/50",
            name: "علي سعيد",
            opinions: "للأسف لم يكن التدريب جيد حيث المدربين لم يقوموا بواجبهم ولم يتعاونوا",
            rating: 2.5
        },
        {
            personalImage: "https://via.placeholder.com/50",
            name: "خالد عسيري",
            opinions: "التدريب كان ممتاز حيث يغطي جميع الجوانب التي تم تدريسها في الجامعة وكان المدربين متعاونين بشكل كبير.",
            rating: 5
        },
        {
            personalImage: "https://via.placeholder.com/50",
            name: "خالد عسيري",
            opinions: "التدريب كان ممتاز حيث يغطي جميع الجوانب التي تم تدريسها في الجامعة وكان المدربين متعاونين بشكل كبير.",
            rating: 5
        },
        {
            personalImage: "https://via.placeholder.com/50",
            name: "خالد عسيري",
            opinions: "التدريب كان ممتاز حيث يغطي جميع الجوانب التي تم تدريسها في الجامعة وكان المدربين متعاونين بشكل كبير.",
            rating: 5
        }
    ]);

    useEffect(()=>{
        Aos.init({
           duration: 1000, 
        });
    },[])




    return (
        <div className="flex flex-col items-center" data-aos= "fade-right">
            <h1 className="text-5xl font-extrabold dark:text-white text-center mb-20">التقييمات</h1>

            <img src="src/assets/ImagePrototype2.png" alt="image description" className="w-144 h-144"/>
                    <h3 className="text-3xl font-bold dark:text-white mb-20 mt-10">تطوير المواقع</h3>


            {opinions.map((opinion, index) => (
                <div 
                    data-aos="fade-down"
                    data-aos-duration="900"
                    data-aos-delay={index <= 8 ? index * 200 : 100}  // Incrementing delay by 200ms for each card
                    key={index}
                >          
                    <UserOpinions
                        key={index}
                        ig={opinion.personalImage}
                        userName={opinion.name}
                        opinion={opinion.opinions}
                        rating={opinion.rating}
                    />
                </div>
            ))}
        </div>
    );
}

export default OpPage;

