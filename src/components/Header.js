import React, { Component } from "react";

import styles from "../styles/Header.module.scss";

class Header extends Component {

  render() {
    return (
      <h1 className={styles.title}>ToDo list</h1>
    );
  }
}

export default Header;
