import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TrainingView from "../TrainingComp/TrainingView.jsx"

function HomeTrainings() {
    const [trainingData, setTrainingData] = useState(null);
    const trainingId = '65f4ae10bac6e2b896feb3c1'; // Single ID

    useEffect(() => {
        const fetchTrainingData = async () => {
            try {
                const response = await axios.get(`http://localhost:5173/HomeTrainings/${trainingId}`);
                setTrainingData(response.data);
                console.log('Fetched training data:', response.data);
            } catch (error) {
                console.error('Error fetching training data:', error);
            }
        };

        fetchTrainingData();
    }, [trainingId]); // Refetch when id changes

    if (!trainingData) {
        return <div><h1>Loading...</h1></div>;
    }

    return (
        <div className="contenier">
            <h2>التدريبات الحالية</h2>
            <div id="Trainsamples">
                <TrainingView
                    key={trainingData._id}
                    trainingId={trainingData._id}
                    trainingName={trainingData.trainingName}
                    description={trainingData.description}
                    entityName={trainingData.entityName}
                    imageOne={trainingData.imageOne}
                />
            </div>
        </div>
    );
}

export default HomeTrainings;
