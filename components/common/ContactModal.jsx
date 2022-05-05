import { useState } from "react";
import Joi from "joi-browser";
import styles from "../../styles/ContactModal.module.scss";
import { Icon } from "@iconify/react";
import axios from "axios";
import PageSpinner from "./PageSpinner";
import SuccessFailModal from "./SucessFailModal";

const ContactModal = ({ onToggleModal }) => {
  const [formData, setFormData] = useState({
    senderName: "",
    senderEmail: "",
    senderMessage: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  const handleCloseModal = () => {
    setError({});
    onToggleModal();
    setFormData({})
  };

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
    setLoading(true);
    const errors = validate();
    setError(error || {});
    if (errors) {
      //TODO add error messages
      return;
    }
    axios({
      method: "POST",
      url: process.env.NODEMAILSERVER,
      data: formData,
    }).then((response) => {
      if (response.data.status === "success") {
        setError("success");
        setFormData({
          senderName: "",
          senderEmail: "",
          senderMessage: "",
        });
        setLoading(false);
      } else if (response.data.status === "fail") {
        setError("failed");
        setLoading(false);
      }
    });
  };

  return (
    <div className={styles["contact-modal"] + " --modal-overlay-background"}>
      {error == "success" || error == "failed" ? (
        <SuccessFailModal onToggleModal={onToggleModal} status={error} />
      ) : (
        <form
          className={styles["contact-form"] + " --modal-background"}
          onSubmit={handleSubmit}
        >
          {loading && <PageSpinner />}
          <div className={styles.top + " --toolbar-background"}>
            <h1 className={styles.header + " --modal-text"}>Contact Sean</h1>
            <button className={styles["close-modal"] + " --modal-text"} onClick={handleCloseModal}>
              <Icon icon="octicon:x-16" />
            </button>
          </div>

          <div className={styles["form-group"]}>
            <input
              className="form-control --modal-text"
              type="text"
              placeholder="Your Name"
              label={"senderName"}
              name={"senderName"}
              onChange={(e) => handleChange(e.target)}
            />
          </div>
          <div className={styles["form-group"]}>
            <input
              className="form-control --modal-text"
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
              className="form-control --modal-text"
              placeholder="Type your message here"
              label={"senderMessage"}
              name={"senderMessage"}
              rows="8"
              cols="50"
              onChange={(e) => handleChange(e.target)}
            ></textarea>
          </div>
          <button
            type="submit"
            className={styles.submit}
            disabled={loading ? true : validate()}
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactModal;
