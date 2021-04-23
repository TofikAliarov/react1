import React from "react";
import styles from "./Registration.module.css";
import modalBackDrop from "../modalBackDrop/ModalBackDrop";
import { useFormik } from "formik";
const Registration = ({ close }) => {
  const validate = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = "Required";
    } else if (values.firstName.length > 15) {
      errors.firstName = "Must be 15 characters or less";
    }

    if (!values.lastName) {
      errors.lastName = "Required";
    } else if (values.lastName.length > 20) {
      errors.lastName = "Must be 20 characters or less";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (
      !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i.test(values.password)
    ) {
      errors.password = "Need 8 symbols, 1 letter and 1 numb";
    }

    if (!values.birth) {
      errors.birth = "Required";
    } else if (
      !/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i.test(
        values.birth
      )
    ) {
      errors.birth = "dd/mm/yyyy";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",

      lastName: "",

      email: "",
    },
    validate,
    onSubmit: (evt) => {
      close();
    },
  });

  return (
    <>
      <div className={styles.main}>
        <button
          onClick={() => close()}
          className={styles.modalBodyButtonclose}
        ></button>
        <h2 className={styles.title}>Please, full the register form</h2>
        <form className={styles.form} onSubmit={formik.handleSubmit}>
          <label className={styles.label} htmlFor="firstName">
            First Name
          </label>
          <input
            className={styles.input}
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          {formik.errors.firstName ? (
            <div className={styles.error}>{formik.errors.firstName}</div>
          ) : null}
          <label className={styles.label} htmlFor="lastName">
            Last Name
          </label>
          <input
            className={styles.input}
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          {formik.errors.lastName ? (
            <div className={styles.error}>{formik.errors.lastName}</div>
          ) : null}
          <label className={styles.label} htmlFor="email">
            Email Address
          </label>

          <input
            className={styles.input}
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? (
            <div className={styles.error}>{formik.errors.email}</div>
          ) : null}

          <label className={styles.label} htmlFor="password">
            password
          </label>

          <input
            className={styles.input}
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password ? (
            <div className={styles.error}>{formik.errors.password}</div>
          ) : null}

          <label className={styles.label} htmlFor="birth">
            birth
          </label>

          <input
            className={styles.input}
            id="birth"
            name="birth"
            type="birth"
            onChange={formik.handleChange}
            value={formik.values.birth}
          />
          {formik.errors.birth ? (
            <div className={styles.error}>{formik.errors.birth}</div>
          ) : null}

          <button className={styles.button} type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default modalBackDrop(Registration);
