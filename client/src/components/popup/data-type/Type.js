import styles from './type.module.css';
import PopUp from "../core/PopUp";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCategories, getTypes} from "../../../actions/types";

const Type = ({typeSelect, setTypeSelect}) => {
    const dispatch = useDispatch();
    const categories = ["All"].concat(useSelector(state => state.types.categories));
    const data = useSelector(state => state.types.data);
    const [activeCategory, setActiveCategory] = useState('All');
    const [hide, setHide] = useState(false);

    useEffect(() => {
        dispatch(getCategories)
        dispatch(getTypes('All'));
    }, []);

    const handleCategoryChange = (category) => {
        dispatch(getTypes(category));
        setActiveCategory(category);
    }

    const handleSelection = (selected) => {
        const dataArr = typeSelect.data;
        const element = dataArr[typeSelect.i];
        dataArr[typeSelect.i] = {...element, type: selected};
        setHide(true);
    }

    const props =
        <div className={styles['wrapper']}>
            <div className={styles['header']}>
                <h2>Data Type</h2>
                <div className={styles['categories']}>{categories?.map((category, i) =>
                    <div
                        className={`mono ${styles['category']} ${activeCategory === category && styles['active-category']}`}
                        onClick={() => handleCategoryChange(category)} key={i}>{category}</div>)}</div>
            </div>
            <div className={styles['types-wrapper']}>{data?.map((item, i) =>
                <div className={styles['type']} onClick={() => handleSelection(item.type)} key={i}>
                    <div className={styles['type-title']}>{item.type}</div>
                    <div className={styles['type-example']}>{item.desc}</div>
                </div>)}</div>
        </div>;
    return (
        <PopUp props={props} setVisibility={setTypeSelect} externalHide={hide}/>
    );
}

export default Type;