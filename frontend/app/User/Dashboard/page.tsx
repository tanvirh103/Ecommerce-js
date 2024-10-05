'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Dashboard() {
    const router = useRouter();
    if(!localStorage.getItem('Session')){
        router.push("/")
    }
    const handleLogout = () => {
        localStorage.removeItem("Session");
        router.push("/");
    };
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md mb-8">
                    <h2 className="text-2xl font-bold mb-3 text-center">Dashboard</h2>
                    <Link href="/Product/AddProduct">
                        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition mb-3">
                            Add Product
                        </button>
                    </Link>
                    <Link href="/Product/ViewAllProduct">
                        <button className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition mb-3">
                            View All Products
                        </button>
                    </Link>
                    <Link href="/Category/AddCategory">
                        <button className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 transition mb-3">
                            Add Category
                        </button>
                    </Link>
                    <Link href="/Category/ViewAllCategory">
                        <button className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition mb-3">
                            View All Categories
                        </button>
                    </Link>
                    <Link href="ViewAllUser">
                        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
                            View All Users
                        </button>
                    </Link>
                </div>
                <div className="w-full max-w-md bg-white p-4 rounded-lg shadow-md">
                    <button
                        className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900 transition"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </>
    );
}
