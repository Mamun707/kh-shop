import axios from "axios";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const getProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://fakestoreapi.com/products");
      setFilter(res.data);
      setData(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  const Loadings = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height="350px" />
        </div>
        <div className="col-md-3">
          <Skeleton height="350px" />
        </div>
        <div className="col-md-3">
          <Skeleton height="350px" />
        </div>
        <div className="col-md-3">
          <Skeleton height="350px" />
        </div>
      </>
    );
  };
  const filterProducts = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    console.log(updatedList);
    setFilter(updatedList);
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => {
              setFilter(data);
            }}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProducts("men's clothing")}
          >
            Mens Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProducts("women's clothing")}
          >
            Womens Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProducts("jewelery")}
          >
            Jwelery Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProducts("electronics")}
          >
            Electronics
          </button>
        </div>
        {filter.map((product) => {
          return (
            <div className="col-md-3 mb-4" key={product.id}>
              <div
                className="card h-100 text-center p-5"
                // style={{ width: "18rem" }}
              >
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  height="250px"
                />
                <div className="card-body">
                  <h5 className="card-title ">
                    {product.title.substring(0, 11)}...
                  </h5>
                  <p className="card-text lead fw-bold">${product.price}</p>
                  <Link
                    to={`/productdetails/${product.id}`}
                    className="btn btn-outline-dark"
                  >
                    Buy Now{" "}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-12 mb-5">
          <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? <Loadings /> : <ShowProducts />}
      </div>
    </div>
    // <div>
    //   {data.map((item) => {
    //     return <div key={item.id}>{item.title}</div>;
    //   })}
    // </div>
  );
}

export default Products;
