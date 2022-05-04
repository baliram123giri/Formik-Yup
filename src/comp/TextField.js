import { ErrorMessage, useField } from "formik";
import React from "react";

export default function TextField({ lable, ...props }) {
  const [field, meta] = useField(props);
  return (
    <>
      <div className="mb-3">
        <label htmlFor={"FirstName"}>{lable}</label>
        <input {...field} {...props} className={`form-control ${meta.touched && meta.error ? "border border-danger " : ""}`} />
        <div className="my-2 text-danger">
            <ErrorMessage name={field.name}  />
        </div>
      </div>
    </>
  );
}
