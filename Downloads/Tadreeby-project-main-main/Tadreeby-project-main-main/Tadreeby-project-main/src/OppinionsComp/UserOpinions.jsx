import React from 'react';
import Rating from '@mui/material/Rating';

function UserOpinions({ ig, userName, opinion, rating }) {
    return (
        <div className="p-6 bg-gray-100 dark:bg-gray-900 mb-12 mr-10 shadow-xl rounded-lg w-[800px] max-w-full">  {/* Increased padding and width explicitly set to 800px */}
            <div className="flex items-center">
                <img src={ig} alt="User opinion" className="rounded-full w-24 h-24 ml-2"/>  {/* Increased image size */}
                <div className="flex flex-col pl-12">  {/* Increased left padding for text alignment */}
                    <p className="font-bold text-2xl mb-2">{userName}</p>  {/* Increased font size */}

                    <Rating
                        name="read-only"
                        value={rating}
                        readOnly
                        precision={0.5}
                        sx={{ direction: 'ltr'}}  
                    />
                </div>
            </div>
            {/* <p className="text-lg text-justify ml-12">{opinion}</p>  Increased margin for text alignment and font size */}
            <p className="text-xl text-gray-900 dark:text-white">{opinion}</p>

        </div>
    );
}



export default UserOpinions;


