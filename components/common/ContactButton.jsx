import React from "react";
import { Icon } from "@iconify/react";

const ContactButton = ({ inView, onToggleModal }, ref) => {
  return (
    <div className="button-container" ref={ref}>
      <div className="button-wrapper">
        <button
          className={inView ? "button" : "button corner"}
          onClick={(e) => onToggleModal(false, e)}
        >
          {inView ? <>Contact me</> : <Icon icon="ci:mail" />}
        </button>
      </div>
      <style jsx>{`
        .button-container {
          position: relative;
          display: flex;
          height: 170px;
        }

        .button-wrapper {
          position: absolute;
          height: 100vh;
          width: 100%;
          left: 0;
          top: 0;
        }

        .button {
          position: absolute;
          width: 250px;
          margin: 0 auto;
          padding: 15px 20px;
          bottom: calc(100vh - 100px);
          right: 50%;
          transform: translate(50%);
          background-color: white;
          color: black;
          font-weight: 700;
          font-size: 0.688rem;
          line-height: 18px;
          letter-spacing: 1.54px;
          text-transform: uppercase;
          border-radius: 25px;
          border: none;
          cursor: pointer;
          transition: all 0.4s ease-in;
        }

        .button.corner {
          position: fixed;
          bottom: 3rem;
          right: 3rem;
          width: 64px;
          height: 64px;
          padding: 10px;
          border: 4px solid white;
          border-radius: 50%;
          z-index: 100;
          color: #00d9ff;
          font-size: 32px;
          background-color: black;
        }

        .button:hover {
          box-shadow: 0 0px 20px rgb(0 0 0 / 70%);
          transition: box-shadow 0.3s ease-in;
        }
      `}</style>
    </div>
  );
};

export default React.forwardRef(ContactButton);
