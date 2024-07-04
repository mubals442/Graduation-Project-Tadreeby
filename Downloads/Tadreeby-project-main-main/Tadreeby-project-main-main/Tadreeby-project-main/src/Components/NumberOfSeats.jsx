import React from 'react'

function NumberOfSeats() {
    const seats = 50;

  return (
    <div className="flex items-center justify-center mt-10 mb-10 mr-10"> {/* Centering container */}
      <div className="block max-w-sm p-6 bg-gray-100 dark:bg-gray-900 border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">عدد المقاعد</h5>
        {/* <p className="font-normal text-gray-700 dark:text-gray-400 text-center font-extrabold	">{seats}</p> */}
        <p className="text-4xl text-gray-900 dark:text-white text-center">{seats}</p>

      </div>
    </div>


  )
}

export default NumberOfSeats
