async function getRequest() {
  const res = await fetch('/api/request', { method: 'GET' });
  return await res.json();
}

export default getRequest;
