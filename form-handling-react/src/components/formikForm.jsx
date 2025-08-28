import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const FormikForm = () => (
    <Formik
       initialValues={{username: '', email: '', password: ''}}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        alert('User registered successfully!');
        resetForm();
      } }
    >
        {({ isSubmitting }) => (
          <form>
            <Field type="text" name="username" placeholder="Jane Dock" />
            <ErrorMessage name="username" component="div" style={{color: 'red'}} />

            <Field type="email" name="email" placeholder="Janedock@gmail.com" />
            <ErrorMessage name="email" component="div" style={{color: 'red'}} />

            <Field type="password" name="password" placeholder="password" />
            <ErrorMessage name="password" component="div" style={{color: 'red'}} />

            <button type="submit" disabled={isSubmitting} >
              Register
            </button>
          </form>
        )}
    </Formik>
  );

  export default FormikForm;