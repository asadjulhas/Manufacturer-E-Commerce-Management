import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import review from "../../images/review.png";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios(`http://localhost:5000/product/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, []);
  return (
    <section className="product-details-area ptb-54">
      <div className="container">
        <div className="row align-items-center">
          <div className="product-view-one">
            <div className="modal-content p-0">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="product-view-one-image">
                    <div className="item">
                      <img src={product.img} alt={product.name} />
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="product-content ml-15">
                    <h3>{product.name}</h3>

                    <div className="product-review">
                      <div className="rating">
                        <img src={review} alt="review" />
                      </div>
                    </div>

                    <div className="price">
                      <span className="new-price">
                        ${product.price}{" "}
                        <del>${Math.ceil(product.price * 1.3)}</del>
                      </span>
                      <span className="in-stock">
                        In Stock ({product.stock} Items)
                      </span>
                    </div>

                    <ul className="product-info">
                      <li>
                        <p>{product.description}</p>
                      </li>
                      <li>
                        <span>Minimum order:</span> {product.minOrder}
                      </li>
                      <li>
                        <span>Type:</span> {product.type}
                      </li>
                    </ul>

                    <div className="product-add-to-cart">
                      <div className="input-counter">
                        <span className="minus-btn">
                          +
                        </span>

                        <input type="text" placeholder="2" />

                        <span className="plus-btn">
                         -
                        </span>
                      </div>

                      <a href="" className="default-btn">
                        <i className="ri-shopping-cart-line"></i>
                        Book a order now
                      </a>
                    </div>

                    <div className="share-this-product">
                      <ul>
                        <li>
                          <span>Share</span>
                        </li>
                        <li>
                          <a title="Facebook" href="https://www.facebook.com/" target="_blank">
                            <i className="ri-facebook-fill">f</i>
                          </a>
                        </li>
                        <li>
                          <a title="Instagram" href="https://www.instagram.com/" target="_blank">
                            <i className="ri-instagram-line">i</i>
                          </a>
                        </li>
                        <li>
                          <a title="Linkedin" href="https://www.linkedin.com/" target="_blank">
                            <i className="ri-linkedin-fill">l</i>
                          </a>
                        </li>
                        <li>
                          <a title="Twitter" href="https://twitter.com/" target="_blank">
                            <i className="ri-twitter-fill">t</i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
