import React, { useEffect, useState } from 'react';
import MyCurrentTrainingCard from '../MyTrainingComp/MyCurrentTrainingCard';
import TextArea from '../Components/TextArea';
import TableOfTrainings from '../MyTrainingComp/TableOfTrainings';

import Aos from 'aos'
import 'aos/dist/aos.css'

function MyTrainingPage() {


  useEffect(()=>{
    document.title = "تدريبي"
  },[]) 


  useEffect(()=>{
    Aos.init({
       duration: 1000, 
    });
},[])


// *****************************************************************************************************************
// if he dont accept trainig yet
// *****************************************************************************************************************

    // const [tableData , setTableData ] = useState([{
    //   trainingImage:"https://via.placeholder.com/50",
    //   NameOfTraining: "UI/UX تصميم واجهة المستخدم",
    //   entityOfTraining: "Stc",
    //   city:"مكة المكرمة",
    //   btnOfStute:false,
    // },{
    //   trainingImage:"https://via.placeholder.com/50",
    //   NameOfTraining: "UI/UX تصميم واجهة المستخدم",
    //   entityOfTraining: "Stc",
    //   city:"مكة المكرمة",
    //   btnOfStute:false,
    // },{
    //   trainingImage:"https://via.placeholder.com/50",
    //   NameOfTraining: "UI/UX تصميم واجهة المستخدم",
    //   entityOfTraining: "Stc",
    //   city:"مكة المكرمة",
    //   btnOfStute:false,
    // },]);

// *****************************************************************************************************************
// if he dont accept trainig yet
// *****************************************************************************************************************






// *****************************************************************************************************************
// if he accept trainig 
// *****************************************************************************************************************


    const [data, setData] = useState([{
      trainingImage: "",
      NameOfTraining: "UI/UX تصميم واجهة المستخدم",
      entityOfTraining: "Stc",
      status: "منتظم",
      wake: 5,
    }]);


  const textAreas = [];
    for (let i = 0; i < data[0].wake; i++) {
      textAreas.push(<TextArea key={i} numberOfReports={i+1} />);
    }


// *****************************************************************************************************************
// if he accept trainig 
// *****************************************************************************************************************

  return (
    <div>

      {/*  ***************************************************************************************************************** */}
      {/*if the user don't accept trainning */}
      {/*  ***************************************************************************************************************** */}

      {/* <TableOfTrainings tableOfData = {tableData}/> */}

      {/*  ***************************************************************************************************************** */}
      {/*if the user don't accept trainning */}
      {/*  ***************************************************************************************************************** */}






      {/*  ***************************************************************************************************************** */}
      {/* if his accpted */}
      {/*  ***************************************************************************************************************** */}

       <h1 className="text-4xl font-extrabold dark:text-white text-center mb-10">{data[0].NameOfTraining}</h1>

          <div className="flex flex-col md:flex-row justify-center items-start md:space-x-4 p-4"  >
            <div className="md:w-1/3" data-aos="fade-left">
              <MyCurrentTrainingCard />
        </div>



        <div className="md:w-2/3 flex flex-col max-w-lg p-4 border border-gray-200 rounded-lg bg-white dark:bg-gray-800 shadow-md"  data-aos="fade-right">
          <h2 className="text-4xl font-bold dark:text-white text-center">التقارير:</h2>
          <br />
          {textAreas}
        </div>
      </div> 

      {/*  ***************************************************************************************************************** */}
      {/* if his accpted */}
      {/*  ***************************************************************************************************************** */}
      
      
    </div>
  );
}

export default MyTrainingPage;


