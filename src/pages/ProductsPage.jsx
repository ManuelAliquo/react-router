import axios from "axios";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log(res.data);

      setProducts(res.data);
    });
  }, []);

  return (
    <div className="container py-5">
      <h1 className="mb-4">Products</h1>
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-3">
        {products.map((product) => {
          return (
            <div key={product.id} className="col">
              <div className="product-card card">
                <img src={product.image} className="card-img-top p-2" alt="Product Image" />
                <div className="card-body">
                  <h5 className="card-title mb-1">{product.title}</h5>
                  <div className="card-text">{product.category}</div>
                  <div className="card-text">
                    <strong>{product.price}$</strong>
                  </div>
                  <div className="card-text mb-2">
                    {product.rating.rate}⭐ <br /> {product.rating.count} ratings
                  </div>
                  <p className="card-text border-top">{product.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
