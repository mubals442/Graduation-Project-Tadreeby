import React, { useReducer } from 'react';

function SignInUniversityForm() {

const initialState = {
    firstName:"",
    lastName:"",
    phoneNumber:"",
    university:"",
    college:"",
    ID:"",
    personalImage:"",
    email:"",
    password:"",
    confirmPassword:"",
    errors:{},
}



const reducer = (state, action) => {
    switch (action.type) {
        case "input":
            return {...state,[action.field] : action.value}
        case "setErrors":
            return { ...state, errors: action.errors };    
        default :
            return state;
    }
}




const [ state , dispatch ] = useReducer(reducer, initialState);


const validateField = (name, value) => {
    const errors = {...state.errors};
    switch (name) {
        case 'phoneNumber':
            if (!/^05\d{8}$/.test(value)) {
                errors.phoneNumber = "يجب أن يكون رقم الهاتف بالتنسيق XXXXXXXX50";
            } else {
                delete errors.phoneNumber;
            }
            break;
        case 'ID':
            if (!/^1\d{9}$/.test(value)) {
                errors.ID = "يجب أن يبدأ رقم الهوية بـ 1 أو لا يكون التنسيق 1XXXXXXXXX";
            } else {
                delete errors.ID;
            }
            break;
        case 'password':
            if (value.length < 8) {
                errors.password = "يجب أن تكون كلمة المرور 8 أحرف على الأقل";
            } else if (!/^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/.test(value)) {
                errors.password = "يجب أن تحتوي كلمة المرور على حرف كبير ورقم وحرف خاص واحد على الأقل، على سبيل المثال: ! @ # ؟";
            } else {
                delete errors.password;
            }
            break;
        case 'confirmPassword':
            if (value !== state.password) {
                errors.confirmPassword = "كلمة المرور غير مطابقة";
            } else {
                delete errors.confirmPassword;
            }
            break;
        default:
            break;
    }
    return errors;
};

const handleChange = (e) => {
    const {name, value} = e.target;
    const newErrors = validateField(name, value);
    dispatch({
        type: 'input',
        field: name,
        value: value
    });
    dispatch({
        type: 'setErrors',
        errors: newErrors
    });
}

const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateField();
    if (Object.keys(errors).length > 0) {
        dispatch({ type: 'setErrors', errors });
        return;
    }
    console.log(state);
}

    
    return (
    <div className="flex justify-center items-center min-h-scree ">  
        <form onSubmit={handleSubmit} className="w-full max-w-lg p-8 space-y-6 bg-gray-100 dark:bg-gray-900  rounded-lg shadow-lg">
            <h5 className="text-center text-xl font-medium text-gray-900 dark:text-white">حساب جامعة</h5>

                {state.errors.ID && <p className="text-red-600">{state.errors.ID}</p>}
                {state.errors.phoneNumber && <p className="text-red-600">{state.errors.phoneNumber}</p>}
                {state.errors.password && <p className="text-red-600">{state.errors.password}</p>}
                {state.errors.confirmPassword && <p className="text-red-600">{state.errors.confirmPassword}</p>}
                
            <div className="grid gap-6 mb-6 md:grid-cols-2">


                <div>
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">الاسم الأول </label>
                    <input type="text" name='firstName' value={state.firstName} onChange={handleChange}  id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="الاسم الأول " required />
                </div>



                <div>
                    <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">اسم العائلة</label>
                    <input type="text" name='lastName' value={state.lastName} onChange={handleChange}  id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="اسم العائلة" required />
                </div>

                <div>
                    <label htmlFor="university" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">الجامعة</label>
                             <select id="university" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required>
                                <option name="university" value={state.university }>إختر الجامعة</option>
                                <option name="university" value={state.university }>جامعة أم القرى</option>
                                <option name="university" value={state.university }>جامعة الملك عبد العزيز</option>
                                <option name="university" value={state.university }>جامعة الملك سعود</option>                                                                                              
                                <option name="university" value={state.university }>جامعة الملك فهد للبترول والمعادن</option>
                                <option name="university" value={state.university }>جامعة الطائف</option>
                             </select>
                </div>  


                <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">رقم الجوال</label>
                        <input type="tel"  name='phoneNumber'  value={state.phoneNumber} onChange={handleChange} id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="05XXXXXXXX" required />
                </div>



                <div>
                    <label htmlFor="ID" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">رقم الهوية</label>
                        <input type="text" name='ID' value={state.ID} onChange={handleChange} id="ID" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1XXXXXXXXX" required />
                </div>


                
                <div>
                    <label htmlFor="college" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">الكلية</label>
                        <input type="text" name='college' value={state.college} onChange={handleChange} id="college" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="الكلية" required />
                </div>

            </div>

                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="personalImaget">صورة شخصية</label>
                        <input name ="personalImage" value={state.personalImage} onChange={handleChange} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="personalImage" type="file"/>
                </div>

            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">الإيميل</label>
                <input type="email" name='email' id="email" value={state.email} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email@st.edu.uni.sa" required />
            </div> 

            <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                <li>
                    يجب إدخال الإيميل الجامعي
                </li>
            </ul> 


            <div className="mb-6">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">الرقم السري</label>
                <input type="password" name='password'value={state.password} onChange={handleChange}  id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
            </div>

            <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                <li>
                    8 أحرف على الأقل 
                </li>
                <li>
                    حرف كبير واحد على الأقل 
                </li>
                <li>
                    تضمين حرف خاص واحد على الأقل، على سبيل المثال، ! @ # ؟  
                </li>
            </ul>   


            <div className="mb-6">
                <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">تأكيد الرقم السري</label>
                <input type="password" name='confirmPassword' value={state.confirmPassword} onChange={handleChange} id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
            </div> 



            <div className="flex justify-center w-full">
                    <button type="submit" className="text-white bg-Blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">إرسال</button>
                </div>

        </form>
    </div>
    
    );
}

export default SignInUniversityForm;







// const handleChange = (e) => {
//     dispatch({
//         type : 'input',
//         field: e.target.name,
//         value: e.target.value
//     })
// }

// const validateForm = () => {
//     const errors = {};

//     const phoneRegex = /^05\d{8}$/;
//     const idRegex = /^1\d{9}$/;
//     const passwordReg = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/;


//     if (!phoneRegex.test(state.phoneNumber)) {
//         errors.phoneNumber = "يجب أن يكون رقم الهاتف بالتنسيق  XXXXXXXX50";
//     }

//     if(!idRegex.test(state.ID)){
//        errors.ID = "يجب أن يبدأ رقم الهوية بـ 1 أو لا يكون التنسيق 1XXXXXXXXX"
//    }
        
//    if (state.password.length < 8) {
//        errors.password = "يجب أن تكون كلمة المرور 8 أحرف على الأقل";
//    } else if (!passwordReg.test(state.password)) {
//        errors.password = "يجب أن تحتوي كلمة المرور على حرف كبير ورقم وحرف خاص واحد على الأقل، على سبيل المثال: ! @ # ؟";
//    }

//    if (state.password !== state.confirmPassword) {
//        errors.confirmPassword = "كلمة المرور غير مطابقة";
//    }

//     return errors;
// };

//    console.log(parseInt(state.ID[0]))

// const handleSubmit = (e) => {
//    e.preventDefault()
//            const errors = validateForm();
//            if (Object.keys(errors).length > 0) {
//                dispatch({ type: 'setErrors', errors });
//                return;
//            }
//    console.log(state)
// }