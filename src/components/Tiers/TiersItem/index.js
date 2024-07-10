import React from "react";
import Styles from "./index.module.css";
import { CheckIcon } from "../../../icons/icons";

const TiersItem = ({ title, features, price }) => {
  return (
    <div className={Styles.tiersItem}>
      <h2>{title}</h2>
      <ul>
        {features &&
          features.map((feature) => (
            <li>
              <CheckIcon />
              <span>{feature.title}</span>
            </li>
          ))}
      </ul>
      <button> {price} </button>
    </div>
  );
};

export default TiersItem;
