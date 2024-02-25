// @ts-ignore
export const createError = ({message, name}) => {
    const error = new Error(message ? message : '');
    if (name) error.name = name;
    return error;
}

export const convertSnakeToNormal = (string: string) => {
    const normal = string.split('_').join(' ');
    return normal[0].toUpperCase() + normal.slice(1);
}