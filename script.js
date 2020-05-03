//nav checkbtn
function toggle(){
    var menu = document.getElementById("Menu")
    var menuoverlay = document.getElementById("menu-overlay")
    menu.classList.toggle('active')
    menuoverlay.classList.toggle('active')
}

function toggle(){
  var menu = document.getElementById("Menu")
  var menuoverlay = document.getElementById("menu-overlay")
  menu.classList.toggle('active')
  menuoverlay.classList.toggle('active')
}
function fonction(){
  var header = document.getElementById("header")
  var menuoverlay = document.getElementById("menu-overlay")
  var menu = document.getElementById("Menu")
  menuoverlay.classList.remove('active')
  menu.classList.remove('active')
  header.classList.add('active')
}