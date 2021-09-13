import React from "react";
import "./myStyle.css";
function ProductCard({ productInfo }) {
  return (
    <div className="card">
      <img
        src="https://yt3.ggpht.com/ytc/AKedOLStkGBEFl44NfTgSBKL5A501NX7z2klSTLsbLfJRQ=s900-c-k-c0x00ffffff-no-rj"
        alt="Denim Jeans"
        style={{ width: "100%" }}
      />
      <h1 style={{ textTransform: "capitalize" }}>{productInfo.title}</h1>
      <p>{productInfo.description}</p>
      <p className="price">$ {productInfo.price.salePrice}</p>
      <p> MRP Price: $ {productInfo.price.mrp}</p>
      <p> Saved Amount: $ {productInfo.price.youSaved}</p>
      <p>{productInfo.inventory.inStock ? "Instock" : "Out of Stock"}</p>
    </div>
  );
}

export default ProductCard;
