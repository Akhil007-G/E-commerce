import React, { useEffect, useState } from "react";


function Protable() {
  const [products, setProducts] = useState([]);
  const [edit, setedit] = useState(false);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) =>
        console.error("content not catched look into api link", err)
      );
  }, []);

  const handleEdit = (id) => {
    setedit(id);
  };

  
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Product Table</h2>
      <table className="table table-striped table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) =>
            edit === product.id ? (
             
              <tr key={product.id}>
                <td>
                  <input type="number" default value={product.id} />
                </td>
                <td>
                  <input type="text" default value={product.title} />
                </td>
                
                <td>
                  <input type="text"default value={product.price} />
                </td>
                <td className="text-truncate" style={{ maxWidth: "300px" }}>
                  <input type="text"default value={product.description} />
                </td>
                <td>
                  <input type="text"default value={product.category}  />
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-success" on click> Save</button>
                </td>
                <td>
                  <button className="btn btn-sm btn-danger">Delete</button>
                </td>
              </tr>
            ) : (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>${product.price}</td>
                <td className="text-truncate" style={{ maxWidth: "300px" }}>
                  {product.description}
                </td>
                <td>{product.category}</td>
                <td>
                  <button
                    className="btn btn-sm btn-warning"
                    onClick={() => handleEdit(product.id)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button className="btn btn-sm btn-danger">Delete</button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Protable;
