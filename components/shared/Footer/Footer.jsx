import React from "react";
import { Col, Row } from "antd";
import styles from "../../../styles/Footer.module.css";
import Link from "next/link";
export default function Footer() {
  return (
    <Row className={styles.footer}>
      <Col lg={6} md={12} s={24} xs={24}>
        <Link href="/">
          <a className={styles.footerItem}>Home</a>
        </Link>
      </Col>
    </Row>
  );
}
