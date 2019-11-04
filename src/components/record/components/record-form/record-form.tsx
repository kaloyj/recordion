import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import DatePicker from "react-datepicker";
import * as Yup from "yup";
import { RecordCardContext, RecordDispatch } from "../../../../context";
import { Record } from "../../../../interfaces";
import { SET_RECORDS_ID_TRACKER } from "../../../../context/record-context";

const RecordSchema = Yup.object().shape({
  productName: Yup.string()
    .min(2, "Product Name must be more than 2 characters.")
    .max(64, "Product Name must not exceed 64 characters.")
    .required("Product Name is required"),
  productDate: Yup.string().required("Product Date is required"),
  imageLink: Yup.string().url("Invalid URL format (https://example.com)"),
  productDescription: Yup.string().max(
    240,
    "Product Description must not exceed 240 characters."
  )
});

interface RecordFormProps {
  record?: Record;
  idTracker: number;
  setCurrentAction: React.Dispatch<any>;
}

function RecordForm({ record, idTracker, setCurrentAction }: RecordFormProps) {
  const { dispatch } = useContext(RecordDispatch);
  const { setShowRecordCard } = useContext(RecordCardContext);
  const isFirstCard = Object.keys(localStorage).length == 0;

  return (
    <Formik
      validationSchema={RecordSchema}
      initialValues={
        record && record.productName
          ? record
          : {
              id: idTracker,
              productName: "",
              productDate: "",
              productDescription: "",
              imageLink: ""
            }
      }
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          localStorage.setItem(`${values.id}`, JSON.stringify(values));
          dispatch({
            type: SET_RECORDS_ID_TRACKER,
            payload: idTracker + 1
          });
          setSubmitting(false);
          if (record && record.productName) {
            setShowRecordCard(values.id);
            setCurrentAction("view");
          } else {
            setShowRecordCard(null);
            setCurrentAction(null);
          }
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
              {isFirstCard ? (
                <>
                  <h3 className="flex-1">Your list is empty.</h3>
                  <h3 className="flex-1"> Add an item.</h3>
                </>
              ) : null}

              <div className="flex-1 field-item">
                <label htmlFor="productName" className="flex-1">
                  Product Name
                </label>
                <Field
                  type="text"
                  id="productName"
                  aria-describedby="productName"
                  name="productName"
                  className="flex-1"
                />
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
                      setFieldValue("productDate", val);
                    }}
                    onChangeRaw={e => e.preventDefault()}
                    id="productDate"
                    aria-describedby="productDate"
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
                <Field
                  type="text"
                  name="imageLink"
                  id="imageLink"
                  aria-describedby="imageLink"
                  className="flex-1"
                />
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
                  id="productDescription"
                  aria-describedby="productDescription"
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
