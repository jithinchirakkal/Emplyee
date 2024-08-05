import { useState} from "react"
import { router,useForm } from '@inertiajs/react';

export default function Eregister(){


    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        phone: '',
    });

    // const [ values, setValues ] = useState({
    //     name: '',
    //     email: '',
    //     phone: '',

    // })

    function handleSubmit(e){
        e.preventDefault()
        post(route('emp.store'));
    }

    // function handleSubmit(e){
    //     e.preventDefault()
    //     router.post('/Empregister', values)
    //     console.log(values)
    // }

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
                        <h1 className="text-2xl font-bold mb-4">Registration Form</h1>
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
                        <div>
                            <label htmlFor="employee" className="block text-gray-700">Phone :</label>
                            <input
                                id="phone"
                                name="phone"
                                placeholder="Enter phone number"
                                value={data.employee_id}
                                // onChange={handleChange}
                                onChange={(e) => setData('phone', e.target.value)}
                                className="border border-gray-400 p-2 w-full rounded-md"
                            />
                        </div>
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
        {/* <div className="h-screen items-center ">
            <form className="flex flex-col gap-2 items-center bg-slate-500 rounded-md pb-5 h-screen" onSubmit={handleSubmit}>
                <h1 className="font-bold text-center mt-10 mb-5">Registration Form</h1>
                <div className="flex flex-col gap-3"> 
                    <div className="flex gap-4 items-center">
                        <label>Name :</label>
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
                        <label>Email :</label>
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
                    <div className="flex gap-4 items-center">
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
                    </div>
                    <div className="justify-center w-full">
                        <button className="bg-green-500 rounded-md px-5 py-3 w-full " type="submit">Register</button>
                    </div>
                </div>
            </form>
        </div> */}
        
        
        </>
    )
}