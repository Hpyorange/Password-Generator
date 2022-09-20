// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

upperCase = lowerCase.map(function(x){
  return x.toUpperCase();
});

var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var special = ["!","\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

var containLower;
var containUpper;
var containNum;
var containSpecial;
var userC;

function generatePassword() {
  var length = prompt("How many characters would you like your password to contain? Please choose between 8 - 128")


    if(!length || isNaN(length)){
      alert("🤔 Please Enter a valid number for password' length");
    }

    else if (length < 8 || length > 128) {
        alert("🤔 Please choose your password length between 8 - 128 characters ");
        return;
    }

    else {
      containLower = confirm("Do you want to contain lower case letters in your password?");
      containUpper = confirm("Do you want to contain upper case letters in your password?");
      containNum = confirm("Do you want to contain numbers in your password?");
      containSpecial = confirm("Do you want to contain special characters in your password?");

      //4
      if(!containLower && !containUpper && !containNum && !containSpecial){
        alert("🤔 Please at less choose one of the criteria");
        return;
      }
  
      else if(containLower && containUpper && containNum && containSpecial){
        userC = lowerCase.concat(upperCase,num,special);
      }
  
      //3
      else if(containLower && containUpper && containNum){
        userC = lowerCase.concat(upperCase,num);
      }
  
      else if(containLower && containUpper && containSpecial){
        userC = lowerCase.concat(upperCase,special);
      }
  
      else if(containLower && containNum && containSpecial){
        userC = lowerCase.concat(num,special);
      }
  
      else if(containNum && containUpper && containSpecial){
        userC = upperCase.concat(num,special);
      }
  
      //2
      else if(containLower && containUpper){
        userC = lowerCase.concat(upperCase);
      }
  
      else if(containLower && containNum){
        userC = lowerCase.concat(num);
      }
  
      else if(containLower && containSpecial){
        userC = lowerCase.concat(special);
      }
  
      else if(containUpper && containNum){
        userC = upperCase.concat(num);
      }
  
      else if(containUpper && containSpecial){
        userC = upperCase.concat(special);
      }
  
      else if(containSpecial && containNum){
        userC = special.concat(num);
      }
  
      //1
      else if(containLower){
        userC = lowerCase;
      }
  
      else if(containUpper){
        userC = upperCase;
      }
  
      else if(containNum){
        userC = num;
      }
  
      else if(containSpecial){
        userC = special;
      }
  
      var passwordContainer = [];
  
      for(var i = 0, n = userC.length; i < length; i++){
        var generate = userC[Math.floor(Math.random()* n)];
        passwordContainer.push(generate);
  
        var passwords = passwordContainer.join("");
      }

      return passwords;

    }


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
