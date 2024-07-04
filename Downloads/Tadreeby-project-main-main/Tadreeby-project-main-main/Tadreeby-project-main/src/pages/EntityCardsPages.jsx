import React, { useEffect, useState } from 'react';
import EntityCards from '../Components/EntityCards';

function StudentsRatingsPage() {
    const [companies, setComp] = useState([
        {
            personalImage: 'https://via.placeholder.com/50',
            entity_name: 'stc',
            trainingName: 'تطوير المواقع',
            rating: 2.5
        },
        {
            personalImage: 'https://via.placeholder.com/50',
            entity_name: 'sadaya',
            trainingName: 'الشبكات العصبية',
            rating: 5
        },
        {
            personalImage: 'https://via.placeholder.com/50',
            entity_name: 'sadaya',
            trainingName: 'الشبكات العصبية',
            rating: 5
        },
        {
            personalImage: 'https://via.placeholder.com/50',
            entity_name: 'sadaya',
            trainingName: 'الشبكات العصبية',
            rating: 5
        },
        {
            personalImage: 'https://via.placeholder.com/50',
            entity_name: 'sadaya',
            trainingName: 'الشبكات العصبية',
            rating: 5
        },
        {
            personalImage: 'https://via.placeholder.com/50',
            entity_name: 'sadaya',
            trainingName: 'الشبكات العصبية',
            rating: 5
        },
        {
            personalImage: 'https://via.placeholder.com/50',
            entity_name: 'sadaya',
            trainingName: 'الشبكات العصبية',
            rating: 5
        },
        {
            personalImage: 'https://via.placeholder.com/50',
            entity_name: 'sadaya',
            trainingName: 'الشبكات العصبية',
            rating: 5
        }
    ]);

    useEffect(()=>{
        document.title = "تدريبي / التقبيمات"
    },[]) 

    return (
        <div>
        <h1 className="text-5xl font-extrabold dark:text-white text-center mb-10">التقييمات</h1>

        <div className="flex flex-wrap justify-center "> {/* Updated line */}
            {companies.map((company, index) => (
                <div key={index} 
                     className="flex items-center space-x-4 p-4 m-2"
                     data-aos="fade-down"
                     data-aos-duration="900"
                     data-aos-delay={index <= 8 ? index * 200 : 100}  // Incrementing delay by 200ms for each card
                     >
                    <EntityCards 
                        ig={company.personalImage} 
                        trainingName={company.trainingName} 
                        entitiyName={company.entity_name} 
                        rating={company.rating}
                        OpPage={'/OpPage'}
                    />
                </div>
            ))}
        </div>
        </div>
    );
}

export default StudentsRatingsPage;