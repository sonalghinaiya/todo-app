function Button({ children, onClick, type = "button", loading, className }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading}
      className={`px-2 py-1.5 mt-4 rounded-lg text-white ${
        loading ? "bg-gray-400 cursor-not-allowed" : "bg-black"
      } ${className}`}
    >
      {loading ? "Please wait..." : children}
    </button>
  );
}

export default Button;
