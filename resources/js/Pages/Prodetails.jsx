import { Link,useForm,usePage } from "@inertiajs/react"
import { MdOutlineModeEdit } from "react-icons/md"
import { RiDeleteBinFill } from "react-icons/ri"

export default function Prodetails(){

    const { Projects } = usePage().props;
    const { delete:destroy } = useForm();
    

    // console.log(Projects);



    function handleDelete(Project){
        destroy(`/Prodetails/${Project}`);
    }




    return(

        <>
            <nav className=" flex justify-between text-white h-16 items-center  bg-gray-700 ">
            <h1 className="pl-4">Project Details</h1>
            <div>
                
                {/* <Link 
                className="bg-black text-white rounded-md px-5 py-3  mr-4"
                href="/Empregister" 
                >Register</Link> */}
            
            
                <Link 
                className="bg-black text-white rounded-md px-5 py-3  mr-4"
                href="/Proassign" 
                >Assign</Link>

                <Link 
                className="bg-black text-white rounded-md px-5 py-3  mr-4"
                href="/dashboard" 
                >Employees</Link>
            
            </div>

        </nav>
        <div className="bg-gray-100 p-10 h-screen">
            <div className="container mx-auto">
                <table className="min-w-full bg-white border-collapse border border-gray-200">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project_Id</th>
                            <th className="py-2 px-4 border border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project Name</th>
                            <th className="py-2 px-4 border border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                            <th className="py-2 px-4 border border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee </th>
                            <th className="py-2 px-4 border border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                        </tr>
                    </thead>
                    <tbody className="py-2 px-4 border border-gray-200">
                        {Projects.map((Project) =>(
                            <tr key={Project.id} className="hover:bg-gray-100 py-2 px-4 border border-gray-200">
                                <td className="border border-gray-200">{Project.id}</td>
                                <td className="border border-gray-200">{Project.title}</td>
                                <td className="border border-gray-200">{Project.description}</td>
                                <td className="border border-gray-200">{Project.emploid ? Project.emploid.name : 'No Employee'}</td>{/* Display employee name */}
                                <td className="flex gap-3 m-3">
                                    <a href={`/Proassign/${Project.id}`}><MdOutlineModeEdit/></a>
                                    <a onClick={() => handleDelete(Project.id)}><RiDeleteBinFill /></a>
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