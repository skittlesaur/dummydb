const random = (arr) => {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

export default random;