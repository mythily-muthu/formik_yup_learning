import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import './App.css';

function App() {

  let initialValues = {
    email: "",
    password: "",
  };

  let loginSchema = Yup.object().shape({
    email: Yup.string().email("should be valid email").required("should be required"),
    password: Yup.string().min(4, "password length should be greater than 3").max(8, "password length should be less than 9").required("should be required"),
  })

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            onSubmit={(values) => {
              console.log("submitted value:", values);
              alert("Form is validated! Submitting the form...");
            }}
          >
            {({ touched, errors, values }) => {
              return <div>
                <div className="row mb-5">
                  <div className="col-lg-12 text-center">
                    <h1 className="mt-5">Login Form</h1>
                  </div>
                </div>
                <Form>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Field

                      type="email"
                      name="email"
                      className={`mt-2 form-control ${touched.email
                        && errors.email ? "is-invalid" : ""}`}
                    />
                    <ErrorMessage name='email' />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password" className="mt-3">
                      Password
                    </label>
                    <Field
                      type="password"
                      name="password"
                      className={`mt-2 form-control ${touched.password
                        && errors.password ? "is-invalid" : ""}`}
                    />
                    <ErrorMessage name="password" className='error_message_text' />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-danger btn-block mt-4"
                  >
                    Submit
                  </button>
                </Form>
              </div>
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default App;
