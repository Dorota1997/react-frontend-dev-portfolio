import styles from "../../styles/ContactModal.module.scss";
import { Icon } from "@iconify/react";

const SuccessFailModal = ({ onToggleModal, status }) => {
  return (
    <div className={status == "success" ? styles.success : styles.failed}>
      <div className={styles.top}>
        {status == "success" ? (
          <Icon icon="icon-park:email-successfully" />
        ) : (
          <Icon icon="akar-icons:circle-x" />
        )}
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.header}>
          {status == "success"
            ? "Message Sent!"
            : "Error: Please email me at seanredmon@seanred.io"}
        </h1>
        <button className={styles.confirm} onClick={onToggleModal}>
          Got it!
        </button>
      </div>
    </div>
  );
};

export default SuccessFailModal;
