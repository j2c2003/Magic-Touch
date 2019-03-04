
console.log("Game Is Starting");
let reelIndex = [];
let selectedGroup = [];
let initialSelectedGroup = [];
//-----------------------denom and pays are in cents--------------------//
let denom = 1;
const allReels = [];
const numOfReels = 5;
const icons = 11;
const numIconsOnReel = 150;
const iconSelectGroup = 3;
const iconReelBuffer = 1;
const paylines = 25;
const symbolCycle = 50;
let balance = 10000;
let newBalance = 10000;
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
let infoCount = 0;
let infoIterate = 0;
let balanceChanging = false;
let anim_1_1_Active = false;
let anim_1_2_Active = false;
let anim_1_3_Active = false;
let anim_2_1_Active = false;
let anim_2_2_Active = false;
let anim_2_3_Active = false;
let anim_3_1_Active = false;
let anim_3_2_Active = false;
let anim_3_3_Active = false;
let anim_4_1_Active = false;
let anim_4_2_Active = false;
let anim_4_3_Active = false;
let anim_5_1_Active = false;
let anim_5_2_Active = false;
let anim_5_3_Active = false;


////Functons/////////////////////

// Random Number
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// creates number of reel instances and puts random range of icon values on the reels
function createReels(){
  for (let i = 0; i < numOfReels; i++){
    console.log("creating a reel");
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
  selectedGroup = initialSelectedGroup;
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
      }
    }
    //console.log(newArray);
    return newArray;
    }

function displayWins(){
  console.log(payoutArray);
  }

function adjustBalances(){
  for (var i = 0; i < payoutArray.length; i++) {
      won = won + payoutArray[i][0];
            }
   newBalance = balance + won;
   console.log(newBalance);
  }

function incrementBalance(){
  if (balance < newBalance) {
    balanceChanging = true;
    balance++;
   } else {
    balanceChanging = false;
   }
}



function showLineBoxes(payline, hits, icon){
   lineBox1.setAlpha(0);
   lineBox2.setAlpha(0);
   lineBox3.setAlpha(0);
   lineBox4.setAlpha(0);
   lineBox5.setAlpha(0);
   lineBox6.setAlpha(0);
   lineBox7.setAlpha(0);
   lineBox8.setAlpha(0);
   lineBox9.setAlpha(0);
   lineBox10.setAlpha(0);
   lineBox11.setAlpha(0);
   lineBox12.setAlpha(0);
   lineBox13.setAlpha(0);
   lineBox14.setAlpha(0);
   lineBox15.setAlpha(0);
   symWin1_1.setAlpha(0);
   symWin1_2.setAlpha(0);
   symWin1_3.setAlpha(0);
   symWin2_1.setAlpha(0);
   symWin2_2.setAlpha(0);
   symWin2_3.setAlpha(0);
   symWin3_1.setAlpha(0);
   symWin3_2.setAlpha(0);
   symWin3_3.setAlpha(0);
   symWin4_1.setAlpha(0);
   symWin4_2.setAlpha(0);
   symWin4_3.setAlpha(0);
   symWin5_1.setAlpha(0);
   symWin5_2.setAlpha(0);
   symWin5_3.setAlpha(0);

   anim_1_1_Active = false;
   anim_1_2_Active = false;
   anim_1_3_Active = false;
   anim_2_1_Active = false;
   anim_2_2_Active = false;
   anim_2_3_Active = false;
   anim_3_1_Active = false;
   anim_3_2_Active = false;
   anim_3_3_Active = false;
   anim_4_1_Active = false;
   anim_4_2_Active = false;
   anim_4_3_Active = false;
   anim_5_1_Active = false;
   anim_5_2_Active = false;
   anim_5_3_Active = false;


   for (let x = 0; x < hits; x++) {
    for (let y = 0; y < 3; y++) {
         marker = payline.array[y][x];
        console.log('marker is ' + marker + ' paylineArrayLocation x ' + x +' ' + y + payline);
        
         if (marker == 1){
                    
          if(x == 0 && y == 0){
            //put box in upper left spot on play area//= {
            lineBox1.setAlpha(1);
            lineBox1.setTint(lineReturn(payline));
            anim_1_1_Active = true;
            symWin1_1.anims.play(animReturn(icon)).setAlpha(1);
          } 
          if (x == 0 && y == 1) {
            lineBox6.setAlpha(1);
            lineBox6.setTint(lineReturn(payline));
            anim_1_2_Active = true;
            symWin1_2.anims.play(animReturn(icon)).setAlpha(1);
          }
          if (x == 0 && y == 2) {
            lineBox11.setAlpha(1);
            lineBox11.setTint(lineReturn(payline));
            anim_1_3_Active = true;
            symWin1_3.anims.play(animReturn(icon)).setAlpha(1);
          }
          if(x == 1 && y == 0){
            lineBox2.setAlpha(1);
            lineBox2.setTint(lineReturn(payline));
            anim_2_1_Active = true;
            symWin2_1.anims.play(animReturn(icon)).setAlpha(1);
          } 
          if (x == 1 && y == 1) {
            lineBox7.setAlpha(1);
            lineBox7.setTint(lineReturn(payline));
            anim_2_2_Active = true;
            symWin2_2.anims.play(animReturn(icon)).setAlpha(1);
          }
          if (x == 1 && y == 2) {
            lineBox12.setAlpha(1);
            lineBox12.setTint(lineReturn(payline));
            anim_2_3_Active = true;
            symWin2_3.anims.play(animReturn(icon)).setAlpha(1);
          }
          if (x == 2 && y == 0) {
            lineBox3.setAlpha(1);
            lineBox3.setTint(lineReturn(payline));
            anim_3_1_Active = true;
            symWin3_1.anims.play(animReturn(icon)).setAlpha(1);
          } 
          if (x == 2 && y == 1) {
            lineBox8.setAlpha(1);
            lineBox8.setTint(lineReturn(payline));
            anim_3_2_Active = true;
            symWin3_2.anims.play(animReturn(icon)).setAlpha(1);
          }
          if (x == 2 && y == 2) {
           lineBox13.setAlpha(1);
           lineBox13.setTint(lineReturn(payline));
           anim_3_3_Active = true;
           symWin3_3.anims.play(animReturn(icon)).setAlpha(1);
          }
          if (x == 3 && y == 0) {
           lineBox4.setAlpha(1);
           lineBox4.setTint(lineReturn(payline));
           anim_4_1_Active = true;
           symWin4_1.anims.play(animReturn(icon)).setAlpha(1);
          }
          if (x == 3 && y == 1) {
            lineBox9.setAlpha(1);
            lineBox9.setTint(lineReturn(payline));
            anim_4_2_Active = true;
            symWin4_2.anims.play(animReturn(icon)).setAlpha(1);
          }
          if (x == 3 && y == 2) {
            lineBox14.setAlpha(1);
            lineBox14.setTint(lineReturn(payline));
            anim_4_3_Active = true;
            symWin4_3.anims.play(animReturn(icon)).setAlpha(1);
          }
          if (x == 4 && y == 0) {
            lineBox5.setAlpha(1);
            lineBox5.setTint(lineReturn(payline));
            anim_5_1_Active = true;
            symWin5_1.anims.play(animReturn(icon)).setAlpha(1);
          }
          if (x == 4 && y == 1) {
            lineBox10.setAlpha(1);
            lineBox10.setTint(lineReturn(payline));
            anim_5_2_Active = true;
            symWin5_2.anims.play(animReturn(icon)).setAlpha(1);
          }
          if (x == 4 && y == 2) {
            lineBox15.setAlpha(1);
            lineBox15.setTint(lineReturn(payline));
            anim_5_3_Active = true;
            symWin5_3.anims.play(animReturn(icon)).setAlpha(1);
          }
        }
    }
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
          console.log(winList);
          console.log(payoutArray);
    }

}
function financial(x) {
  return Number.parseFloat(x).toFixed(2);
}
function insertDecimal(num) {
  return (num / 100).toFixed(2);
}

/////////////When PLAY button is pressed///////////////////////////////////////////////////////

function play(){
  if(balanceChanging){
    balance = newBalance;
  }else if (playCost <= balance && paylines >= 1) {
    winList = [];
    payoutArray = [];
    won = 0;
    balance = balance - playCost;
    console.log(balance);
    console.log(newBalance);
    
    getSymbols();
    reel_1.spin();
    reel_2.spin();
    reel_3.spin();
    reel_4.spin();
    reel_5.spin();
    magician.anims.play('spin');
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
  reel_2.initialize();
  reel_3.initialize();
  reel_4.initialize();
  reel_5.initialize();
}



//Start up Functions////////////
createReels();
getInitialSymbols();
initializeReels();

console.log(allReels);
