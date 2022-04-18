// import Meta from "./Meta";
// import styles from "../styles/Layout.module.scss";


export const config = { amp: "hybrid" };

const Layout = ({ children }) => {

  return (
    <>
      {/* <Meta /> */}
          <main theme={theme} toggleTheme={themeToggler}>
            {children}
          </main>
    </>
  );
};

export default Layout;
