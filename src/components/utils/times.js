export function initializeTimes() {
  return window.fetchAPI(new Date());
}

export function updateTimes(state, payload) {
  if (payload) {
    const newDate = new Date(payload);
    return window.fetchAPI(newDate);
  }
  return window.fetchAPI(new Date());
}
