import { useEffect, useState } from "react";
import catimg from './images/electronics.jpg'
import catimg1 from './images/womenclothing.jpg'
import catimg2 from './images/jewllery.jpg'
import catimg3 from './images/menclothing.jpg'
import { Link } from "react-router-dom";

function Categories() {
  const [dat, setDat] = useState([]);
  const datimages = {
    electronics: catimg,
    jewelery: catimg2,
    "men's clothing": catimg3,
    "women's clothing": catimg1
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((json) => setDat(json));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-primary">Categories</h1>
      <div className="row">
        {dat.map((category, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column align-items-center">
                <h5 className="card-title text-capitalize">{category}</h5>
                <img
                  src={datimages[category]}
                  className="card-img-top mb-3"
                  alt={category}
                  style={{ height: "200px", objectFit: "contain", padding: "20px" }}
                />
                <Link to={`/${category}`} className="btn btn-primary mt-auto">Shop Products</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;