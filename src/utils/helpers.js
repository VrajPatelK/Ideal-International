export const sendWhatsappMsg = async (grpId, msg, token) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  var urlencoded = new URLSearchParams();
  console.log("token : ", token);

  urlencoded.append("token", token);
  urlencoded.append("to", grpId);
  urlencoded.append("body", msg);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  fetch("https://api.ultramsg.com/instance42164/messages/chat", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
