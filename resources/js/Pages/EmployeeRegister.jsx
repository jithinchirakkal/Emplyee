import { useState} from "react"
import { router,useForm } from '@inertiajs/react';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css';


export default function Eregister(){


    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        phone: '',
    });


    function handleSubmit(e){
        e.preventDefault()
        post(route('emp.store'));
    }


    // function handleChange(e) {
    //     const key = e.target.id;
    //     const value = e.target.value
    //     setValues(values => ({
    //         ...values,
    //         [key]: value,
    //     }))
    //   }

    // function handleChange(e){
    //     e.preventDefault()
    //     setValues({...values, [e.target.id]: e.target.value})
    // }


    return(
        <>
        <nav className=" flex justify-between text-white h-16 items-center  bg-gray-700 ">
            <h1 className="pl-4">Registration</h1>
            {/* <div>
                
                <Link 
                className="bg-black text-white rounded-md px-5 py-3  mr-4"
                href="/Empregister" 
                >Register</Link>
            
            
                <Link 
                className="bg-black text-white rounded-md px-5 py-3  mr-4"
                href="/Proassign" 
                >Assign</Link>

                <Link 
                className="bg-black text-white rounded-md px-5 py-3  mr-4"
                href="/Prodetails" 
                >Project</Link>
            
            </div> */}

        </nav>
        {/* <div className="font-extrabold justify-center">Employee Registration</div> */}
        <div className="flex h-screen bg-gradient-to-b from-neutral-950 via-slate-700 to-slate-900 justify-center">
            <div className="mt-10 p-4 h-3/5 w-96 bg-white shadow-md rounded-md">
                <form onSubmit={handleSubmit}>
                    <div className="space-y-4 ">
                        <h1 className="text-2xl font-bold  mb-4 text-center">Registration Form</h1>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="title" className="block text-gray-700">Name:</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Employee name"
                                className="border border-gray-400 p-2 w-full rounded-md"
                                value={data.name}
                                // onChange={handleChange}
                                onChange={(e) => setData('name', e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="Email" className="block text-gray-700">Email :</label>
                            <input
                                id="Email"
                                name="Email"
                                type="email"
                                placeholder="Employee email"
                                className="border border-gray-400 p-2 w-full rounded-md"
                                value={data.email}
                                // onChange={handleChange}
                                onChange={(e) => setData('email', e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="phone" className="mb-2 text-gray-700">Phone Number</label>
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
                        {/* <div>
                            <label htmlFor="employee" className="block text-gray-700">Phone :</label>
                            <input
                                id="phone"
                                name="phone"
                                type="number"
                                placeholder="Enter phone number"
                                value={data.employee_id}
                                // onChange={handleChange}
                                onChange={(e) => setData('phone', e.target.value)}
                                className="border border-gray-400 p-2 w-full rounded-md"
                            />
                        </div> */}
                        <div>
                            <button
                                className=" mt-5 bg-green-500 text-white rounded-md px-5 py-2 w-full hover:bg-green-600"
                                type="submit"
                            >
                                Register
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}