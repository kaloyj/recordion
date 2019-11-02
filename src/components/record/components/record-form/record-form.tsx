import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

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
        <Formik
          initialValues={{ productName: "" }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="flex-1">
              <div className="flex-1 field-item">
                <label htmlFor="productName" className="flex-1">
                  Product Name
                </label>
                <Field type="text" name="productName" className="flex-1" />
                <ErrorMessage name="productName" component="div" />
              </div>

              <div className="flex-1 field-item">
                <label htmlFor="productDate" className="flex-1">
                  Product Date
                </label>
                <Field type="text" name="productDate" className="flex-1" />
                <ErrorMessage name="productDate" component="div" />
              </div>

              <div className="flex-1 field-item">
                <label htmlFor="imageLink" className="flex-1">
                  Image Link
                </label>
                <Field type="text" name="imageLink" className="flex-1" />
                <ErrorMessage name="imageLink" component="div" />
              </div>

              <div className="flex-1 field-item">
                <label htmlFor="productDescription" className="flex-1">
                  Product Description
                </label>
                <Field
                  component="textarea"
                  name="productDescription"
                  className="flex-1"
                />
                <ErrorMessage name="productDescription" component="div" />
              </div>

              <div className="product-actions">
                <button type="submit" className="default">
                  Save
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default RecordForm;
