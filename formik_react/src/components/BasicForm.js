import { useFormik } from "formik";
import { basicSchema } from "../schemas";


const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  // console.log("submitted");
  await new Promise((resolve)=> setTimeout(resolve, 1000));
  actions.resetForm();
}

const BasicForm = () => {

  const { values, errors, handleChange, handleBlur, handleSubmit, touched, isSubmitting } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPass: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  console.log(errors);

  // console.log(values);
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        placeholder="Entrer votre email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.email && touched.email ? "input-error" : ""}
      />
      {errors.email && touched.email && (
        <p className="error">{errors.email}</p>
      )}
      <label htmlFor="email">Age</label>
      <input
        value={values.age}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.age && touched.age ? "input-error" : ""}
        id="age"
        type="number"
        placeholder="Entrer votre âge"
      />
      {errors.age && touched.age && (
        <p className="error">{errors.age}</p>
      )}
      <label htmlFor="password">Password</label>
      <input
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.password && touched.password ? "input-error" : ""}
        id="password" type="password" placeholder="Entrer votre password"
      />
      {errors.password && touched.password && (
        <p className="error">{errors.password}</p>
      )}
      <label htmlFor="confirmPass">Confim Password</label>
      <input
        value={values.confirmPass}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.confirmPass && touched.confirmPass ? "input-error" : ""}
        id="confirmPass"
        type="password"
        placeholder="Confirm Password"
      />
      {errors.confirmPass && touched.confirmPass && (
        <p className="error">{errors.confirmPass}</p>
      )}
      <button disabled={isSubmitting} type="submit">Envoyer</button>
    </form>
  );
};
export default BasicForm;
