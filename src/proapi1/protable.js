import React, { useEffect, useState } from "react";

function Protable() {
  const [products, setProducts] = useState([]);
  const [edit, setEdit] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: ""
  });

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) =>
        console.error("content not catched look into api link", err)
      );
  }, []);

  const handleEdit = (product) => {
    setEdit(product.id);
    setFormData({
      title: product.title,
      description: product.description,
      category: product.category,
      price: product.price
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSave = () => {
    const product = formData;
    fetch(`https://fakestoreapi.com/products/${edit}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product)
    })
      .then((res) => res.json())
      .then((updated) => {
        const updatedList = products.map((p) =>
          p.id === edit ? { ...p, ...updated } : p
        );
        setProducts(updatedList);
        setEdit(null);
      })
      .catch((err) => console.error("Error updating product:", err));
  };

  const handleDelete = (id) => {
    fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE"
    })
      .then(() => {
        const filtered = products.filter((p) => p.id !== id);
        setProducts(filtered);
      })
      .catch((err) => console.error("Error deleting product:", err));
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
                <td>{product.id}</td>
                <td>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                  />
                </td>
                <td className="text-truncate" style={{ maxWidth: "300px" }}>
                  <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-success"
                    onClick={handleSave}
                  >
                    Save
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
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
                    onClick={() => handleEdit(product)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
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
