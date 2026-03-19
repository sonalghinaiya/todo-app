import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { api } from "../api/axios";
import toast from "react-hot-toast";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    try {
      const res = await api.post("/auth/register", {
        name,
        email,
        password,
      });

      toast.success("Registered Successfully");
      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex items-center justify-center bg-gray-100 min-h-screen px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center">Create your account</h2>
        <p className="text-gray-500 text-md text-center mb-4">
          Signup to your TaskFlow
        </p>
        <div>
          <label className="text-sm font-semibold">Name</label>
          <input
            className="input"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm font-semibold">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            className="input"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm font-semibold">Password</label>
          <div className="relative mt-1">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              className="input"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <IoEyeOff size={18} /> : <IoEye size={18} />}
            </button>
          </div>
        </div>

        <button
          disabled={loading}
          className={`w-full px-2 py-1.5 mt-4 rounded-lg text-white ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-gray-900"
          }`}
          type="submit"
        >
          {loading ? "Signing up..." : "Signup"}
        </button>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-gray-800 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
