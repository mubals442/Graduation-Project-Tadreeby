// import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ProgramsOffered(props) {

  const trainingNameEntity  = props.trainingNameEntity;
  const imageOneEntity      = props.imageOneEntity;
  const durationEntity      = props.durationEntity;
  const numberOfSeatsEntity = props.numberOfSeatsEntity;

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      
            <img className="rounded-t-lg" src={imageOneEntity} alt="" />
        <div className="p-5 text-center">

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{trainingNameEntity}</h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">المدة: {durationEntity}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">عدد المقاعد: {numberOfSeatsEntity}</p>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300 inline-block m-auto">فعال</span>
        </div>
    </div>
  );
}

