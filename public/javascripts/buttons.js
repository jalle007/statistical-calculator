//respond to button clicks

var removeItem = function () {
  var x = document.getElementById("lstSelect");
  x.remove(x.selectedIndex);
}
var clearAll = function () {
  document.getElementById("lstSelect").innerHTML = "";
   
}

var editItem = function () {
  var btEdit = document.getElementById("btEdit");
    var list = document.getElementById("lstSelect");
    var txt1 = document.getElementById("txt1");

  if (btEdit.innerHTML == "Edit") {
    var index = list.selectedIndex;

    var item = list.options[index].text;
    txt1.value = item;

    btEdit.innerHTML = 'Save';
    btEdit.value = index;
  } else //Save
  {
    btEdit.innerHTML = 'Edit';
    list.options[btEdit.value].text = txt1.value;
    list.options[btEdit.value].select =true;
    
  }
}

var add = function () {
  var x = document.getElementById("lstSelect");
  var option = document.createElement("option");
  var txt1 = document.getElementById("txt1");
  option.text = txt1.value;
  option.selected = true;
  x.add(option);

  txt1.value = '';
}


  //AutoFill values
var AutoFill = function () {
  var list = document.getElementById("lstSelect");
  function roundDown(number, decimals) {
    decimals = decimals || 0;
    return (Math.floor(number * Math.pow(10, decimals)) / Math.pow(10, decimals));
  }
  function fill() {

    for (var i = 0; i < 5; i++) {
      var option = document.createElement("option");
      option.text = roundDown(Math.random() * 100, 3);
      option.selected = true;
      list.add(option);
    }
  }
  fill();
}
