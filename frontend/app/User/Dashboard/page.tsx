import Link from "next/link";

export default function Dashboard(){
    return(
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-3 text-center">Dashboard</h2>
                    <Link href="/Product/AddProduct">
                        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
                            Add Product
                        </button>
                        <br />
                    </Link><br />
                    <Link href="/Product/ViewAllProduct">
                        <button className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
                            View All Product
                        </button>
                        <br />
                    </Link><br />
                    <Link href="/Product/AddCategory">
                        <button className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
                            Add Category
                        </button>
                        <br />
                    </Link><br />
                    <Link href="/Category/ViewAllCategory">
                        <button className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
                            View All Category
                        </button>
                        <br />
                    </Link><br />
                    <Link href="ViewAllUser">
                        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
                            View All User
                        </button>
                        <br />
                    </Link><br />
                </div>
            </div>
        </>
    );
}