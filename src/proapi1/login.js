import { useState } from "react";


function Login() {
  const [Fo, setFo] = useState({});
  const handleChange = (e) => {  
    const name = e.target.name;
    const value = e.target.value;

    setFo(values => ({ 
      ...values, 
      [name]: value
     
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(Fo.firstname, Fo.password);
    alert(`Username: ${Fo.firstname}, Password: ${Fo.password}`);
  }

  
  return (
    
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Login</h2>
          
          <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm">

            
            <div className="mb-3"> 
              <label htmlFor="usernameInput" className="form-label">Username:</label>
              <input
                id="usernameInput"
                type="text"
                name="firstname"  
                className="form-control"
                value={Fo.firstname || ''} 
                onChange={handleChange}
                placeholder="Enter username"
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
                value={Fo.password || ''} 
                onChange={handleChange}
                placeholder="Enter password"
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;