import React, { Fragment, useState } from "react";
import StudentSignIn from "./studentSignIn";
import TeacherSignIn from "./teacherSignIn";

const SignIn = () => {
  const [form, setForm] = useState("teacher");

  // funtion for switching between forms
  const setFormHandler = (type: string) => {
    setForm(type);
  };

  return (
    <Fragment>
      {form === "teacher" ? (
        <TeacherSignIn onSet={setFormHandler} />
      ) : (
        <StudentSignIn onSet={setFormHandler} />
      )}
    </Fragment>
  );
};

export default SignIn;
