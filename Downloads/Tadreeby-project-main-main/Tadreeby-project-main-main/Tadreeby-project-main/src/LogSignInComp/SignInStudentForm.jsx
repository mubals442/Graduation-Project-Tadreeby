import React, { useReducer } from 'react';

function SignInStudentForm() {

    const initialState = {
               firstName:"",
               lastName:"",
               phoneNumber:"",
               university:"",
               ID:"",
               birthday:"",
               specialization:"",
               gpa:"",
               personalImage:"",
               email:"",
               password:"",
               maxGpa:"",
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

            case 'gpa':
                if(parseFloat(value)  < 0){
                    errors.gpa = "must your gpa 5 or 4"
                }else if(parseFloat(value) > 5){
                    errors.gpa = "must your gpa 5 or 4"
                }else {
                    delete errors.gpa;
                }
                break

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
        <form onSubmit={handleSubmit} className="w-full max-w-lg p-8 space-y-6 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg">

        <h5 className="text-center text-xl font-medium text-gray-900 dark:text-white">حساب طالب</h5>



            {state.errors.phoneNumber && <p className="text-red-600">{state.errors.phoneNumber}</p>}
            {state.errors.email && <p className="text-red-600">{state.errors.email}</p>}
            {state.errors.password && <p className="text-red-600">{state.errors.password}</p>}
            {state.errors.confirmPassword && <p className="text-red-600">{state.errors.confirmPassword}</p>}
            {state.errors.gpa && <p className="text-red-600">{state.errors.gpa}</p>}
            {state.errors.ID && <p className="text-red-600">{state.errors.ID}</p>}

            <div className="grid gap-6 mb-6 md:grid-cols-2">

                <div>
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">الاسم الأول </label>
                    <input type="text" name='firstName' onChange={handleChange} value={state.firstName}  id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="الاسم الأول " required />
                </div>



                <div>
                    <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">اسم العائلة</label>
                    <input type="text" name='lastName' onChange={handleChange} value={state.lastName} id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="اسم العائلة" required />
                </div>


                <div>
                    <label htmlFor="university" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">الجامعة</label>
                    {/* <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required /> */}
                             <select id="university" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required>
                                <option name="university" value={state.university}>إختر الجامعة</option>
                                <option name="university" value={state.university}>جامعة أم القرى</option>
                                <option name="university" value={state.university}>جامعة الملك عبد العزيز</option>
                                <option name="university" value={state.university}>جامعة الملك سعود</option>                                                                                              
                                <option name="university" value={state.university}>جامعة الملك فهد للبترول والمعادن</option>
                                <option name="university" value={state.university}>جامعة الطائف</option>
                             </select>
                </div>  


                <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">رقم الجوال</label>
                    <input type="tel"  name='phoneNumber' onChange={handleChange} value={state.phoneNumber} id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="05XXXXXXXX" required />
                </div>



                <div>
                    <label htmlFor="ID" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">رقم الهوية</label>
                    <input type="text" name='ID' id="ID" onChange={handleChange} value={state.ID} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1XXXXXXXXX" required />
                </div>

                <div>
                    <label htmlFor="birthday" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">بوم الميلاد</label>
                    <input type="date" name='birthday' onChange={handleChange} value={state.birthday} id="birthday" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                </div>

                <div>
                    <label htmlFor="specialization" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">التخصص</label>
                    <input type="text" name='specialization' onChange={handleChange} value={state.specialization} id="specialization" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="التخصص" required />
                </div>
                
                <div>
                    <label htmlFor="gba" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">المعدل</label>
                    <input type="number" name='gpa' id="gba" onChange={handleChange} value={state.gpa} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="المعدل" required />
                </div>

                
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">درجة المعدل:</label>
                    <div className="flex items-center">
                        <input id="default-radio-1" type="radio"  name="maxGpa" onChange={handleChange} value={state.maxGpa} className="cursor-pointer w-4 h-4 text-Gold bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">&nbsp;4</label>
                    </div>

                    <div className="flex items-center">
                        <input id="default-radio-2" type="radio"  name="maxGpa" onChange={handleChange} value={state.maxGpa} className="cursor-pointer w-4 h-4 text-Gold bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="default-radio-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">&nbsp;5</label>
                    </div>
                </div>

                <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                    <li>
                        يجب إدخال المعدل من 4 او 5
                    </li>
                </ul> 


            </div>

                <div> 
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="personalImage">صورة شخصية</label>
                        <input name='personalImage' onChange={handleChange} value={state.personalImage} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="personalImage" type="file" />
                </div>

            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">الإيميل</label>
                <input type="email" name='email' onChange={handleChange} value={state.email} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email@st.edu.uni.sa" required />
            </div> 

            <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                <li>
                    يجب إدخال الإيميل الجامعي
                </li>
            </ul> 


            <div className="mb-6">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">الرقم السري</label>
                <input type="password" name='password' onChange={handleChange} value={state.password} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
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
                <input type="password" name='confirmPassword' onChange={handleChange} value={state.confirmPassword} id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
            </div> 



            <div className="flex justify-center w-full">
                    <button type="submit" className="text-white bg-Gold hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">إرسال</button>
                </div>

        </form>
    </div>
  );
}

export default SignInStudentForm;




















