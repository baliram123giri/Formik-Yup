import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextField from "./TextField";
import SelectField from "./SelectField";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name Too Short!")
    .max(50, "Name Too Long!")
    .required("Name is required field"),
  game: Yup.string().required("Game is required field"),
  phone: Yup.string()
    .required("Phone is required field")
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "Phone number to short")
    .max(10, "Phone number to long"),
  password: Yup.string()
    .required("Password is required field")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
});
export default function BasicForm() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 mx-auto p-4 shadow bg-white">
            <Formik
              initialValues={{ name: "", phone: "", password: "", game: "" }}
              onSubmit={(values) => {
                console.log(values);
              }}
              validationSchema={SignupSchema}
            >
              <Form>
                <TextField lable={"Name"} type="text" name="name" />
                <TextField lable={"Phone Number"} type="text" name="phone" />
                <TextField lable={"Password"} type="password" name="password" />
                <SelectField
                  lable={"Select Game Name"}
                  name="game"
                  data={["Pubg", "Ludo"]}
                />
                <div className="my-2 text-danger">
                  <ErrorMessage name="game" />
                </div>
                <button className="btn btn-primary btn-sm mb-3">
                  Register
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}
