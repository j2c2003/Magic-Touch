function getPaylineMatches(){
  payline1.matches;
  payline2.matches;
  payline3.matches;
  payline4.matches;
  payline5.matches;
  payline6.matches;
  payline8.matches;
  payline10.matches;
  payline11.matches;
  payline12.matches;
  payline13.matches;
  payline14.matches;
  payline15.matches;
  payline16.matches;
  payline17.matches;
  payline18.matches;
  payline19.matches;
  payline20.matches;
  payline21.matches;
  payline22.matches;
  payline23.matches;
  payline24.matches;
  payline25.matches;
}

const payline1 = {
    array: [
           [0,0,0,0,0],
           [1,1,1,1,1],
           [0,0,0,0,0]
           ],
    win: false,
    active: true,
    iconWinnerId: false,
    lineId: 1,
    get matches(){
                let hits = 0;
                let symbol = 99;
                let newSymbol = 98;
                for(let i = 0; i < 3; i++){
                  for(let j = 0; j < 5; j++){
                    symbol = selectedGroup[i][j];
                    if(symbol == newSymbol && this.array[i][j] == 1 && j == 1){
                          //console.log(symbol + ' match on line on reel' + j);
                        hits = 2;
                    }
                    if(symbol == newSymbol && this.array[i][j] == 1 && hits == 2 && j == 2){
                        hits = 3;
                    }
                    if (symbol == newSymbol && this.array[i][j] == 1 && hits == 3 && j == 3) {
                        hits = 4;
                    }
                    if (symbol == newSymbol && this.array[i][j] == 1 && hits == 4 && j == 4) {
                        hits = 5;
                    }
                    if(symbol != newSymbol && this.array[i][j] == 1 && j == 0){
                          //console.log(symbol + ' on line on reel ' + j);
                          newSymbol = selectedGroup[i][j];
                      } else {
                        this.win = false;
                        this.iconWinnerId = false;
                      }
                      //console.log(`J iteration ${j}`);
                    }
                    //console.log(`I iteration ${i}`);
                  }
                //console.log("matching symbol " + symbol + " New symbol " + newSymbol);
                //console.log(selectedGroup);
                if(hits > 2 && this.active == true){
                  this.iconWinnerId = newSymbol;
                  winList.push([this.iconWinnerId, this.lineId, hits])
                  console.log(newSymbol + ' on ' + this.lineId + 'is the winning icon');
                  console.log(selectedGroup);
                }
                matches = hits;
                return matches;
                },
}
const payline2 = {
    array: [
           [1,1,1,1,1],
           [0,0,0,0,0],
           [0,0,0,0,0]
           ],
    win: false,
    active: true,
    iconWinnerId: false,
    lineId: 2,
    get matches(){
                let hits = 0;
                let symbol = 99;
                let newSymbol = 98;
                for(let i = 0; i < 3; i++){
                  for(let j = 0; j < 5; j++){
                    symbol = selectedGroup[i][j];
                    if(symbol == newSymbol && this.array[i][j] == 1 && j == 1){
                          //console.log(symbol + ' match on line on reel' + j);
                        hits = 2;
                    }
                    if(symbol == newSymbol && this.array[i][j] == 1 && hits == 2 && j == 2){
                        hits = 3;
                    }
                    if (symbol == newSymbol && this.array[i][j] == 1 && hits == 3 && j == 3) {
                        hits = 4;
                    }
                    if (symbol == newSymbol && this.array[i][j] == 1 && hits == 4 && j == 4) {
                        hits = 5;
                    }
                    if(symbol != newSymbol && this.array[i][j] == 1 && j == 0){
                          //console.log(symbol + ' on line on reel ' + j);
                          newSymbol = selectedGroup[i][j];
                      } else {
                        this.win = false;
                        this.iconWinnerId = false;
                      }
                      //console.log(`J iteration ${j}`);
                    }
                    //console.log(`I iteration ${i}`);
                  }
                //console.log("matching symbol " + symbol + " New symbol " + newSymbol);
                //console.log(selectedGroup);
                if(hits > 2 && this.active == true){
                  this.iconWinnerId = newSymbol;
                  winList.push([this.iconWinnerId, this.lineId, hits])
                  console.log(newSymbol + ' on ' + this.lineId + 'is the winning icon');
                  console.log(selectedGroup);
                }
                matches = hits;
                return matches;
                },
}
const payline3 = {
    array: [
           [0,0,0,0,0],
           [0,0,0,0,0],
           [1,1,1,1,1]
           ],
    win: false,
    active: true,
    iconWinnerId: false,
    lineId: 3,
    get matches(){
                let hits = 0;
                let symbol = 99;
                let newSymbol = 98;
                for(let i = 0; i < 3; i++){
                  for(let j = 0; j < 5; j++){
                    symbol = selectedGroup[i][j];
                    if(symbol == newSymbol && this.array[i][j] == 1 && j == 1){
                          //console.log(symbol + ' match on line on reel' + j);
                        hits = 2;
                    }
                    if(symbol == newSymbol && this.array[i][j] == 1 && hits == 2 && j == 2){
                        hits = 3;
                    }
                    if (symbol == newSymbol && this.array[i][j] == 1 && hits == 3 && j == 3) {
                        hits = 4;
                    }
                    if (symbol == newSymbol && this.array[i][j] == 1 && hits == 4 && j == 4) {
                        hits = 5;
                    }
                    if(symbol != newSymbol && this.array[i][j] == 1 && j == 0){
                          //console.log(symbol + ' on line on reel ' + j);
                          newSymbol = selectedGroup[i][j];
                      } else {
                        this.win = false;
                        this.iconWinnerId = false;
                      }
                      //console.log(`J iteration ${j}`);
                    }
                    //console.log(`I iteration ${i}`);
                  }
                //console.log("matching symbol " + symbol + " New symbol " + newSymbol);
                //console.log(selectedGroup);
                if(hits > 2 && this.active == true){
                  this.iconWinnerId = newSymbol;
                  winList.push([this.iconWinnerId, this.lineId, hits])
                  console.log(newSymbol + ' on ' + this.lineId + 'is the winning icon');
                  console.log(selectedGroup);
                }
                matches = hits;
                return matches;
                },
}
const payline4 = {
    array: [
           [1,0,0,0,1],
           [0,1,0,1,0],
           [0,0,1,0,0]
           ],
    win: false,
    active: true,
    iconWinnerId: false,
    lineId: 4,
    get matches(){
                let hits = 0;
                let symbol = 99;
                let newSymbol = 98;
                for(let i = 0; i < 3; i++){
                  for(let j = 0; j < 5; j++){
                    symbol = selectedGroup[i][j];
                    if(symbol == newSymbol && this.array[i][j] == 1 && j == 1){
                          //console.log(symbol + ' match on line on reel' + j);
                        hits = 2;
                    }
                    if(symbol == newSymbol && this.array[i][j] == 1 && hits == 2 && j == 2){
                        hits = 3;
                    }
                    if (symbol == newSymbol && this.array[i][j] == 1 && hits == 3 && j == 3) {
                        hits = 4;
                    }
                    if (symbol == newSymbol && this.array[i][j] == 1 && hits == 4 && j == 4) {
                        hits = 5;
                    }
                    if(symbol != newSymbol && this.array[i][j] == 1 && j == 0){
                          //console.log(symbol + ' on line on reel ' + j);
                          newSymbol = selectedGroup[i][j];
                      } else {
                        this.win = false;
                        this.iconWinnerId = false;
                      }
                      //console.log(`J iteration ${j}`);
                    }
                    //console.log(`I iteration ${i}`);
                  }
                //console.log("matching symbol " + symbol + " New symbol " + newSymbol);
                //console.log(selectedGroup);
                if(hits > 2 && this.active == true){
                  this.iconWinnerId = newSymbol;
                  winList.push([this.iconWinnerId, this.lineId, hits])
                  console.log(newSymbol + ' on ' + this.lineId + 'is the winning icon');
                  console.log(selectedGroup);
                }
                matches = hits;
                return matches;
                },
}
const payline5 = {
    array: [
           [0,0,1,0,0],
           [0,1,0,1,0],
           [1,0,0,0,1]
           ],
    win: false,
    active: true,
    iconWinnerId: false,
    lineId: 5,
    get matches(){
                let hits = 0;
                let symbol = 99;
                let newSymbol = 98;
                for(let i = 0; i < 3; i++){
                  for(let j = 0; j < 5; j++){
                    symbol = selectedGroup[i][j];
                    if(symbol == newSymbol && this.array[i][j] == 1 && j == 1){
                          //console.log(symbol + ' match on line on reel' + j);
                        hits = 2;
                    }
                    if(symbol == newSymbol && this.array[i][j] == 1 && hits == 2 && j == 2){
                        hits = 3;
                    }
                    if (symbol == newSymbol && this.array[i][j] == 1 && hits == 3 && j == 3) {
                        hits = 4;
                    }
                    if (symbol == newSymbol && this.array[i][j] == 1 && hits == 4 && j == 4) {
                        hits = 5;
                    }
                    if(symbol != newSymbol && this.array[i][j] == 1 && j == 0){
                          //console.log(symbol + ' on line on reel ' + j);
                          newSymbol = selectedGroup[i][j];
                      } else {
                        this.win = false;
                        this.iconWinnerId = false;
                      }
                      //console.log(`J iteration ${j}`);
                    }
                    //console.log(`I iteration ${i}`);
                  }
                //console.log("matching symbol " + symbol + " New symbol " + newSymbol);
                //console.log(selectedGroup);
                if(hits > 2 && this.active == true){
                  this.iconWinnerId = newSymbol;
                  winList.push([this.iconWinnerId, this.lineId, hits])
                  console.log(newSymbol + ' on ' + this.lineId + 'is the winning icon');
                  console.log(selectedGroup);
                }
                matches = hits;
                return matches;
                },
}
const payline6 = {
    array: [
           [0,1,1,1,0],
           [1,0,0,0,1],
           [0,0,0,0,0]
           ],
    win: false,
    active: true,
    iconWinnerId: false,
    lineId: 6,
    get matches(){
                let hits = 0;
                let symbol = 99;
                let newSymbol = 98;
                for(let i = 0; i < 3; i++){
                  for(let j = 0; j < 5; j++){
                    symbol = selectedGroup[i][j];
                    if(symbol == newSymbol && this.array[i][j] == 1 && j == 1){
                          //console.log(symbol + ' match on line on reel' + j);
                        hits = 2;
                    }
                    if(symbol == newSymbol && this.array[i][j] == 1 && hits == 2 && j == 2){
                        hits = 3;
                    }
                    if (symbol == newSymbol && this.array[i][j] == 1 && hits == 3 && j == 3) {
                        hits = 4;
                    }
                    if (symbol == newSymbol && this.array[i][j] == 1 && hits == 4 && j == 4) {
                        hits = 5;
                    }
                    if(symbol != newSymbol && this.array[i][j] == 1 && j == 0){
                          //console.log(symbol + ' on line on reel ' + j);
                          newSymbol = selectedGroup[i][j];
                      } else {
                        this.win = false;
                        this.iconWinnerId = false;
                      }
                      //console.log(`J iteration ${j}`);
                    }
                    //console.log(`I iteration ${i}`);
                  }
                //console.log("matching symbol " + symbol + " New symbol " + newSymbol);
                //console.log(selectedGroup);
                if(hits > 2 && this.active == true){
                  this.iconWinnerId = newSymbol;
                  winList.push([this.iconWinnerId, this.lineId, hits])
                  console.log(newSymbol + ' on ' + this.lineId + 'is the winning icon');
                  console.log(selectedGroup);
                }
                matches = hits;
                return matches;
                },
}
const payline7 = {
    array: [
           [0,0,0,0,0],
           [1,0,0,0,1],
           [0,1,1,1,0]
           ],
    win: false,
    active: true,
    iconWinnerId: false,
    lineId: 7,
    get matches(){
                let hits = 0;
                let symbol = 99;
                let newSymbol = 98;
                for(let i = 0; i < 3; i++){
                  for(let j = 0; j < 5; j++){
                    symbol = selectedGroup[i][j];
                    if(symbol == newSymbol && this.array[i][j] == 1 && j == 1){
                          //console.log(symbol + ' match on line on reel' + j);
                        hits = 2;
                    }
                    if(symbol == newSymbol && this.array[i][j] == 1 && hits == 2 && j == 2){
                        hits = 3;
                    }
                    if (symbol == newSymbol && this.array[i][j] == 1 && hits == 3 && j == 3) {
                        hits = 4;
                    }
                    if (symbol == newSymbol && this.array[i][j] == 1 && hits == 4 && j == 4) {
                        hits = 5;
                    }
                    if(symbol != newSymbol && this.array[i][j] == 1 && j == 0){
                          //console.log(symbol + ' on line on reel ' + j);
                          newSymbol = selectedGroup[i][j];
                      } else {
                        this.win = false;
                        this.iconWinnerId = false;
                      }
                      //console.log(`J iteration ${j}`);
                    }
                    //console.log(`I iteration ${i}`);
                  }
                //console.log("matching symbol " + symbol + " New symbol " + newSymbol);
                //console.log(selectedGroup);
                if(hits > 2 && this.active == true){
                  this.iconWinnerId = newSymbol;
                  winList.push([this.iconWinnerId, this.lineId, hits])
                  console.log(newSymbol + ' on ' + this.lineId + 'is the winning icon');
                  console.log(selectedGroup);
                }
                matches = hits;
                return matches;
                },
}
const payline8 = {
    array: [
           [1,1,0,1,1],
           [0,0,1,0,0],
           [0,0,0,0,0]
           ],
    win: false,
    active: true,
    iconWinnerId: false,
    lineId: 8,
    get matches(){
                let hits = 0;
                let symbol = 99;
                let newSymbol = 98;
                for(let i = 0; i < 3; i++){
                  for(let j = 0; j < 5; j++){
                    symbol = selectedGroup[i][j];
                    if(symbol == newSymbol && this.array[i][j] == 1 && j == 1){
                          //console.log(symbol + ' match on line on reel' + j);
                        hits = 2;
                    }
                    if(symbol == newSymbol && this.array[i][j] == 1 && hits == 2 && j == 2){
                        hits = 3;
                    }
                    if (symbol == newSymbol && this.array[i][j] == 1 && hits == 3 && j == 3) {
                        hits = 4;
                    }
                    if (symbol == newSymbol && this.array[i][j] == 1 && hits == 4 && j == 4) {
                        hits = 5;
                    }
                    if(symbol != newSymbol && this.array[i][j] == 1 && j == 0){
                          //console.log(symbol + ' on line on reel ' + j);
                          newSymbol = selectedGroup[i][j];
                      } else {
                        this.win = false;
                        this.iconWinnerId = false;
                      }
                      //console.log(`J iteration ${j}`);
                    }
                    //console.log(`I iteration ${i}`);
                  }
                //console.log("matching symbol " + symbol + " New symbol " + newSymbol);
                //console.log(selectedGroup);
                if(hits > 2 && this.active == true){
                  this.iconWinnerId = newSymbol;
                  winList.push([this.iconWinnerId, this.lineId, hits])
                  console.log(newSymbol + ' on ' + this.lineId + 'is the winning icon');
                  console.log(selectedGroup);
                }
                matches = hits;
                return matches;
                },
}
const payline9 = {
    array: [
           [0,0,0,0,0],
           [0,0,1,0,0],
           [1,1,0,1,1]
           ],
    win: false,
    active: true,
    iconWinnerId: false,
    lineId: 9,
    get matches(){
                let hits = 0;
                let symbol = 99;
                let newSymbol = 98;
                for(let i = 0; i < 3; i++){
                  for(let j = 0; j < 5; j++){
                    symbol = selectedGroup[i][j];
                    if(symbol == newSymbol && this.array[i][j] == 1 && j == 1){
                          //console.log(symbol + ' match on line on reel' + j);
                        hits = 2;
                    }
                    if(symbol == newSymbol && this.array[i][j] == 1 && hits == 2 && j == 2){
                        hits = 3;
                    }
                    if (symbol == newSymbol && this.array[i][j] == 1 && hits == 3 && j == 3) {
                        hits = 4;
                    }
                    if (symbol == newSymbol && this.array[i][j] == 1 && hits == 4 && j == 4) {
                        hits = 5;
                    }
                    if(symbol != newSymbol && this.array[i][j] == 1 && j == 0){
                          //console.log(symbol + ' on line on reel ' + j);
                          newSymbol = selectedGroup[i][j];
                      } else {
                        this.win = false;
                        this.iconWinnerId = false;
                      }
                      //console.log(`J iteration ${j}`);
                    }
                    //console.log(`I iteration ${i}`);
                  }
                //console.log("matching symbol " + symbol + " New symbol " + newSymbol);
                //console.log(selectedGroup);
                if(hits > 2 && this.active == true){
                  this.iconWinnerId = newSymbol;
                  winList.push([this.iconWinnerId, this.lineId, hits])
                  console.log(newSymbol + ' on ' + this.lineId + 'is the winning icon');
                  console.log(selectedGroup);
                }
                matches = hits;
                return matches;
                },
}
const payline10 = {
    array: [
           [0,0,0,1,1],
           [0,0,1,0,0],
           [1,1,0,0,0]
           ],
    win: false,
    active: true,
    iconWinnerId: false,
    lineId: 10,
    get matches(){
                let hits = 0;
                let symbol = 99;
                let newSymbol = 98;
                for(let i = 0; i < 3; i++){
                  for(let j = 0; j < 5; j++){
                    symbol = selectedGroup[i][j];
                    if(symbol == newSymbol && this.array[i][j] == 1 && j == 1){
                          //console.log(symbol + ' match on line on reel' + j);
                        hits = 2;
                    }
                    if(symbol == newSymbol && this.array[i][j] == 1 && hits == 2 && j == 2){
                        hits = 3;
                    }
                    if (symbol == newSymbol && this.array[i][j] == 1 && hits == 3 && j == 3) {
                        hits = 4;
                    }
                    if (symbol == newSymbol && this.array[i][j] == 1 && hits == 4 && j == 4) {
                        hits = 5;
                    }
                    if(symbol != newSymbol && this.array[i][j] == 1 && j == 0){
                          //console.log(symbol + ' on line on reel ' + j);
                          newSymbol = selectedGroup[i][j];
                      } else {
                        this.win = false;
                        this.iconWinnerId = false;
                      }
                      //console.log(`J iteration ${j}`);
                    }
                    //console.log(`I iteration ${i}`);
                  }
                //console.log("matching symbol " + symbol + " New symbol " + newSymbol);
                //console.log(selectedGroup);
                if(hits > 2 && this.active == true){
                  this.iconWinnerId = newSymbol;
                  winList.push([this.iconWinnerId, this.lineId, hits])
                  console.log(newSymbol + ' on ' + this.lineId + 'is the winning icon');
                  console.log(selectedGroup);
                }
                matches = hits;
                return matches;
                },
}
const payline11 = {
    array: [
           [1,1,0,0,0],
           [0,0,1,0,0],
           [0,0,0,1,1]
           ],
    win: false,
    active: true,
    iconWinnerId: false,
    lineId: 11,
    get matches(){
                let hits = 0;
                let symbol = 99;
                let newSymbol = 98;
                for(let i = 0; i < 3; i++){
                  for(let j = 0; j < 5; j++){
                    symbol = selectedGroup[i][j];
                    if(symbol == newSymbol && this.array[i][j] == 1 && j == 1){
                          //console.log(symbol + ' match on line on reel' + j);
                        hits = 2;
                    }
                    if(symbol == newSymbol && this.array[i][j] == 1 && hits == 2 && j == 2){
                        hits = 3;
                    }
                    if (symbol == newSymbol && this.array[i][j] == 1 && hits == 3 && j == 3) {
                        hits = 4;
                    }
                    if (symbol == newSymbol && this.array[i][j] == 1 && hits == 4 && j == 4) {
                        hits = 5;
                    }
                    if(symbol != newSymbol && this.array[i][j] == 1 && j == 0){
                          //console.log(symbol + ' on line on reel ' + j);
                          newSymbol = selectedGroup[i][j];
                      } else {
                        this.win = false;
                        this.iconWinnerId = false;
                      }
                      //console.log(`J iteration ${j}`);
                    }
                    //console.log(`I iteration ${i}`);
                  }
                //console.log("matching symbol " + symbol + " New symbol " + newSymbol);
                //console.log(selectedGroup);
                if(hits > 2 && this.active == true){
                  this.iconWinnerId = newSymbol;
                  winList.push([this.iconWinnerId, this.lineId, hits])
                  console.log(newSymbol + ' on ' + this.lineId + 'is the winning icon');
                  console.log(selectedGroup);
                }
                matches = hits;
                return matches;
                },
}
const payline12 = {
    array: [
           [0,1,0,0,0],
           [1,0,1,0,1],
           [0,0,0,1,0]
           ],
    win: false,
    active: true,
    iconWinnerId: false,
    lineId: 12,
    get matches(){
                let hits = 0;
                let symbol = 99;
                let newSymbol = 98;
                for(let i = 0; i < 3; i++){
                  for(let j = 0; j < 5; j++){
                    symbol = selectedGroup[i][j];
                    if(symbol == newSymbol && this.array[i][j] == 1 && j == 1){
                          //console.log(symbol + ' match on line on reel' + j);
                        hits = 2;
                    }
                    if(symbol == newSymbol && this.array[i][j] == 1 && hits == 2 && j == 2){
                        hits = 3;
                    }
                    if (symbol == newSymbol && this.array[i][j] == 1 && hits == 3 && j == 3) {
                        hits = 4;
                    }
                    if (symbol == newSymbol && this.array[i][j] == 1 && hits == 4 && j == 4) {
                        hits = 5;
                    }
                    if(symbol != newSymbol && this.array[i][j] == 1 && j == 0){
                          //console.log(symbol + ' on line on reel ' + j);
                          newSymbol = selectedGroup[i][j];
                      } else {
                        this.win = false;
                        this.iconWinnerId = false;
                      }
                      //console.log(`J iteration ${j}`);
                    }
                    //console.log(`I iteration ${i}`);
                  }
                //console.log("matching symbol " + symbol + " New symbol " + newSymbol);
                //console.log(selectedGroup);
                if(hits > 2 && this.active == true){
                  this.iconWinnerId = newSymbol;
                  winList.push([this.iconWinnerId, this.lineId, hits])
                  console.log(newSymbol + ' on ' + this.lineId + 'is the winning icon');
                  console.log(selectedGroup);
                }
                matches = hits;
                return matches;
                },
}
const payline13 = {
    array: [
           [0,0,0,1,0],
           [1,0,1,0,1],
           [0,1,0,0,0]
           ],
    win: false,
    active: true,
    iconWinnerId: false,
    lineId: 13,
    get matches(){
                let hits = 0;
                let symbol = 99;
                let newSymbol = 98;
                for(let i = 0; i < 3; i++){
                  for(let j = 0; j < 5; j++){
                    symbol = selectedGroup[i][j];
                    if(symbol == newSymbol && this.array[i][j] == 1 && j == 1){
                          //console.log(symbol + ' match on line on reel' + j);
                        hits = 2;
                    }
                    if(symbol == newSymbol && this.array[i][j] == 1 && hits == 2 && j == 2){
                        hits = 3;
                    }
                    if (symbol == newSymbol && this.array[i][j] == 1 && hits == 3 && j == 3) {
                        hits = 4;
                    }
                    if (symbol == newSymbol && this.array[i][j] == 1 && hits == 4 && j == 4) {
                        hits = 5;
                    }
                    if(symbol != newSymbol && this.array[i][j] == 1 && j == 0){
                          //console.log(symbol + ' on line on reel ' + j);
                          newSymbol = selectedGroup[i][j];
                      } else {
                        this.win = false;
                        this.iconWinnerId = false;
                      }
                      //console.log(`J iteration ${j}`);
                    }
                    //console.log(`I iteration ${i}`);
                  }
                //console.log("matching symbol " + symbol + " New symbol " + newSymbol);
                //console.log(selectedGroup);
                if(hits > 2 && this.active == true){
                  this.iconWinnerId = newSymbol;
                  winList.push([this.iconWinnerId, this.lineId, hits])
                  console.log(newSymbol + ' on ' + this.lineId + 'is the winning icon');
                  console.log(selectedGroup);
                }
                matches = hits;
                return matches;
                },
}
const payline14 = {
    array: [
           [0,1,0,0,0],
           [1,0,1,0,0],
           [0,0,0,1,1]
           ],
    win: false,
    active: true,
    iconWinnerId: false,
    lineId: 14,
    get matches(){
                let hits = 0;
                let symbol = 99;
                let newSymbol = 98;
                for(let i = 0; i < 3; i++){
                  for(let j = 0; j < 5; j++){
                    symbol = selectedGroup[i][j];
                    if(symbol == newSymbol && this.array[i][j] == 1 && j == 1){
                          //console.log(symbol + ' match on line on reel' + j);
                        hits = 2;
                    }
                    if(symbol == newSymbol && this.array[i][j] == 1 && hits == 2 && j == 2){
                        hits = 3;
                    }
                    if (symbol == newSymbol && this.array[i][j] == 1 && hits == 3 && j == 3) {
                        hits = 4;
                    }
                    if (symbol == newSymbol && this.array[i][j] == 1 && hits == 4 && j == 4) {
                        hits = 5;
                    }
                    if(symbol != newSymbol && this.array[i][j] == 1 && j == 0){
                          //console.log(symbol + ' on line on reel ' + j);
                          newSymbol = selectedGroup[i][j];
                      } else {
                        this.win = false;
                        this.iconWinnerId = false;
                      }
                      //console.log(`J iteration ${j}`);
                    }
                    //console.log(`I iteration ${i}`);
                  }
                //console.log("matching symbol " + symbol + " New symbol " + newSymbol);
                //console.log(selectedGroup);
                if(hits > 2 && this.active == true){
                  this.iconWinnerId = newSymbol;
                  winList.push([this.iconWinnerId, this.lineId, hits])
                  console.log(newSymbol + ' on ' + this.lineId + 'is the winning icon');
                  console.log(selectedGroup);
                }
                matches = hits;
                return matches;
                },
}
const payline15 = {
    array: [
           [0,0,0,1,1],
           [1,0,1,0,0],
           [0,1,0,0,0]
           ],
    win: false,
    active: true,
    iconWinnerId: false,
    lineId: 15,
    get matches(){
                let hits = 0;
                let symbol = 99;
                let newSymbol = 98;
                for(let i = 0; i < 3; i++){
                  for(let j = 0; j < 5; j++){
                    symbol = selectedGroup[i][j];
                    if(symbol == newSymbol && this.array[i][j] == 1 && j == 1){
                          //console.log(symbol + ' match on line on reel' + j);
                        hits = 2;
                    }
                    if(symbol == newSymbol && this.array[i][j] == 1 && hits == 2 && j == 2){
                        hits = 3;
                    }
                    if (symbol == newSymbol && this.array[i][j] == 1 && hits == 3 && j == 3) {
                        hits = 4;
                    }
                    if (symbol == newSymbol && this.array[i][j] == 1 && hits == 4 && j == 4) {
                        hits = 5;
                    }
                    if(symbol != newSymbol && this.array[i][j] == 1 && j == 0){
                          //console.log(symbol + ' on line on reel ' + j);
                          newSymbol = selectedGroup[i][j];
                      } else {
                        this.win = false;
                        this.iconWinnerId = false;
                      }
                      //console.log(`J iteration ${j}`);
                    }
                    //console.log(`I iteration ${i}`);
                  }
                //console.log("matching symbol " + symbol + " New symbol " + newSymbol);
                //console.log(selectedGroup);
                if(hits > 2 && this.active == true){
                  this.iconWinnerId = newSymbol;
                  winList.push([this.iconWinnerId, this.lineId, hits])
                  console.log(newSymbol + ' on ' + this.lineId + 'is the winning icon');
                  console.log(selectedGroup);
                }
                matches = hits;
                return matches;
                },
}
const payline16 = {
    array: [
           [1,0,0,0,0],
           [0,1,1,1,0],
           [0,0,0,0,1]
           ],
    win: false,
    active: true,
    iconWinnerId: false,
    lineId: 16,
    get matches(){
                let hits = 0;
                let symbol = 99;
                let newSymbol = 98;
                for(let i = 0; i < 3; i++){
                  for(let j = 0; j < 5; j++){
                    symbol = selectedGroup[i][j];
                    if(symbol == newSymbol && this.array[i][j] == 1 && j == 1){
                          //console.log(symbol + ' match on line on reel' + j);
                        hits = 2;
                    }
                    if(symbol == newSymbol && this.array[i][j] == 1 && hits == 2 && j == 2){
                        hits = 3;
                    }
                    if (symbol == newSymbol && this.array[i][j] == 1 && hits == 3 && j == 3) {
                        hits = 4;
                    }
                    if (symbol == newSymbol && this.array[i][j] == 1 && hits == 4 && j == 4) {
                        hits = 5;
                    }
                    if(symbol != newSymbol && this.array[i][j] == 1 && j == 0){
                          //console.log(symbol + ' on line on reel ' + j);
                          newSymbol = selectedGroup[i][j];
                      } else {
                        this.win = false;
                        this.iconWinnerId = false;
                      }
                      //console.log(`J iteration ${j}`);
                    }
                    //console.log(`I iteration ${i}`);
                  }
                //console.log("matching symbol " + symbol + " New symbol " + newSymbol);
                //console.log(selectedGroup);
                if(hits > 2 && this.active == true){
                  this.iconWinnerId = newSymbol;
                  winList.push([this.iconWinnerId, this.lineId, hits])
                  console.log(newSymbol + ' on ' + this.lineId + 'is the winning icon');
                  console.log(selectedGroup);
                }
                matches = hits;
                return matches;
                },
}
const payline17 = {
    array: [
           [0,0,0,0,1],
           [0,1,1,1,0],
           [1,0,0,0,0]
           ],
    win: false,
    active: true,
    iconWinnerId: false,
    lineId: 17,
    get matches(){
                let hits = 0;
                let symbol = 99;
                let newSymbol = 98;
                for(let i = 0; i < 3; i++){
                  for(let j = 0; j < 5; j++){
                    symbol = selectedGroup[i][j];
                    if(symbol == newSymbol && this.array[i][j] == 1 && j == 1){
                          //console.log(symbol + ' match on line on reel' + j);
                        hits = 2;
                    }
                    if(symbol == newSymbol && this.array[i][j] == 1 && hits == 2 && j == 2){
                        hits = 3;
                    }
                    if (symbol == newSymbol && this.array[i][j] == 1 && hits == 3 && j == 3) {
                        hits = 4;
                    }
                    if (symbol == newSymbol && this.array[i][j] == 1 && hits == 4 && j == 4) {
                        hits = 5;
                    }
                    if(symbol != newSymbol && this.array[i][j] == 1 && j == 0){
                          //console.log(symbol + ' on line on reel ' + j);
                          newSymbol = selectedGroup[i][j];
                      } else {
                        this.win = false;
                        this.iconWinnerId = false;
                      }
                      //console.log(`J iteration ${j}`);
                    }
                    //console.log(`I iteration ${i}`);
                  }
                //console.log("matching symbol " + symbol + " New symbol " + newSymbol);
                //console.log(selectedGroup);
                if(hits > 2 && this.active == true){
                  this.iconWinnerId = newSymbol;
                  winList.push([this.iconWinnerId, this.lineId, hits])
                  console.log(newSymbol + ' on ' + this.lineId + 'is the winning icon');
                  console.log(selectedGroup);
                }
                matches = hits;
                return matches;
                },
}
const payline18 = {
    array: [
           [0,0,1,0,0],
           [1,1,0,1,0],
           [0,0,0,0,1]
           ],
    win: false,
    active: true,
    iconWinnerId: false,
    lineId: 18,
    get matches(){
                let hits = 0;
                let symbol = 99;
                let newSymbol = 98;
                for(let i = 0; i < 3; i++){
                  for(let j = 0; j < 5; j++){
                    symbol = selectedGroup[i][j];
                    if(symbol == newSymbol && this.array[i][j] == 1 && j == 1){
                          //console.log(symbol + ' match on line on reel' + j);
                        hits = 2;
                    }
                    if(symbol == newSymbol && this.array[i][j] == 1 && hits == 2 && j == 2){
                        hits = 3;
                    }
                    if (symbol == newSymbol && this.array[i][j] == 1 && hits == 3 && j == 3) {
                        hits = 4;
                    }
                    if (symbol == newSymbol && this.array[i][j] == 1 && hits == 4 && j == 4) {
                        hits = 5;
                    }
                    if(symbol != newSymbol && this.array[i][j] == 1 && j == 0){
                          //console.log(symbol + ' on line on reel ' + j);
                          newSymbol = selectedGroup[i][j];
                      } else {
                        this.win = false;
                        this.iconWinnerId = false;
                      }
                      //console.log(`J iteration ${j}`);
                    }
                    //console.log(`I iteration ${i}`);
                  }
                //console.log("matching symbol " + symbol + " New symbol " + newSymbol);
                //console.log(selectedGroup);
                if(hits > 2 && this.active == true){
                  this.iconWinnerId = newSymbol;
                  winList.push([this.iconWinnerId, this.lineId, hits])
                  console.log(newSymbol + ' on ' + this.lineId + 'is the winning icon');
                  console.log(selectedGroup);
                }
                matches = hits;
                return matches;
                },
}
const payline19 = {
    array: [
           [0,0,0,0,1],
           [1,1,0,1,0],
           [0,0,1,0,0]
           ],
    win: false,
    active: true,
    iconWinnerId: false,
    lineId: 19,
    get matches(){
                let hits = 0;
                let symbol = 99;
                let newSymbol = 98;
                for(let i = 0; i < 3; i++){
                  for(let j = 0; j < 5; j++){
                    symbol = selectedGroup[i][j];
                    if(symbol == newSymbol && this.array[i][j] == 1 && j == 1){
                          //console.log(symbol + ' match on line on reel' + j);
                        hits = 2;
                    }
                    if(symbol == newSymbol && this.array[i][j] == 1 && hits == 2 && j == 2){
                        hits = 3;
                    }
                    if (symbol == newSymbol && this.array[i][j] == 1 && hits == 3 && j == 3) {
                        hits = 4;
                    }
                    if (symbol == newSymbol && this.array[i][j] == 1 && hits == 4 && j == 4) {
                        hits = 5;
                    }
                    if(symbol != newSymbol && this.array[i][j] == 1 && j == 0){
                          //console.log(symbol + ' on line on reel ' + j);
                          newSymbol = selectedGroup[i][j];
                      } else {
                        this.win = false;
                        this.iconWinnerId = false;
                      }
                      //console.log(`J iteration ${j}`);
                    }
                    //console.log(`I iteration ${i}`);
                  }
                //console.log("matching symbol " + symbol + " New symbol " + newSymbol);
                //console.log(selectedGroup);
                if(hits > 2 && this.active == true){
                  this.iconWinnerId = newSymbol;
                  winList.push([this.iconWinnerId, this.lineId, hits])
                  console.log(newSymbol + ' on ' + this.lineId + 'is the winning icon');
                  console.log(selectedGroup);
                }
                matches = hits;
                return matches;
                },
}
const payline20 = {
    array: [
           [1,1,1,0,0],
           [0,0,0,1,0],
           [0,0,0,0,1]
           ],
    win: false,
    active: true,
    iconWinnerId: false,
    lineId: 20,
    get matches(){
                let hits = 0;
                let symbol = 99;
                let newSymbol = 98;
                for(let i = 0; i < 3; i++){
                  for(let j = 0; j < 5; j++){
                    symbol = selectedGroup[i][j];
                    if(symbol == newSymbol && this.array[i][j] == 1 && j == 1){
                          //console.log(symbol + ' match on line on reel' + j);
                        hits = 2;
                    }
                    if(symbol == newSymbol && this.array[i][j] == 1 && hits == 2 && j == 2){
                        hits = 3;
                    }
                    if (symbol == newSymbol && this.array[i][j] == 1 && hits == 3 && j == 3) {
                        hits = 4;
                    }
                    if (symbol == newSymbol && this.array[i][j] == 1 && hits == 4 && j == 4) {
                        hits = 5;
                    }
                    if(symbol != newSymbol && this.array[i][j] == 1 && j == 0){
                          //console.log(symbol + ' on line on reel ' + j);
                          newSymbol = selectedGroup[i][j];
                      } else {
                        this.win = false;
                        this.iconWinnerId = false;
                      }
                      //console.log(`J iteration ${j}`);
                    }
                    //console.log(`I iteration ${i}`);
                  }
                //console.log("matching symbol " + symbol + " New symbol " + newSymbol);
                //console.log(selectedGroup);
                if(hits > 2 && this.active == true){
                  this.iconWinnerId = newSymbol;
                  winList.push([this.iconWinnerId, this.lineId, hits])
                  console.log(newSymbol + ' on ' + this.lineId + 'is the winning icon');
                  console.log(selectedGroup);
                }
                matches = hits;
                return matches;
                },
}
const payline21 = {
    array: [
           [0,0,0,0,1],
           [0,0,0,1,0],
           [1,1,1,0,0]
           ],
    win: false,
    active: true,
    iconWinnerId: false,
    lineId: 21,
    get matches(){
                let hits = 0;
                let symbol = 99;
                let newSymbol = 98;
                for(let i = 0; i < 3; i++){
                  for(let j = 0; j < 5; j++){
                    symbol = selectedGroup[i][j];
                    if(symbol == newSymbol && this.array[i][j] == 1 && j == 1){
                          //console.log(symbol + ' match on line on reel' + j);
                        hits = 2;
                    }
                    if(symbol == newSymbol && this.array[i][j] == 1 && hits == 2 && j == 2){
                        hits = 3;
                    }
                    if (symbol == newSymbol && this.array[i][j] == 1 && hits == 3 && j == 3) {
                        hits = 4;
                    }
                    if (symbol == newSymbol && this.array[i][j] == 1 && hits == 4 && j == 4) {
                        hits = 5;
                    }
                    if(symbol != newSymbol && this.array[i][j] == 1 && j == 0){
                          //console.log(symbol + ' on line on reel ' + j);
                          newSymbol = selectedGroup[i][j];
                      } else {
                        this.win = false;
                        this.iconWinnerId = false;
                      }
                      //console.log(`J iteration ${j}`);
                    }
                    //console.log(`I iteration ${i}`);
                  }
                //console.log("matching symbol " + symbol + " New symbol " + newSymbol);
                //console.log(selectedGroup);
                if(hits > 2 && this.active == true){
                  this.iconWinnerId = newSymbol;
                  winList.push([this.iconWinnerId, this.lineId, hits])
                  console.log(newSymbol + ' on ' + this.lineId + 'is the winning icon');
                  console.log(selectedGroup);
                }
                matches = hits;
                return matches;
                },
}
const payline22 = {
    array: [
           [1,0,1,0,1],
           [0,1,0,1,0],
           [0,0,0,0,0]
           ],
    win: false,
    active: true,
    iconWinnerId: false,
    lineId: 22,
    get matches(){
                let hits = 0;
                let symbol = 99;
                let newSymbol = 98;
                for(let i = 0; i < 3; i++){
                  for(let j = 0; j < 5; j++){
                    symbol = selectedGroup[i][j];
                    if(symbol == newSymbol && this.array[i][j] == 1 && j == 1){
                          //console.log(symbol + ' match on line on reel' + j);
                        hits = 2;
                    }
                    if(symbol == newSymbol && this.array[i][j] == 1 && hits == 2 && j == 2){
                        hits = 3;
                    }
                    if (symbol == newSymbol && this.array[i][j] == 1 && hits == 3 && j == 3) {
                        hits = 4;
                    }
                    if (symbol == newSymbol && this.array[i][j] == 1 && hits == 4 && j == 4) {
                        hits = 5;
                    }
                    if(symbol != newSymbol && this.array[i][j] == 1 && j == 0){
                          //console.log(symbol + ' on line on reel ' + j);
                          newSymbol = selectedGroup[i][j];
                      } else {
                        this.win = false;
                        this.iconWinnerId = false;
                      }
                      //console.log(`J iteration ${j}`);
                    }
                    //console.log(`I iteration ${i}`);
                  }
                //console.log("matching symbol " + symbol + " New symbol " + newSymbol);
                //console.log(selectedGroup);
                if(hits > 2 && this.active == true){
                  this.iconWinnerId = newSymbol;
                  winList.push([this.iconWinnerId, this.lineId, hits])
                  console.log(newSymbol + ' on ' + this.lineId + 'is the winning icon');
                  console.log(selectedGroup);
                }
                matches = hits;
                return matches;
                },
}
const payline23 = {
    array: [
           [0,0,0,0,0],
           [0,1,0,1,0],
           [1,0,1,0,1]
           ],
    win: false,
    active: true,
    iconWinnerId: false,
    lineId: 23,
    get matches(){
                let hits = 0;
                let symbol = 99;
                let newSymbol = 98;
                for(let i = 0; i < 3; i++){
                  for(let j = 0; j < 5; j++){
                    symbol = selectedGroup[i][j];
                    if(symbol == newSymbol && this.array[i][j] == 1 && j == 1){
                          //console.log(symbol + ' match on line on reel' + j);
                        hits = 2;
                    }
                    if(symbol == newSymbol && this.array[i][j] == 1 && hits == 2 && j == 2){
                        hits = 3;
                    }
                    if (symbol == newSymbol && this.array[i][j] == 1 && hits == 3 && j == 3) {
                        hits = 4;
                    }
                    if (symbol == newSymbol && this.array[i][j] == 1 && hits == 4 && j == 4) {
                        hits = 5;
                    }
                    if(symbol != newSymbol && this.array[i][j] == 1 && j == 0){
                          //console.log(symbol + ' on line on reel ' + j);
                          newSymbol = selectedGroup[i][j];
                      } else {
                        this.win = false;
                        this.iconWinnerId = false;
                      }
                      //console.log(`J iteration ${j}`);
                    }
                    //console.log(`I iteration ${i}`);
                  }
                //console.log("matching symbol " + symbol + " New symbol " + newSymbol);
                //console.log(selectedGroup);
                if(hits > 2 && this.active == true){
                  this.iconWinnerId = newSymbol;
                  winList.push([this.iconWinnerId, this.lineId, hits])
                  console.log(newSymbol + ' on ' + this.lineId + 'is the winning icon');
                  console.log(selectedGroup);
                }
                matches = hits;
                return matches;
                },
}
const payline24 = {
    array: [
           [1,0,0,0,1],
           [0,1,1,1,0],
           [0,0,0,0,0]
           ],
    win: false,
    active: true,
    iconWinnerId: false,
    lineId: 24,
    get matches(){
                let hits = 0;
                let symbol = 99;
                let newSymbol = 98;
                for(let i = 0; i < 3; i++){
                  for(let j = 0; j < 5; j++){
                    symbol = selectedGroup[i][j];
                    if(symbol == newSymbol && this.array[i][j] == 1 && j == 1){
                          //console.log(symbol + ' match on line on reel' + j);
                        hits = 2;
                    }
                    if(symbol == newSymbol && this.array[i][j] == 1 && hits == 2 && j == 2){
                        hits = 3;
                    }
                    if (symbol == newSymbol && this.array[i][j] == 1 && hits == 3 && j == 3) {
                        hits = 4;
                    }
                    if (symbol == newSymbol && this.array[i][j] == 1 && hits == 4 && j == 4) {
                        hits = 5;
                    }
                    if(symbol != newSymbol && this.array[i][j] == 1 && j == 0){
                          //console.log(symbol + ' on line on reel ' + j);
                          newSymbol = selectedGroup[i][j];
                      } else {
                        this.win = false;
                        this.iconWinnerId = false;
                      }
                      //console.log(`J iteration ${j}`);
                    }
                    //console.log(`I iteration ${i}`);
                  }
                //console.log("matching symbol " + symbol + " New symbol " + newSymbol);
                //console.log(selectedGroup);
                if(hits > 2 && this.active == true){
                  this.iconWinnerId = newSymbol;
                  winList.push([this.iconWinnerId, this.lineId, hits])
                  console.log(newSymbol + ' on ' + this.lineId + 'is the winning icon');
                  console.log(selectedGroup);
                }
                matches = hits;
                return matches;
                },
}
const payline25 = {
    array: [
           [0,0,0,0,0],
           [0,1,1,1,0],
           [1,0,0,0,1]
           ],
    win: false,
    active: true,
    iconWinnerId: false,
    lineId: 25,
    get matches(){
                let hits = 0;
                let symbol = 99;
                let newSymbol = 98;
                for(let i = 0; i < 3; i++){
                  for(let j = 0; j < 5; j++){
                    symbol = selectedGroup[i][j];
                    if(symbol == newSymbol && this.array[i][j] == 1 && j == 1){
                          //console.log(symbol + ' match on line on reel' + j);
                        hits = 2;
                    }
                    if(symbol == newSymbol && this.array[i][j] == 1 && hits == 2 && j == 2){
                        hits = 3;
                    }
                    if (symbol == newSymbol && this.array[i][j] == 1 && hits == 3 && j == 3) {
                        hits = 4;
                    }
                    if (symbol == newSymbol && this.array[i][j] == 1 && hits == 4 && j == 4) {
                        hits = 5;
                    }
                    if(symbol != newSymbol && this.array[i][j] == 1 && j == 0){
                          //console.log(symbol + ' on line on reel ' + j);
                          newSymbol = selectedGroup[i][j];
                      } else {
                        this.win = false;
                        this.iconWinnerId = false;
                      }
                      //console.log(`J iteration ${j}`);
                    }
                    //console.log(`I iteration ${i}`);
                  }
                //console.log("matching symbol " + symbol + " New symbol " + newSymbol);
                //console.log(selectedGroup);
                if(hits > 2 && this.active == true){
                  this.iconWinnerId = newSymbol;
                  winList.push([this.iconWinnerId, this.lineId, hits])
                  console.log(newSymbol + ' on ' + this.lineId + 'is the winning icon');
                  console.log(selectedGroup);
                }
                matches = hits;
                return matches;
                },
}
