// root.js

// 1️⃣ shout(string) → returns the string in all uppercase
function shout(string) {
  return string.toUpperCase();
}

// 2️⃣ whisper(string) → returns the string in all lowercase
function whisper(string) {
  return string.toLowerCase();
}

// 3️⃣ logShout(string) → logs the string in uppercase
function logShout(string) {
  console.log(string.toUpperCase());
}

// 4️⃣ logWhisper(string) → logs the string in lowercase
function logWhisper(string) {
  console.log(string.toLowerCase());
}

// 5️⃣ sayHiToHeadphonedRoommate(string)
function sayHiToHeadphonedRoommate(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!";
  } else if (string === string.toUpperCase()) {
    return "YES INDEED!";
  } else if (string === "Let's have dinner together!") {
    return "I would love to!";
  }
}

// Export functions for testing
module.exports = {
  shout,
  whisper,
  logShout,
  logWhisper,
  sayHiToHeadphonedRoommate
};
