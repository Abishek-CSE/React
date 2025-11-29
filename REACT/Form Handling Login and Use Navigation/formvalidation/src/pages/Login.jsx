import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Formstyle.css"; 

const Login = () => {
  const [formdata, setFormdata] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  // Handle input changes
  const handleChangeDatas = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const usersdatas = JSON.parse(localStorage.getItem("usersdetails")) || [];

    const fetchdata = usersdatas.find(
      (user) =>
        user.email === formdata.email && user.password === formdata.password
    );

    if (fetchdata) {
      alert("Login Successful!");
      setFormdata({ email: "", password: "" });
      navigate("/dashboard"); // Navigate to dashboard
    } else {
      alert("Your Email or Password is Incorrect");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-white">
  <div className="form-container">
    <h2 className="text-2xl font-bold text-center mb-4">Login Form</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="block mb-1 font-medium">Email</label>
            <input
              name="email"
              type="email"
              value={formdata.email}
              onChange={handleChangeDatas}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Password</label>
            <input
              name="password"
              type="password"
              value={formdata.password}
              onChange={handleChangeDatas}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-amber-500 text-white py-2 rounded-md hover:bg-amber-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

