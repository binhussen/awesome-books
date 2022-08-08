export const setLocalStorage = (newBooks) => localStorage.setItem('books', JSON.stringify(newBooks));

export const getFromLocalStorage = () => JSON.parse(localStorage.getItem('books')) ?? [];
