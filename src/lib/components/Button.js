import React from "react";

const Button = (props) => {
  const { label, onClick, value, disabled, name, type, className } = props;
  return (
    <button
      name={name}
      value={value}
      className={className}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
