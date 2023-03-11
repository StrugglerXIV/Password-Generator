// Assignment code here
function passwordQuery() {
  //Setting our pool of options based on character types
  var lcArrayChars = "abcdefghijklmnopqrstuvwxyz"
  var ucArrayChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var nrArrayChars = "1234567890";
  var scArrayChars = "±!@#$%^&*()_+-="
  //Promts
  var passLength = prompt("How many characters should the password have? (At least 8 characters and no more than 128 characters");
  if (passLength >= 8 && passLength <= 128) {
    var lcPromt = confirm("Do you want to use lowercase?");
    var ucPromt = confirm("Do you want to use upercase?");
    var nrPromt = confirm("Do you want to use numbers?");
    var scPromt = confirm("Do you want to use special characters?");
    //Refreshes webpage if all characters are declined and notifies user at least one option must be chosen.
    if (lcPromt === false && ucPromt === false && nrPromt === false && scPromt === false) {
      alert("Choose at least one option.")
      location.reload()
    };
    //If a promt is chosen, an array is created for each of chosen promts based on the initial length chosen by the user.
    if (lcPromt === true) {
      var lcPassword = [];
      for (i = 0; i < passLength; i++) {
        var lcArrayPassword = 0;
        lcArrayPassword = Math.floor(Math.random() * lcArrayChars.length);
        lcPassword.push(lcArrayChars[lcArrayPassword]);
      }
    }
    //If a promt is chosen, an array is created for each of chosen promts based on the initial length chosen by the user.
    if (ucPromt === true) {
      var ucPassword = [];
      for (i = 0; i < passLength; i++) {
        var ucArrayPassword = 0;
        ucArrayPassword = Math.floor(Math.random() * ucArrayChars.length);
        ucPassword.push(ucArrayChars[ucArrayPassword]);
      }
    }
    //If a promt is chosen, an array is created for each of chosen promts based on the initial length chosen by the user.
    if (nrPromt === true) {
      var nrPassword = [];
      for (i = 0; i < passLength; i++) {
        var nrArrayPassword = 0;
        nrArrayPassword = Math.floor(Math.random() * nrArrayChars.length);
        nrPassword.push(nrArrayChars[nrArrayPassword]);
      }
    }
    //If a promt is chosen, an array is created for each of chosen promts based on the initial length chosen by the user.
    if (scPromt === true) {
      var scPassword = [];
      for (i = 0; i < passLength; i++) {
        var scArrayPassword = 0;
        scArrayPassword = Math.floor(Math.random() * scArrayChars.length);
        scPassword.push(scArrayChars[scArrayPassword]);
      }
    }
    //We join all the randomly generated arrays into a big one and filter off the undefined values.
    var poolPass = [];
    var mixedPass = poolPass.concat(lcPassword, ucPassword, nrPassword, scPassword)
    var filteredPass = mixedPass.filter(function (x) {
      return x !== undefined
    })
    //Based on the initial password length input by user, we randomly generate a password that comes from a pool of all selected character types.
    var endPassword = []
    for (i = 0; i < passLength; i++) {
      var endArrayPassword = 0;
      endArrayPassword = Math.floor(Math.random() * filteredPass.length);
      endPassword.push(filteredPass[endArrayPassword]);
    }
    //We turn the array into a string, remove all the comas.
    var stringEndPass = String(endPassword);
    var filteredStringEndPass = stringEndPass.replaceAll(",", '');
    //Then we change the textcontent of the HTML element responsible for displaying it on screen.
    var passwordText = document.querySelector('#password');
    passwordText.textContent = filteredStringEndPass;
    //function ends
    return
  }
  //Page refreshes if the user doesn't choose a value between 8 to 128, effectively restarting the process.
  else {
    alert("Choose a number from 8 to 128")
    location.reload()
  }
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", passwordQuery);


// Creating a click and copy option 
function copyPassword () {
  copyBtn.select(); //Selects all for desktop users
  copyBtn.setSelectionRange(0, 99999); //Selects all for mobile users
  navigator.clipboard.writeText(copyBtn.value);
  alert("Copied the password: " + copyBtn.value);
}
var copyBtn = document.querySelector("#password")
copyBtn.addEventListener("click", copyPassword)