import Image from 'next/image';
import styles from '../styles/footer.module.css';

export const Footer = () => {
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
            <div className={styles.time} suppressHydrationWarning>
                <p>{new Date().toDateString()}</p>
            </div>
        </footer>
    );
};