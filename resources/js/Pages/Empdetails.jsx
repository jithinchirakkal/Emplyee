import { Link, router, useForm, usePage} from "@inertiajs/react"
import { MdOutlineModeEdit } from "react-icons/md"
import { RiDeleteBinFill } from "react-icons/ri"
import { FaSearch } from 'react-icons/fa'
// import { Inertia } from '@inertiajs/inertia';
import { useState} from 'react'



export default function list(){

    const { Employees,search } = usePage().props;
    const { delete:destroy } = useForm();
    const [searchQuery, setsearchQuery] = useState(search || '');


    const handleSearch = (e) => {
      e.preventDefault();
      router.get('/dashboard', { search: searchQuery });
    };



    function handleDelete(Employee){
        destroy(`/Empregister/${Employee}`);
    }


    return (
        <>
        <nav className=" flex justify-between text-white h-16 items-center  bg-gray-700 ">
            <h1 className="pl-4">Employee Details</h1>
            <div>
                
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
            
            </div>

        </nav>
        <div className="bg-gray-100 p-10 h-screen">
            <div className="container mx-auto">
                <form onSubmit={handleSearch} className="flex justify-end mb-4">
                    <div className="relative">
                        <input 
                            type="text" 
                            value={searchQuery} 
                            onChange={(e) => setsearchQuery(e.target.value)} 
                            placeholder="Search employees" 
                            className="w-full pl-10 text-sm text-gray-700 rounded-lg focus:ring-2 focus:ring-gray-600"
                        />
                        <FaSearch className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" />
                    </div>
                    <button 
                        type="submit" 
                        className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg ml-2"
                    >
                        Search
                    </button>
                </form>
                <table className="min-w-full bg-white border-collapse border border-gray-200">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Empoyee_Id</th>
                            <th className="py-2 px-4 border border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th className="py-2 px-4 border border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                            <th className="py-2 px-4 border border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                            <th className="py-2 px-4 border border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                        </tr>
                    </thead>
                    <tbody className="py-2 px-4 border border-gray-200">
                        {Employees.map(Employee =>(
                            <tr key={Employee.id} className="hover:bg-gray-100 py-2 px-4 border border-gray-200">
                                <td className="border border-gray-200">{Employee.id}</td>
                                <td className="border border-gray-200">{Employee.name}</td>
                                <td className="border border-gray-200">{Employee.email}</td>
                                <td className="border border-gray-200">{Employee.phone}</td>
                                <td className="flex gap-3 m-3">
                                    <a href={`/Empregister/${Employee.id}`}><MdOutlineModeEdit/></a>
                                    <a onClick={() => handleDelete(Employee.id)}><RiDeleteBinFill /></a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        
        </>
    )
}