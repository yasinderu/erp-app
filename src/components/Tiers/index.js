import React from "react";
import Styles from "./index.module.css";
import TiersItem from "./TiersItem";

const tiersItems = [
  {
    title: "Basic",
    features: [
      {
        title: "Mencatat barang masuk",
      },
      {
        title: "Mencatat barang keluar",
      },
      {
        title: "Mencatat hasil keuntungan",
      },
    ],
    price: "$30",
  },
  {
    title: "Business",
    features: [
      {
        title: "Mencatat barang masuk dan keluar",
      },
      {
        title: "Mencatat Keuntungan",
      },
      {
        title: "Dapat menganalisa hasil penjualan dengan CHART",
      },
      {
        title: "Support 7x24 Jam",
      },
    ],
    price: "$60",
  },
  {
    title: "Entrepreneur",
    features: [
      {
        title: "Mencatat barang masuk dan keluar",
      },
      {
        title: "Mencatat Keuntungan",
      },
      {
        title: "Dapat menganalisa hasil penjualan dengan CHART",
      },
      {
        title: "Support 7x24 Jam",
      },
      {
        title: "Export data ke Excel",
      },
      {
        title: "AI Prediksi penghasilan",
      },
    ],
    price: "$100",
  },
];

const Tiers = () => {
  return (
    <div className={Styles.tiersWrapper}>
      {tiersItems.map((item) => (
        <TiersItem
          title={item.title}
          features={item.features}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default Tiers;
