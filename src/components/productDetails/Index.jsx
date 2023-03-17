import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function ProductDetails() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const getProducts = async () => {
    try {
      // setLoading(true);
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      //setFilter(res.data);
      setData(res.data);
      // setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProducts();
  }, [id]);
  return (
    <div>
      <p>{data.title}</p>
    </div>
  );
}

export default ProductDetails;
