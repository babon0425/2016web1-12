
var include_Fizz_Buzz = function(F_B){
  if(F_B === 3){
    message = 'Fizz';
  }
  else if(F_B === 5){
    message = 'Buzz';
  }
  else if(F_B === 15){
    message = 'Fizz Buzz';
  }
  else{
    message = F_B;
  }
  return message;
}
document.getElementById('form').onsubmit = function(){
 window.alert(document.getelementById('form').message.value);
 return false;
};
