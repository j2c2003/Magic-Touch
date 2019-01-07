console.log("Game Is Starting");
let reelIndex = [];
let selectedGroup = [];
let initialSelectedGroup = [];
const denom = .25;
const allReels = [];
const numOfReels = 5;
const icons = 11;
const numIconsOnReel = 150;
const iconSelectGroup = 3;
const iconReelBuffer = 1;
const paylines = 25;
const symbolCycle = 50;
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


/////select group of 3 values in each reel array
/////////////places the 3 values per reel icon into selectedGroup array
function getSymbols(){
  selectedGroup = [];
  reelIndex = [];
  for (let i = 0; i < numOfReels; i++){

    let iconSelect = getRandomInt(numIconsOnReel);
    //selects middle icon on reel
      if (iconSelect > (numIconsOnReel / 2) ){
    //More or Less than Half the symbols will adjust acordingly by add or subtracting position
        iconSelect = iconSelect - iconReelBuffer;
      } else {
        iconSelect = iconSelect + iconReelBuffer;

      }
    selectedGroup.push([allReels[i][iconSelect-1],allReels[i][iconSelect],allReels[i][iconSelect+1]]);
    reelIndex.push([iconSelect]);
  }
  selectedGroup = transposeArray(selectedGroup, 5);
  return selectedGroup;
}

function getInitialSymbols(){
  initialSelectedGroup = [];
  reelIndex = [];
  for (let i = 0; i < numOfReels; i++){

    let iconSelect = getRandomInt(numIconsOnReel);
    //selects middle icon on reel
      if (iconSelect > (numIconsOnReel / 2) ){
    //More or Less than Half the symbols will adjust acordingly by add or subtracting position
        iconSelect = iconSelect - iconReelBuffer;
      } else {
        iconSelect = iconSelect + iconReelBuffer;

      }
    initialSelectedGroup.push([allReels[i][iconSelect-1],allReels[i][iconSelect],allReels[i][iconSelect+1]]);
    reelIndex.push([iconSelect]);
  }
  initialSelectedGroup = transposeArray(initialSelectedGroup, 5);
  console.log(initialSelectedGroup);
  return initialSelectedGroup;
}


///////Transpose the selected group array////////////

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


const reel_1 = {

    reelPos: 0,
    xPosition: 100,
    yPosition: 100,
    speed: 20,
    stopped: false,
    nextSymbolPos: [143,-90],
    topSymbolPos: [143, 224],
    middleSymbolPos: [143, 384],
    bottomSymbolPos: [143, 544],
    initTopSymbol: 0,
    initMiddleSymbol: 0,
    initBottomSymbol: 0,
    initIndex: 0,
    nextSymbol: 0,
    finaleTopSymbol: 0,
    finaleMiddle: 0,
    finaleBottomSymbol: 0,
    finaleIndex: 20,
    cycles: 0,
    spinInfo: [],

get finaleSymbols(){

  this.finaleIndex = reelIndex[this.reelPos];
  let indexPos = this.finaleIndex;
  this.nextSymbol = allReels[this.reelPos][this.finaleIndex - 2];
  this.finaleTopSymbol = allReels[this.reelPos][this.finaleIndex - 1];
  this.finaleMiddle = allReels[this.reelPos][this.finaleIndex];
  this.finaleBottomSymbol = allReels[this.reelPos][this.finaleIndex[0]+1];
},
initialize(){
  this.initTopSymbol = initialSelectedGroup[0][this.reelPos];
  this.initMiddleSymbol = initialSelectedGroup[1][this.reelPos];
  this.initBottomSymbol = initialSelectedGroup[2][this.reelPos];
  this.initIndex = reelIndex[this.reelPos];
},

spin(){
  this.spinInfo = [];
  ///Determine how many iterations through reel from start to stop
  this.finaleIndex = reelIndex[this.reelPos];
  let stopIndex = this.finaleIndex[0];
  let startIndex = this.initIndex[0];
  let iterations = 0;
  console.log(startIndex, stopIndex);
  if (startIndex >= stopIndex) {
    console.log('start is greater than final ', iterations, startIndex, stopIndex);
    iterations = startIndex - stopIndex;
    iterations = iterations + 149;
    console.log('start is greater than final ', iterations, startIndex, stopIndex);
  } else {
    console.log('start is LESS than final ', iterations, startIndex, stopIndex);
    iterations = startIndex + 149;
    iterations = iterations - stopIndex;
    console.log('start is LESS than final ', iterations, startIndex, stopIndex);
  }

this.spinInfo.push(this.reelPos, startIndex, iterations);


///preventing crazyness with a while loop, comparing arrays together instead of thier values
while (iterations < 1000) {

  console.log('cycles to stop ', iterations);
///AFTER GETTING SYMBOLS FUNCTION//////////
  let symbolPosition = this.initIndex;
  let topSymbol = symbolPosition - 1;
  let bottomSymbol = topSymbol + 2; //weird issue, symbolPosition +1 is undefined
  let middleSymbol = allReels[this.reelPos][symbolPosition];
  let nextSymbol = symbolPosition - 2;
  topSymbol = allReels[this.reelPos][topSymbol];
  bottomSymbol = allReels[this.reelPos][bottomSymbol];
  nextSymbol = allReels[this.reelPos][nextSymbol];
  console.log(nextSymbol);
  console.log(topSymbol);
  console.log(middleSymbol);
  console.log(bottomSymbol);
  console.log(symbolPosition);

  if (symbolPosition <= numIconsOnReel) {
      for (let i = 0; i < iterations; i++) {
        symbolPosition --;

        if (symbolPosition == 0){
          nextSymbol = allReels[this.reelPos][numIconsOnReel - 2];
          topSymbol = allReels[this.reelPos][numIconsOnReel - 1];
          middleSymbol = allReels[this.reelPos][symbolPosition];
          bottomSymbol = allReels[this.reelPos][symbolPosition + 1];
          symbolPosition = numIconsOnReel - 1;
          console.log('index ', symbolPosition);
        } if (symbolPosition == numIconsOnReel - 1) {
          nextSymbol = allReels[this.reelPos][numIconsOnReel - 3];
          topSymbol = allReels[this.reelPos][numIconsOnReel - 2];
          middleSymbol = allReels[this.reelPos][symbolPosition];
          bottomSymbol = allReels[this.reelPos][0];
                  console.log('index ', symbolPosition);
        } else {
         nextSymbol = allReels[this.reelPos][symbolPosition - 2];
         topSymbol = allReels[this.reelPos][symbolPosition - 1];
         middleSymbol = allReels[this.reelPos][symbolPosition];
         bottomSymbol = allReels[this.reelPos][symbolPosition + 1];
        console.log('index ', symbolPosition);
      }
    }

  }
  this.initTopSymbol = topSymbol;
  this.initMiddleSymbol = middleSymbol;
  this.initBottomSymbol = bottomSymbol;
  this.initIndex[0] = stopIndex;
  this.cycles = iterations;
  break;
  }
},

}


function play(){
  if (playCost <= balance && paylines >= 1) {
    winList = [];
    payoutArray = [];
    balance = balance - playCost;
    console.log(balance);

    getSymbols();
    reel_1.spin();
    getPaylineMatches();
    getIconPayouts();
    displayWins();
    adjustBalances();

  } else {
    console.log("balance is at " + balance);
    return false;
  }

}
//All reels get thier starting symbols before play////
function initializeReels(){
  reel_1.initialize();
}

//Start up Functions////////////
createReels();
getInitialSymbols();
initializeReels();

console.log(allReels);
