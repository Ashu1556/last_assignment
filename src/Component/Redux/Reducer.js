const initialState = {
  name: "ashutosh",
  productdata: [],
  productdata2: [],
  addcart: [],
};

const basicReducer = (storedata = initialState, action) => {
  if (action.type === "productdata") {
    return {
      ...storedata,
      productdata: action.payload,
    };
  } else if (action.type === "cartdata") {
    return {
      ...storedata,
      addcart: action.payload,
    };
  } else if (action.type === "productdata2") {
    return {
      ...storedata,
      productdata2: action.payload,
    };
  }
  return storedata;
};
export default basicReducer;
