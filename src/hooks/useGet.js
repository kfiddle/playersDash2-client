
// REACT_APP_LOCAL_URL
// REACT_APP_HEROKU_URL

const useGet = () => {
  const getter = async (urlPath) => {
    let response = await fetch(process.env.REACT_APP_LOCAL_URL + urlPath);
    if (response.ok) {
      const jsonified = response.json();
      return jsonified;
    }
  };

  return getter;
};

export default useGet;
