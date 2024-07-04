import React from 'react';

function Button({ Ac, setAcceptTrue, setAcceptFalse , statusText}) {
    if (Ac === true) {
        return (
            <>
                <p className='text-green-600 text-center'>🎉مقبول</p>  
            </>

                )
    } else if (Ac === false) {
        return <p className='text-red-600 text-center'>😓مرفوض</p>;
    } else {
        return (
            <>
                <button  type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={setAcceptTrue}>قبول</button>
                <button  type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={setAcceptFalse}>رفض</button>
            </>
        );
    }
}

export default Button;
