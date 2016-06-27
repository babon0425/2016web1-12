
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
}
for(var i=1;i<100;i++){
  var li = document.createElement('li');
  li.textContent = i + '回目';
  document.getElementById('list').appendChild(li);
}
document.getElementById('form').onsubmit = function(){
  window.alert(document.getelementById('form').include_Fizz-Buzz(message).value);
};
