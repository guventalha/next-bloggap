import { Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../../styles/Header.module.css";

function Header() {
  return (
    <Row className={styles.header} justify="space-between" align="center">
      <Col span={12} className={styles.navItemLogo}>
        <Link href="/">
          <a className={styles.logo}>Next Blog App</a>
        </Link>
      </Col>
      <Col span={12} className={styles.navItemContainer}>
        <Link href="/login">
          <a className={styles.navItem}>Login</a>
        </Link>
      </Col>
    </Row>
  );
}

export default Header;
