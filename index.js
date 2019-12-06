var message = document.querySelector(".message");
var happyEmoji = document.querySelector(".happy");
var sillyEmoji = document.querySelector(".silly");
var cryingEmoji = document.querySelector(".crying");

happyEmoji.addEventListener("click", showHappyResponse);
sillyEmoji.addEventListener("click", showSillyResponse);
cryingEmoji.addEventListener("click", showCryingResponse);

function showHappyResponse() {
  var happyMsgs = ["Your smile just cheered me up.", "You go!", "YAY!"];
  var randomize = Math.floor(Math.random()*happyMsgs.length);
  var show = happyMsgs[randomize];
  message.innerText = show;

}

function showSillyResponse() {
  var sillyMsgs = ["Interesting response", "Ok!", "Me too."];
  var randomize = Math.floor(Math.random()* sillyMsgs.length);
  var show = sillyMsgs[randomize]
  message.innerText = show;
}

function showCryingResponse() {
  var cryingMsgs = ["Keep your head up.", "We can cry together!", "Do you want to talk?", "What can I do?"];
  var randomize = Math.floor(Math.random()* cryingMsgs.length);
  var show = cryingMsgs[randomize];
  message.innerText = show;
}
