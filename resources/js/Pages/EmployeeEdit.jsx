import { useForm } from '@inertiajs/react';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css';



export default function EmpEdit({Emplo}){


    const { data, setData, put, processing, errors } = useForm({
        name: Emplo.name,
        email: Emplo.email,
        phone: Emplo.phone,
    });

    console.log(data)

    function handleSubmit(e){
        e.preventDefault()
        // router.put(`/Empregister/${Employee.id}`, values)
        // put(`/Empregister/${Employee.id}`, values)
        put(route('emp.update',Emplo.id));
        // console.log(values)
    }


    return(
        <>
        <nav className=" flex justify-between text-white h-16 items-center  bg-gray-700 ">
            <h1 className="pl-4">Edit Employee Details</h1>
        </nav>
        <div className="flex h-screen bg-gradient-to-b from-neutral-950 via-slate-700 to-slate-900 justify-center">
            <div className="">
                <form className="flex flex-col gap-2 items-center  shadow-2xl shadow-slate-500  rounded-2xl p-5 mt-28" onSubmit={handleSubmit}>
                    <h1 className="font-bold text-center text-white mt-4 mb-5">Registration Form</h1>
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-4 items-center ">
                            <label className='text-white'>Name :</label>
                            <input
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                            className="rounded-md"
                            // value={values.name}
                            value={data.name}
                            // onChange={handleChange}
                            onChange={e => setData('name', e.target.value)}
                            />
                        </div>
                        <div className="flex gap-5 items-center">
                            <label className='text-white'>Email :</label>
                            <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="rounded-md "
                            // value={values.email}
                            value={data.email}
                            // onChange={handleChange}
                            onChange={e => setData('email', e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col">
                                <label htmlFor="phone" className='mb-2 text-white'>Phone :</label>
                                <PhoneInput
                                international
                                defaultCountry="RU"
                                value={data.phone}
                                onChange={(value) => setData('phone', value)}
                                className={`border border-gray-400 p-2 w-full rounded-md`}
                                inputClassName="w-full p-2"
                                aria-label="Phone Number"
                                />
                        </div>
                        {/* <div className="flex gap-4 items-center">
                            <label>Phone :</label>
                            <input
                            id="phone"
                            type="text"
                            placeholder="Enter your phone number"
                            className="rounded-md"
                            // value={values.phone}
                            value={data.phone}
                            // onChange={handleChange}
                            onChange={e => setData('phone', e.target.value)}
                            // onChange={e => setValues({...values, phone: e.target.value})}
                            />
                        </div> */}
                        <div className="justify-center w-full">
                            <button className="bg-blue-500 rounded-md px-5 py-3 w-full " type="submit">Update</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        
        
        </>
    )
}