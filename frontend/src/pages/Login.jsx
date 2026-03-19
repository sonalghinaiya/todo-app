import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { api } from "../api/axios.js";
import toast from "react-hot-toast";
import Button from "../components/Button.jsx";
import Input from "../components/Input.jsx";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.data));

      toast.success("Login Successfully");

      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 min-h-screen px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow w-full max-w-sm"
      >
        <h2 className="font-bold text-center text-2xl">Welcome back</h2>
        <p className="text-md text-gray-500 text-center mb-5">
          Login to your Taskflow account
        </p>
        <div>
          <Input
            label="Email"
            type="email"
            value={email}
            className="input"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </div>
        <div>
          <Input
            label="Password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            value={password}
            className="input"
            onChange={(e) => setPassword(e.target.value)}
            rightIcon={
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <IoEyeOff size={18} /> : <IoEye size={18} />}
              </span>
            }
          />
          <Button type="submit" className="w-full" loading={loading}>
            Login
          </Button>
        </div>

        <p className="text-sm text-center mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-gray-800 hover:underline">
            Sign Up
          </Link>{" "}
        </p>
      </form>
    </div>
  );
}

export default Login;
