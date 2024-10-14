import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const ContactForm = ({ onAdd }) => {
  const initialValues = {
    name: "",
    number: "",
  };

  const nameField = useId();
  const numberField = useId();

  const handleSubmit = (values, actions) => {
    const newContact = {
      ...values,
      id: nanoid(),
    };
    onAdd(newContact);
    actions.resetForm();
  };

  return (
    <div className={css.formContainer}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ContactSchema}
      >
        <Form>
          <div className={css.naimCont}>
            <label htmlFor={nameField} className={css.label}>
              Name
            </label>
            <Field name="name" id={nameField} className={css.inputField} />
            <ErrorMessage
              name="name"
              component="span"
              className={css.errorMessage}
            />
          </div>
          <div className={css.number}>
            <label htmlFor={numberField} className={css.label}>
              Number
            </label>
            <Field name="number" id={numberField} className={css.inputField} />
            <ErrorMessage
              name="number"
              component="span"
              className={css.errorMessage}
            />
          </div>
          <button type="submit" className={css.submitButton}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default ContactForm;
