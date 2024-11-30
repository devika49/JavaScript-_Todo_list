var char = "a";

char = char.toLowerCase();

if (
  char === "a" ||
  char === "e" ||
  char === "i" ||
  char === "o" ||
  char === "u"
) {
  console.log("It's a vowel");
} else if (char >= "a" && char <= "z") {
  console.log("it's a consonant");
} else {
  console.log("Invalid input.Please enter an alphabetic character");
}
