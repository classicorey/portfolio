/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navToggle() {
  var image = document.getElementById("hamburgerButton");
  var imagePath = image.src;
  var navContainer = document.getElementById("responsiveNavContainer");
  navContainer.classList.toggle("nav-open");
  imagePath = imagePath.substr(imagePath.length - 8);
  if (imagePath == "Dark.svg"){
    image.src="graphics/svgs/HamburgerButton.svg";
  }

  else {
    image.src="graphics/svgs/HamburgerButtonDark.svg";
  }
}