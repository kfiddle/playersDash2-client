import { backendUrl } from "../utils/Server";

const useGet = () => {
  const getter = async (urlPath) => {
    let response = await fetch(backendUrl + "/" + urlPath);
    if (response.ok) {
      const jsonified = response.json();
      return jsonified;
    }
  };

  return getter;
};

export default useGet;
