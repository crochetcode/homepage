import Image from 'next/image';
import styles from '../styles/footer.module.css';
import {DateTime} from 'luxon';

export const Footer = () => {
    const date = DateTime.now().setZone("America/Chicago")
        .toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)
        .replace(/,/g, '');

    return (
        <footer className={styles.footer}>
            <div className={styles.start}>
                <Image
                    priority
                    src='/windows.png'
                    className={styles.img}
                    alt='windows 95 logo'
                    height={35}
                    width={50}
                />
                <p className={styles.text}>doily.dev</p>
            </div>
            <div className={styles.time}>
                <p>{date}</p>
            </div>
        </footer>
    );
};