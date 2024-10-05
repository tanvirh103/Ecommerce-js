import axios from "axios";


interface Product{
    ProductId: number;
    CategoryId:number;
    ProductName: string;
    ProductDes:string;
    ProductPrice:number;
    ProductQuantity:number;
    
}

export default async function ViewAllProduct(){
    const res=await axios.get("http://localhost:3001/product");
    const Products:Product[]=await res.data;
    return(
         <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
        <h1 className="text-2xl font-bold mb-6 text-center">List Of Product</h1>
        <table className="min-w-full border-collapse border border-slate-400">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-slate-300 px-4 py-2 text-left">Product ID</th>
              <th className="border border-slate-300 px-4 py-2 text-left">Category ID</th>
              <th className="border border-slate-300 px-4 py-2 text-left">Product Name</th>
              <th className="border border-slate-300 px-4 py-2 text-left">Product Description</th>
              <th className="border border-slate-300 px-4 py-2 text-left">Product Price</th>
              <th className="border border-slate-300 px-4 py-2 text-left">Product Quantity</th>
            </tr>
          </thead>
          <tbody>
            {Products.map((Product) => (
              <tr key={Product.ProductId} className="even:bg-gray-50 odd:bg-white">
                <td className="border border-slate-300 px-4 py-2">{Product.ProductId}</td>
                <td className="border border-slate-300 px-4 py-2">{Product.CategoryId}</td>
                <td className="border border-slate-300 px-4 py-2">{Product.ProductName}</td>
                <td className="border border-slate-300 px-4 py-2">{Product.ProductDes}</td>
                <td className="border border-slate-300 px-4 py-2">{Product.ProductPrice}</td>
                <td className="border border-slate-300 px-4 py-2">{Product.ProductQuantity}</td>
              </tr>
              
            ))}
          </tbody>
        </table>
        </div>
        </div>
    );
}