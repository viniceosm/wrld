function setStorage (key, valor) {
	localStorage.setItem(`wrld-${key}`, valor);
}

function getStorage(key) {
	return localStorage.getItem(`wrld-${key}`);
}