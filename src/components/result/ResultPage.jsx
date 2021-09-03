import React from "react";
import { Link, useParams } from "react-router-dom";
import "./myStyle.css";
function ResultPage() {
  const { id } = useParams();
  return (
    <div className="result-container">

     <h2> BarCode : {id}</h2>
      <Link to="/"><button>Scan More Barcode</button></Link>
    </div>
  );
}

export default ResultPage;
