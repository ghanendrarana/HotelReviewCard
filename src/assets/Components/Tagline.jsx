import styles from "./tagline.module.css";

export default function Tagline({ tagline }) {
  return (
    <div>
      <p className={styles.tagline}>{tagline}</p>
    </div>
  );
}
