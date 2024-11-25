/* Toggle a class to rotate the arrow smoothly in CSS */
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

async function arrowToggle() {
    var image = document.getElementById("navExpanderArrow");
    var imagePath = image.src;
    image.classList.toggle("arrowRotated");
    var photographySubsection = document.getElementById("photographySubsection");
    photographySubsection.classList.toggle("dBlock");
    await sleep(20);
    photographySubsection.classList.toggle("scale1");
  }