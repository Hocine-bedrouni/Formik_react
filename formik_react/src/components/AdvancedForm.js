import { Field, Form, Formik } from "formik";
import { advancedSchema } from "../schemas";
import CustomCheckbox from "./CustomCheckbox";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";


const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  // console.log("submitted");
  await new Promise((resolve)=> setTimeout(resolve, 1000));
  actions.resetForm();
}

const AdvancedForm = () => {
  return (
    <Formik 
    initialValues={{ username: '', jobType: "", acceptedTos: false }}
    validationSchema = {advancedSchema}
    onSubmit={onSubmit}
    >
      {(isSubmitting) => (
        <Form>
          <CustomInput 
            label = "Prénom"
            name= "username"
            type="text"
            placeholder ="Entre votre prénom"
          />
          <CustomSelect
            label="Job Type"
            name= "jobType"
            placeholder ="Veuillez choisir un job"
            >
              <option value ="">Veuillez choisir un job</option>
              <option value ="developer">Developer</option>
              <option value ="designer">Designer</option>
              <option value ="manager">Product Manger</option>
              <option value ="other">Other</option>
          </CustomSelect>
          <CustomCheckbox type="checkbox" name= "acceptedTos"/>
           {/* <Field type="text" name="name" placeholder="Name" /> */}
          {/* <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name}
            name="name"
          /> */}
          <button disabled ={isSubmitting} type="submit">Submit</button>
        </Form> 
      )}
    </Formik>
  );
};
export default AdvancedForm;
