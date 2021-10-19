var sayText = function(txt){
  var alertString = "Hello " + txt + "!";
  console.log(alertString);
  alert(alertString);
  return alertString;
}

var numbers = {
  square: function(x) {
    return x * x;
  }
};