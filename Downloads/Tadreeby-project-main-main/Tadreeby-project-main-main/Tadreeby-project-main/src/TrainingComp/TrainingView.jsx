import { Link } from 'react-router-dom';

function TrainingView(props) {
    return (
        <div className="w-96 bg-white border border-gray-200 rounded-lg shadow m-2 dark:bg-gray-900 dark:border-gray-700 flex flex-col">
            <img className="rounded-t-lg w-full h-56 object-cover" src={props.imageOne} alt="Training Image" />
            <div className="p-5 flex flex-col flex-grow bg-gray-100 dark:bg-gray-900">
                <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.trainingName}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">جهة التدريب: {props.entityName}</p>

                <div className="flex items-center mb-3">
                    <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">{props.avgStars}</p>
                    <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                    <p className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">{props.numberOfReviews} متدرب</p>
                </div>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">المدينة: {props.city}</p>
                <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">المدة: {props.duration} {props.duration === 1 ? "أسبوع" : "أسابيع"}</p>
                <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">عدد المقاعد: {props.numberOfSeats}</p>

                <Link to={'/TrainingOpenPage'} className="text-white text-center bg-Gold hover:bg-yellow-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    سجل الأن
                </Link> 
            </div>
        </div>
    );
}

export default TrainingView;

