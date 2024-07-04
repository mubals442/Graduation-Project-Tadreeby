import React, { useState, useEffect, useRef } from 'react';
import TableOfAcceptedStudents from '../TablesOfNames/TableOfAcceptedStudents';

function TableOfAcceptedStudentsPage() {
  const [acceptedStudents, setAcceptedStudents] = useState([
    {
      personalImage: "https://via.placeholder.com/50",
      firstName: "مصعب",
      lastName: "السيد",
      specialization: "علوم حاسب",
      Gpa: "4.0",
      maxGpa: "4",
      TrainingOfRequired: "تطوير المواقع",
      university: "جامعة أم القرى",
      isAcceptable: null
    },
    {
      personalImage: "https://via.placeholder.com/50",
      firstName: "محمد",
      lastName: "الغامدي",
      specialization: "علوم حاسب",
      Gpa: "3.5",
      maxGpa: "5",
      TrainingOfRequired: "تطوير المواقع",
      university: "جامعة الملك عبد العزيز",
      isAcceptable: null
    },
    {
      personalImage: "https://via.placeholder.com/50",
      firstName: "يوسف",
      lastName: "اندرقيري",
      specialization: "علوم حاسب",
      Gpa: "3.6",
      maxGpa: "4",
      TrainingOfRequired: "تعلم الألة",
      university: "جامعة أم القرى",
      isAcceptable: null
    },
    {
      personalImage: "https://via.placeholder.com/50",
      firstName: "خالد",
      lastName: "الدوسري",
      specialization: "علوم حاسب",
      Gpa: "4.8",
      maxGpa: "5",
      TrainingOfRequired: "تعلم ",
      university: "جامعة الملك سعود",
      isAcceptable: null
    }
  ]);

  const [filter, setFilter] = useState(''); // New state for filter

  useEffect(() => {
    document.title = "تدريبي / الحضور والغياب";
  }, []);

  const sortTrain = useRef();

  const handleSortChange = () => {
    const training = sortTrain.current.value;
    setFilter(training); // Update filter when sort changes
    const sortedStudents = [...acceptedStudents].sort((a, b) => {
      if (a.TrainingOfRequired === training && b.TrainingOfRequired !== training) return 1;

      if (a.TrainingOfRequired !== training && b.TrainingOfRequired === training) return 1;

        return a.Gpa - b.Gpa;
    });
    setAcceptedStudents(sortedStudents);
  };

  const uniqueTrainings = Array.from(new Set(acceptedStudents.map(student => student.TrainingOfRequired)));

  return (
    <div>
      <h1 className="text-5xl font-extrabold dark:text-white text-center mb-10">إدارة الطلبة</h1>
        <p className="text-lg text-gray-900 dark:text-white text-center text-green-600 mb-10">(يتم نقل جميع الطلبة المقبولين في هذه القائمة)</p>

          <form className="max-w-sm mx-auto">
            <label htmlFor="sort" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">الفرز:</label>
            <select ref={sortTrain} onChange={handleSortChange} className="mb-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="">اختر الترتيب</option>
              {uniqueTrainings.map((training, index) => (
                <option key={index} value={training}>{training}</option>
              ))}
            </select>
          </form>

      <TableOfAcceptedStudents nameAcceptedStudent={acceptedStudents} filter={filter} />

      <div className="flex justify-center mt-10">
        <button type="button" className="text-white bg-green-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mb-2">
          إرسال
        </button>
      </div>

    </div>
  );
}

export default TableOfAcceptedStudentsPage



