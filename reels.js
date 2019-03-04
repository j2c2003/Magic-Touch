const reel_1 = {

    reelPos: 0,
    xPosition: 100,
    yPosition: 100,
    speed: 20,
    stopped: false,
    nextSymbolPos: [143, -90],
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
    counter: 0,
    currentIndex: 0,

    get finaleSymbols() {

        this.finaleIndex = reelIndex[this.reelPos];
        let indexPos = this.finaleIndex;
        this.nextSymbol = allReels[this.reelPos][this.finaleIndex - 2];
        this.finaleTopSymbol = allReels[this.reelPos][this.finaleIndex - 1];
        this.finaleMiddle = allReels[this.reelPos][this.finaleIndex];
        this.finaleBottomSymbol = allReels[this.reelPos][this.finaleIndex[0] + 1];
    },
    initialize() {
        this.initTopSymbol = initialSelectedGroup[0][this.reelPos];
        this.initMiddleSymbol = initialSelectedGroup[1][this.reelPos];
        this.initBottomSymbol = initialSelectedGroup[2][this.reelPos];
        this.initIndex = reelIndex[this.reelPos];
        this.finaleIndex = this.initIndex;
    },

    spin() {
        this.stopped = false;
        this.spinInfo = [];
        ///Determine how many iterations through reel from start to stop
        this.finaleIndex = reelIndex[this.reelPos];
        let stopIndex = this.finaleIndex[0];
        let startIndex = this.initIndex[0];
        let iterations = 0;
        //console.log(startIndex, stopIndex);
        if (startIndex >= stopIndex) {

            iterations = startIndex - stopIndex;
            iterations = iterations + 149;
            console.log('reel 1 start is greater than final ', iterations, startIndex, stopIndex);
        } else {

            iterations = startIndex + 149;
            iterations = iterations - stopIndex;
            console.log('reel 1 start is LESS than final ', iterations, startIndex, stopIndex);
        }
        this.initIndex[0] = stopIndex;
        this.spinInfo.push(iterations, startIndex, stopIndex);
        this.cycles = iterations;


        //return this.spinInfo;


        ///preventing crazyness with a while loop, comparing arrays together instead of thier values
      //if (iterations < 1000) {

            //console.log('cycles to stop ', iterations);
            ///AFTER GETTING SYMBOLS FUNCTION//////////
            let symbolPosition = startIndex;
            let topSymbol = symbolPosition - 1;
            let bottomSymbol = topSymbol + 2; //weird issue, symbolPosition +1 is undefined
            let middleSymbol = allReels[this.reelPos][symbolPosition];
            let nextSymbol = symbolPosition - 2;
            topSymbol = allReels[this.reelPos][topSymbol];
            bottomSymbol = allReels[this.reelPos][bottomSymbol];
            nextSymbol = allReels[this.reelPos][nextSymbol];
            // console.log(nextSymbol);
            // console.log(topSymbol);
            // console.log(middleSymbol);
            // console.log(bottomSymbol);
            // console.log(symbolPosition);
            this.currentIndex = symbolPosition;
            this.counter = 0;
},
  /////////////////////////////////Under Construction///////////////////////////////////
  ////////     Removed from display.js    /////////////////////////////
animate(){

            if (this.stopped == false) {

                if ( this.counter < this.cycles ) {
                  this.counter++;
                    this.currentIndex--;

                    if (this.currentIndex == 0) {
                        nextSymbol = allReels[this.reelPos][numIconsOnReel - 2];
                        topSymbol = allReels[this.reelPos][numIconsOnReel - 1];
                        middleSymbol = allReels[this.reelPos][this.currentIndex];
                        bottomSymbol = allReels[this.reelPos][this.currentIndex + 1];
                        this.currentIndex = numIconsOnReel - 1;
                        //console.log('index ', this.currentIndex);
                    }
                    if (this.currentIndex == numIconsOnReel - 1) {
                        nextSymbol = allReels[this.reelPos][numIconsOnReel - 3];
                        topSymbol = allReels[this.reelPos][numIconsOnReel - 2];
                        middleSymbol = allReels[this.reelPos][this.currentIndex];
                        bottomSymbol = allReels[this.reelPos][0];
                        //console.log('index ', this.currentIndex);
                    } else {
                        nextSymbol = allReels[this.reelPos][this.currentIndex - 2];
                        topSymbol = allReels[this.reelPos][this.currentIndex - 1];
                        middleSymbol = allReels[this.reelPos][this.currentIndex];
                        bottomSymbol = allReels[this.reelPos][this.currentIndex + 1];
                        //console.log('index ', this.currentIndex);
                    }

                symHolder1_1.anims.play(iconReturn(topSymbol)).setAlpha(1);

                symHolder1_2.anims.play(iconReturn(middleSymbol)).setAlpha(1);

                symHolder1_3.anims.play(iconReturn(bottomSymbol)).setAlpha(1);

            } else {
            // this.initTopSymbol = topSymbol;
            // this.initMiddleSymbol = middleSymbol;
            // this.initBottomSymbol = bottomSymbol;
            this.stopped = true;
            return;
            //break;
            }
/////--------------------When the reel is stopped--------------------------/////
        } else {
            this.currentIndex = this.initIndex[0]
            if (this.currentIndex == 0) {
                nextSymbol = allReels[this.reelPos][numIconsOnReel - 2];
                topSymbol = allReels[this.reelPos][numIconsOnReel - 1];
                middleSymbol = allReels[this.reelPos][this.currentIndex];
                bottomSymbol = allReels[this.reelPos][this.currentIndex + 1];
                this.currentIndex = numIconsOnReel - 1;
                //console.log('index ', this.currentIndex);
            }
            if (this.currentIndex == numIconsOnReel - 1) {
                nextSymbol = allReels[this.reelPos][numIconsOnReel - 3];
                topSymbol = allReels[this.reelPos][numIconsOnReel - 2];
                middleSymbol = allReels[this.reelPos][this.currentIndex];
                bottomSymbol = allReels[this.reelPos][0];
                //console.log('index ', this.currentIndex);
            } else {
                nextSymbol = allReels[this.reelPos][this.currentIndex - 2];
                topSymbol = allReels[this.reelPos][this.currentIndex - 1];
                middleSymbol = allReels[this.reelPos][this.currentIndex];
                bottomSymbol = allReels[this.reelPos][this.currentIndex + 1];
                //console.log('index ', this.currentIndex);
            }
        //// if a win do this -----
        if (anim_1_1_Active) {
            //console.log('its running active');
            symHolder1_1.anims.play(iconReturn(topSymbol)).setAlpha(0);
        } else { /////// --------- else play normal ------///////
            symHolder1_1.anims.play(iconReturn(topSymbol)).setAlpha(1);
        }
        if (anim_1_2_Active) {
            symHolder1_2.anims.play(iconReturn(middleSymbol)).setAlpha(0);
        } else {
            symHolder1_2.anims.play(iconReturn(middleSymbol)).setAlpha(1);
        }
        if (anim_1_3_Active) {
            symHolder1_3.anims.play(iconReturn(bottomSymbol)).setAlpha(0);
        } else {
            symHolder1_3.anims.play(iconReturn(bottomSymbol)).setAlpha(1);
        }    

        }
    },

}

const reel_2 = {

    reelPos: 1,
    xPosition: 100,
    yPosition: 100,
    speed: 20,
    stopped: false,
    nextSymbolPos: [325, -90],
    topSymbolPos: [325, 224],
    middleSymbolPos: [325, 384],
    bottomSymbolPos: [325, 544],
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
    counter: 0,
    currentIndex: 0,

    get finaleSymbols() {

        this.finaleIndex = reelIndex[this.reelPos];
        let indexPos = this.finaleIndex;
        this.nextSymbol = allReels[this.reelPos][this.finaleIndex - 2];
        this.finaleTopSymbol = allReels[this.reelPos][this.finaleIndex - 1];
        this.finaleMiddle = allReels[this.reelPos][this.finaleIndex];
        this.finaleBottomSymbol = allReels[this.reelPos][this.finaleIndex[0] + 1];
    },
    initialize() {
        this.initTopSymbol = initialSelectedGroup[0][this.reelPos];
        this.initMiddleSymbol = initialSelectedGroup[1][this.reelPos];
        this.initBottomSymbol = initialSelectedGroup[2][this.reelPos];
        this.initIndex = reelIndex[this.reelPos];
        this.finaleIndex = this.initIndex;
    },

    spin() {
        this.stopped = false;
        this.spinInfo = [];
        ///Determine how many iterations through reel from start to stop
        this.finaleIndex = reelIndex[this.reelPos];
        let stopIndex = this.finaleIndex[0];
        let startIndex = this.initIndex[0];
        let iterations = 0;
        //console.log(startIndex, stopIndex);
        if (startIndex >= stopIndex) {

            iterations = startIndex - stopIndex;
            iterations = iterations + 149;
            console.log('reel 2 start is greater than final ', iterations, startIndex, stopIndex);
        } else {

            iterations = startIndex + 149;
            iterations = iterations - stopIndex;
            console.log('reel 2 start is LESS than final ', iterations, startIndex, stopIndex);
        }
        this.initIndex[0] = stopIndex;
        this.spinInfo.push(iterations, startIndex, stopIndex);
        this.cycles = iterations;


        //return this.spinInfo;


        ///preventing crazyness with a while loop, comparing arrays together instead of thier values
      //if (iterations < 1000) {

            //console.log('cycles to stop ', iterations);
            ///AFTER GETTING SYMBOLS FUNCTION//////////
            let symbolPosition = startIndex;
            let topSymbol = symbolPosition - 1;
            let bottomSymbol = topSymbol + 2; //weird issue, symbolPosition +1 is undefined
            let middleSymbol = allReels[this.reelPos][symbolPosition];
            let nextSymbol = symbolPosition - 2;
            topSymbol = allReels[this.reelPos][topSymbol];
            bottomSymbol = allReels[this.reelPos][bottomSymbol];
            nextSymbol = allReels[this.reelPos][nextSymbol];
            // console.log(nextSymbol);
            // console.log(topSymbol);
            // console.log(middleSymbol);
            // console.log(bottomSymbol);
            // console.log(symbolPosition);
            this.currentIndex = symbolPosition;
            this.counter = 0;
},
  /////////////////////////////////Under Construction///////////////////////////////////
  ////////     Removed from display.js    /////////////////////////////
animate(){

            if (this.stopped == false) {

                if ( this.counter < this.cycles ) {
                  this.counter++;
                    this.currentIndex--;

                    if (this.currentIndex == 0) {
                        nextSymbol = allReels[this.reelPos][numIconsOnReel - 2];
                        topSymbol = allReels[this.reelPos][numIconsOnReel - 1];
                        middleSymbol = allReels[this.reelPos][this.currentIndex];
                        bottomSymbol = allReels[this.reelPos][this.currentIndex + 1];
                        this.currentIndex = numIconsOnReel - 1;
                        //console.log('index ', this.currentIndex);
                    }
                    if (this.currentIndex == numIconsOnReel - 1) {
                        nextSymbol = allReels[this.reelPos][numIconsOnReel - 3];
                        topSymbol = allReels[this.reelPos][numIconsOnReel - 2];
                        middleSymbol = allReels[this.reelPos][this.currentIndex];
                        bottomSymbol = allReels[this.reelPos][0];
                        //console.log('index ', this.currentIndex);
                    } else {
                        nextSymbol = allReels[this.reelPos][this.currentIndex - 2];
                        topSymbol = allReels[this.reelPos][this.currentIndex - 1];
                        middleSymbol = allReels[this.reelPos][this.currentIndex];
                        bottomSymbol = allReels[this.reelPos][this.currentIndex + 1];
                        //console.log('index ', this.currentIndex);
                    }

                symHolder2_1.anims.play(iconReturn(topSymbol)).setAlpha(1);

                symHolder2_2.anims.play(iconReturn(middleSymbol)).setAlpha(1);

                symHolder2_3.anims.play(iconReturn(bottomSymbol)).setAlpha(1);

            } else {
            // this.initTopSymbol = topSymbol;
            // this.initMiddleSymbol = middleSymbol;
            // this.initBottomSymbol = bottomSymbol;
            this.stopped = true;
            return;
            //break;
            }
        } else {
            this.currentIndex = this.initIndex[0]
            if (this.currentIndex == 0) {
                nextSymbol = allReels[this.reelPos][numIconsOnReel - 2];
                topSymbol = allReels[this.reelPos][numIconsOnReel - 1];
                middleSymbol = allReels[this.reelPos][this.currentIndex];
                bottomSymbol = allReels[this.reelPos][this.currentIndex + 1];
                this.currentIndex = numIconsOnReel - 1;
                //console.log('index ', this.currentIndex);
            }
            if (this.currentIndex == numIconsOnReel - 1) {
                nextSymbol = allReels[this.reelPos][numIconsOnReel - 3];
                topSymbol = allReels[this.reelPos][numIconsOnReel - 2];
                middleSymbol = allReels[this.reelPos][this.currentIndex];
                bottomSymbol = allReels[this.reelPos][0];
                //console.log('index ', this.currentIndex);
            } else {
                nextSymbol = allReels[this.reelPos][this.currentIndex - 2];
                topSymbol = allReels[this.reelPos][this.currentIndex - 1];
                middleSymbol = allReels[this.reelPos][this.currentIndex];
                bottomSymbol = allReels[this.reelPos][this.currentIndex + 1];
                //console.log('index ', this.currentIndex);
            }
            //// if a win do this -----
            if (anim_2_1_Active) {
                //console.log('its running active');
                symHolder2_1.anims.play(iconReturn(topSymbol)).setAlpha(0);
            } else { /////// --------- else play normal ------///////
                symHolder2_1.anims.play(iconReturn(topSymbol)).setAlpha(1);
            }
            if (anim_2_2_Active) {
                symHolder2_2.anims.play(iconReturn(middleSymbol)).setAlpha(0);
            } else {
                symHolder2_2.anims.play(iconReturn(middleSymbol)).setAlpha(1);
            }
            if (anim_2_3_Active) {
                symHolder2_3.anims.play(iconReturn(bottomSymbol)).setAlpha(0);
            } else {
                symHolder2_3.anims.play(iconReturn(bottomSymbol)).setAlpha(1);
            }

        }
    },


}
const reel_3 = {

    reelPos: 2,
    xPosition: 100,
    yPosition: 100,
    speed: 20,
    stopped: false,
    nextSymbolPos: [510, -90],
    topSymbolPos: [510, 224],
    middleSymbolPos: [510, 384],
    bottomSymbolPos: [510, 544],
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
    counter: 0,
    currentIndex: 0,

    get finaleSymbols() {

        this.finaleIndex = reelIndex[this.reelPos];
        let indexPos = this.finaleIndex;
        this.nextSymbol = allReels[this.reelPos][this.finaleIndex - 2];
        this.finaleTopSymbol = allReels[this.reelPos][this.finaleIndex - 1];
        this.finaleMiddle = allReels[this.reelPos][this.finaleIndex];
        this.finaleBottomSymbol = allReels[this.reelPos][this.finaleIndex[0] + 1];
    },
    initialize() {
        this.initTopSymbol = initialSelectedGroup[0][this.reelPos];
        this.initMiddleSymbol = initialSelectedGroup[1][this.reelPos];
        this.initBottomSymbol = initialSelectedGroup[2][this.reelPos];
        this.initIndex = reelIndex[this.reelPos];
        this.finaleIndex = this.initIndex;
    },

    spin() {
        this.stopped = false;
        this.spinInfo = [];
        ///Determine how many iterations through reel from start to stop
        this.finaleIndex = reelIndex[this.reelPos];
        let stopIndex = this.finaleIndex[0];
        let startIndex = this.initIndex[0];
        let iterations = 0;
        //console.log(startIndex, stopIndex);
        if (startIndex >= stopIndex) {

            iterations = startIndex - stopIndex;
            iterations = iterations + 149;
            console.log('reel 3 start is greater than final ', iterations, startIndex, stopIndex);
        } else {

            iterations = startIndex + 149;
            iterations = iterations - stopIndex;
            console.log('reel 3 start is LESS than final ', iterations, startIndex, stopIndex);
        }
        this.initIndex[0] = stopIndex;
        this.spinInfo.push(iterations, startIndex, stopIndex);
        this.cycles = iterations;


        //return this.spinInfo;


        ///preventing crazyness with a while loop, comparing arrays together instead of thier values
      //if (iterations < 1000) {

            //console.log('cycles to stop ', iterations);
            ///AFTER GETTING SYMBOLS FUNCTION//////////
            let symbolPosition = startIndex;
            let topSymbol = symbolPosition - 1;
            let bottomSymbol = topSymbol + 2; //weird issue, symbolPosition +1 is undefined
            let middleSymbol = allReels[this.reelPos][symbolPosition];
            let nextSymbol = symbolPosition - 2;
            topSymbol = allReels[this.reelPos][topSymbol];
            bottomSymbol = allReels[this.reelPos][bottomSymbol];
            nextSymbol = allReels[this.reelPos][nextSymbol];
            // console.log(nextSymbol);
            // console.log(topSymbol);
            // console.log(middleSymbol);
            // console.log(bottomSymbol);
            // console.log(symbolPosition);
            this.currentIndex = symbolPosition;
            this.counter = 0;
},
  /////////////////////////////////Under Construction///////////////////////////////////
  ////////     Removed from display.js    /////////////////////////////
animate(){

            if (this.stopped == false) {

                if ( this.counter < this.cycles ) {
                  this.counter++;
                    this.currentIndex--;

                    if (this.currentIndex == 0) {
                        nextSymbol = allReels[this.reelPos][numIconsOnReel - 2];
                        topSymbol = allReels[this.reelPos][numIconsOnReel - 1];
                        middleSymbol = allReels[this.reelPos][this.currentIndex];
                        bottomSymbol = allReels[this.reelPos][this.currentIndex + 1];
                        this.currentIndex = numIconsOnReel - 1;
                        //console.log('index ', this.currentIndex);
                    }
                    if (this.currentIndex == numIconsOnReel - 1) {
                        nextSymbol = allReels[this.reelPos][numIconsOnReel - 3];
                        topSymbol = allReels[this.reelPos][numIconsOnReel - 2];
                        middleSymbol = allReels[this.reelPos][this.currentIndex];
                        bottomSymbol = allReels[this.reelPos][0];
                        //console.log('index ', this.currentIndex);
                    } else {
                        nextSymbol = allReels[this.reelPos][this.currentIndex - 2];
                        topSymbol = allReels[this.reelPos][this.currentIndex - 1];
                        middleSymbol = allReels[this.reelPos][this.currentIndex];
                        bottomSymbol = allReels[this.reelPos][this.currentIndex + 1];
                        //console.log('index ', this.currentIndex);
                    }

                symHolder3_1.anims.play(iconReturn(topSymbol)).setAlpha(1);

                symHolder3_2.anims.play(iconReturn(middleSymbol)).setAlpha(1);

                symHolder3_3.anims.play(iconReturn(bottomSymbol)).setAlpha(1);

            } else {
            // this.initTopSymbol = topSymbol;
            // this.initMiddleSymbol = middleSymbol;
            // this.initBottomSymbol = bottomSymbol;
            this.stopped = true;
            return;
            //break;
            }
        } else {
            this.currentIndex = this.initIndex[0]
            if (this.currentIndex == 0) {
                nextSymbol = allReels[this.reelPos][numIconsOnReel - 2];
                topSymbol = allReels[this.reelPos][numIconsOnReel - 1];
                middleSymbol = allReels[this.reelPos][this.currentIndex];
                bottomSymbol = allReels[this.reelPos][this.currentIndex + 1];
                this.currentIndex = numIconsOnReel - 1;
                //console.log('index ', this.currentIndex);
            }
            if (this.currentIndex == numIconsOnReel - 1) {
                nextSymbol = allReels[this.reelPos][numIconsOnReel - 3];
                topSymbol = allReels[this.reelPos][numIconsOnReel - 2];
                middleSymbol = allReels[this.reelPos][this.currentIndex];
                bottomSymbol = allReels[this.reelPos][0];
                //console.log('index ', this.currentIndex);
            } else {
                nextSymbol = allReels[this.reelPos][this.currentIndex - 2];
                topSymbol = allReels[this.reelPos][this.currentIndex - 1];
                middleSymbol = allReels[this.reelPos][this.currentIndex];
                bottomSymbol = allReels[this.reelPos][this.currentIndex + 1];
                //console.log('index ', this.currentIndex);
            }
            //// if a win do this -----
            if (anim_3_1_Active) {
                //console.log('its running active');
                symHolder3_1.anims.play(iconReturn(topSymbol)).setAlpha(0);
            } else { /////// --------- else play normal ------///////
                symHolder3_1.anims.play(iconReturn(topSymbol)).setAlpha(1);
            }
            if (anim_3_2_Active) {
                symHolder3_2.anims.play(iconReturn(middleSymbol)).setAlpha(0);
            } else {
                symHolder3_2.anims.play(iconReturn(middleSymbol)).setAlpha(1);
            }
            if (anim_3_3_Active) {
                symHolder3_3.anims.play(iconReturn(bottomSymbol)).setAlpha(0);
            } else {
                symHolder3_3.anims.play(iconReturn(bottomSymbol)).setAlpha(1);
            }
        }
    },
}
const reel_4 = {

    reelPos: 3,
    xPosition: 100,
    yPosition: 100,
    speed: 20,
    stopped: false,
    nextSymbolPos: [693, -90],
    topSymbolPos: [693, 224],
    middleSymbolPos: [693, 384],
    bottomSymbolPos: [693, 544],
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
    counter: 0,
    currentIndex: 0,

    get finaleSymbols() {

        this.finaleIndex = reelIndex[this.reelPos];
        let indexPos = this.finaleIndex;
        this.nextSymbol = allReels[this.reelPos][this.finaleIndex - 2];
        this.finaleTopSymbol = allReels[this.reelPos][this.finaleIndex - 1];
        this.finaleMiddle = allReels[this.reelPos][this.finaleIndex];
        this.finaleBottomSymbol = allReels[this.reelPos][this.finaleIndex[0] + 1];
    },
    initialize() {
        this.initTopSymbol = initialSelectedGroup[0][this.reelPos];
        this.initMiddleSymbol = initialSelectedGroup[1][this.reelPos];
        this.initBottomSymbol = initialSelectedGroup[2][this.reelPos];
        this.initIndex = reelIndex[this.reelPos];
        this.finaleIndex = this.initIndex;
    },

    spin() {
        this.stopped = false;
        this.spinInfo = [];
        ///Determine how many iterations through reel from start to stop
        this.finaleIndex = reelIndex[this.reelPos];
        let stopIndex = this.finaleIndex[0];
        let startIndex = this.initIndex[0];
        let iterations = 0;
        //console.log(startIndex, stopIndex);
        if (startIndex >= stopIndex) {

            iterations = startIndex - stopIndex;
            iterations = iterations + 149;
            console.log('reel 4 start is greater than final ', iterations, startIndex, stopIndex);
        } else {

            iterations = startIndex + 149;
            iterations = iterations - stopIndex;
            console.log('reel 4 start is LESS than final ', iterations, startIndex, stopIndex);
        }
        this.initIndex[0] = stopIndex;
        this.spinInfo.push(iterations, startIndex, stopIndex);
        this.cycles = iterations;


        //return this.spinInfo;


        ///preventing crazyness with a while loop, comparing arrays together instead of thier values
      //if (iterations < 1000) {

            //console.log('cycles to stop ', iterations);
            ///AFTER GETTING SYMBOLS FUNCTION//////////
            let symbolPosition = startIndex;
            let topSymbol = symbolPosition - 1;
            let bottomSymbol = topSymbol + 2; //weird issue, symbolPosition +1 is undefined
            let middleSymbol = allReels[this.reelPos][symbolPosition];
            let nextSymbol = symbolPosition - 2;
            topSymbol = allReels[this.reelPos][topSymbol];
            bottomSymbol = allReels[this.reelPos][bottomSymbol];
            nextSymbol = allReels[this.reelPos][nextSymbol];
            // console.log(nextSymbol);
            // console.log(topSymbol);
            // console.log(middleSymbol);
            // console.log(bottomSymbol);
            // console.log(symbolPosition);
            this.currentIndex = symbolPosition;
            this.counter = 0;
},
  /////////////////////////////////Under Construction///////////////////////////////////
  ////////     Removed from display.js    /////////////////////////////
animate(){

            if (this.stopped == false) {

                if ( this.counter < this.cycles ) {
                  this.counter++;
                    this.currentIndex--;

                    if (this.currentIndex == 0) {
                        nextSymbol = allReels[this.reelPos][numIconsOnReel - 2];
                        topSymbol = allReels[this.reelPos][numIconsOnReel - 1];
                        middleSymbol = allReels[this.reelPos][this.currentIndex];
                        bottomSymbol = allReels[this.reelPos][this.currentIndex + 1];
                        this.currentIndex = numIconsOnReel - 1;
                        //console.log('index ', this.currentIndex);
                    }
                    if (this.currentIndex == numIconsOnReel - 1) {
                        nextSymbol = allReels[this.reelPos][numIconsOnReel - 3];
                        topSymbol = allReels[this.reelPos][numIconsOnReel - 2];
                        middleSymbol = allReels[this.reelPos][this.currentIndex];
                        bottomSymbol = allReels[this.reelPos][0];
                        //console.log('index ', this.currentIndex);
                    } else {
                        nextSymbol = allReels[this.reelPos][this.currentIndex - 2];
                        topSymbol = allReels[this.reelPos][this.currentIndex - 1];
                        middleSymbol = allReels[this.reelPos][this.currentIndex];
                        bottomSymbol = allReels[this.reelPos][this.currentIndex + 1];
                        //console.log('index ', this.currentIndex);
                    }

                symHolder4_1.anims.play(iconReturn(topSymbol)).setAlpha(1);

                symHolder4_2.anims.play(iconReturn(middleSymbol)).setAlpha(1);

                symHolder4_3.anims.play(iconReturn(bottomSymbol)).setAlpha(1);

            } else {
            // this.initTopSymbol = topSymbol;
            // this.initMiddleSymbol = middleSymbol;
            // this.initBottomSymbol = bottomSymbol;
            this.stopped = true;
            return;
            //break;
            }
        } else {
            this.currentIndex = this.initIndex[0]
            if (this.currentIndex == 0) {
                nextSymbol = allReels[this.reelPos][numIconsOnReel - 2];
                topSymbol = allReels[this.reelPos][numIconsOnReel - 1];
                middleSymbol = allReels[this.reelPos][this.currentIndex];
                bottomSymbol = allReels[this.reelPos][this.currentIndex + 1];
                this.currentIndex = numIconsOnReel - 1;
                //console.log('index ', this.currentIndex);
            }
            if (this.currentIndex == numIconsOnReel - 1) {
                nextSymbol = allReels[this.reelPos][numIconsOnReel - 3];
                topSymbol = allReels[this.reelPos][numIconsOnReel - 2];
                middleSymbol = allReels[this.reelPos][this.currentIndex];
                bottomSymbol = allReels[this.reelPos][0];
                //console.log('index ', this.currentIndex);
            } else {
                nextSymbol = allReels[this.reelPos][this.currentIndex - 2];
                topSymbol = allReels[this.reelPos][this.currentIndex - 1];
                middleSymbol = allReels[this.reelPos][this.currentIndex];
                bottomSymbol = allReels[this.reelPos][this.currentIndex + 1];
                //console.log('index ', this.currentIndex);
            }

            //// if a win do this -----
            if (anim_4_1_Active) {
                //console.log('its running active');
                symHolder4_1.anims.play(iconReturn(topSymbol)).setAlpha(0);
            } else { /////// --------- else play normal ------///////
                symHolder4_1.anims.play(iconReturn(topSymbol)).setAlpha(1);
            }
            if (anim_4_2_Active) {
                symHolder4_2.anims.play(iconReturn(middleSymbol)).setAlpha(0);
            } else {
                symHolder4_2.anims.play(iconReturn(middleSymbol)).setAlpha(1);
            }
            if (anim_4_3_Active) {
                symHolder4_3.anims.play(iconReturn(bottomSymbol)).setAlpha(0);
            } else {
                symHolder4_3.anims.play(iconReturn(bottomSymbol)).setAlpha(1);
            }

        }
    },
}
const reel_5 = {

    reelPos: 4,
    xPosition: 100,
    yPosition: 100,
    speed: 20,
    stopped: false,
    nextSymbolPos: [873, -90],
    topSymbolPos: [873, 224],
    middleSymbolPos: [873, 384],
    bottomSymbolPos: [873, 544],
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
    counter: 0,
    currentIndex: 0,
    counter: 0,
    currentIndex: 0,

    get finaleSymbols() {

        this.finaleIndex = reelIndex[this.reelPos];
        let indexPos = this.finaleIndex;
        this.nextSymbol = allReels[this.reelPos][this.finaleIndex - 2];
        this.finaleTopSymbol = allReels[this.reelPos][this.finaleIndex - 1];
        this.finaleMiddle = allReels[this.reelPos][this.finaleIndex];
        this.finaleBottomSymbol = allReels[this.reelPos][this.finaleIndex[0] + 1];
    },
    initialize() {
        this.initTopSymbol = initialSelectedGroup[0][this.reelPos];
        this.initMiddleSymbol = initialSelectedGroup[1][this.reelPos];
        this.initBottomSymbol = initialSelectedGroup[2][this.reelPos];
        this.initIndex = reelIndex[this.reelPos];
        this.finaleIndex = this.initIndex;
    },

    spin() {
        this.stopped = false;
        this.spinInfo = [];
        ///Determine how many iterations through reel from start to stop
        this.finaleIndex = reelIndex[this.reelPos];
        let stopIndex = this.finaleIndex[0];
        let startIndex = this.initIndex[0];
        let iterations = 0;
        //console.log(startIndex, stopIndex);
        if (startIndex >= stopIndex) {

            iterations = startIndex - stopIndex;
            iterations = iterations + 149;
            console.log('reel 5 start is greater than final ', iterations, startIndex, stopIndex);
        } else {

            iterations = startIndex + 149;
            iterations = iterations - stopIndex;
            console.log('reel 5 start is LESS than final ', iterations, startIndex, stopIndex);
        }
        this.initIndex[0] = stopIndex;
        this.spinInfo.push(iterations, startIndex, stopIndex);
        this.cycles = iterations;


        //return this.spinInfo;


        ///preventing crazyness with a while loop, comparing arrays together instead of thier values
      //if (iterations < 1000) {

            //console.log('cycles to stop ', iterations);
            ///AFTER GETTING SYMBOLS FUNCTION//////////
            let symbolPosition = startIndex;
            let topSymbol = symbolPosition - 1;
            let bottomSymbol = topSymbol + 2; //weird issue, symbolPosition +1 is undefined
            let middleSymbol = allReels[this.reelPos][symbolPosition];
            let nextSymbol = symbolPosition - 2;
            topSymbol = allReels[this.reelPos][topSymbol];
            bottomSymbol = allReels[this.reelPos][bottomSymbol];
            nextSymbol = allReels[this.reelPos][nextSymbol];
            // console.log(nextSymbol);
            // console.log(topSymbol);
            // console.log(middleSymbol);
            // console.log(bottomSymbol);
            // console.log(symbolPosition);
            this.currentIndex = symbolPosition;
            this.counter = 0;
},
  /////////////////////////////////Under Construction///////////////////////////////////
  ////////     Removed from display.js    /////////////////////////////
animate(){

            if (this.stopped == false) {

                if ( this.counter < this.cycles ) {
                  this.counter++;
                    this.currentIndex--;

                    if (this.currentIndex == 0) {
                        nextSymbol = allReels[this.reelPos][numIconsOnReel - 2];
                        topSymbol = allReels[this.reelPos][numIconsOnReel - 1];
                        middleSymbol = allReels[this.reelPos][this.currentIndex];
                        bottomSymbol = allReels[this.reelPos][this.currentIndex + 1];
                        this.currentIndex = numIconsOnReel - 1;
                        //console.log('index ', this.currentIndex);
                    }
                    if (this.currentIndex == numIconsOnReel - 1) {
                        nextSymbol = allReels[this.reelPos][numIconsOnReel - 3];
                        topSymbol = allReels[this.reelPos][numIconsOnReel - 2];
                        middleSymbol = allReels[this.reelPos][this.currentIndex];
                        bottomSymbol = allReels[this.reelPos][0];
                        //console.log('index ', this.currentIndex);
                    } else {
                        nextSymbol = allReels[this.reelPos][this.currentIndex - 2];
                        topSymbol = allReels[this.reelPos][this.currentIndex - 1];
                        middleSymbol = allReels[this.reelPos][this.currentIndex];
                        bottomSymbol = allReels[this.reelPos][this.currentIndex + 1];
                        //console.log('index ', this.currentIndex);
                    }

                symHolder5_1.anims.play(iconReturn(topSymbol)).setAlpha(1);

                symHolder5_2.anims.play(iconReturn(middleSymbol)).setAlpha(1);

                symHolder5_3.anims.play(iconReturn(bottomSymbol)).setAlpha(1);

            } else {
            // this.initTopSymbol = topSymbol;
            // this.initMiddleSymbol = middleSymbol;
            // this.initBottomSymbol = bottomSymbol;
            this.stopped = true;
            return;
            //break;
            }
        } else {
            this.currentIndex = this.initIndex[0]
            if (this.currentIndex == 0) {
                nextSymbol = allReels[this.reelPos][numIconsOnReel - 2];
                topSymbol = allReels[this.reelPos][numIconsOnReel - 1];
                middleSymbol = allReels[this.reelPos][this.currentIndex];
                bottomSymbol = allReels[this.reelPos][this.currentIndex + 1];
                this.currentIndex = numIconsOnReel - 1;
                //console.log('index ', this.currentIndex);
            }
            if (this.currentIndex == numIconsOnReel - 1) {
                nextSymbol = allReels[this.reelPos][numIconsOnReel - 3];
                topSymbol = allReels[this.reelPos][numIconsOnReel - 2];
                middleSymbol = allReels[this.reelPos][this.currentIndex];
                bottomSymbol = allReels[this.reelPos][0];
                //console.log('index ', this.currentIndex);
            } else {
                nextSymbol = allReels[this.reelPos][this.currentIndex - 2];
                topSymbol = allReels[this.reelPos][this.currentIndex - 1];
                middleSymbol = allReels[this.reelPos][this.currentIndex];
                bottomSymbol = allReels[this.reelPos][this.currentIndex + 1];
                //console.log('index ', this.currentIndex);
            }

            //// if a win do this -----
            if (anim_5_1_Active) {
                //console.log('its running active');
                symHolder5_1.anims.play(iconReturn(topSymbol)).setAlpha(0);
            } else { /////// --------- else play normal ------///////
                symHolder5_1.anims.play(iconReturn(topSymbol)).setAlpha(1);
            }
            if (anim_5_2_Active) {
                symHolder5_2.anims.play(iconReturn(middleSymbol)).setAlpha(0);
            } else {
                symHolder5_2.anims.play(iconReturn(middleSymbol)).setAlpha(1);
            }
            if (anim_5_3_Active) {
                symHolder5_3.anims.play(iconReturn(bottomSymbol)).setAlpha(0);
            } else {
                symHolder5_3.anims.play(iconReturn(bottomSymbol)).setAlpha(1);
            }

        }
    },
}
var allReelsStopped = function () {
     if (reel_1.stopped && reel_2.stopped && reel_3.stopped && reel_4.stopped && reel_5.stopped) {
         return true;
     }
}