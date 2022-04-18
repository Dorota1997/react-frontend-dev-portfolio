import { useMemo } from "react";
import Typical from "react-typical";

// prevents a twitching animation bug when styling changes on the text. EX: toggling a dark mode theme.
const HeaderTitleTypeAnimation = ({ textArray }) =>
  useMemo(() => {
    return (
      <Typical
        className="title-styles"
        steps={textArray.map((x) => [x.toUpperCase(), 1500]).flat()}
        loop={50}
      />
    );
  }, []);

export default HeaderTitleTypeAnimation;
