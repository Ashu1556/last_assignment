import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import myStore from "./Redux/store";

const Productdetails = () => {
  const { id } = useParams();

  const { productdata2 } = useSelector((storedata) => {
    return storedata;
  });

  useEffect(() => {
    const productdata = async () => {
      const data = await fetch(`https://fakestoreapi.com/products/${id}`);
      const newdata = await data.json();
      console.log(newdata);
      myStore.dispatch({
        type: "productdata2",
        payload: newdata,
      });
    };

    productdata();
  }, []);
  return (
    <div
      style={{
        margin: "50px",
        marginLeft: "400px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "50%",
        height: "100vh",
      }}
    >
      <img src={productdata2.image} height={400} width={400} alt="" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "100%",
          height: "100%",
        }}
      >
        <span>
          <b>Category:</b>
          <spna style={{ fontSize: "18px", color: "gray" }}>
            {productdata2.category}
          </spna>
        </span>
        <span>
          <b>Description:</b>
          <span style={{ fontSize: "16px", color: "gray" }}>
            {productdata2.description}
          </span>
        </span>
        <span>
          <b>Title:</b>
          <span style={{ fontSize: "18px", color: "gray" }}>
            {productdata2.title}
          </span>
        </span>
        <span>
          <b>Price:</b>
          <span style={{ fontSize: "18px", color: "gray" }}>
            {productdata2.price}
          </span>
        </span>
      </div>
    </div>
  );
};

export default Productdetails;
