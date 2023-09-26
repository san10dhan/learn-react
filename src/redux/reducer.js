export const cartData = (data = [], action) => {
    console.log(action);
    return [action.data, ...data]
}