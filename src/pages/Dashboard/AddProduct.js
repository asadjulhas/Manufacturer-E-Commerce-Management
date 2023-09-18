import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import auth from "../../firebaseinit";
import PageTitle from "../../hooks/PageTitle";

const AddProduct = () => {
  const [user, loading, error] = useAuthState(auth);
  const [loader, setLoader] = useState(false)
  const accessToken = localStorage.getItem("accessToken");
  const uploadKey = "3f8b872c2bffae9cfbe946b2b6c2985b";
  const {
    register,
    formState: { errors },
    handleSubmit, reset
  } = useForm();

  const onSubmit = async (data) => {
    setLoader(true)
    axios
      .get(
        `https://e-commerce-management-server.vercel.app/check-admin/${user.email}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((user) => {
        if (user.data) {
          const image = data.image[0];
          const formData = new FormData();
          formData.append("image", image);
          const url = `https://api.imgbb.com/1/upload?key=${uploadKey}`;
          fetch(url, {
            method: "POST",
            body: formData,
          })
            .then((res) => res.json())
            .then((image) => {
              if (image.success) {
                const imageUrl = image.data.url;
                const product = {
                  name: data.name,
                  description: data.description,
                  minOrder: data.minOrder,
                  price: data.price,
                  stock: data.stock,
                  type: data.type,
                  img: imageUrl,
                };
                axios
                  .post("https://e-commerce-management-server.vercel.app/product", product, {
                    headers: {
                      authorization: `Bearer ${accessToken}`,
                    },
                  })
                  .then((res) => {
                    if (res.data.message) {
                      signOut(auth);
                      localStorage.removeItem("accessToken");
                    } else if (res.data.insertedId) {
                      toast.success("Product added successfully!", {
                        position: "top-center",
                      });
                      reset();
                      setLoader(false)
                    }
                  });
              }
            });
        } else {
          signOut(auth);
          localStorage.removeItem("accessToken");
        }
      });

  };
  return (
    <div className="product_form w-50">
      <PageTitle title='Add Product' />
       <h3 className="fs-6 mb-2">Add a Product</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3 product_input">
          <input
            placeholder="Product name"
            className="form-control"
            {...register("name", { required: true })}
          />
          <span className="text-[red] text-sm mt-1">
            {errors.firstName?.type === "required" && "Product name is required"}
          </span>
        </div>
        <div className="mb-3 product_input">
          <textarea rows={3}
            placeholder="Product description"
            className="form-control text_area"
            {...register("description", { required: true })}
          ></textarea>
          <span className="text-[red] text-sm mt-1">
            {errors.firstName?.type === "required" && "Product description is required"}
          </span>
        </div>

        <div className="mb-3 product_input">
          <input type='number'
            placeholder="Product price"
            className="form-control"
            {...register("price", { required: true })}
          />
          <span className="text-[red] text-sm mt-1">
            {errors.firstName?.type === "required" && "Product price is required"}
          </span>
        </div>

        <div className="mb-3 product_input">
          <input type='number'
            placeholder="Minium order range"
            className="form-control"
            {...register("minOrder", { required: true })}
          />
          <span className="text-[red] text-sm mt-1">
            {errors.firstName?.type === "required" && "Minium order range is required"}
          </span>
        </div>
        

        <div className="mb-3 product_input">
          <input type='number'
            placeholder="Available stock"
            className="form-control"
            {...register("stock", { required: true })}
          />
          <span className="text-[red] text-sm mt-1">
            {errors.firstName?.type === "required" && "Available stock is required"}
          </span>
        </div>
        
        <div className="mb-3 product_input">
          <select
            className="form-select"
            {...register("type", { required: true })}
          >
            <option disabled defaultValue={true}>
              Product type
            </option>
              <option>hot</option>
              <option>new</option>
          </select>
          <span className="text-[red] text-sm mt-1">
            {errors.specialty?.type === "required" && "Specialty is required"}
          </span>
        </div>
        <div className="mb-3 product_input">
          <input
            type="file"
            className="form-control pt-[10px]"
            {...register("image", { required: true })}
          />
          <span className="text-[red] text-sm mt-1">
            {errors.firstName?.type === "required" && "Image is required"}
          </span>
        </div>
        <button className={`btn btn-primary w-80 ${loader ? 'loading' : ''}`}>
        {loader ? <><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>&nbsp;&nbsp;</> : '' }
          Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
