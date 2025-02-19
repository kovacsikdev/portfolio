self.onmessage = (message) => {
  const data = message.data.data;
  const key = message.data.key;
  const direction = message.data.direction;

  const sortedData = [...data].sort((a, b) => {
    if (a[key] < b[key]) {
      return direction === 'ascending' ? -1 : 1;
    }
    if (a[key] > b[key]) {
      return direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });
  self.postMessage(sortedData);
}