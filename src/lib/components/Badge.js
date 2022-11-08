import React from "react";

const Badge = (props) => {
  const { value, className } = props;
  return (
    <div className={className}>
      <h1>{value}</h1>
    </div>
  );
};

export default Badge;
