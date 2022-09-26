import React, { useEffect, useState } from "react";

import styles from "../styles/Home.module.css";
import Layout from "../layout/Layout";

import Card from "antd/lib/card/Card";
import createChannel from "../utils/createChannel";
import API_URL from "../config";

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>asdasd</h1>
      </div>
    </Layout>
  );
}

// export async function getServerSideProps() {
//   const { request } = createChannel();
//   const res = await request.get(`${API_URL}/categories`);
//   const categories = res.data;

//   return {
//     props: { categories },
//   };
// }
