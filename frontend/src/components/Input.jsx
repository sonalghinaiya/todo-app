function Input({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  className,
  rightIcon,
}) {
  return (
    <div className="mb-3">
      {label && <label className="text-sm font-semibold">{label}</label>}
      <div className="relative mt-1">
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className={`${className}`}
        />
        {rightIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500">
            {rightIcon}
          </div>
        )}
      </div>
    </div>
  );
}

export default Input;
