import styles from "./Hotelname.module.css";

export default function HotelName ( {hotelName}) {

    return (
        <div>
            <div className={styles.hotelName}>{hotelName}</div>
        </div>
    );
}