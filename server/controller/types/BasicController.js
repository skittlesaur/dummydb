export const getBoolean = () => {
    const random = Math.random();
    return random > 0.5;
}

export const getNumber = () => {
    return Math.random() * 100;
}