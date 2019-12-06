var message = document.querySelector(".message");
var happyEmoji = document.querySelector(".happy");
var sillyEmoji = document.querySelector(".silly");
var cryingEmoji = document.querySelector(".crying");

happyEmoji.addEventListener("click", showHappyResponse);
sillyEmoji.addEventListener("click", showSillyResponse);
cryingEmoji.addEventListener("click", showCryingResponse);

function showHappyResponse() {
  var happyMsgs = ["Your smile just cheered me up.", "You go!", "YAY!"];
  message.innerText = happyMsgs;
}

function showSillyResponse() {
  var sillyMsgs = ["Interesting response", "Ok!", "Me too."];
  message.innerText = sillyMsgs;
}

function showCryingResponse() {
  var cryingMsgs = ["Keep your head up.", "We can cry together!", "Do you want to talk?", "What can I do?"];
  message.innerText = cryingMsgs;
}
