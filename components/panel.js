import {Icon} from './icon';
import {links} from '../lib/icons';
import styles from '../styles/panel.module.css';

export const Panel = props => (
    <div className={styles.panel}>
        <div className={styles.top}>
            <div className={styles.topSpan}>
                <p>links</p>
                {/* eslint-disable-next-line react/prop-types */}
                <button
                    onClick={() => props.showLinkFolder(false)}
                    className={styles.xButton}
                >X</button>
            </div>
        </div>
        <div className={styles.contentBorder}>
            <div className={styles.content}>
                {links.map((link) => (
                    <Icon key={link.display} {...link} />
                ))}
            </div>
        </div>
    </div>
);