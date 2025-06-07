import styles from "./Hotellogo.module.css";

export default function HotelLogo ({logo}) {

    return (
        <div>
             <img src={logo} alt="Hotel Logo" className={styles.hotellogo} />
        </div>
    );
}