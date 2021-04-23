import React, { useEffect, useState } from "react";
import axios from "axios";
import { CatalogItem } from "./catalogItem/CatalogItem";
import styles from "./Catalog.module.css";
export const Catalog = () => {
  const [itemList, setItemList] = useState([]);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((res) => setItemList(res.data));
  }, []);

  function drowItems() {
    const filterd = itemList.filter((el) => {
      const name = el.name.toLowerCase();
      const filterName = filter.toLowerCase();
      if (name.includes(filterName)) {
        return el;
      }
    });
    return filterd;
  }

  return (
    <div>
      <input
        className={styles.input}
        onChange={(event) => setFilter(event.target.value)}
      />
      <div className={styles.main}>
        <CatalogItem itemsToDrow={drowItems()} />
      </div>
    </div>
  );
};
