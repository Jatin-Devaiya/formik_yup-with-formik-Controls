import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const EnrollmentForm = () => {
  const dropdownOptions = [
    { key: "select your course", value: "" },
    { key: "React", value: "react" },
    { key: "Angular", value: "angular" },
    { key: "Vue", value: "vue" },
  ];
  const checkboxOptions = [
    { key: "HTML", value: "html" },
    { key: "CSS", value: "css" },
    { key: "JavaScript", value: "javascript" },
  ];

  const initialValues = {
    email: "",
    bio: "",
    course: "",
    skills: [],
    courseData: null,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invilid email format").required("Required"),
    bio: Yup.string().required("Required"),
    course: Yup.string().required("Required"),
    courseData: Yup.date().required("Required").nullable(),
  });

  const onSubmit = (values) => {
    console.log("Form Data", values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
            />
            <FormikControl
             control="textarea"
              label="Bio"
               name="bio" />

            <FormikControl
              control="select"
              label="Course"
              name="course"
              options={dropdownOptions}
            />
            <FormikControl
              control="checkbox"
              label="Your skillset"
              name="skills"
              options={checkboxOptions}
            />
            <FormikControl
              control="date"
              label="Course Date"
              name="courseDate"
            />
            <button type="submit" disabled={!formik.isValid}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default EnrollmentForm;
