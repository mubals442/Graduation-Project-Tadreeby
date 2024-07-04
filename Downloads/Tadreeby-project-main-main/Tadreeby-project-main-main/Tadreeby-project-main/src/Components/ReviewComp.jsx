import { Button } from "@mui/material";
import StarReview from "./StarReview";
import React, { useState } from 'react';

function ReviewComp(){

    const [textAreaValue, setTextAreaValue] = useState("");

    const handleTextChange = (event) => {
        const textarea = event.target;
        setTextAreaValue(textarea.value);
        textarea.style.height = 'auto'; // Reset the height
        textarea.style.height = textarea.scrollHeight + 'px'; // Set height based on scroll height

    };
    return(
        <>
        <div className="ReviewComp" style={{display:'flex', direction:'row',justifyContent:'space-between'}}>
         <StarReview></StarReview>
        </div>
        <h3>كيف كان التدريب؟ وكيف كان المدربون؟ شاركنا رايك</h3>
        <textarea
                style={{ width: '90%', margin: '20px', resize: 'none', borderRadius:'10px' }}
                value={textAreaValue}
                onChange={handleTextChange}
                className=""
                id="opTxtArea"
            ></textarea>
        <Button style={{color:'white', background:'orange'}}>ارسال التقييم</Button>
        </>
    );
}

export default ReviewComp;