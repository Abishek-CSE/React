import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Formstyle.css";  

const Register = () => {
  const [formdata, setFormData] = useState({firstname: "",lastname: "",email: "",phonenumber: "",Location: "",password: ""});
  const navigation = useNavigate();
  const handlechnagedata = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  }
  const formsubmit = (e) => {
    e.preventDefault();
    const Data = JSON.parse(localStorage.getItem("usersdetails")) || [];
    Data.push(formdata);
    localStorage.setItem("usersdetails", JSON.stringify(Data));
    alert("Successfully Registered");
    navigation("/login");
    setFormData({firstname: "",lastname: "",email: "",phonenumber: "",Location: "", password: "",});
  }
  return (
   <div className="min-h-screen flex items-center justify-center text-white   ">
    <div className="form-container">
    <h2 className="text-2xl font-bold text-center">Register Form</h2>
        <form onSubmit={formsubmit}>
          <div>
            <label className="block mb-1 font-medium">First Name</label>
            <input name="firstname"type="text"value={formdata.firstname}className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"placeholder="Enter your first name"onChange={handlechnagedata}required/>
          </div>
          <div>
            <label className="block mb-1 font-medium">Last Name</label>
            <input name="lastname"type="text"value={formdata.lastname}className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"placeholder="Enter your last name"onChange={handlechnagedata} required/>
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input name="email" type="email"value={formdata.email}className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Enter your email"onChange={handlechnagedata} required/>
          </div>
          <div>
            <label className="block mb-1 font-medium">Phone Number</label>
            <input name="phonenumber"type="number" value={formdata.phonenumber}className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"placeholder="Enter your mobile number"onChange={handlechnagedata} required/>
          </div>
          <div>
            <label className="block mb-1 font-medium">Location</label>
            <input name="Location"type="text"value={formdata.Location}className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"placeholder="Enter your location"onChange={handlechnagedata}required />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Password</label>
            <input name="password"type="password"value={formdata.password}className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"placeholder="Enter your password"onChange={handlechnagedata}required />
          </div>
          <button type="submit"className="w-full bg-amber-500 text-white py-2 rounded-md hover:bg-amber-700">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;

