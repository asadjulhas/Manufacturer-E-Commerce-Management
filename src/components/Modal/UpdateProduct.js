import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebaseinit";

const UpdateProduct = ({
  showStock,
  handleCloseStock,
  product,
  refetch
}) => {
  const accessToken = localStorage.getItem("accessToken");
  const [loader, setLoader] = useState(false);
  const { _id, name, description, minOrder, price, stock, type } = product;

  // const {
  //   register,
  //   formState: { errors },
  //   handleSubmit, reset
  // } = useForm();

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const id = _id;
    const fname = e.target.name.value || name;
    const fdescription = e.target.description.value || description;
    const fminOrder = e.target.minOrder.value || minOrder;
    const fprice = e.target.price.value || price;
    const fstock = e.target.stock.value || stock;
    const ftype = e.target.type.value || type;


    const product = {
      id,
      fname,
      fdescription,
      fminOrder,
      fprice,
      fstock,
      ftype
    };
    axios.put("https://e-commerce-management-server.vercel.app/product", product, {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        if (res.data.message) {
          signOut(auth);
          localStorage.removeItem("accessToken");
        } else if (res.data.result.modifiedCount === 1) {
          toast.success("Product updated successfully!", {
            position: "top-center",
          });
          refetch();
          handleCloseStock();
        }
      });
  };

  return (
    <div>
      <Modal centered show={showStock} onHide={handleCloseStock}>
        <Modal.Body closeButton>
          <form onSubmit={handleUpdateProduct}>
            <div className="mb-3 product_input">
              <label htmlFor="exampleInputEmail1" class="form-label">
                Name
              </label>
              <input name="name"
                placeholder={`${name ? name : "Product name"}`}
                className="form-control"
              />
            </div>
            <div className="mb-3 product_input">
              <label htmlFor="exampleInputEmail1" class="form-label">
                Product description
              </label>
              <textarea name="description"
                rows={3}
                placeholder={`${
                  description ? description : "Product description"
                }`}
                className="form-control text_area"
              ></textarea>
            </div>

            <div className="mb-3 product_input">
              <label htmlFor="exampleInputEmail1" class="form-label">
                Product price
              </label>
              <input name="price"
                type="number"
                placeholder={`${price ? price : "Product price"}`}
                className="form-control"
              />
            </div>

            <div className="mb-3 product_input">
              <label htmlFor="exampleInputEmail1" class="form-label">
                Minium order range
              </label>
              <input name="minOrder"
                type="number"
                placeholder={`${minOrder ? minOrder : "Minium order range"}`}
                className="form-control"
              />
            </div>

            <div className="mb-3 product_input">
              <label htmlFor="exampleInputEmail1" class="form-label">
                Available stock
              </label>
              <input name="stock"
                type="number"
                placeholder={`${stock ? stock : "Available stock"}`}
                className="form-control"
              />
            </div>

            <div className="mb-3 product_input">
              <label htmlFor="exampleInputEmail1" class="form-label">
                Type
              </label>
              <select name="type" className="form-select">
                <option disabled>
                  Product type
                </option>
                <option>hot</option>
                <option>new</option>
              </select>
            </div>
            <div className="d-flex justify-content-between">
              <button
                className={`btn btn-primary w-80 ${loader ? "loading" : ""}`}
              >
                {loader ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    &nbsp;&nbsp;
                  </>
                ) : (
                  ""
                )}
                Update Product
              </button>

              <Button variant="secondary" onClick={handleCloseStock}>
                Close
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default UpdateProduct;
