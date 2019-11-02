import React, { useContext } from "react";

interface RecordDetailsProps {
  record: {
    imageLink: string;
  };
}

function RecordDetails({ record }: RecordDetailsProps) {
  return (
    <div className="record-details-container flex-parent">
      <div className="product-image flex-1">
        {record.imageLink ? (
          <img></img>
        ) : (
          <div className="image-placeholder flex-parent"></div>
        )}
      </div>

      <div className="product-content margined-flex-1">
        <h2 className="product-title">Name</h2>
        <div className="date">
          Created on <span>February 25, 2019</span>
        </div>

        <div className="product-description">Description here</div>

        <div className="product-actions">
          <button className="default">Edit</button>
          <button className="danger">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default RecordDetails;
