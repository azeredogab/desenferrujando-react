function saveLocalStorage(node, value) {
    localStorage.setItem(node, JSON.stringify(value)); 
}

function getLocalStorage(node) {
    return JSON.parse(localStorage.getItem(node)); 
}

export {
    saveLocalStorage,
    getLocalStorage
}