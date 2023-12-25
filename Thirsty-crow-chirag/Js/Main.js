let ImageArray = ["1", "2", "3", "4"];
let shuffleImg = shuffleArr([...ImageArray]);

intial();
function intial() {
  document.getElementById("loadingdiv").innerHTML = Loadingmaker();
  GetEl("#bird").innerHTML = bgimg();
}

function bgimg() {
  return (svg = `<svg id=svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080">

  <svg id="anime" y="0" x="0">
  <image id="bgimg" href="./image/Bg.jpg" width="1920" height="1080" />
  
  <foreignObject id="" class="" x="0" y="0" width="1920" height="1080">
  ${Potmaker()}
  </foreignObject>

  <foreignObject id="" class="" x="1200" y="650" width="300" height="200">
  <div id="waterContainer"> </div>
  
  </foreignObject>
  
  </svg>
  </svg>`);
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

function Potmaker() {
  return `
        <div id="main_div"
      
        <div id="Pothome" style="height: 600px; width: 1100px; position: absolute; top: 43%; left: 25%;">
        <div id="mainCrow">
        <img id="CRimg" onclick="Crowing()" src="./Image/crow1.svg"/>
        
    </div>   
        
        
 
            <img id="StoneCrow" onclick="Crowing1()" class="hide" src="./Image/stone-crow.svg">
            
            <div id="parent_div">
            <img id="StoneCrow1" onclick="Crowing2()" class="hide" src="./Image/stone-crow.svg">
            <img id="StoneCrow2" onclick="Crowing3()" class="hide" src="./Image/stone-crow1.svg">
             <img id="stone_set" src="./Image/stone.svg">
             <img id="stone" src="./Image/stone1.png">
            <img id="Pimg" src="./Image/New_folder/1.png"/>
            <img id="default" src="./Image/New_folder/water_step/1.png"/>
            <img id="show" class="block" src="./Image/New_folder/water_step/2.png"/>

            <img id="show1" class="block" src="./Image/New_folder/water_step/3.png"/>
            <img id="show2" class="block" src="./Image/New_folder/water_step/4.png"/>
            <img id="show3" class="block" src="./Image/New_folder/water_step/5.png"/>
            <img id="show4" class="block" src="./Image/New_folder/water_step/6.png"/>
            <img id="show5" class="block" src="./Image/New_folder/water_step/7.png"/>


            </div>
            
            
            </div>
          
        </div>
        </div>`;
}

function switchImages(currentId, nextId) {
  let currentImage = document.getElementById(currentId);
  let nextImage = document.getElementById(nextId);

  if (currentImage && nextImage) {
    currentImage.classList.add("hide");

    nextImage.classList.remove("hide");
  } else {
    // console.error("One or both of the elements with the provided IDs do not exist.");
  }
}

function Crowing() {
  switchImages("CRimg", "StoneCrow");
}

function Crowing1() {
  document.getElementById("");
  switchImages("StoneCrow", "StoneCrow1");
}

let isStoneCrow2 = true;

let waterImgIndex = 1;

function Crowing2() {
  if (isStoneCrow2) {
    switchImages("StoneCrow1", "StoneCrow2");
    // showWater();
    switchImages("StoneCrow1", "StoneImg1");
  } else {
    switchImages("StoneCrow1", "StoneImg2");
    switchImages("StoneCrow2", "StoneCrow");
  }

  isStoneCrow2 = !isStoneCrow2;
}

let images = document.querySelectorAll("#StoneCrow1");
let blockElements = [
  document.getElementById("show"),
  document.getElementById("show1"),
  document.getElementById("show2"),
  document.getElementById("show3"),
  document.getElementById("show4"),
  document.getElementById("show5"),
];

let currentBlockIndex = 0;

images.forEach((img) => {
  img.addEventListener("click", function () {
    blockElements.forEach((block) => (block.style.display = "none"));

    default1.style.display = "none";
    currentBlockIndex = (currentBlockIndex + 1) % blockElements.length;

    blockElements[currentBlockIndex].style.display = "block";
  });
});

let default1 = document.getElementById("default");

function Crowing3() {
  if (isStoneCrow2) {
    switchImages("StoneCrow2", "StoneCrow");
    switchImages("StoneCrow1", "StoneImg2");
  } else {
    switchImages("StoneCrow1", "StoneImg2");
    switchImages("StoneCrow2", "StoneCrow");
  }

  isStoneCrow2 = !isStoneCrow2;
}
