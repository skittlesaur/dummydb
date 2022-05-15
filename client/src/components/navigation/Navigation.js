import styles from './navigation.module.css';
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <div className={styles['wrapper']}>
            <div className={styles['title']}>Dummy Database</div>
            <nav className={styles['nav-wrapper']}>
                <Link className={'btn2'} to={'/'}>Home</Link>
                <a className={'btn2'} target={'_blank'} href={'https://github.com/skittlesaur/dummydb'}>Contribute</a>
            </nav>
            <Link to={'/generate'} className={`btn1 btn1-b`}>Generate</Link>
        </div>
    );
}

export default Navigation;