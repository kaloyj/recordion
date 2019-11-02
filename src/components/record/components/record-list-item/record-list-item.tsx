import React, { useContext } from "react";
import { RecordCardContext } from "../../../../context";

interface RecordProps {
  record: {
    productName: string;
    productDescription: string;
    imageLink: string;
    productDate: Date;
  };
}

function RecordListItem({
  record: { productName, imageLink, productDate }
}: RecordProps) {
  const { setShowRecordCard } = useContext(RecordCardContext);
  return (
    <div
      className="record-list-item-container flex-parent"
      onClick={() => setShowRecordCard("test")}
    >
      <div className="product-image">
        {imageLink ? (
          <img src={imageLink}></img>
        ) : (
          <div className="image-placeholder"></div>
        )}
      </div>

      <div className="data-preview">
        <h2>{productName}</h2>
        <div>{productDate}</div>
      </div>
    </div>
  );
}

export default RecordListItem;
