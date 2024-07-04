import React from 'react';

function ConfirmMessage(props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black bg-opacity-50">
      <div className="relative p-6 w-full max-w-4xl"> {/* Increased max-width for a larger modal */}
        <div className="relative bg-gray-200 dark:bg-gray-900 rounded-lg shadow dark:bg-gray-700 min-h-[600px] flex items-center justify-center"> {/* Added minimum height and flex properties to center content */}
          <button onClick={props.handleNotfy} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
            <svg className="w-4 h-4" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="px-12 py-10 text-center"> {/* Increased padding for more internal space */}
            <svg className="mx-auto mb-4 w-16 h-16 text-gray-400 dark:text-gray-200" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mb-5 text-2xl font-normal text-gray-500 dark:text-gray-400">هل انت متأكد</h3>
            <h3 className="mb-5 text-2xl font-normal text-orange-300 dark:text-gray-400">سيتم ارسال معلومات الشخصية المسجلة بعد الأرسال للجهة التدريبة</h3>
            <button onClick={props.handleNotfy} data-modal-hide="popup-modal" type="button" className="mt-20 ml-2 text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-lg px-8 py-4 mr-3">
              متأكد
            </button>
            <button onClick={props.handleNotfy} data-modal-hide="popup-modal" type="button" className="text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-lg px-8 py-4 mr-3">
              لا
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmMessage;






