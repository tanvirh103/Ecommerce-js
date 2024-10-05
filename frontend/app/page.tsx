'use client'
import axios from "axios";
import { useRouter } from "next/navigation";
import { ChangeEvent, SyntheticEvent, useState } from "react";

export default function Home() {
  const[Email,SetEmail]=useState("");
  const[Password,SetPassword]=useState("");
  const[Error,SetError]=useState("");
  const router=useRouter();
  const handleEmail=(e:ChangeEvent<HTMLInputElement>)=>{
    SetEmail(e.target.value);
  }
  const handlePassword=(e:ChangeEvent<HTMLInputElement>)=>{
    SetPassword(e.target.value);
  }
  const handleSubmit=async(e:SyntheticEvent)=>{
    e.preventDefault();
    SetError(" ");
    if(!Email||!Password){
      SetError("All fields are required");
    }else{
      try{
        PostData();
        SetError("Login");
      }catch(e:any){
        SetError(e);
      }
      SetEmail("")
      SetPassword("")
      SetError("")
    }
  };
  async function PostData(){
    try{
      const formData=new FormData();
      formData.append('Email',Email);
      formData.append('Password',Password);
      const res=await axios.post("http://localhost:3001/auth",formData,{headers: {'Content-Type': 'application/json'}});
      console.log(res.data);
      if(res.data===true){
        router.push("/User/Dashboard");
      }
    }catch(e){
      console.error(e);
    }
  }
  return (
   <>
<div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
    <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="Email" className="block text-gray-700">Email</label>
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
        <label htmlFor="Password" className="block text-gray-700">Password</label>
        <input
          type="password"
          id="Password"
          name="Password"
          value={Password}
          onChange={handlePassword}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      {Error && <div className="text-red-500 mb-4">{Error}</div>}
      <div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Login
        </button>
      </div>
    </form>
  </div>
</div>

   </>
  );
}
