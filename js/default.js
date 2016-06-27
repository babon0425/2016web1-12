
var include_Fizz-Buzz = function(F-B){
  if(F-B === 3){
    message = 'Fizz';
  }
  else if(F-B === 5){
    message = 'Buzz';
  }
  else if(F-B === 15){
    message = 'Fizz Buzz';
  }
  else{
    message = 'F-B';
  }
  return message;
}
document.getElementById('form').onsubmit = function(){
  window.alert('押されました');
 //window.alert(document.getelementById('form').message.value);
 return false;
};
