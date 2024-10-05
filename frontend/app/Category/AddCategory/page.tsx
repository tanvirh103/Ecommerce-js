'use client'
import axios from "axios";
import { useRouter } from "next/navigation";
import { ChangeEvent, SyntheticEvent, useState } from "react";

export default function AddProduct(){
    const [CategoryName,SetCategoryName]=useState('');
    const [CategoryDes,SetCategorytDes]=useState('');
    const [Error,SetError]=useState('');
    const router=useRouter();
    const handleCategoryName=(e:ChangeEvent<HTMLInputElement>)=>{
        SetCategoryName(e.target.value);
    }
    const handleCategorytDes=(e:ChangeEvent<HTMLInputElement>)=>{
        SetCategorytDes(e.target.value);
    }
    const handleSubmit=async(e:SyntheticEvent)=>{
        e.preventDefault();
        SetError(' ');
        if(!CategoryName||!CategoryDes){
            SetError("All field are required");
        }else{
            try{
                PostData();
                SetError("Add Category");
            }catch(e){
                console.log(e);
            }
        }
    };
    async function PostData(){
        try{
            const formData=new FormData();
            formData.append('CategoryName',CategoryName);
            formData.append('CategoryDes',CategoryDes);
            const res=await axios.post("http://localhost:3001/category",formData,{headers:{'Content-Type':'application/json'}});
            console.log(res.data);
            if(res.data===true){
                router.push("/User/Dashboard")
            }else{
                SetError("Add Product failed");
            }
        }catch(e){
            console.error(e);
        }
    }
    return(
        <>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Add Category</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="CategoryName" className="block text-gray-700">Category Name</label>
              <input
                type="text"
                id="CategoryName"
                name="CategoryName"
                value={CategoryName}
                onChange={handleCategoryName}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="CategoryDes" className="block text-gray-700">Category Description</label>
              <input
                type="text"
                id="CategoryDes"
                name="CategoryDes"
                value={CategoryDes}
                onChange={handleCategorytDes}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            {Error && <div className="text-red-500 mb-4">{Error}</div>}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200">
                Add New Category
              </button>
            </div>
          </form>
        </div>
      </div>
        </>
    );
}