var openMenu = document.getElementById("buttonOpen");
var closeMenu = document.getElementById("buttonClose");
var menuWrapper = document.getElementById("menuContainer");

// Open Menu Wrapper with Open Button
function toggleMenu() {
    if (menuWrapper.style.display = "none") {
        menuWrapper.style.display = "table";
    } else {
        menuWrapper.style.display = "none";
    }
}

// Close Menu Wrapper with Close Button
function toggleMenuClose() {
    menuWrapper.style.display = "none";
}

// Close Menu Wrapper by choosing an item
function menuItemsClose() {
    var menuItems = [].slice.call(document.getElementsByClassName("menuItem"));
  
    menuItems.forEach(function(element, index) {
      element.addEventListener("click", function() {
        menuWrapper.style.display = "none";
        console.log("adesd");
      });
    });
  }

// Add Event Listener Click
openMenu.addEventListener("click", toggleMenu);
closeMenu.addEventListener("click", toggleMenuClose);
menuItemsClose();