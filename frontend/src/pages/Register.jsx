import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { api } from "../api/axios";
import toast from "react-hot-toast";
import Button from "../components/Button";
import Input from "../components/Input";

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
          <Input
            label="Name"
            type="text"
            value={name}
            className="input"
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </div>

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
        </div>

        <Button type="submit" className="w-full" loading={loading}>
          Signup
        </Button>

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
