let ImageArray = ["1", "2", "3", "4"];
let shuffleImg = shuffleArr([...ImageArray]);

let waterlevel = 1;

intial();
function intial() {
  document.getElementById("loadingdiv").innerHTML = Loadingmaker();
  GetEl("#bird").innerHTML = bgimg();

  let waterelms = document.querySelectorAll(".potwater");
  let temp = [...waterelms];
  // console.log(waterelms);
  waterelms = temp.slice(0, 4);
  waterelms = shuffleArr([...waterelms]);

  waterelms[0].classList.remove("hide");
  console.log(waterelms[0].getAttribute("check-water"));
  waterlevel = waterelms[0].getAttribute("check-water");
  document.querySelectorAll(".kagdo").forEach((element) => {
    element.addEventListener("click", crowChange);
  });
}

function crowChange() {
  let id = event.target.getAttribute("id");

  switch (id) {
    case "kagdo1":
      document.getElementById("kagdo1").classList.add("hide");
      document.getElementById("kagdo2").classList.add("show");
      break;
    case "kagdo2":
      document.getElementById("kagdo2").classList.add("hide");
      document.getElementById("kagdo2").classList.remove("show");
      document.getElementById("kagdo3").classList.add("show");
      break;
    case "kagdo3":
      document.getElementById("kagdo2").classList.add("hide");
      document.getElementById("kagdo2").classList.remove("show");
      document.getElementById("kagdo3").classList.add("show");
      document.getElementById("kagdo3").classList.remove("show");
      document.getElementById("kagdo4").classList.add("show");
      document.getElementById("kagdo4").classList.remove("show");
      document.getElementById("kagdo2").classList.add("show");
      stoneMake();
      break;
    case "kagdo4":
      break;
  }

  // kagdo1
  console.log();
}

function bgimg() {
  return (svg = `<svg id=svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080">

  <svg id="anime" y="0" x="0">
  <image id="bgimg" href="./image/Bg.jpg" width="1920" height="1080" />
  
  <foreignObject id="" class="" x="0" y="0" width="1920" height="1080">
  
  </foreignObject>




    <image id="" x="900" y="700" width="400" href="./Image/stone.svg"/>
    <image id="" x="480" y="495" width="330" href="./Image/New_folder/1.png" />

        <image id="stone1" class="stone" check-water="1"  x="580" y="880" width="20" href="./Image/stone1.png" />
        <image id="stone2" class="stone"  check-water="2" x="600" y="880" width="20" href="./Image/stone1.png" />
        <image id="stone3" class="stone"  check-water="3" x="660" y="880" width="20" href="./Image/stone1.png" />
        <image id="stone4" class="stone"  check-water="4" x="680" y="880" width="20" href="./Image/stone1.png" />
        <image id="stone5" class="stone"  check-water="5" x="640" y="880" width="20" href="./Image/stone1.png" />
    
     <image class="potwater hide" check-water="1" x="480" y="495" width="330" href="./Image/New_folder/water_step/2.png" />
    <image class="potwater hide" check-water="2" x="480" y="495" width="330" href="./Image/New_folder/water_step/3.png" />
    <image class="potwater hide" check-water="3" x="480" y="495" width="330" href="./Image/New_folder/water_step/4.png" />
    <image class="potwater hide" check-water="4" x="480" y="495" width="330" href="./Image/New_folder/water_step/5.png" />
    <image class="potwater hide" check-water="5" x="480" y="495" width="330" href="./Image/New_folder/water_step/6.png" />
    <image class="potwater hide" check-water="6" x="480" y="495" width="330" href="./Image/New_folder/water_step/7.png" />
    


      <svg>
      </svg>
      <image id="kagdo1" class="kagdo" x="1520" y="650" width="400" href="./Image/crow1.svg"/>
      <image id="kagdo2" class="kagdo hide" x="1220" y="650" width="300" href="./Image/stone-crow.svg"/>
      <image id="kagdo3" class="kagdo hide" x="570" y="345" width="250" href="./Image/stone-crow.svg"/>
      <image id="kagdo4" class="kagdo hide" x="570" y="345" width="250" href="./Image/stone-crow1.svg"/>
    


 
  
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

function stoneMake() {
  let blockElements = [
    document.getElementById("stone1"),
    document.getElementById("stone2"),
    document.getElementById("stone3"),
    document.getElementById("stone4"),
    document.getElementById("stone5"),
    document.getElementById("stone6"),
  ];

  let blockElements1 = [...blockElements];

  blockElements1[0].getAttribute("check-water");

  let currentIndex = 0;

  let kagdo2 = document.getElementById("kagdo2");
  let waterelms = document.querySelectorAll(".potwater");
  kagdo2.addEventListener("click", function () {
    
    if (waterelms??waterlevel === blockElements1) {

      blockElements1[0].style.display="block";
  
      // showNextImage();
    } else {
      console.log("wrong");
    }
  });





}

let potWaterElements = document.querySelectorAll(".potwater");

let currentIndex1 = 0;

function showNextImage() {
  potWaterElements[currentIndex1].classList.add("hide");

  currentIndex1 = (currentIndex1 + 1) % potWaterElements.length;

  potWaterElements[currentIndex1].classList.remove("hide");
}


