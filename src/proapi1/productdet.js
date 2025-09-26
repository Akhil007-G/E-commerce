import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Productdet() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);


  return (
    <div className="container my-5">
      <div className="card shadow-lg product-card">
        <div className="row g-0">
          
          <div className="col-md-5 d-flex align-items-center justify-content-center p-3">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid rounded product-img"
            />
          </div>

       
          <div className="col-md-7">
            <div className="card-body">
              <h2 className="card-title fw-bold">{product.title}</h2>
              <p className="text-capitalize">Category: {product.category}</p>
              <p className="card-text">{product.description}</p>

              <h3 className="text-success fw-bold mb-4">
                ${product.price}
              </h3>

              <button className="btn btn-primary btn-lg me-3">
                Add to Cart
              </button>
              <button className="btn btn-outline-secondary btn-lg">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productdet;
