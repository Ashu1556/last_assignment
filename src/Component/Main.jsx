import React, { useEffect } from "react";
import myStore from "./Redux/store";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Main = () => {
  const { productdata } = useSelector((storedata) => {
    return storedata;
  });

  let newdata;

  const getdata = async () => {
    const data = await fetch(`https://fakestoreapi.com/products`);
    newdata = await data.json();
    console.log(newdata);
    myStore.dispatch({
      type: "productdata",
      payload: newdata,
    });
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
          gap: "32px",
          margin: "50px 50px",
        }}
      >
        {productdata.map((item) => {
          return (
            <div
              style={{
                height: "300px",
                width: "300px",
                boxShadow: "0px 0px 20px black",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
                paddingTop: "10px",
              }}
            >
              <img src={item.image} height={200} width={200} alt="item image" />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  width: "100%",
                }}
              >
                <Link to={`/productDetails/${item.id}`}>
                  {" "}
                  <button>More Details</button>
                </Link>

                <button
                  onClick={() => {
                    let id = item.id;
                    myStore.dispatch({
                      type: "cartdata",
                      payload: id,
                    });
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
