export const random = (arr) => {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

export const randomN = (n, arr) => {
    let result = '';
    for (let i = 0; i < n; i++) {
        result += random(arr);
    }
    return result;
}