import React from "react";
import HotelLogo from "./HotelLogo";
import HotelName from "./HotelName";
import Tagline from "./Tagline";
import QrCode from "./QrCode";
import PlatformLogo from "./PlatformLogo";
import Stars from "./Stars";
import styles from "./reviewcard.module.css";

const ReviewCard = ({ logo, qr, hotelName, tagline, platformLogo }) => {
  return (
    <div className={styles.reviewCard}>
      <div className="logo-container">
        <HotelLogo logo={logo} />
      </div>

      <div>
        <HotelName hotelName={hotelName} />
      </div>

      <div>
        <Tagline tagline={tagline} />
      </div>

      <div className="qr-container">
        <QrCode qr={qr} />
      </div>

      <div className="platform">
        <PlatformLogo platformLogo={platformLogo} />
      </div>

      <Stars />
    </div>
  );
};

export default ReviewCard;
