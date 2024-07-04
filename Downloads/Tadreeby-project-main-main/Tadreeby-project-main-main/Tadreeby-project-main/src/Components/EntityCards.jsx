import React from 'react';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';  // Correct import for Link

function EntityCards({ ig, trainingName, entitiyName, rating, OpPage }) {
    return (
        <div className='bg-gray-100 dark:bg-gray-900'>
            <Link to={OpPage} className="no-underline">
                <div className="flex flex-col items-center p-4 border border-solid border-gray-300 rounded-md shadow transition duration-300 ease-in-out hover:bg-gray-200">
                    <img src={ig} alt="entity" className="rounded-full mx-auto mb-4" />
                    <p>اسم التدريب: {trainingName}</p>
                    <p>اسم الشركة: {entitiyName}</p>
                    <Rating
                        name="read-only"
                        value={rating}
                        readOnly
                        precision={0.5}
                        sx={{ direction: 'ltr', color: 'rgb(59 ,130, 246)' }}
                    />
                    <p className="mt-2">Rating: {rating}</p> {/* Displaying the rating */}
                </div>
            </Link>
        </div>

    );
}

export default EntityCards;
