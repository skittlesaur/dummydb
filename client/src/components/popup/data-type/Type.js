import styles from './type.module.css';
import PopUp from "../core/PopUp";
import {useState} from "react";

const Type = ({typeSelect, setTypeSelect}) => {
    const types = {
        categories: [
            "All",
            "Basic",
            "Advanced",
            "Personal",
            "Commerce",
            "Crypto",
            "Health",
            "IT",
            "Location",
            "Nature",
            "Products"
        ],
        data: [
            {
                category: "Basic",
                types: [
                    {
                        title: "Blank",
                        example: "Always generates a null value"
                    },
                    {
                        title: "Boolean",
                        example: "Either true or false"
                    },
                    {
                        title: "Custom List",
                        example: "Picks randomly from a custom list"
                    },
                    {
                        title: "Boolean",
                        example: "Either true or false"
                    },
                    {
                        title: "Boolean",
                        example: "Either true or false"
                    },
                    {
                        title: "Boolean",
                        example: "Either true or false"
                    },
                    {
                        title: "Boolean",
                        example: "Either true or false"
                    },
                    {
                        title: "Boolean",
                        example: "Either true or false"
                    },
                    {
                        title: "Boolean",
                        example: "Either true or false"
                    },
                    {
                        title: "Boolean",
                        example: "Either true or false"
                    },
                    {
                        title: "Boolean",
                        example: "Either true or false"
                    },
                    {
                        title: "Boolean",
                        example: "Either true or false"
                    },
                    {
                        title: "Boolean",
                        example: "Either true or false"
                    },
                    {
                        title: "Boolean",
                        example: "Either true or false"
                    },
                    {
                        title: "Boolean",
                        example: "Either true or false"
                    }
                ]
            }
        ]
    };

    const [displayedData, setDisplayedData] = useState([]);
    const [activeCategory, setActiveCategory] = useState('All');
    const [hide, setHide] = useState(false);

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        const categoryData = types.data.filter((item) => item.category === category)[0];
        const categoryTypes = categoryData?.types;
        setDisplayedData(categoryTypes);
    }

    const handleSelection = (selected) => {
        const dataArr = typeSelect.data;
        const element = dataArr[typeSelect.i];
        dataArr[typeSelect.i] = {...element, type: selected};
        setTypeSelect(dataArr);
        setHide(true);
    }

    const props =
        <div className={styles['wrapper']}>
            <div className={styles['header']}>
                <h2>Data Type</h2>
                <div className={styles['categories']}>{types?.categories.map((category, i) =>
                    <div
                        className={`mono ${styles['category']} ${activeCategory === category && styles['active-category']}`}
                        onClick={() => handleCategoryChange(category)} key={i}>{category}</div>)}</div>
            </div>
            <div className={styles['types-wrapper']}>{displayedData?.map((item, i) =>
                <div className={styles['type']} onClick={() => handleSelection(item.title)} key={i}>
                    <div className={styles['type-title']}>{item.title}</div>
                    <div className={styles['type-example']}>{item.example}</div>
                </div>)}</div>
        </div>;
    return (
        <PopUp props={props} setVisibility={setTypeSelect} externalHide={hide}/>
    );
}

export default Type;