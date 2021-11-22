import React from "react";

export function Datetime() {
  const current = new Date();
  const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;

  return (
    <div>
      <h5>{date}</h5>
    </div>
  );
}