let ImageArray = ["1", "2", "3", "4"];
let shuffleImg = shuffleArr([...ImageArray]);

intial();
function intial() {
  document.getElementById("loadingdiv").innerHTML = Loadingmaker();
  GetEl("#bird").innerHTML = bgimg();


  // clicker();
}

function bgimg() {
  return svg = `<svg id=svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080">

  <svg id="anime" y="0" x="0">
  <image id="bgimg" href="./image/Bg.jpg" width="1920" height="1080" />
  
  <foreignObject id="" class="" x="0" y="0" width="1920" height="1080">
  ${Potmaker()}
  </foreignObject>

  <foreignObject id="" class="" x="1200" y="650" width="300" height="200">
  <div id="waterContainer"> </div>
  ${Stonehome()}
  </foreignObject>
  
  </svg>
  </svg>`;


}

function Loadingmaker() {
  let str = `
  <div id="mainloading">
  <img id="Cimg" src="./Image/Crow1.gif" alt="Loading..." />
  <div id="progress-bar">
  <div id="progress-fill"></div>
  </div>
  <h1>Loading...</h1>
  </div>
    `;
  return str;
}

setTimeout(() => {
  hideLoadingScreen();
}, 3000);

function showLoadingScreen() {
  document.body.insertAdjacentHTML("beforeend", Loadingmaker());
}

function hideLoadingScreen() {
  const loadingScreen = document.getElementById("mainloading");
  loadingScreen.style.display = "none";
}

// Show loading screen when the page loads
// showLoadingScreen();
function Potmaker() {
  let numImages = 25;
  let imagesHTML = "";

  for (let i = 0; i < numImages; i++) {
    let randomTop = Math.floor(Math.random() * 150); 
    let randomLeft = Math.floor(Math.random() * 150);

    
    imagesHTML += `<img id="icrease${i + 1}" style="top: ${randomTop}px; left: ${randomLeft}px;" src="./Image/stone1.png" alt="Stone 1">`;
  }
  return `
        <div id="main_div"
      
        <div id="Pothome" style="height: 600px; width: 1100px; position: absolute; top: 43%; left: 25%;">
        <div id="mainCrow">
        <img id="CRimg" onclick="Crowing()" src="./Image/crow1.svg"/>
       
    </div>   
        
        
    <img id="Pimg" src="./Image/Pot.png"/>
            <img id="StoneCrow" onclick="Crowing1()" class="hide" src="./Image/stone-crow.svg">
            <img id="StoneCrow1" onclick="Crowing2()" class="hide" src="./Image/stone-crow.svg">
            <img id="StoneCrow2" onclick="Crowing3()" class="hide" src="./Image/stone-crow1.svg">
            <img id="icrease" src="./Image/stone5.png">
            <div id="dynamicImagesContainer"  class="parent_child">${imagesHTML}
            
            </div>
          
        </div>
        </div>`;
}

function switchImages(currentId, nextId) {
  let currentImage = document.getElementById(currentId);
  let nextImage = document.getElementById(nextId);

  currentImage.classList.add("hide");
  nextImage.classList.remove("hide");
}

function Crowing() {
  switchImages("CRimg", "StoneCrow");
}

function Crowing1() {
  switchImages("StoneCrow", "StoneCrow1");
}

let isStoneCrow2 = true;

let waterImgIndex = 1;





function Crowing2() {
  let Addimges = "5";
  let container = document.getElementById("S_HOME");

  for (let i = 0; i < Addimges.length; i++) {
    let include = `<img id="S_HOME${i + 1}" class="Stones" src="./Image/stone1.png">`;


    container.innerHTML += include;
    console.log(include);

   

  }
  if (isStoneCrow2) {
    switchImages("StoneCrow1", "StoneCrow2");
    switchImages("StoneCrow1", "StoneImg1");
    showWaterImages();
  } else {
    switchImages("StoneCrow1", "StoneImg2");
    switchImages("StoneCrow2", "StoneCrow");
    
  }
  isStoneCrow2 = !isStoneCrow2;
 

  

}



function showWaterImages() {

  
  let WaterImg = `
    <img id="WaterImg" class="hide" src="./Image/W_2.png">
    <img id="WaterImg1" class="hide" src="./Image/W_3.png">
    <img id="WaterImg2" class="hide" src="./Image/W_5.png">
    <img id="WaterImg3" class="hide" src="./Image/W_6.png">
    <img id="WaterImg4" class="hide" src="./Image/P_Full.png">
  `;
  let waterContainer = document.getElementById("waterContainer").innerHTML=WaterImg; 
  return WaterImg;
}


function Crowing3() {
  switchImages("StoneCrow2", "StoneCrow");
}

{
  /* <img id="WaterImg" class="hide" src="./Image/W_2.png">
<img id="WaterImg1" class="hide" src="./Image/W_3.png">
<img id="WaterImg2" class="hide" src="./Image/W_5.png">
<img id="WaterImg3" class="hide" src="./Image/W_6.png">
<img id="WaterImg4" class="hide" src="./Image/P_Full.png"></img> */
}

function Stonehome() {
  let str = `

  <div id="S_HOME">
  <img id="S_1" class="Stones" src="./Image/stone1.png">
  
  
   
  </div>

  `;
  return str;
}

