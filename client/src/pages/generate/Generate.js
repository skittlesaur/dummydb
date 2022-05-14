import styles from './generate.module.css';
import {useState} from "react";
import DeleteImage from '../../shared/assets/delete.png';

const Generate = () => {
    const [data, setData] = useState([
        {field: "", type: ""}
    ]);

    const handleAddField = () => {
        const field = {field: '', type: ''};
        const arr = [...data, field];
        setData(arr);
    }

    const handleChange = (e, i) => {
        const element = {...data[i], [e.target.name]: e.target.value};
        const arr = [...data];
        arr[i] = element;
        setData(arr);
    }

    const handleDelete = (i) => {
        const element = data[i];
        const arr = data.filter((item) => item !== element);
        setData(arr);
    }

    return (
        <div className={styles['wrapper']}>
            <h2>Database Schema</h2>
            <div className={styles['user-schema']}>
                <div className={styles['schema-item']}>
                    <div>Field Name</div>
                    <div>Type</div>
                </div>
                {data.map((item, i) =>
                    <div key={i} className={styles['schema-item']}>
                        <input onChange={(e) => handleChange(e, i)} name={'field'}
                               value={item.field} placeholder={'Field Name'}/>
                        <input disabled={true} className={styles['type']} name={'type'} value={item.type}
                               placeholder={'Type'}/>
                        <img onClick={() => handleDelete(i)} src={DeleteImage} className={styles['delete']}
                             alt={'Delete'}/>
                    </div>)}
            </div>
            <div onClick={handleAddField} className={`btn1 btn1-b ${styles[`add-field`]}`}>Add Field</div>
        </div>
    );
}

export default Generate;