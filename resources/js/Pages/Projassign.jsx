import { Link,useForm  } from "@inertiajs/react";


export default function ProAssign({Employees}){



    const { data, setData, post, processing, errors } = useForm({
        title: '',
        description: '',
        employee_id: '',
    });


    // function handleSubmit(e) {
    //     e.preventDefault();
    //     console.log(data); // Verify the data before submitting
    //     post('/prodetails',{
    //         onSuccess: () => {
    //             console.log('Request successful!');
    //           },
    //           onError: (errors) => {
    //             console.error('Request failed:', errors);
    //           },
    //     });
    //   }

    function handleSubmit(e){
        e.preventDefault()
        post(route('pro.store'));
    }

    // function handleChange(e){
    //     const {name,value}=e.target;
    //     setData({name,value});
    // };

    return(

        <>
        <nav className=" flex justify-between text-white h-16 items-center  bg-gray-700 ">
            <h1 className="pl-4">ProjectAssign</h1>
            <div>
                
                {/* <Link 
                className="bg-black text-white rounded-md px-5 py-3  mr-4"
                href="/Empregister" 
                >Register</Link> */}

                <Link 
                className="text-slate-900 font-extrabold rounded-md px-5 py-3  mr-4"
                href="/dashboard" 
                >Employees</Link>

                <Link 
                className="text-slate-900 font-extrabold rounded-md px-5 py-3  mr-4"
                href="/Prodetails" 
                >Project</Link>
            
            </div>

        </nav>
        <div className="flex h-screen bg-gradient-to-b from-neutral-950 via-slate-700 to-slate-900 justify-center">
            <div className="mt-10 p-4 h-3/5 bg-white shadow-md rounded-md">
                <form onSubmit={handleSubmit}>
                    <div className="space-y-4 ">
                        <h1 className="text-2xl font-bold mb-4">Project Assignment Form</h1>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="title" className="block text-gray-700">Project Name:</label>
                            <input
                                id="title"
                                name="project_name"
                                type="text"
                                placeholder="Enter project name"
                                className="border border-gray-400 p-2 w-full rounded-md"
                                value={data.title}
                                // onChange={handleChange}
                                onChange={(e) => setData('title', e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="description" className="block text-gray-700">Description:</label>
                            <textarea
                                id="description"
                                name="description"
                                placeholder="Enter project description"
                                className="border border-gray-400 p-2 w-full rounded-md"
                                value={data.description}
                                // onChange={handleChange}
                                onChange={(e) => setData('description', e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="employee" className="block text-gray-700">Employee:</label>
                            <select
                                id="employee"
                                name="employee_id"
                                value={data.employee_id}
                                // onChange={handleChange}
                                onChange={(e) => setData('employee_id', e.target.value)}
                                className="border border-gray-400 p-2 w-full rounded-md"
                            >
                                <option className="" value="">Select an employee</option>
                                {Employees.map(employee => (
                                    <option key={employee.id} value={employee.id}>
                                        {employee.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <button
                                className=" mt-5 bg-green-500 text-white rounded-md px-5 py-2 w-full hover:bg-green-600"
                                type="submit"
                            >
                                Assign Project
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}