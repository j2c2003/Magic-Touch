console.log("Game Is Starting");

let selectedGroup = [];
const denom = .25;
const allReels = [];
const numOfReels = 5;
const icons = 11;
const numIconsOnReel = 150;
const iconSelectGroup = 3;
const iconReelBuffer = 1;
const paylines = 25;
let balance = 100;
let minorProgressive = 0;
let majorProgressive = 0;
let won = 0;
let bonusWin = 0;
let audio = true;
let currentWin = 0;
let winList = [];
let last10Wins = [];
let payoutArray = [];
let playCost = denom * paylines;

////Functons/////////////////////

// Random Number
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// creates number of reel instances and puts random range of icon values on the reels
function createReels(){
  for (let i = 0; i < numOfReels; i++){
    console.log("creating a reel")
    let reel = [];
    for (let i = 0; i < numIconsOnReel; i++){
          reel.push(getRandomInt(icons));
      }
    allReels.push(reel);
    //console.log(allReels);
  }
}
createReels();

/////select group of 3 values in each reel array
//places the 3 values per reel icon selectedGroup
function getSymbols(){
  selectedGroup = [];
  for (let i = 0; i < numOfReels; i++){
    //console.log("getting reel stop for reel " + [i]);
    let iconSelect = getRandomInt(numIconsOnReel);
      if (iconSelect > (numIconsOnReel / 2) ){
        //console.log("subtract");
        iconSelect = iconSelect - iconReelBuffer;
      } else {
        iconSelect = iconSelect + iconReelBuffer;
        //console.log("add");
      }
    selectedGroup.push([allReels[i][iconSelect-1],allReels[i][iconSelect],allReels[i][iconSelect+1]]);
    //console.log(iconSelect);
  }
  selectedGroup = transposeArray(selectedGroup, 5);
  return selectedGroup;
}

//selectedSymbols = transposeArray(selectedSymbols, reelRows);
////Transpose the selected group array////////////
function transposeArray(array, arrayLength){
  var newArray = [];
    for(var i = 0; i < numOfReels; i++){
          newArray.push([]);
    };

    for(var i = 0; i < numOfReels; i++){
        for(var j = 0; j < arrayLength; j++){
         newArray[j].push(array[i][j]);
      };
    };
    //console.log(newArray);
    return newArray;
    }

function displayWins(){
  console.log(payoutArray);
  }

function adjustBalances(){
  for (var i = 0; i < payoutArray.length; i++) {
      balance = balance + payoutArray[i][0];
        console.log(balance);
  }


  }

function simulate(){
    for (let i = 0; i < 50; i++){
      winList = [];
      payoutArray = [];

      getSymbols();
      console.log(payline1.matches, payline2.matches, payline3.matches,payline4.matches, payline5.matches, payline6.matches,
                  payline8.matches, payline10.matches, payline11.matches, payline12.matches, payline13.matches, payline14.matches,
                  payline15.matches, payline16.matches, payline17.matches);
      console.log(icon0.payouts, icon1.payouts, icon2.payouts, icon3.payouts, icon4.payouts, icon5.payouts, icon6.payouts, icon7.payouts, icon8.payouts, icon9.payouts, icon10.payouts);
          console.log(winList)
          console.log(payoutArray);
    }

}

function play(){
  if (playCost <= balance && paylines >= 1) {
    winList = [];
    payoutArray = [];
    balance = balance - playCost;
    console.log(balance);

    getSymbols();
    getPaylineMatches();
    getIconPayouts();
    displayWins();
    adjustBalances();

  } else {
    console.log("balance is at " + balance);
    return false;
  }

}







console.log(allReels);
