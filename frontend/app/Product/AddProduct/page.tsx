'use client'
import axios from "axios";
import { useRouter } from "next/navigation";
import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";

interface Category {
  CategoryId: number;
  CategoryName: string;
  CategoryDes: string;
}

export default function AddProduct() {
  const [ProductName, SetProductName] = useState('');
  const [ProductDes, SetProductDes] = useState('');
  const [ProductPrice, SetProductPrice] = useState('');
  const [ProductQuantity, SetProductQuantity] = useState('');
  const [CategoryId, SetCategoryId] = useState<number | null>(null);
  const [Categories, SetCategories] = useState<Category[]>([]);
  const [Error, SetError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("http://localhost:3001/category");
        const categoryData: Category[] = await res.data;
        SetCategories(categoryData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCategories();
  }, []);

  const handleProductName = (e: ChangeEvent<HTMLInputElement>) => {
    SetProductName(e.target.value);
  };
  const handleProductDes = (e: ChangeEvent<HTMLInputElement>) => {
    SetProductDes(e.target.value);
  };
  const handleProductPrice = (e: ChangeEvent<HTMLInputElement>) => {
    SetProductPrice(e.target.value);
  };
  const handleProductQuantity = (e: ChangeEvent<HTMLInputElement>) => {
    SetProductQuantity(e.target.value);
  };
  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = Categories.find(
      (category) => category.CategoryName === e.target.value
    );
    if (selectedCategory) {
      SetCategoryId(selectedCategory.CategoryId);
    }
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    SetError('');
    
    if (!ProductName || !ProductDes || !ProductPrice || !ProductQuantity || !CategoryId) {
      SetError("All fields are required");
    } else {
      try {
        await PostData();
        SetError("Product added successfully!");
      } catch (e) {
        console.log(e);
      }
    }
  };

  async function PostData() {
    try {
      const formData = {
        ProductName,
        ProductDes,
        ProductPrice,
        ProductQuantity,
        CategoryId,
      };

      const res = await axios.post("http://localhost:3001/product", formData, {
        headers: { 'Content-Type': 'application/json' },
      });

      if (res.data === true) {
        router.push("/User/Dashboard");
      } else {
        SetError("Failed to add product");
      }
    } catch (e) {
      console.error(e);
    }
  }

  return (
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
            <label htmlFor="Category" className="block text-gray-700">Category</label>
            <select
              id="Category"
              name="Category"
              onChange={handleCategoryChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="">Select Category</option>
              {Categories.map((category) => (
                <option key={category.CategoryId} value={category.CategoryName}>
                  {category.CategoryName}
                </option>
              ))}
            </select>
          </div>
          {Error && <div className="text-red-500 mb-4">{Error}</div>}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Add New Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
