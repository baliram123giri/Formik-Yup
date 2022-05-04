import { Field, useField } from "formik";
import React from "react";

export default function SelectField({ lable, ...props }) {
  const [field, meta] = useField(props);
  return (
    <>
      <div className="mb-3">
        <Field
          component={"select"}
          {...field}
          {...props}
          className={`form-control ${
            meta.touched && meta.error ? "border border-danger " : ""
          }`}
        >
          <option value="">{lable}</option>
          {props.data.map((data, index) => {
            return (
              <option value={data} key={index}>
                {data}
              </option>
            );
          })}
        </Field>
      </div>
    </>
  );
}
