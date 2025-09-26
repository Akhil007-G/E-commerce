import { useState } from 'react';

function Register() {
  const [fo2, setfo22] = useState({ 
    name: "", 
    username: "", 
    email: "", 
    password: "", 
    confirmpassword: "" 
  });

  const Change = (e) => {
    const { name, value } = e.target;
    
    setfo22((values) => ({
      ...values,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration Data:", fo2);
    alert(`information saved ${fo2.username}`);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center mb-4">SIGNUP</h1>
          <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm">
            
            <div className="mb-3">
              <label htmlFor="nameInput" className="form-label">Name:</label>
              <input 
                id="nameInput"
                type="text"
                name="name"
                className="form-control"
                value={fo2.name}
                onChange={Change}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="usernameInput" className="form-label">Username:</label>
              <input 
                id="usernameInput"
                type="text"
                name="username"
                className="form-control"
                value={fo2.username}
                onChange={Change} 
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="emailInput" className="form-label">Email:</label>
              <input 
                id="emailInput"
                type="email"
                name="email"
                className="form-control"
                value={fo2.email}
                onChange={Change} 
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="passwordInput" className="form-label">Password:</label>
              <input 
                id="passwordInput"
                type="password"
                name="password"
                className="form-control"
                value={fo2.password}
                onChange={Change} 
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="confirmPasswordInput" className="form-label">Confirm Password:</label>
              <input 
                id="confirmPasswordInput"
                type="password"
                name="confirmpassword"
                className="form-control"
                value={fo2.confirmpassword}
                onChange={Change} 
                required
              />
            </div>

            <button type="submit" className="btn btn-success w-100 mt-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;