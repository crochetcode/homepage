import Image from 'next/image';
import styles from '../styles/icons.module.css';

export const Icon = ({display, image, link}) => {
    return (
        <a href={link} target='_blank' rel='noreferrer' className={styles.link}>
            <Image
                priority
                src={image}
                className={styles.img}
                alt='icon'
                height={75}
                width={75}
            />
            <p className={styles.label}>{display}</p>
        </a>
    );
};