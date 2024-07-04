import React, { useState,useEffect } from 'react';
import Rating from "@mui/material/Rating"; // Corrected import for Rating
import celeb from '../assets/celeb.jpg';
import Aos from 'aos'
import 'aos/dist/aos.css'

const EntName = 'stc';
const trName = 'تطوير المواقع';
const EntImg = 'https://via.placeholder.com/50'; // Assuming this is the path or URL to the logo image
const backImg = celeb; // Path to the background image

function FeedBackPage() {
    const [textAreaValue, setTextAreaValue] = useState("");
    const [rating, setRating] = useState(2.5); // Assuming initial rating is 2.5

    const handleTextChange = (event) => {
        const textarea = event.target;
        setTextAreaValue(textarea.value);
        textarea.style.height = 'auto'; // Reset the height
        textarea.style.height = `${textarea.scrollHeight}px`; // Set height dynamically based on scroll height
    };

    const handleRatingChange = (event, newValue) => {
        setRating(newValue);
    };

    useEffect(()=>{
        document.title = "تدريبي / التقييم "
    },[]) 

    useEffect(()=>{
        Aos.init({
           duration: 1000, 
        });
    },[])


    return (
        <div className="flex justify-center items-center min-h-screen bg-cover bg-center p-10"
             style={{ backgroundImage: `url(${backImg})` }}> {/* this line could be removed as it only sets the backgorund of the page*/ }
            <div className="w-1/2 text-center bg-gray-100 dark:bg-gray-900 shadow-lg p-8 rounded overflow-auto"  data-aos="fade-down">
                <h1 class="text-5xl font-extrabold dark:text-white text-center mb-10">مبارك على اتمام التدريب</h1>

                <hr className="my-4"/>
                <img src={EntImg} alt={`${EntName} Logo`} className="mx-auto h-24 w-24 object-cover rounded-md my-4" />
                <h3 className="my-4">في {trName}</h3>
                <hr className="my-4"/>
                <h3 className="my-4">كيف كان التدريب؟ وكيف كان المدربون؟ شاركنا رايك</h3>
                <textarea
                    className="w-11/12 mx-auto resize-none rounded-lg p-2 min-h-24 my-4"
                    value={textAreaValue}
                    onChange={handleTextChange}
                    id="opTxtArea"
                    placeholder='يرجى كتابة تقريرك هنا ...'
                ></textarea>

                <Rating
                    name="half-rating"
                    value={rating}
                    onChange={handleRatingChange}
                    precision={0.5}
                    sx={{ direction: 'ltr' }}
                    className="my-4"
                />

                <button className="mt-4 mb-8 px-4 py-2 bg-orange-400 text-white rounded hover:bg-orange-700 transition-colors mx-auto block">
                    ارسال
                </button>
            </div>
        </div>
    );
}

export default FeedBackPage;