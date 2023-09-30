export const cartData = (data = [], action) => {
    console.log(action);
    if(action.type === 'SET_DATA') {
        console.log('After put method of saga',action.data);
    }
    return [action.data, ...data]
}