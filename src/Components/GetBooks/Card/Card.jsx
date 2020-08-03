import React from "react";
import "./CardStyle.css";

export default function Card({ Name, Writer, Publisher }) {
  return (
    <div className="card">
      <h1 className="card-text">{Name}</h1>
      <h1 className="card-text">{Writer}</h1>
      <h1 className="card-text">{Publisher}</h1>
    </div>
  );
}
