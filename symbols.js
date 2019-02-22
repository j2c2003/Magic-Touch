function getIconPayouts(){
  icon0.payouts;
   icon1.payouts;
    icon2.payouts;
     icon3.payouts;
      icon4.payouts;
       icon5.payouts;
        icon6.payouts;
         icon7.payouts;
          icon8.payouts;
           icon9.payouts;
            icon10.payouts;

}



const icon0 = {
matchesNeeded: 3,
hit1Pay: 0,
hit2Pay: 0,
hit3Pay: 20,
hit4Pay: 80,
hit5Pay: 2000,
id: 0,
matches: 0,
totalWin: 0,
numOfLines: [],
payout: 0,

get payouts(){
              let win = [];
              for (let i = 0; i < winList.length; i++) {
                for (let j = 0; j < winList.length; j++) {
                  //console.log(winList[0][2]);
                  if( j == 0 && this.id == winList[i][j]){
                    this.matches = winList[i][2];
                    let lineNum = winList[i][1];

                    if(this.matches == 3){
                      this.payout = this.hit3Pay * denom
                      payoutArray.push([this.payout, lineNum, this.id]);

                      } else if (this.matches == 4) {
                        this.payout = this.hit4Pay * denom;
                        payoutArray.push([this.payout, lineNum, this.id]);

                      } else {
                        this.payout = this.hit5Pay * denom;
                        payoutArray.push([this.payout, lineNum, this.id]);
                      }

                    }
                    }
                  }
                },

}
const icon1 = {
matchesNeeded: 3,
hit1Pay: 0,
hit2Pay: 0,
hit3Pay: 16,
hit4Pay: 40,
hit5Pay: 1000,
id: 1,
matches: 0,
totalWin: 0,
numOfLines: [],
payout: 0,

get payouts(){
              let win = [];
              for (let i = 0; i < winList.length; i++) {
                for (let j = 0; j < winList.length; j++) {
                  //console.log(winList[0][2]);
                  if( j == 0 && this.id == winList[i][j]){
                    this.matches = winList[i][2];
                    let lineNum = winList[i][1];

                    if(this.matches == 3){
                      this.payout = this.hit3Pay * denom
                      payoutArray.push([this.payout, lineNum, this.id]);

                      } else if (this.matches == 4) {
                        this.payout = this.hit4Pay * denom;
                        payoutArray.push([this.payout, lineNum, this.id]);

                      } else {
                        this.payout = this.hit5Pay * denom;
                        payoutArray.push([this.payout, lineNum, this.id]);
                      }

                    }
                    }
                  }
                },

}
const icon2 = {
matchesNeeded: 3,
hit1Pay: 0,
hit2Pay: 0,
hit3Pay: 12,
hit4Pay: 20,
hit5Pay: 400,
id: 2,
matches: 0,
totalWin: 0,
numOfLines: [],
payout: 0,

get payouts(){
              let win = [];
              for (let i = 0; i < winList.length; i++) {
                for (let j = 0; j < winList.length; j++) {
                  //console.log(winList[0][2]);
                  if( j == 0 && this.id == winList[i][j]){
                    this.matches = winList[i][2];
                    let lineNum = winList[i][1];

                    if(this.matches == 3){
                      this.payout = this.hit3Pay * denom
                      payoutArray.push([this.payout, lineNum, this.id]);

                      } else if (this.matches == 4) {
                        this.payout = this.hit4Pay * denom;
                        payoutArray.push([this.payout, lineNum, this.id]);

                      } else {
                        this.payout = this.hit5Pay * denom;
                        payoutArray.push([this.payout, lineNum, this.id]);
                      }

                    }
                    }
                  }
                },

}
const icon3 = {
matchesNeeded: 3,
hit1Pay: 0,
hit2Pay: 0,
hit3Pay: 8,
hit4Pay: 12,
hit5Pay: 200,
id: 3,
matches: 0,
totalWin: 0,
numOfLines: [],
payout: 0,

get payouts(){
              let win = [];
              for (let i = 0; i < winList.length; i++) {
                for (let j = 0; j < winList.length; j++) {
                  //console.log(winList[0][2]);
                  if( j == 0 && this.id == winList[i][j]){
                    this.matches = winList[i][2];
                    let lineNum = winList[i][1];

                    if(this.matches == 3){
                      this.payout = this.hit3Pay * denom
                      payoutArray.push([this.payout, lineNum, this.id]);

                      } else if (this.matches == 4) {
                        this.payout = this.hit4Pay * denom;
                        payoutArray.push([this.payout, lineNum, this.id]);

                      } else {
                        this.payout = this.hit5Pay * denom;
                        payoutArray.push([this.payout, lineNum, this.id]);
                      }

                    }
                    }
                  }
                },

}
const icon4 = {
matchesNeeded: 3,
hit1Pay: 0,
hit2Pay: 0,
hit3Pay: 6,
hit4Pay: 10,
hit5Pay: 140,
id: 4,
matches: 0,
totalWin: 0,
numOfLines: [],
payout: 0,

get payouts(){
              let win = [];
              for (let i = 0; i < winList.length; i++) {
                for (let j = 0; j < winList.length; j++) {
                  //console.log(winList[0][2]);
                  if( j == 0 && this.id == winList[i][j]){
                    this.matches = winList[i][2];
                    let lineNum = winList[i][1];

                    if(this.matches == 3){
                      this.payout = this.hit3Pay * denom
                      payoutArray.push([this.payout, lineNum, this.id]);

                      } else if (this.matches == 4) {
                        this.payout = this.hit4Pay * denom;
                        payoutArray.push([this.payout, lineNum, this.id]);

                      } else {
                        this.payout = this.hit5Pay * denom;
                        payoutArray.push([this.payout, lineNum, this.id]);
                      }

                    }
                    }
                  }
                },

}
const icon5 = {
matchesNeeded: 3,
hit1Pay: 0,
hit2Pay: 0,
hit3Pay: 4,
hit4Pay: 8,
hit5Pay: 100,
id: 5,
matches: 0,
totalWin: 0,
numOfLines: [],
payout: 0,

get payouts(){
              let win = [];
              for (let i = 0; i < winList.length; i++) {
                for (let j = 0; j < winList.length; j++) {
                  //console.log(winList[0][2]);
                  if( j == 0 && this.id == winList[i][j]){
                    this.matches = winList[i][2];
                    let lineNum = winList[i][1];

                    if(this.matches == 3){
                      this.payout = this.hit3Pay * denom
                      payoutArray.push([this.payout, lineNum, this.id]);

                      } else if (this.matches == 4) {
                        this.payout = this.hit4Pay * denom;
                        payoutArray.push([this.payout, lineNum, this.id]);

                      } else {
                        this.payout = this.hit5Pay * denom;
                        payoutArray.push([this.payout, lineNum, this.id]);
                      }

                    }
                    }
                  }
                },

}
const icon6 = {
matchesNeeded: 3,
hit1Pay: 0,
hit2Pay: 0,
hit3Pay: 2,
hit4Pay: 6,
hit5Pay: 60,
id: 6,
matches: 0,
totalWin: 0,
numOfLines: [],
payout: 0,

get payouts(){
              let win = [];
              for (let i = 0; i < winList.length; i++) {
                for (let j = 0; j < winList.length; j++) {
                  //console.log(winList[0][2]);
                  if( j == 0 && this.id == winList[i][j]){
                    this.matches = winList[i][2];
                    let lineNum = winList[i][1];

                    if(this.matches == 3){
                      this.payout = this.hit3Pay * denom
                      payoutArray.push([this.payout, lineNum, this.id]);

                      } else if (this.matches == 4) {
                        this.payout = this.hit4Pay * denom;
                        payoutArray.push([this.payout, lineNum, this.id]);

                      } else {
                        this.payout = this.hit5Pay * denom;
                        payoutArray.push([this.payout, lineNum, this.id]);
                      }

                    }
                    }
                  }
                },

}
const icon7 = {
matchesNeeded: 3,
hit1Pay: 0,
hit2Pay: 0,
hit3Pay: 1,
hit4Pay: 4,
hit5Pay: 40,
id: 7,
matches: 0,
totalWin: 0,
numOfLines: [],
payout: 0,

get payouts(){
              let win = [];
              for (let i = 0; i < winList.length; i++) {
                for (let j = 0; j < winList.length; j++) {
                  //console.log(winList[0][2]);
                  if( j == 0 && this.id == winList[i][j]){
                    this.matches = winList[i][2];
                    let lineNum = winList[i][1];

                    if(this.matches == 3){
                      this.payout = this.hit3Pay * denom
                      payoutArray.push([this.payout, lineNum, this.id]);

                      } else if (this.matches == 4) {
                        this.payout = this.hit4Pay * denom;
                        payoutArray.push([this.payout, lineNum, this.id]);

                      } else {
                        this.payout = this.hit5Pay * denom;
                        payoutArray.push([this.payout, lineNum, this.id]);
                      }

                    }
                    }
                  }
                },

}
const icon8 = {
matchesNeeded: 3,
hit1Pay: 0,
hit2Pay: 0,
hit3Pay: .4,
hit4Pay: 2,
hit5Pay: 20,
id: 8,
matches: 0,
totalWin: 0,
numOfLines: [],
payout: 0,

get payouts(){
              let win = [];
              for (let i = 0; i < winList.length; i++) {
                for (let j = 0; j < winList.length; j++) {
                  //console.log(winList[0][2]);
                  if( j == 0 && this.id == winList[i][j]){
                    this.matches = winList[i][2];
                    let lineNum = winList[i][1];

                    if(this.matches == 3){
                      this.payout = this.hit3Pay * denom
                      payoutArray.push([this.payout, lineNum, this.id]);

                      } else if (this.matches == 4) {
                        this.payout = this.hit4Pay * denom;
                        payoutArray.push([this.payout, lineNum, this.id]);

                      } else {
                        this.payout = this.hit5Pay * denom;
                        payoutArray.push([this.payout, lineNum, this.id]);
                      }

                    }
                    }
                  }
                },

}
const icon9 = {
matchesNeeded: 3,
hit1Pay: 0,
hit2Pay: 0,
hit3Pay: .2,
hit4Pay: 1,
hit5Pay: 12,
id: 9,
matches: 0,
totalWin: 0,
numOfLines: [],
payout: 0,

get payouts(){
              let win = [];
              for (let i = 0; i < winList.length; i++) {
                for (let j = 0; j < winList.length; j++) {
                  //console.log(winList[0][2]);
                  if( j == 0 && this.id == winList[i][j]){
                    this.matches = winList[i][2];
                    let lineNum = winList[i][1];

                    if(this.matches == 3){
                      this.payout = this.hit3Pay * denom
                      payoutArray.push([this.payout, lineNum, this.id]);

                      } else if (this.matches == 4) {
                        this.payout = this.hit4Pay * denom;
                        payoutArray.push([this.payout, lineNum, this.id]);

                      } else {
                        this.payout = this.hit5Pay * denom;
                        payoutArray.push([this.payout, lineNum, this.id]);
                      }

                    }
                    }
                  }
                },

}
const icon10 = {
matchesNeeded: 3,
hit1Pay: 0,
hit2Pay: 0,
hit3Pay: 2,
hit4Pay: 25,
hit5Pay: 100,
id: 10,
matches: 0,
totalWin: 0,
numOfLines: [],
payout: 0,

get payouts(){
              let win = [];
              for (let i = 0; i < winList.length; i++) {
                for (let j = 0; j < winList.length; j++) {
                  //console.log(winList[0][2]);
                  if( j == 0 && this.id == winList[i][j]){
                    this.matches = winList[i][2];
                    let lineNum = winList[i][1];

                    if(this.matches == 3){
                      this.payout = this.hit3Pay * denom
                      payoutArray.push([this.payout, lineNum, this.id]);

                      } else if (this.matches == 4) {
                        this.payout = this.hit4Pay * denom;
                        payoutArray.push([this.payout, lineNum, this.id]);

                      } else {
                        this.payout = this.hit5Pay * denom;
                        payoutArray.push([this.payout, lineNum, this.id]);
                      }

                    }
                    }
                  }
                },

}
