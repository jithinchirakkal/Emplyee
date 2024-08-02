import { useState } from "react"
import { router } from '@inertiajs/react';

export default function Eregister(){

    const [ values, setValues ] = useState({
        name: '',
        email: '',
        phone: '',

    })

    function handleSubmit(e){
        e.preventDefault()
        router.post('/Empregister', values)
        console.log(values)
    }

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
      }

    // function handleChange(e){
    //     e.preventDefault()
    //     setValues({...values, [e.target.id]: e.target.value})
    // }


    return(
        <>
        {/* <div className="font-extrabold justify-center">Employee Registration</div> */}
        <div className="h-screen items-center ">
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
                        value={values.name}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="flex gap-5 items-center">
                        <label>Email :</label>
                        <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="rounded-md "
                        value={values.email}
                        onChange={handleChange}/>
                    </div>
                    <div className="flex gap-4 items-center">
                        <label>Phone :</label>
                        <input
                        id="phone"
                        type="text"
                        placeholder="Enter your phone number"
                        className="rounded-md"
                        value={values.phone}
                        onChange={handleChange}
                        // onChange={e => setValues({...values, phone: e.target.value})}
                        />
                    </div>
                    <div className="justify-center w-full">
                        <button className="bg-green-500 rounded-md px-5 py-3 w-full " type="submit">Register</button>
                    </div>
                </div>
            </form>
        </div>
        
        
        </>
    )
}