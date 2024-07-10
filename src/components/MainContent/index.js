import React from "react";
import Styles from "./index.module.css";
import graph from "../../images/graph.svg";
import Tiers from "../Tiers";
import { MailIcon } from "../../icons/icons";

const MainContent = () => {
  return (
    <div className={Styles.mainContent}>
      <div className={Styles.textRight}>
        <h3>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          consequat orci. Maecenas pretium egestas ligula, eu aliquet enim
          lobortis sed."
        </h3>
      </div>
      <div className={Styles.textLeft}>
        <h3>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</h3>
      </div>
      <div>
        <img src={graph} className={Styles.img} />
      </div>
      <section className={Styles.contentWrapper}>
        <div className={Styles.content} id="about">
          <h1>About</h1>
          <p className={Styles.aboutText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            quis velit eleifend, ornare lorem in, rhoncus justo. Quisque at
            lorem quis magna viverra blandit sed non tellus. Nunc ut semper
            arcu, id scelerisque mauris. Etiam bibendum in orci ac rutrum. Donec
            eu orci condimentum, consequat nibh sed, pretium mi. Fusce quis
            tortor felis. In eget blandit leo. Maecenas pellentesque, est
            commodo volutpat scelerisque, purus augue blandit velit, ac iaculis
            urna arcu at diam. Maecenas quis fringilla nibh. Aenean venenatis
            arcu vel arcu mollis, vel congue tellus rutrum. Phasellus vulputate
            auctor velit eget sollicitudin.
          </p>
        </div>
        <div className={Styles.content} id="pricing">
          <h1>Pricing</h1>
          <Tiers />
        </div>
        <div className={Styles.content} id="contact">
          <h1>Contact</h1>
          <div className={Styles.contact}>
            <MailIcon />
            <span>erp.example@email.com</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainContent;
