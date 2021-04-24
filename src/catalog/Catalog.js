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

  function sortByAbv() {
    const sorted = [...itemList].sort((a, b) => a.abv - b.abv);
    setItemList(sorted);
    console.log(itemList);
    console.log("abv");
  }

  function sortByAtt() {
    const sorted = [...itemList].sort(
      (a, b) => a.attenuation_level - b.attenuation_level
    );
    setItemList(sorted);
    console.log(itemList);
    console.log("attenuation_level");
  }

  return (
    <div>
      <input
        className={styles.input}
        onChange={(event) => setFilter(event.target.value)}
      />
      <button className={styles.sortBtn} onClick={sortByAbv}>
        sort by abv
      </button>
      <button className={styles.sortBtn} onClick={sortByAtt}>
        sort by att. level
      </button>
      <div className={styles.main}>
        <CatalogItem itemsToDrow={drowItems()} />
      </div>
    </div>
  );
};
