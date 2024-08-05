import { useForm } from '@inertiajs/react';


export default function ProEdit({project,Employees}){

    const { data, setData, put, processing, errors } = useForm({
        title: project.title,
        description: project.description,
        employee_id: project.employee_id,
    });


    function handleSubmit(e){
        e.preventDefault()
        console.log('Data:', data);
        put(route('pro.update', { id: project.id, ...data }));
        // put(route('pro.update',project.id),data);
        
    }
    // console.log(data);

    return(

        <>
        <div
         className="justify-center text-center text-white font-bold bg-zinc-600  h-14">
            <h1 className="">ProjectAssign</h1>
        </div>
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
                                name="title"
                                type="text"
                                placeholder="Enter project name"
                                className="border border-gray-400 p-2 w-full rounded-md"
                                value={data.title}
                                // onChange={handleChange}
                                onChange={(e) => setData({...data, title: e.target.value})}
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
                                // onChange={(e) => setData('description', e.target.value)}
                                onChange={(e) => setData({...data, description: e.target.value})}
                            />
                        </div>
                        <div>
                            <label htmlFor="employee" className="block text-gray-700">Employee:</label>
                            <select
                                id="employee"
                                name="employee_id"
                                value={data.employee_id}
                                // onChange={handleChange}
                                // onChange={(e) => setData('employee_id', e.target.value)}
                                onChange={(e) => setData({...data, employee_id: e.target.value})}
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
                                Update
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}