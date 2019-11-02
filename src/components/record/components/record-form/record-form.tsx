import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import DatePicker from "react-datepicker";
import * as Yup from "yup";
import { RecordCardContext } from "../../../../context";

const RecordSchema = Yup.object().shape({
  productName: Yup.string()
    .min(2, "Product Name must be more than 2 characters.")
    .max(64, "Product Name must not exceed 64 characters.")
    .required("Product Name is required"),
  productDate: Yup.string().required("Product Date is required"),
  productDescription: Yup.string().max(
    240,
    "Product Description must not exceed 240 characters."
  )
});

interface RecordFormProps {
  records: Array<{
    productName: string;
    productDescription: string;
    imageLink: string;
    productDate: string;
  }>;
  setRecords: React.Dispatch<React.SetStateAction<{}>>;
}

function RecordForm({ records, setRecords }: RecordFormProps) {
  const { setShowRecordCard } = useContext(RecordCardContext);
  const isFirstCard = records && records.length == 0;
  return (
    <Formik
      validationSchema={RecordSchema}
      initialValues={{
        productName: "",
        productDate: new Date(),
        productDescription: "",
        imageLink: ""
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setRecords([
            ...records,
            { ...values, productDate: values.productDate.toDateString() }
          ]);
          setSubmitting(false);
          setShowRecordCard(null);
        }, 400);
      }}
    >
      {({ isSubmitting, isValidating, values, setFieldValue }) => (
        <div className="record-form-container flex-parent">
          <div className="product-image-preview flex-1">
            {values && values.imageLink ? (
              <img
                src={values.imageLink}
                onError={e => {
                  // do something here to validate URL
                }}
                alt="product image"
              ></img>
            ) : (
              <span>Image Link Preview</span>
            )}
          </div>

          <div className="product-form-body margined-flex-1">
            <Form className="flex-1">
              {isFirstCard ? <h3>Add your first item.</h3> : null}

              <div className="flex-1 field-item">
                <label htmlFor="productName" className="flex-1">
                  Product Name
                </label>
                <Field type="text" name="productName" className="flex-1" />
                <ErrorMessage
                  name="productName"
                  component="div"
                  className="error-message flex-1"
                />
              </div>

              <div className="flex-1 field-item">
                <label htmlFor="productDate" className="flex-1">
                  Product Date
                </label>
                <div className="flex-1">
                  <DatePicker
                    selected={
                      (values &&
                        values.productDate &&
                        new Date(values.productDate)) ||
                      null
                    }
                    onChange={(val: Date) => {
                      console.log("vallll", { val });
                      setFieldValue("productDate", val);
                    }}
                  />
                </div>

                <ErrorMessage
                  name="productDate"
                  component="div"
                  className="error-message flex-1"
                />
              </div>

              <div className="flex-1 field-item">
                <label htmlFor="imageLink" className="flex-1">
                  Image Link
                </label>
                <Field type="text" name="imageLink" className="flex-1" />
                <ErrorMessage
                  name="imageLink"
                  component="div"
                  className="error-message flex-1"
                />
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
                <ErrorMessage
                  name="productDescription"
                  component="div"
                  className="error-message flex-1"
                />
              </div>

              <div className="product-actions">
                <button
                  type="submit"
                  className="default"
                  disabled={isSubmitting || isValidating}
                >
                  Save
                </button>
              </div>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
}

export default RecordForm;
