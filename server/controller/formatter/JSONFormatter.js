const formatter = (data) => {
    const headers = data[0];
    const result = [];

    for (let i = 1; i < data.length; i++) {
        let obj = {};
        for (let j = 0; j < headers.length; j++) {
            const header = headers[j];
            const value = data[i][j];
            obj = {...obj, [header]: value}
        }
        result.push(obj);
    }

    return result;
}

export default formatter;