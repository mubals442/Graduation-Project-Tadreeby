import React, { useEffect, useState } from 'react';
import ProgramsOffered from '../MainTrainingEntityComp/ProgramsOffered';
import TitleMessage from '../MainTrainingEntityComp/TitleMessage';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function MainTrainingEntityPage() {
  const [programsInfo, setProgramsInfo] = useState([
    {
      trainingNameEntity: "تطوير المواقع",
      imageOneEntity: 'src/assets/ImagePrototype2.png',
      durationEntity: 4,
      numberOfSeatsEntity: 100
    },
    {
      trainingNameEntity: "ui/ux",
      imageOneEntity: 'src/assets/ImagePrototype2.png',
      durationEntity: 6,
      numberOfSeatsEntity: 66
    },
  ]);

  const [isEmpty, setIsEmpty] = useState(programsInfo.length === 0);

  useEffect(() => {
    setIsEmpty(programsInfo.length === 0);
  }, [programsInfo]);

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);


  useEffect(()=>{
    document.title = "تدريبي / الصفحة الرئيسية"
},[]) 

  return (
    <div>
      <div className='text-center mt-10'>
        <TitleMessage />
      </div>
      <div className='text-center mt-20'>
        <h2 className="text-4xl font-bold dark:text-white">البرامج المقدمة</h2>
      </div>
      {isEmpty ?  <h3 class="text-3xl font-bold dark:text-white text-center mt-10 text-red-600">لايوجد تدريبات مقدمة حاليا</h3>:
      <div className="flex flex-wrap justify-center gap-10 mt-10">
        {programsInfo.map((program, index) => (
          <div 
            data-aos="fade-down"
            data-aos-duration="900"
            data-aos-delay={`${index * 200}`} // Incrementing delay by 200ms for each card
            key={index}
          >
            <ProgramsOffered
              trainingNameEntity  = {program.trainingNameEntity}
              descriptionEntity   = {program.descriptionEntity}
              imageOneEntity      = {program.imageOneEntity}
              durationEntity      = {program.durationEntity}
              numberOfSeatsEntity = {program.numberOfSeatsEntity}
            />
          </div>
        ))}
      </div>}
    </div>
  );
}

