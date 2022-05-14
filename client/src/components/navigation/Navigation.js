import styles from './navigation.module.css';
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <div className={styles['wrapper']}>
            <div className={styles['title']}>Dummy Database</div>
            <nav className={styles['nav-wrapper']}>
                <Link className={'btn2'} to={'/'}>Home</Link>
                <Link className={'btn2'} to={'/releases'}>Releases</Link>
                <Link className={'btn2'} to={'/contribute'}>Contribute</Link>
            </nav>
            <Link to={'/'} className={`btn1`}>Generate</Link>
        </div>
    );
}

export default Navigation;