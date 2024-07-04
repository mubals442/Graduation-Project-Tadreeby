import { useEffect, useRef, useState } from "react";
import TrainingView from "../TrainingComp/TrainingView"
import Aos from 'aos'
import 'aos/dist/aos.css'
import SearchBar from "../Components/SearchBar";

function TrainingPage() {
    const [trainings, setTrainings] = useState([
        {   
            trainingName: "UI/UX تصميم واجهة المستخدم",
            entityName: "STC",
            imageOne: 'src/assets/img1-figma.png',
            avgStars: 5,
            city:"مكة المكرمة",
            numberOfReviews:173,
            duration: 4,
            numberOfSeats: 33
        },
        {
            trainingName: "تعلم الألة",
            entityName: "sdaia",
            imageOne: 'src/assets/HomePic.png',
            avgStars: 3.8,
            city:"مكة المكرمة",
            numberOfReviews:123,
            duration: 5,
            numberOfSeats: 120
        },
        {
            trainingName: "تطوير المواقع",
            entityName: "الراجحي",
            imageOne: 'src/assets/ImagePrototype2.png',
            avgStars: 4.5,
            city:"مكة المكرمة",
            numberOfReviews:733,
            duration: 6,
            numberOfSeats: 50
        },
        // {
        //     trainingName: "تطوير المواقع",
        //     entityName: "الراجحي",
        //     imageOne: 'src/assets/ImagePrototype2.png',
        //     avgStars: 4.5,
        //     city:"مكة المكرمة",
        //     numberOfReviews:734,
        //     duration: 6,
        //     numberOfSeats: 50
        // },


    ])

    useEffect(()=>{
        document.title = "تدريبي / التدريبات"
    },[]) 



    const [searchQuery, setSearchQuery] = useState('');
    
    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Implement the search logic here, e.g., fetching data based on searchQuery
        console.log('Searching for:', searchQuery);
    };


    useEffect(()=>{
        Aos.init()
    },[])

    const sortValue = useRef();

    const handleSortChange = () => {
        const value = sortValue.current.value;
        let sortedTrainings = [...trainings];

        if (value === 'seats') {
            sortedTrainings.sort((a, b) => b.numberOfSeats - a.numberOfSeats);
        } else if (value === 'stars') {
            sortedTrainings.sort((a, b) => b.avgStars - a.avgStars);
        } else if (value === 'duration') {
            sortedTrainings.sort((a, b) => b.duration - a.duration);
        }

        setTrainings(sortedTrainings);
    };

    return (
        <main className="p-4">


            <h1 className="text-5xl font-extrabold dark:text-white text-center mb-10">التدريبات</h1>





            <div className="mt-10 mb-10">
                <SearchBar/>
            </div>




                <form className="max-w-sm mx-auto">
                    <label htmlFor="sort" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">الفرز:</label>
                        <select ref={sortValue} onChange={handleSortChange}  id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option >اختر الترتيب</option>
                            <option value="seats">عدد المقاعد</option>
                            <option value="stars">التقييم</option>
                            <option value="duration">المدة</option>
                        </select>
                </form>



            <div className="flex flex-wrap justify-center gap-10 ">
                {trainings.map((training, index) => (
                    <div 
                        data-aos="fade-down"
                        data-aos-duration="900"
                        data-aos-delay={index <= 8 ? index * 200 : 100}  // Incrementing delay by 200ms for each card
                        key={index}
                    >          
                        <TrainingView 
                            key             = {index}
                            trainingName    = {training.trainingName}
                            entityName      = {training.entityName}
                            imageOne        = {training.imageOne}
                            avgStars        = {training.avgStars}
                            city            = {training.city}
                            numberOfReviews = {training.numberOfReviews}
                            duration        = {training.duration}
                            numberOfSeats   = {training.numberOfSeats}
                        />
                    </div>
                ))}
            </div>


            
        </main>
    );
}

export default TrainingPage;


