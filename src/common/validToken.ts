const isToken = (): boolean => {
  const token = localStorage.getItem('access_token');
  if (token) {
    return true;
  }
  return false;
};

export default isToken;
