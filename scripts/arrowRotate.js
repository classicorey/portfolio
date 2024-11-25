/* Toggle a class to rotate the arrow smoothly in CSS */
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

async function arrowToggle() {
    var image = document.getElementById("navExpanderArrow");
    var imagePath = image.src;
    image.classList.toggle("arrowRotated");
    var photographySubsection = document.getElementById("photographySubsection");
    
    if (photographySubsection.classList.contains("dBlock") == true){
      photographySubsection.classList.toggle("scaleX1");
      await sleep(180);
      photographySubsection.classList.toggle("dBlock");
    }
    else{
      photographySubsection.classList.toggle("dBlock");
      await sleep(20);
      photographySubsection.classList.toggle("scaleX1");
    }
  }