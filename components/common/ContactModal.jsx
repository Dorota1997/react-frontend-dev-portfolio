import { useState } from "react";
import Joi from "joi-browser";
import styles from "../../styles/ContactModal.module.scss";
import { Icon } from "@iconify/react";

const ContactModal = ({ onToggleModal }) => {
  const [formData, setFormData] = useState({
    senderName: "",
    senderEmail: "",
    senderMessage: "",
  });
  const [error, setError] = useState({});

  const schema = {
    senderName: Joi.string().required().label("senderName"),
    senderEmail: Joi.string().email().required().label("senderEmail"),
    senderMessage: Joi.string().required().label("senderMessage"),
  };

  const validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(formData, schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const propertySchema = { [name]: schema[name] };
    const { errors } = Joi.validate(obj, propertySchema);
    return errors ? errors.details[0].message : null;
  };

  const handleChange = (input) => {
    const errors = { ...error };
    const errorMessage = validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...formData };
    data[input.name] = input.value;

    setFormData(data);
    setError(error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <div className={styles["contact-modal"]}>
      <form className={styles["contact-form"]} onSubmit={handleSubmit}>
        <div className={styles.top}>
          <h1 className={styles.header}>Contact Sean</h1>
          <button className={styles["close-modal"]} onClick={onToggleModal}>
            {/* <Icon icon="akar-icons:circle-x" /> */}
            {/* <Icon icon="foundation:x" /> */}
            <Icon icon="octicon:x-16" />
          </button>
        </div>

        <div className={styles["form-group"]}>
          <input
            className="form-control"
            type="text"
            placeholder="Your Name"
            label={"senderName"}
            name={"senderName"}
            onChange={(e) => handleChange(e.target)}
          />
        </div>
        <div className={styles["form-group"]}>
          <input
            className="form-control"
            type="email"
            placeholder="Your Email"
            label={"senderEmail"}
            name={"senderEmail"}
            aria-describedby="emailHelp"
            onChange={(e) => handleChange(e.target)}
          />
        </div>
        <div className={styles["form-group"]}>
          <textarea
            className="form-control"
            placeholder="Type your message here"
            label={"senderMessage"}
            name={"senderMessage"}
            rows="8"
            cols="50"
            onChange={(e) => handleChange(e.target)}
          ></textarea>
        </div>
        <button type="submit" className={styles.submit} disabled={validate()}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactModal;
