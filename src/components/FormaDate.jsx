import React from "react";

const FormaDate = ({ dateString }) => {
  const date = new Date(dateString);

  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return <span>{formattedDate}</span>;
};

export default FormaDate;
