import styles from './home.module.css';
import {Link} from "react-router-dom";
import GitHubIcon from '../../shared/assets/github.png';

const Home = () => {
    return (
        <div className={styles['wrapper']}>
            <div className={styles['info']}>
                <h1>Generate test <span className={`mono ${styles['data-span']}`}><span
                    className={styles['bracket']}>{'{ '}</span><span
                    className={styles['data']}>data</span><span className={styles['bracket']}>{' }'}</span></span> on
                    the fly</h1>
                <p>An easy-to-use and open source tool to generate database test records for your new projects.</p>
                <Link className={'btn1 btn1-g'} to={'/generate'}>Start Generating</Link>
            </div>
            <div className={styles['stats']}>
                <div className={styles['github']}>
                    <div className={styles['github-header']}>
                        <img src={GitHubIcon} alt={'Github'}/>
                        <a href={'https://github.com/skittlesaur/dummydb'} rel={'noreferrer'} target={'_blank'}>skittlesaur/<span
                            className={'mono'}>dummydb</span></a>
                    </div>
                    <div className={styles['github-tabs']}>
                        <div className={styles['tab-scroll']}>
                            <div className={`mono + ${styles['active']}`}>Releases</div>
                            <div className={'mono'}>Requests</div>
                            <div className={'mono'}>Releases</div>
                            <div className={'mono'}>Releases</div>
                        </div>
                    </div>
                    <div className={styles['content']}>
                        <a href={'https://github.com/'} className={styles['item']}>German language and spelling corrections</a>
                        <div className={styles['item']}>German language and spelling corrections</div>
                        <div className={styles['item']}>German language and spelling corrections</div>
                        <div className={styles['item']}>German language and spelling corrections</div>
                        <div className={styles['item']}>German language and spelling corrections</div>
                        <div className={styles['item']}>German language and spelling corrections</div>
                        <div className={styles['item']}>German language and spelling corrections</div>
                        <div className={styles['item']}>German language and spelling corrections</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;