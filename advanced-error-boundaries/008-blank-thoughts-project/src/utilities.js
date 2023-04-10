export const getNewExpirationTime = () => {
    return Date.now() + 15 * 1000;
}

let nextId = 9;
export const generateId = () => {
    const result = nextId;
    nextId += 1;
    return result;
}