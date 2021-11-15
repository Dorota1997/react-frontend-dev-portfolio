import React from "react";
import { func, string } from "prop-types";
import Switch from "react-switch";

const ThemeToggler = ({ theme, toggleTheme }) => {
  let checked = false;
  if (theme === "light") checked = true;
  if (theme === "dark") checked = false;

  return (
    <Switch
      checked={checked}
      onChange={toggleTheme}
      offColor="#baaa80"
      onColor="#353535"
      className="react-switch mx-auto"
      width={90}
      height={40}
      uncheckedIcon={
        <span
          className="iconify"
          data-icon="twemoji:owl"
          data-inline="false"
          style={{
            display: "block",
            height: "100%",
            fontSize: 25,
            textAlign: "end",
            marginLeft: "20px",
            color: "#353239",
          }}
        ></span>
      }
      checkedIcon={
        <span
          className="iconify"
          data-icon="noto-v1:sun-with-face"
          data-inline="false"
          style={{
            display: "block",
            height: "100%",
            fontSize: 25,
            textAlign: "end",
            marginLeft: "10px",
            color: "#353239",
          }}
        ></span>
      }
      id="icon-switch"
    />
  );
};

ThemeToggler.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default ThemeToggler;
