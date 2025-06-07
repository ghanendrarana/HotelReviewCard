import styles from "./Platformlogo.module.css"

export default function PlatformLogo ({platformLogo}) {
    return (
        <div>
            {platformLogo && (
          <img
            src={platformLogo}
            alt="Platform Logo"
            className= {styles.platformlogo}
          />
        )}
        </div>
    );
}