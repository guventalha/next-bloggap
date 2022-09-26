import React from "react";
import Header from "../components/shared/Header/Header";
import Footer from "../components/shared/Footer/Footer";
import Head from "next/head";
import SideBar from "../components/shared/SideBar/SideBar";
import styles from "../styles/Layout.module.css";
export default function DashboardLayout({ title, description, children }) {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      {/* <div className="App">This is the Main Layout</div> */}
      <main className={styles.container}>{children}</main>

      <Footer />
    </React.Fragment>
  );
}

DashboardLayout.defaultProps = {
  title: "Next Blog App",
  description: "Find the most impressive essays!",
};
