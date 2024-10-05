'use client'
import axios from "axios";
import { useRouter } from "next/navigation";
import { ChangeEvent, SyntheticEvent, useState } from "react";

export default function Registration(){
    const [UserName,SetUserName]=useState('');
    const [Email,SetEmail]=useState('');
    const [Phone,SetPhone]=useState('');
    const [Password,SetPassword]=useState('');
    const [CPassword,SetCPassword]=useState('');
    const [Role,SetRole]=useState('');
    const [Error,SetError]=useState('');
    const router=useRouter();
    const handleUserName=(e:ChangeEvent<HTMLInputElement>)=>{
        SetUserName(e.target.value);
    }
    const handleEmail=(e:ChangeEvent<HTMLInputElement>)=>{
        SetEmail(e.target.value);
    }
    const handlePhone=(e:ChangeEvent<HTMLInputElement>)=>{
        SetPhone(e.target.value);
    }
    const handlePassword=(e:ChangeEvent<HTMLInputElement>)=>{
        SetPassword(e.target.value);
    }
    const handleCPassword=(e:ChangeEvent<HTMLInputElement>)=>{
        SetCPassword(e.target.value);
    }
    const handleRole=(e:ChangeEvent<HTMLInputElement>)=>{
        SetRole(e.target.value);
    }

    const handleSubmit=async(e:SyntheticEvent)=>{
        e.preventDefault();
        SetError(' ');
        if(!UserName||!Email||!Phone||!Password||!CPassword||!Role){
            SetError("All field are required");
        }else{
            try{
                PostData();
                SetError("Reg");
            }catch(e){
                console.log(e);
            }
        }
    };
    async function PostData(){
        try{
            const formData=new FormData();
            formData.append('UserName',UserName);
            formData.append('Email',Email);
            formData.append('Phone',Phone);
            formData.append('Password',Password);
            formData.append('CPassword',CPassword);
            formData.append('Role',Role);
            const res=await axios.post("http://localhost:3001/user",formData,{headers:{'Content-Type':'application/json'}});
            console.log(res.data);
            if(res.data===true){
                router.push("/")
            }else{
                SetError("Account Creation failed");
            }
        }catch(e){
            console.error(e);
        }
    }
    return(
        <>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Registration Page</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="UserName" className="block text-gray-700">User Name</label>
              <input
                type="text"
                id="UserName"
                name="UserName"
                value={UserName}
                onChange={handleUserName}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="Password" className="block text-gray-700">Email</label>
              <input
                type="email"
                id="Email"
                name="Email"
                value={Email}
                onChange={handleEmail}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="Phone" className="block text-gray-700">Phone</label>
              <input
                type="text"
                id="Phone"
                name="Phone"
                value={Phone}
                onChange={handlePhone}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="Password" className="block text-gray-700">Password</label>
              <input
                type="Password"
                id="Password"
                name="Password"
                value={Password}
                onChange={handlePassword}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="CPassword" className="block text-gray-700">Confirm Password</label>
              <input
                type="Password"
                id="CPassword"
                name="CPassword"
                value={CPassword}
                onChange={handleCPassword}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="Role" className="block text-gray-700">Role</label>
              <input
                type="text"
                id="Role"
                name="Role"
                value={Role}
                onChange={handleRole}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            {Error && <div className="text-red-500 mb-4">{Error}</div>}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200">
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
        </>
    );
}