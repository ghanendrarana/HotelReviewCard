import styles from "./Qrcode.module.css"; 

export default function QrCode ({qr}) {
    return (
        <div>
            <img src={qr} alt="QR Code" className={styles.qrcode} />
        </div>
    );
} 