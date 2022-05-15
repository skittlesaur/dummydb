import styles from './generate.module.css';
import {useState} from "react";
import DeleteImage from '../../shared/assets/delete.png';
import Type from "../../components/popup/data-type/Type";

const Generate = () => {
    const [data, setData] = useState([
        {field: "", type: "Type"}
    ]);
    const [typeSelect, setTypeSelect] = useState({visible: false});
    const [output, setOutput] = useState("JSON");
    const outputs = ["JSON", "SQL"];

    const handleAddField = () => {
        const field = {field: '', type: 'Type'};
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

    const handleTypeSelection = (i) => {
        setTypeSelect({visible: true, data: data, i: i});
    }

    return (
        <>
            {typeSelect?.visible && <Type typeSelect={typeSelect} setTypeSelect={setTypeSelect}/>}
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
                            <div onClick={() => handleTypeSelection(i)} className={styles['type']}
                                 style={{color: item.type !== "Type" ? "white" : ""}}>{item.type}</div>
                            <img onClick={() => handleDelete(i)} src={DeleteImage} className={styles['delete']}
                                 alt={'Delete'}/>
                        </div>)}
                </div>
                <div onClick={handleAddField} className={`btn1 btn1-b ${styles[`add-field`]}`}>Add Field</div>
                <div className={styles['submission']}>
                    <div className={styles['options']}>
                        {outputs.map((item, i) => <div key={i} onClick={() => setOutput(item)}
                                                       className={`btn2 ${output === item && styles['active']}`}>{item}</div>)}
                    </div>
                    <div className={`btn1 btn1-g mono ${styles['generate']}`}>Generate Data</div>
                </div>
            </div>
        </>
    );
}

export default Generate;