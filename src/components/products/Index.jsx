import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Products() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://fakestoreapi.com/products");
      setData(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  const Loadings = () => {
    return <div className="loading">...Loading</div>;
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2">All</button>
          <button className="btn btn-outline-dark me-2">Mens Clothing</button>
          <button className="btn btn-outline-dark me-2">Womens Clothing</button>
          <button className="btn btn-outline-dark me-2">
            Jwelery Clothing
          </button>
          <button className="btn btn-outline-dark me-2">Electronics</button>
        </div>
        {data.map((product) => {
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
                  <Link to="#" className="btn btn-outline-dark">
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

  useEffect(() => {
    getProducts();
  }, []);
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
