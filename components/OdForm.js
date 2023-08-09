import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Spinner from "@/components/Spinner";
import { ReactSortable } from "react-sortablejs";

export default function ProductForm({
  _id,
  title: existingTitle,
  description: existingDescription,
  price: existingPrice,
  images: existingImages,
  category: assignedCategory,
  properties: assignedProperties,
}) {
  const [title, setTitle] = useState(existingTitle || "");
  const [description, setDescription] = useState(existingDescription || "");
  const [category, setCategory] = useState(assignedCategory || "");
  const [productProperties, setProductProperties] = useState(
    assignedProperties || {}
  );
  const [price, setPrice] = useState(existingPrice || "");
  const [images, setImages] = useState(existingImages || []);
  const [goToProducts, setGoToProducts] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [categories, setCategories] = useState([]);
  const router = useRouter();
  useEffect(() => {
    axios.get("/api/categories").then((result) => {
      setCategories(result.data);
    });
  }, []);
  async function saveProduct(ev) {
    ev.preventDefault();
    const data = {
      title,
      description,
      price,
      images,
      category,
      properties: productProperties,
    };
    if (_id) {
      //update
      await axios.put("/api/products", { ...data, _id });
    } else {
      //create
      await axios.post("/api/products", data);
    }
    setGoToProducts(true);
  }
  if (goToProducts) {
    router.push("/products");
  }
  async function uploadImages(ev) {
    const files = ev.target?.files;
    if (files?.length > 0) {
      setIsUploading(true);
      const data = new FormData();
      for (const file of files) {
        data.append("file", file);
      }
      const res = await axios.post("/api/upload", data);
      setImages((oldImages) => {
        return [...oldImages, ...res.data.links];
      });
      setIsUploading(false);
    }
  }
  function updateImagesOrder(images) {
    setImages(images);
  }
  function setProductProp(propName, value) {
    setProductProperties((prev) => {
      const newProductProps = { ...prev };
      newProductProps[propName] = value;
      return newProductProps;
    });
  }

  const propertiesToFill = [];
  if (categories.length > 0 && category) {
    let catInfo = categories.find(({ _id }) => _id === category);
    propertiesToFill.push(...catInfo.properties);
    while (catInfo?.parent?._id) {
      const parentCat = categories.find(
        ({ _id }) => _id === catInfo?.parent?._id
      );
      propertiesToFill.push(...parentCat.properties);
      catInfo = parentCat;
    }
  }

  return (
    // <form onSubmit={saveProduct}>
    //   <label>Product name</label>
    //   <input
    //     type="text"
    //     placeholder="product name"
    //     value={title}
    //     onChange={ev => setTitle(ev.target.value)}/>
    //   <label>Category</label>
    //   <select value={category}
    //           onChange={ev => setCategory(ev.target.value)}>
    //     <option value="">Uncategorized</option>
    //     {categories.length > 0 && categories.map(c => (
    //       <option key={c._id} value={c._id}>{c.name}</option>
    //     ))}
    //   </select>
    //   {propertiesToFill.length > 0 && propertiesToFill.map(p => (
    //     <div key={p.name} className="">
    //       <label>{p.name[0].toUpperCase()+p.name.substring(1)}</label>
    //       <div>
    //         <select value={productProperties[p.name]}
    //                 onChange={ev =>
    //                   setProductProp(p.name,ev.target.value)
    //                 }
    //         >
    //           {p.values.map(v => (
    //             <option key={v} value={v}>{v}</option>
    //           ))}
    //         </select>
    //       </div>
    //     </div>
    //   ))}
    //   <label>
    //     Photos
    //   </label>
    //   <div className="mb-2 flex flex-wrap gap-1">
    //     <ReactSortable
    //       list={images}
    //       className="flex flex-wrap gap-1"
    //       setList={updateImagesOrder}>
    //       {!!images?.length && images.map(link => (
    //         <div key={link} className="h-24 bg-white p-4 shadow-sm rounded-sm border border-gray-200">
    //           <img src={link} alt="" className="rounded-lg"/>
    //         </div>
    //       ))}
    //     </ReactSortable>
    //     {isUploading && (
    //       <div className="h-24 flex items-center">
    //         <Spinner />
    //       </div>
    //     )}
    //     <label className="w-24 h-24 cursor-pointer text-center flex flex-col items-center justify-center text-sm gap-1 text-primary rounded-sm bg-white shadow-sm border border-primary">
    //       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    //         <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
    //       </svg>
    //       <div>
    //         Add image
    //       </div>
    //       <input type="file" onChange={uploadImages} className="hidden"/>
    //     </label>
    //   </div>
    //   <label>Description</label>
    //   <textarea
    //     placeholder="description"
    //     value={description}
    //     onChange={ev => setDescription(ev.target.value)}
    //   />
    //   <label>Price (in USD)</label>
    //   <input
    //     type="number" placeholder="price"
    //     value={price}
    //     onChange={ev => setPrice(ev.target.value)}
    //   />
    //   <button
    //     type="submit"
    //     className="btn-primary">
    //     Save
    //   </button>
    // </form>

    <div className="flex ">
      <div className="max-w-md p-6  rounded-lg max-w-fit shadow-md ">
        {/* h1  */}
        <form>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">
Customer ID
              </label>
              <input
                type="text"
                className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
                placeholder="Customer ID"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                PASSWORD
              </label>
              <input
                type="password"
                className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
                placeholder="Password"
              />
            </div>
          </div>
          

            <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Bank Name
            </label>
            <input
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="Bank Name"
            />
          </div>

          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Branch Name
            </label>
            <input
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="Branch Name"
            />
          </div>

          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Bank Account Number
            </label>
            <input
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="Bank Account Number"
            />
          </div>
          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Avialable Balance
            </label>
            <input
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="Avialable Balance"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">
                Email Id
              </label>
              <input
                type="email"
                className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
                placeholder="Email Id"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
                placeholder="Phone Number"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">
                Aadhaar Number
              </label>
              <input
                type="text"
                className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
                placeholder="Aadhaar Number"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                PAN Number
              </label>
              <input
                type="text"
                className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
                placeholder="PAN Number"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Name of Entrepreneur
            </label>
            <input
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="Name of Entrepreneur"
            />
          </div>
          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Father Name
            </label>
            <input
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="Father Name"
            />
          </div>
          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Date of Birth
            </label>
            <input
              type="date"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="YY-MM-DD"
            />
          </div>
          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Social Category of Entrepreneur
            </label>
            <input
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="Social Category of Entrepreneur"
            />
          </div>
          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">Gender</label>
            <select
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              name="gender"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">Physically Handicapped</label>
            <select
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              name="gender"
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>

          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Name of Enterprise
            </label>
            <input
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="Name of Enterprise"
            />
          </div>
          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Type of Organization
            </label>
            <input
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="Type of Organization"
            />
          </div>

          <h2 className="underline font-semibold mb-4">Residential Address:-</h2>
          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Village/Town
            </label>
            <input
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="Village/Town"
            />
          </div>
          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Block
            </label>
            <input
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="Block"
            />
          </div>

          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              City
            </label>
            <input
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="City"
            />
          </div>

          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              District
            </label>
            <input
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="District"
            />
          </div>

          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              State
            </label>
            <input
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="State"
            />
          </div>

          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Pin Code
            </label>
            <input
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="Pin Code"
            />
          </div>

          <h2 className="underline font-semibold mb-4">Official Address:-</h2>

          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Village/Town
            </label>
            <input
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="Village/Town"
            />
          </div>
          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Block
            </label>
            <input
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="Block"
            />
          </div>

          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              City
            </label>
            <input
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="City"
            />
          </div>

          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              District
            </label>
            <input
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="District"
            />
          </div>

          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              State
            </label>
            <input
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="State"
            />
          </div>

          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Pin Code
            </label>
            <input
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="Pin Code"
            />
          </div>

          <h2 className="underline font-semibold mb-4">Bank Account opening Details:-</h2>

          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Relationship with nominee
            </label>
            <input
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="Relationship with nominee"
            />
          </div>

          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Nominee name
            </label>
            <input
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="Nominee name"
            />
          </div>

          



          {/* Other input fields ... */}

          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Picture (Upload)
            </label>
            <input type="file" className="mt-1 block w-full" />
          </div>

          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Picture (Upload two)
            </label>
            <input type="file" className="mt-1 block w-full" />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
