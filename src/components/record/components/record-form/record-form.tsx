import React from "react";

function RecordForm() {
  return (
    <div className="record-form-container flex-parent">
      <div className="product-image-preview flex-1">
        {/* {record.imageLink ? (
          <img></img>
        ) : (
          <div className="image-placeholder flex-parent"></div>
        )} */}
      </div>

      <div className="product-form-body margined-flex-1">
        {/* insert form here */}

        <div className="product-actions">
          <button className="default">Save</button>
        </div>
      </div>
    </div>
  );
}

export default RecordForm;
