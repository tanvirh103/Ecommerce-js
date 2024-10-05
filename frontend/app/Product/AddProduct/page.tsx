'use client'
import axios from "axios";
import { useRouter } from "next/navigation";
import { ChangeEvent, SyntheticEvent, useState } from "react";

export default function AddProduct(){
    const [ProductName,SetProductName]=useState('');
    const [ProductDes,SetProductDes]=useState('');
    const [ProductPrice,SetProductPrice]=useState('');
    const [ProductQuantity,SetProductQuantity]=useState('');
    const [CategoryId,SetCategoryId]=useState('');
    const [Error,SetError]=useState('');
    const router=useRouter();
    const handleProductName=(e:ChangeEvent<HTMLInputElement>)=>{
        SetProductName(e.target.value);
    }
    const handleProductDes=(e:ChangeEvent<HTMLInputElement>)=>{
        SetProductDes(e.target.value);
    }
    const handleProductPrice=(e:ChangeEvent<HTMLInputElement>)=>{
        SetProductPrice(e.target.value);
    }
    const handleProductQuantity=(e:ChangeEvent<HTMLInputElement>)=>{
        SetProductQuantity(e.target.value);
    }
    const handleCategoryId=(e:ChangeEvent<HTMLInputElement>)=>{
        SetCategoryId(e.target.value);
    }
    const handleSubmit=async(e:SyntheticEvent)=>{
        e.preventDefault();
        SetError(' ');
        if(!ProductName||!ProductDes||!ProductPrice||!ProductQuantity||!CategoryId){
            SetError("All field are required");
        }else{
            try{
                PostData();
                SetError("Add Product");
            }catch(e){
                console.log(e);
            }
        }
    };
    async function PostData(){
        try{
            const formData=new FormData();
            formData.append('ProductName',ProductName);
            formData.append('ProductDes',ProductDes);
            formData.append('ProductPrice',ProductPrice);
            formData.append('ProductQuantity',ProductQuantity);
            formData.append('CategoryId',CategoryId);
            const res=await axios.post("http://localhost:3001/product",formData,{headers:{'Content-Type':'application/json'}});
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
          <h1 className="text-2xl font-bold mb-6 text-center">Add Product</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="ProductName" className="block text-gray-700">Product Name</label>
              <input
                type="text"
                id="ProductName"
                name="ProductName"
                value={ProductName}
                onChange={handleProductName}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="ProductDes" className="block text-gray-700">Product Description</label>
              <input
                type="text"
                id="ProductDes"
                name="ProductDes"
                value={ProductDes}
                onChange={handleProductDes}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="ProductPrice" className="block text-gray-700">Product Price</label>
              <input
                type="number"
                id="ProductPrice"
                name="ProductPrice"
                value={ProductPrice}
                onChange={handleProductPrice}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="ProductQuantity" className="block text-gray-700">Product Quantity</label>
              <input
                type="number"
                id="ProductQuantity"
                name="ProductQuantity"
                value={ProductQuantity}
                onChange={handleProductQuantity}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="CategoryId" className="block text-gray-700">Category Id</label>
              <input
                type="number"
                id="CategoryId"
                name="CategoryId"
                value={CategoryId}
                onChange={handleCategoryId}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            {Error && <div className="text-red-500 mb-4">{Error}</div>}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200">
                Add New Product
              </button>
            </div>
          </form>
        </div>
      </div>
        </>
    );
}