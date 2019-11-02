import React from "react";

interface RecordProps {
  record: {
    imageLink: string;
  };
}

function Record({ record }: RecordProps) {
  return (
    <div className="record-container">
      <div className="product-image">
        {record.imageLink ? (
          <img></img>
        ) : (
          <div className="image-placeholder"></div>
        )}
      </div>

      <div className="data-preview">
        <h2>Name</h2>
        <div>Date</div>
      </div>
    </div>
  );
}

export default Record;
