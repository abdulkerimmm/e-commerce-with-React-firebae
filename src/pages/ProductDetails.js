import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Col, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import "../styles/product-details.css";
import { motion } from "framer-motion";
import { useState } from "react";
import ProductList from "../components/UI/ProductList";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/cartSlice";
import { toast } from "react-toastify";
import { useEffect } from "react";

import { db } from "../firebase.config";
import { doc, getDoc } from "firebase/firestore";
import UseGetData from "../custom-hooks/UseGetData";

const ProductDetails = () => {
  const reviewFormRef = useRef();
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const [tab, setTab] = useState("desc");
  const [rating, setRating] = useState(null);
  const dispatch = useDispatch();
  const reviewUser = useRef();
  const reviewrMsg = useRef();
  const [reviewObj, setreviewObj] = useState([]);
  // console.log("rating", rating);
  // const product = products.find((item) => item.id === id);
  const docRef = doc(db, "products", id);

  const { data: products } = UseGetData("products"); //to be able to find related product (you also might like this)
  useEffect(() => {
    const getProduct = async () => {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProduct(docSnap.data());
      } else {
        console.log("no prudcts");
      }
    };
    getProduct();
  }, [docRef]); // eslint-disable-next-line react-hooks/exhaustive-deps

  const {
    productName,
    imgUrl,
    price,
    // avgRating,
    // reviews,
    description,
    shortDesc,
    category,
  } = product;
  console.log("CurrentProduct->", product);
  const releatedProducts = products.filter(
    (item) => item.category === category
  );

  const submitHandler = (e) => {
    e.preventDefault();
    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewrMsg.current.value;

    setreviewObj((prev) => [
      ...prev,
      {
        userName: reviewUserName,
        text: reviewUserMsg,
        rating: rating,
      },
    ]);
    console.log("reviewObj->", reviewObj);
    toast.success("Review submitted");
    reviewFormRef.current.reset();
  };

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        image: imgUrl,
        productName,
        price,
      })
    );
    toast.success("Product added successfully");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg={6}>
              <img src={imgUrl} alt="" />
            </Col>

            <Col lg={6}>
              <div className="product__details">
                <h2>{productName}</h2>
                <div className="prodcut__rating d-flex align-items-center gap-5 mb-3">
                  <div>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-half-s-line"></i>
                    </span>
                  </div>
                  <p>{/* (<span>{avgRating}</span>ratings) */}</p>
                </div>

                <div className="d-flex align-items-center gap-5">
                  <span className="product__price">${price}</span>
                  <span>Category:{category}</span>
                </div>
                <p className="mt-3">{shortDesc}</p>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="buy__btn"
                  onClick={addToCart}
                >
                  Add to Cart
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tab__wrapper d-flex align-items-center gap-5">
                <h6
                  className={`${tab === "desc" ? "active__tab" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === "rev" ? "active__tab" : ""}`}
                  onClick={() => setTab("rev")}
                >
                  Reviews
                </h6>
              </div>
              {tab === "desc" ? (
                <div className="tab__content mt-5">
                  <p>{description}</p>
                </div>
              ) : (
                <div className="product__review mt-5">
                  <div className="review__wrapper">
                    <ul>
                      {reviewObj?.map((item, index) => (
                        <li key={index} className="mb-4">
                          <h6>{item.userName}</h6>
                          <span>{item.rating} ( rating)</span>
                          <p>{item.text}</p>
                        </li>
                      ))}
                    </ul>
                    <div className="review__form">
                      <h4>Leave Your Experience</h4>
                      <form
                        ref={reviewFormRef}
                        action=""
                        onSubmit={submitHandler}
                      >
                        <div className="form__group">
                          <input
                            type="text"
                            placeholder="Enter Name"
                            ref={reviewUser}
                            required
                          />
                        </div>

                        <div className="form__group d-flex align-items-center gap-5 rating__group">
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(1)}
                          >
                            1 <i class="ri-star-s-fill"></i>{" "}
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(2)}
                          >
                            2 <i class="ri-star-s-fill"></i>{" "}
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(3)}
                          >
                            3 <i class="ri-star-s-fill"></i>{" "}
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(4)}
                          >
                            4 <i class="ri-star-s-fill"></i>{" "}
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(5)}
                          >
                            5 <i class="ri-star-s-fill"></i>{" "}
                          </motion.span>
                        </div>

                        <div className="form__group">
                          <textarea
                            ref={reviewrMsg}
                            rows={4}
                            type="text"
                            placeholder="Review Message..."
                            required
                          />
                        </div>
                        <motion.button
                          whileTap={{ scale: 1.2 }}
                          type="submit"
                          className="buy__btn"
                        >
                          Submit
                        </motion.button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </Col>

            <Col lg="12" className="mt-5">
              <h2 className="related__title">You might also like</h2>
            </Col>
            <ProductList data={releatedProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
