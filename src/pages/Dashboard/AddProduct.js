import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import auth from "../../firebaseinit";

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
        `https://boiling-brushlands-60040.herokuapp.com/check-admin/${user.email}`,
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
                  email: data.email,
                  specialty: data.specialty,
                  image: imageUrl,
                };
                axios
                  .post("https://boiling-brushlands-60040.herokuapp.com/product", product, {
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
       <h3 className="fs-6 mb-2">Add a Product</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control mb-3 w-full max-w-xs">
          <input
            placeholder="Product name"
            className="input input-bordered"
            {...register("name", { required: true })}
          />
          <span className="text-[red] text-sm mt-1">
            {errors.firstName?.type === "required" && "Product name is required"}
          </span>
        </div>
        <div className="form-control mb-3 w-full max-w-xs">
          <textarea
            placeholder="Product description"
            className="input input-bordered"
            {...register("description", { required: true })}
          ></textarea>
          <span className="text-[red] text-sm mt-1">
            {errors.firstName?.type === "required" && "Product description is required"}
          </span>
        </div>

        <div className="form-control mb-3 w-full max-w-xs">
          <input
            placeholder="Product price"
            className="input input-bordered"
            {...register("name", { required: true })}
          />
          <span className="text-[red] text-sm mt-1">
            {errors.firstName?.type === "required" && "Product name is required"}
          </span>
        </div>
        
        <div className="form-control mb-3">
          <select
            className="select w-full input-bordered max-w-xs"
            {...register("specialty", { required: true })}
          >
            <option disabled defaultValue={true}>
              Product Specialty
            </option>
              <option>1</option>
          </select>
          <span className="text-[red] text-sm mt-1">
            {errors.specialty?.type === "required" && "Specialty is required"}
          </span>
        </div>
        <div className="form-control mb-3 w-full max-w-xs">
          <input
            type="file"
            className="input input-bordered pt-[10px]"
            {...register("image", { required: true })}
          />
          <span className="text-[red] text-sm mt-1">
            {errors.firstName?.type === "required" && "Image is required"}
          </span>
        </div>
        <button className={`btn btn-primary w-80 ${loader ? 'loading' : ''}`}>Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
