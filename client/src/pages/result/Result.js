import styles from './result.module.css';
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createRecords} from "../../actions/generate";
import fileDownload from 'js-file-download'

const TABLE_VIEW = 'TABLE';
const REQUEST_RAW = 'RAW';

const Result = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const data = location.state;
    const headers = useSelector(state => state.generate?.headers);
    const json = useSelector(state => state.generate?.json);
    const raw = useSelector(state => state.generate?.raw);
    const [view, setView] = useState(TABLE_VIEW);
    const [n, setN] = useState(20);

    useEffect(() => {
        handleRegenerate();
    }, [data]);

    const handleDownload = () => {
        const ext = data.type.toLowerCase();
        fileDownload(raw, `dummydb.${ext}`, `text/${ext}`);
    }

    const handleRegenerate = () => {
        if (n > 1000)
            setN(1000);
        dispatch(createRecords(n, data.type, data.fields));
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(raw);
    }

    if (!json || !data || !headers)
        return <p>Loading</p>

    return (
        <div className={styles['wrapper']}>
            <div className={`mono ${styles[`center`]}`}>Total Records:
                <input value={n} onChange={(e) => setN(e.target.value)} type={'number'}
                       className={`mono ${styles['records']}`}/></div>
            <div className={styles['mode']}>
                <div onClick={() => setView(TABLE_VIEW)} className={`mono btn2 ${styles['view']}`}>Table View</div>
                <div onClick={() => setView(REQUEST_RAW)} className={`mono btn2 ${styles['view']}`}>{data.type}</div>
            </div>
            <div className={styles['result']}>
                {view === TABLE_VIEW ?
                    <div className={styles['table-wrapper']}>
                        <div className={styles['table']}
                             style={{
                                 '--COLUMNS': headers.length,
                                 'grid-template-columns': headers.length <= 3 && `repeat(${headers.length}, 1fr)`
                             }}>
                            {headers.map((item, i) => <div className={styles['table-header']} key={i}>{item}</div>)}
                            {json.map((item, i) => headers.map((h, j) => <div key={`${i}${j}`}>{`${item[h]}`}</div>))}
                        </div>
                    </div>
                    :
                    <div className={styles['raw-wrapper']}>
                        <pre className={`mono ${styles['raw']}`}>{raw}</pre>
                    </div>
                }
            </div>
            <div className={styles['actions-wrapper']}>
                <div onClick={handleDownload} className={'btn1 btn1-g'}>Download {data.type}</div>
                <div onClick={handleRegenerate} className={'btn1 btn1-b'}>Regenerate</div>
                <div onClick={handleCopy} className={'btn1 btn1-b'}>Copy</div>
            </div>
        </div>
    );
}

export default Result;