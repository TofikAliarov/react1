import React, { useState } from "react";
import Registration from "./registration/Registration";
import { Catalog } from "./catalog/Catalog";
import styles from "./App.module.css";
const App = () => {
  const [isShow, setIsShow] = useState(false);
  const close = () => {
    setIsShow(false);
  };
  return (
    <div className="App">
      {isShow && <Registration close={close} />}

      <button className={styles.button} onClick={() => setIsShow(true)}>
        registration
      </button>
      <Catalog />
    </div>
  );
};

export default App;
