import React, { useContext } from "react";

interface RecordDetailsProps {
  record: {
    productName: string;
    productDescription: string;
    imageLink: string;
    productDate: string;
  };
}

function RecordDetails({
  record: { productName, productDescription, imageLink, productDate }
}: RecordDetailsProps) {
  return (
    <div className="record-details-container flex-parent">
      <div className="product-image flex-1">
        {imageLink ? (
          <img src={imageLink} alt="product image"></img>
        ) : (
          <div className="image-placeholder flex-parent"></div>
        )}
      </div>

      <div className="product-content margined-flex-1">
        <h2 className="product-title flex-1">{productName}</h2>
        <div className="product-date flex-1">
          Created on <span>{productDate}</span>
        </div>

        <div className="product-description flex-1">
          {productDescription ? productDescription : "No description set"}
        </div>

        <div className="product-actions flex-1">
          <button className="default">Edit</button>
          <button className="danger">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default RecordDetails;
