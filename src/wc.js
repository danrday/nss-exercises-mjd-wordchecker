
let $submitButton = $("#submitButton");
let $textBox = $("#textBox");
let $output = $("#output");



let validateText = function () {
  console.log("TEST");

  let text = $textBox.val();
  console.log($textBox.val());

  let a = checkWordCount(text);
  let b = duplicateCheck(text);
  let c = verifyAlphaNumeric(text);

  console.log("a,b,c", a, b, c);

  if (a && b && c) {
    $output.html("VALID");
  } else {
    $output.html("NOT VALID");
  }
};


$submitButton.click(validateText);


let checkWordCount = function (string) {
  let wordArray = string.split(" ");
  // console.log(wordArray)
  return wordArray.length < 100 ? true : false; 
};

let duplicateCheck = function (string) {
  string = string.split(' ').sort();
  for (var x = 0; x < string.length - 1; x++) {
    if (string[x] === string[x + 1]) return false;
  } 
    return true;
};

let verifyAlphaNumeric = function (string) {
  let z = /^[0-9a-zA-Z]*$/.test(string);
  return z;
}
