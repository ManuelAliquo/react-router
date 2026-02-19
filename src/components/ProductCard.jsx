export default function ProductCard({ product }) {
  return (
    <div className="col">
      <div className="product-card card">
        <img src={product.image} className="card-img-top p-2" alt="Product Image" />
        <div className="card-body">
          <h5 className="card-title mb-1">{product.title}</h5>
          <div className="card-text">
            {product.price}$ <small>- {product.rating.rate}/5⭐</small>
          </div>
        </div>
      </div>
    </div>
  );
}
