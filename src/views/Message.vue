<template>
  <div id="is-paused"></div>
  <div class="background"></div>
  <div class="icons"></div>
  <div class="webcam" id="webcam-live-stream">
    <div id="loading"></div>
  </div>
  <div class="chat-wrapper">
    <div class="chat">
      <div class="hide-scrollbar"></div>
      <div class="name">Megan</div>
      <div class="status">ready for the weekend | megan01@hotmail.com</div>
      <div class="is-writting">
        Last message received at 5:27 PM on 12/04/2007
      </div>
      <div class="avatar-1"></div>
      <div class="avatar-2"></div>
      <div class="chat-container">
        <ul id="discussion"></ul>
      </div>
      <div id="writing-holder">
        <textarea
          class="chat-writing-box"
          id="writing-box"
          placeholder="Your message here..."
          contenteditable="true"
        ></textarea>
      </div>
    </div>
  </div>
  <div class="windows windows-nav__left"></div>
  <div class="windows windows-nav__mid"></div>
  <div class="windows windows-nav__right"></div>
</template>

<script setup>
function Timer(callback, delay) {
  var timerId,
    start,
    remaining = delay;

  this.pause = function () {
    window.clearTimeout(timerId);
    remaining -= Date.now() - start;
  };

  this.resume = function () {
    start = Date.now();
    window.clearTimeout(timerId);
    timerId = window.setTimeout(callback, remaining);
  };

  this.resume();
}

var discussion = [
  /*{
    delay: 4000,
    offsetDelay: 250,
    mode: "wizz",
  },
  {
    name:"Megan",
    delay: 4500,
    offsetDelay: 250,
    mode: "webcam",
  },*/
  {
    name: "S@m",
    text: "I feel so close 2 u",
    delay: 4500,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name: "S@m",
    text: "hope we can mirl 1 day",
    delay: 2500,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name: "Megan",
    text: "Me too !",
    delay: 3500,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name: "Megan",
    text: "<img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/238916/heart.png'/><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/238916/heart.png'/><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/238916/heart.png'/><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/238916/heart.png'/><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/238916/heart.png'/><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/238916/heart.png'/><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/238916/heart.png'/><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/238916/heart.png'/>",
    delay: 3500,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name: "Megan",
    text: "I'd love to visit Paris with u",
    delay: 3500,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name: "Megan",
    text: "What did you do 2day?",
    delay: 5500,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name: "S@m",
    text: "I went 2 the movies",
    delay: 3500,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name: "S@m",
    text: "I seen Transformers!",
    delay: 3000,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name: "Megan",
    text: "Really? Did u like it?",
    delay: 3500,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name: "S@m",
    text: "it was gr8",
    delay: 4500,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name: "Megan",
    text: "You know I act in the film?",
    delay: 3500,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name: "S@m",
    text: "rlly? Ure an actress?",
    delay: 4500,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name: "S@m",
    text: "who r u playing?",
    delay: 3000,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name: "Megan",
    text: "Guess who?",
    delay: 3500,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name: "Megan",
    text: "My name is Megan, did you forget?",
    delay: 3500,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name: "S@m",
    text: "lol",
    delay: 4500,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name: "S@m",
    text: "u got me",
    delay: 2500,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name: "Megan",
    text: "I'm not joking",
    delay: 4000,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name: "Megan",
    text: "I am Megan Fox.",
    delay: 3000,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name: "S@m",
    text: "I want a proof",
    delay: 4500,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name: "Megan",
    text: "<img class='img' src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/238916/meganMSN3.png'/><label class='grey'>0003923.jpg (345ko)</label>",
    delay: 4500,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name: "S@m",
    text: "This pic comes from the internet.",
    delay: 4500,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name: "Megan",
    text: "I took it one minute ago.",
    delay: 4500,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name: "S@m",
    text: "Stop it now.",
    delay: 4500,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name: "Megan",
    delay: 4500,
    offsetDelay: 250,
    mode: "webcam",
  },
];

var discussion2 = [
  {
    name: "Megan",
    text: "<img class='img' src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/238916/meganMSN3.png'/><label class='grey'>0003923.jpg (345ko)</label>",
    delay: 4500,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name: "S@m",
    text: "This pic comes from the internet.",
    delay: 4500,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name: "Megan",
    text: "I took it one minute ago.",
    delay: 4500,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name: "S@m",
    text: "Stop it now.",
    delay: 4500,
    offsetDelay: 250,
    mode: "message",
  },
  {
    name: "Megan",
    delay: 4500,
    offsetDelay: 250,
    mode: "webcamend",
  },
  {
    delay: 4000,
    offsetDelay: 250,
    mode: "wizz",
  },
  {
    name: "Megan",
    delay: 4500,
    offsetDelay: 250,
    mode: "message",
    text: "I'm in Paris this week. Let's meet up.",
  },
  {
    delay: 4000,
    offsetDelay: 250,
    mode: "wizz",
  },
];

var audioElement = document.createElement("audio");
var audioWizz = document.createElement("audio");
document.createElement("audioElement");
document.createElement("audioWizz");
audioElement.setAttribute(
  "src",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/238916/msnsound.mp3"
);
audioWizz.setAttribute(
  "src",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/238916/nudge%20(online-audio-converter.com).mp3"
);

var isAudioActivated = true;

audioElement.addEventListener(
  "ended",
  function () {
    this.pause();
  },
  false
);

audioWizz.addEventListener(
  "ended",
  function () {
    this.pause();
  },
  false
);

var randomIntFromInterval = function (min, max) {
  return Math.floor(Math.random(23) * (max - min + 1) + min);
};
$(document).ready(function () {

    var chatContainer = $(".chat-container");
    var height = 0;
    var totalHeight = 10000;
    var totalDelay = 0;
    var className = "";
    var hasNotReachTheEnd = false;
    
    var timers = [];
    
    var currentDisscusion = discussion2;
    
    currentDisscusion.map(function (object, i) {
      totalDelay += object.delay;
      timers[i] = new Timer(function () {
        if (i == currentDisscusion.length) {
          hasNotReachTheEnd = true;
        }
    
        if (object.mode == "wizz") {
          if (isAudioActivated) audioWizz.play();
          $(".chat").addClass("wizz");
          $("#discussion").append(
            "<li class=" +
              className +
              "><label>Megan vous à envoyé un wizz</label></li>"
          );
    
          window.setTimeout(function () {
            $(".chat").removeClass("wizz");
          }, 500);
        }
        if (object.mode == "webcam") {
          $("#discussion").append(
            "<li class='grey chat-video'><br/>" +
              object.name +
              " vous demande de lancer un chat vidéo.</label><br/> </label> <a id='ok' href='#' class='link'><label class='blue'> Accepter</label><label class='grey'>&nbsp;(Alt-C)</label></a> <a href='#'  class='link'><label class='blue'> Refuser</label><label class='grey'>&nbsp;(Alt-D)</label></a> </li>"
          );
          $("#ok").click(function () {
            console.log("1");
            $("#webcam-live-stream").addClass("open");
          });
          chatContainer.scrollTop(chatContainer[0].scrollHeight);
        }
    
        if (object.mode == "webcamend") {
          $("#discussion").append(
            "<li class='grey chat-video'>Chat vidéo terminé.</label><br/></li>"
          );
          chatContainer.scrollTop(chatContainer[0].scrollHeight);
        }
    
        if (object.mode == "message") {
          if (object.name == "S@m") {
            className = "one";
          } else {
            className = "two";
          }
          if (
            currentDisscusion[i - 1] &&
            object.name == currentDisscusion[i - 1].name
          ) {
            $("#discussion").append(
              "<li class=" + className + ">" + object.text + "</li>"
            );
            chatContainer.scrollTop(chatContainer[0].scrollHeight);
          } else {
            $("#discussion").append(
              "<li class=" +
                className +
                "><label class='name-of'>" +
                object.name +
                " :</label><label>" +
                object.text +
                "</label></li>"
            );
            chatContainer.scrollTop(chatContainer[0].scrollHeight);
          }
    
          if (object.name == "Megan" && hasNotReachTheEnd) {
            $(".is-writting").text(object.name + " is typing...");
            chatContainer.scrollTop(chatContainer[0].scrollHeight);
          } else {
            $(".is-writting").text(
              "Last message recieved at " +
                moment(new Date()).format("h:mm a") +
                " on " +
                moment(new Date()).subtract(12, "years").format("L")
            );
            chatContainer.scrollTop(chatContainer[0].scrollHeight);
          }
    
          if (object.name == "Megan" && isAudioActivated) {
            audioElement.play();
          }
        }
        chatContainer.scrollTop(chatContainer[0].scrollHeight);
    
        timers.shift();
      }, totalDelay);
    });
    
    console.log(timers);
})

$("html").ready(function () {
  $(window).height();
  $(window).width();
  $("#webcam-live-stream").append(
    "<style>.webcam.open {width:" +
      $(window).width() +
      "px;height:" +
      $(window).height() +
      "px}</style>"
  );
});

var isPaused = false;
var i = 0;

$(window).keypress(function (e) {
  console.log(e.key);

  if (e.key == "Enter") {
    e.preventDefault();
    $("#writing-box").text("");
    document.getElementsByClassName(".writing-box")[0].innerHTML = "";
  }

  if (e.key === "16") {
    console.log("tototot");
    // ' ' is standard, 'Spacebar' was used by IE9 and Firefox < 37
    e.preventDefault();

    timers.map(function (object) {
      i++;
      if (isPaused) {
        object.resume();
        console.log(1);
        if (timers.length === i) {
          console.log(11);
          i = 0;
          isPaused = false;
          console.log("play");
        }
      } else {
        object.pause();
        console.log(2);
        if (timers.length === i) {
          console.log(22);
          i = 0;
          isPaused = true;
          console.log("pause");
        }
      }
    });
  }
});
</script>

<style>
.icons {
  background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/238916/windowsXPicones.png");
  position: absolute;
  top: 0;
  left: 0;
  width: 810px;
  height: 540px;
  z-index: 2;
  background-size: cover;
}

@keyframes wizz {
  0% {
    transform: translateX(-1vw) rotate(-3deg);
  }
  10% {
    transform: translateX(1vw) rotate(0deg);
  }
  20% {
    transform: translateX(-1vw) rotate(3deg);
  }
  30% {
    transform: translateX(1vw) rotate(0deg);
  }
  40% {
    transform: translateX(-1vw) rotate(-3deg);
  }
  50% {
    transform: translateX(1vw) rotate(0deg);
  }
  60% {
    transform: translateX(-1vw) rotate(3deg);
  }
  70% {
    transform: translateX(1vw) rotate(0deg);
  }
  80% {
    transform: translateX(-1vw) rotate(3deg);
  }
  90% {
    transform: translateX(1vw) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}

html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

a {
  cursor: pointer;
}

.background {
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/238916/1200x768_fond-ecran-defaut-windows-xp.jpeg");
  width: 100%;
  height: 100%;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

.chat-wrapper {
  width: 100%;
  height: 100%;
  background-size: cover;
  z-index: 10;
  position: relative;
 .chat {
    width: 487px;
    height: 488px;
    border-radius: 5px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding: 85px 160px 170px 23px;
    box-sizing: border-box;
    margin: auto;
    background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/238916/msn.png");
    background-size: cover;
  }
}

.status {
  position: absolute;
  top: 22px;
  left: 33px;
  font-size: 12px;
  color: grey;
}

.img {
  width: 200px;
  height: 200px;
  display: block;
}

label {
  display: inline;
}

.link {
  display: inline-flex;
  margin: 0 5px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.grey {
  color: rgba(0, 0, 0, 0.7);
  display: inline;
}

.blue {
  color: blue !important;
  text-decoration: underline;
  display: inline;
  cursor: pointer;
}

.is-writting {
  position: absolute;
  bottom: 26px;
  left: 14px;
  font-size: 11px;
  color: grey;
}

.avatar-1 {
  width: 94px;
  height: 94px;
  position: absolute;
  top: 91px;
  right: 25px;
  bottom: 0;
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/238916/meganProfil.jpeg");
  background-size: cover;
  background-color: #fafafa;
}
.avatar-2 {
  width: 94px;
  height: 94px;
  position: absolute;
  top: 348px;
  right: 25px;
  bottom: 0;
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/238916/ferdi.jpg");
  background-size: cover;
  background-color: #fafafa;
}

.chat {
  &.wizz {
    animation: wizz 0.5s ease-in-out 1 backwards;
  }
}

.chat-container {
  overflow-y: scroll;
  overflow-x: hidden;
  width: 2315px;
  height: 232px;
  position: relative;
  z-index: 0;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: -10px;
    z-index: 99999999;
    width: 10px;
    height: 100%;
    background-color: white;
  }
}

.name {
  position: absolute;
  top: 6px;
  left: 32px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.8);
}

.name-of {
  margin-top: 5px;
  font-size: 12px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 310px;
}

.one {
  color: #3b0f81;
  font-family: "Comic Sans MS";
  font-size: 14px !important;
  span,
  label {
    font-size: 14px !important;
  }
}
.two {
  color: #b619a9;
  font-family: "Roboto";
  font-size: 14px !important;
  span,
  label {
    font-size: 14px !important;
  }
}

label,
div {
  font-size: 12px;
}

li {
  padding-top: 4px;
  &:first-child {
    padding-top: 10px;
  }
  label {
    font-size: 12px;
    img {
      width: 15px;
      height: 15px;
      margin-left: 3px;
      margin-right: 3px;
      display: inline;
    }
  }
  label:first-child {
    display: block;
    color: rgba(0, 0, 0, 0.6);
  }
}

html {
  font-family: Sans, sans-serif;
}

img {
  margin: 0 !important;
}

textarea {
  border: none;
  width: 250px;
  height: 60px;
}

textarea:focus {
  border: none;
  outline: 0;
}

.chat-writing-box {
  margin-top: 62px;
  font-size: 12px;
  background: none;
}

.windows-nav__left {
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/238916/botnav-left.png");
  width: 170px;
  height: 34px;
  position: absolute;
  bottom: 0;
  left: 0;
  background-size: cover;
  z-index: 21;
}

.windows-nav__mid {
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/238916/botnav-mid.png");
  z-index: 20;
  width: 100%;
  height: 34px;
  position: absolute;
  bottom: 0;
  left: 0;
  background-size: contain;
  right: 0;
  background-repeat: repeat-x;
}

.windows-nav__right {
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/238916/botnav-right.png");
  width: 150px;
  height: 34px;
  position: absolute;
  bottom: 0;
  right: 0;
  background-size: cover;
  z-index: 21;
}

.chat-video {
  padding-top: 10px;
  display: inline-block;
}

.hide-scrollbar {
  z-index: 2;
  position: absolute;
  width: 19px;
  height: 249px;
  top: 82px;
  right: 136px;
  background: #fafbfd;
}

.webcam {
  position: absolute;
  width: 94px;
  height: 94px;
  background: #fafafa;
  top: calc(50% - 153.5px);
  right: calc(50% - 219px);
  z-index: 99999;
  transition: all 500ms ease;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  &.open {
    opacity: 1;
    width: 1280px;
    height: 1024px;
    top: 0px;
    right: 0px;
    #loading {
      width: 100px;
      height: 100px;
    }
  }
}

#loading {
  width: 50px;
  height: 50px;
  background-size: cover;
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/238916/msn-gif-3.gif");
}
</style>
