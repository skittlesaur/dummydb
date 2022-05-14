import styles from './home.module.css';
import {Link} from "react-router-dom";
import GitHubIcon from '../../shared/assets/github.png';
import {useDispatch, useSelector} from "react-redux";
import {fetchIssues, fetchReleases, fetchRequests} from "../../actions/github";
import {useEffect, useState} from "react";
import {FETCH_ISSUES, FETCH_RELEASES, FETCH_REQUESTS} from "../../constants/github";

const Home = () => {
    const dispatch = useDispatch();
    const [githubMode, setGithubMode] = useState(FETCH_RELEASES);
    const data = useSelector(state => state.github);

    useEffect(() => {
        switch (githubMode) {
            case FETCH_RELEASES:
                dispatch(fetchReleases);
                break;
            case FETCH_REQUESTS:
                dispatch(fetchRequests);
                break;
            case FETCH_ISSUES:
                dispatch(fetchIssues);
                break;
        }
    }, [githubMode]);

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
                            <div onClick={() => setGithubMode(FETCH_RELEASES)}
                                 className={`mono ${githubMode === FETCH_RELEASES && styles['active']}`}>Releases
                            </div>
                            <div onClick={() => setGithubMode(FETCH_REQUESTS)}
                                 className={`mono ${githubMode === FETCH_REQUESTS && styles['active']}`}>Requests
                            </div>
                            <div onClick={() => setGithubMode(FETCH_ISSUES)}
                                 className={`mono ${githubMode === FETCH_ISSUES && styles['active']}`}>Issues
                            </div>
                        </div>
                    </div>
                    <div className={styles['content']}>
                        {data.map((item, i) =>
                            <a key={i} href={'https://github.com/'} className={styles['item']}>{item.state && <span className={styles[item.state]}/>}{item.title}</a>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;