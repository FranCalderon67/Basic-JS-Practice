/*
Make a function that validates if the string provied its an email

validateEmail('test@example.com') // => returns true
validateEmail('test@example') // => returns false
Then, make another for a cellphone with format

(country code) (area code) (number)

validateCellphone('+5492613159290') // => returns true
validateCellphone('2613159290') // => returns false
*/

const mail = "franciscocalderon1990@gmail.com";
const phoneNumber = 542615120167;

function mailVerification (email){


  let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

if(regex.test(email)=== true){
  console.log("We've recieved you E-mail addres")
}else {
  console.log ("E-mail error")
}

  return regex.test(email);
};

function phoneVerification (pNumber){
 if(typeof pNumber != 'string'){
  pNumber.toString()
  }
  let plus = "+"
  let newpNumber = plus + pNumber;
  let phoneRegex = /[\+][0-9]{1,2}[0-9]{1,3}[0-9]{7,11}/

  if(phoneRegex.test(newpNumber)=== true){
    console.log("We've recieved you phone number")
  }else {
    console.log ("Phone number error")
  }

  return phoneRegex.test(newpNumber);
};

mailVerification(mail);
phoneVerification(phoneNumber);