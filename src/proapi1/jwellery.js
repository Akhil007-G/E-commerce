import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import StarRating from "./starraing"; 

function Jewelery() {
  const { category } = useParams();
  const [jwel, setjwel] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/jwel/category/${category}`)
      .then((res) => res.json())
      .then((data) => setjwel(data));
  }, [category]);

  return (
    <div className="container">
      <h1 className="mb-4 text-primary text-capitalize">{category}</h1>
      <Link to="/" className="btn btn-light back-btn mb-4">
        ⬅ Back to Categories
      </Link>

      <div className="row g-4">
        {jwel.map((product) => (
          <div className="col-sm-6 col-md-4 col-lg-3" key={product.id}>
            <div className="card h-100 d-flex flex-column">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
              />
              <div className="card-body text-center d-flex flex-column">
                <h6 className="title flex-grow-1">{product.title}</h6>
                
        
                <StarRating rating={product.rating.rate} />
                <p className="price mt-auto">${product.price.toFixed(2)}</p>
                <Link to ={`/product/${product.id}`} className="btn btn-primary mt-auto">Shop jwel</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jewelery;