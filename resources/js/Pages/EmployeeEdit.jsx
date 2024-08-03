import { router,useForm } from '@inertiajs/react';


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
        <h1>Edit page</h1>
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
                        <button className="bg-blue-500 rounded-md px-5 py-3 w-full " type="submit">Update</button>
                    </div>
                </div>
            </form>
        </div>
        
        
        </>
    )
}