import Spinner from "./Spinner";

const PageSpinner = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        background: "rgba(0,0,0,0.7)",
      }}
    >
      <Spinner />
    </div>
  );
};

export default PageSpinner;
