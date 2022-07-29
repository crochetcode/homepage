import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Footer} from '../components/footer';
import {folderProps} from '../lib/icons';
import {Icon} from '../components/icon';
import {useState} from 'react';
import {Panel} from '../components/panel';

const Home = () => {
    const [linkFolder, showLinkFolder] = useState(false);
    return (
        <div className={styles.container}>
            <Head>
                <title>doily.dev</title>
                <meta name="description" content="homepage for crochetcode"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className={styles.folders} onDoubleClick={() => showLinkFolder(true)}>
                <Icon {...folderProps}/>
            </div>
            <main className={styles.main}>
                {linkFolder && <Panel showLinkFolder={showLinkFolder} />}
                <Footer/>
            </main>
        </div>
    )
}

export default Home;
