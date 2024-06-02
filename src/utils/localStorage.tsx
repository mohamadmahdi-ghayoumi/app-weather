export function setLocalStorage(key: string, value: string | {}) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getLocalStorage(key: string | null) {
  return JSON.parse(localStorage.getItem(key)) || [];
}
