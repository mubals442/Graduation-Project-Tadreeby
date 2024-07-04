import React from 'react'

function MyCurrentTrainingCard() {
  return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg" src="src/assets/img1-figma.png" alt="" />
            <div className="p-5 text-center">
                
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">UI/UX تصميم واجهة المستخدم</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">جهة التدريب: STC</p>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300 inline-block m-auto">منتظم</span>
            </div>
        </div>
  )
}

export default MyCurrentTrainingCard