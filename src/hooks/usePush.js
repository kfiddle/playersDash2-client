const toSendUrl =
  "https://sheet.best/api/sheets/e189566d-1ba8-414b-8443-d3d0510e25f5";


const usePush = () => {
  let headers = { "Content-Type": "application/json" };

  const pusher = async (objectToPush) => {
    let response = await fetch(toSendUrl, {
      method: "POST",
      mode: "cors",
      headers,
      body: JSON.stringify(objectToPush),
    });

    if (response.ok) {
      let answer = await response.json();
      return answer;
    }
    let errorReply = await response.json();
    return errorReply.message;
  };

  return pusher;
};

export default usePush;
