import axios from "axios";
interface Category{
    CategoryId: number;
    CategoryName: string;
    CategoryDes:string;
}
export default async function ViewAllCategory(){
    const res=await axios.get("http://localhost:3001/category");
    const Categorys:Category[]=await res.data;
    return(
         <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
        <h1 className="text-2xl font-bold mb-6 text-center">List Of Category</h1>
        <table className="min-w-full border-collapse border border-slate-400">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-slate-300 px-4 py-2 text-left">Category ID</th>
              <th className="border border-slate-300 px-4 py-2 text-left">Category Name</th>
              <th className="border border-slate-300 px-4 py-2 text-left">Category Description</th>
            </tr>
          </thead>
          <tbody>
            {Categorys.map((Category) => (
            
              <tr key={Category.CategoryId} className="even:bg-gray-50 odd:bg-white">
                <td className="border border-slate-300 px-4 py-2">{Category.CategoryId}</td>
                <td className="border border-slate-300 px-4 py-2">{Category.CategoryName}</td>
                <td className="border border-slate-300 px-4 py-2">{Category.CategoryDes}</td>
              </tr>
              
            ))}
          </tbody>
        </table>
        </div>
        </div>
    );
}