var game;
if ($(document).width() > $(document).height()) {
   $widthtAdjust = $('#game-container').width();
   $height = $(document).height();
   $widthAdjust = Math.floor($height / .75);
   $('#game-container').width($widthAdjust);
   console.log($widthAdjust);
   console.log($height);
} else {
   $('#game-container').removeClass('widescreen');
}
window.onload = function(){
var config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    minWidth: 300,
    minHeight: 100,
    title: 'Magic Touch',
    parent: 'game-container',
    scene: {
        preload: preload,
        create: create,
        update: update,
        custom: custom
    }
};
game = new Phaser.Game(config);
}

function preload ()
{

    this.load.spritesheet('btn_BetUp', 'assets/btn_BetUp.png', {
       frameWidth: 42,
       frameHeight: 42,
    });

    this.load.spritesheet('btn_BetDown', 'assets/btn_BetDown.png', {
       frameWidth: 42,
       frameHeight: 42,
    });

    this.load.spritesheet('btn_Play','assets/btn_Play.png', { frameWidth: 174,
                                                                      frameHeight: 139,
                                                                    });
    this.load.image('reelStopBtn', 'assets/ovr_ReelStop.png');
   
    this.load.image('reelStopBtnDisp', 'assets/ovr_ReelStop_Display.png');
    this.load.image('bg_MainScreen', 'assets/bg_MainScreen.png');
    this.load.image('ovr_MainScreen', 'assets/ovr_MainScreen.png');
    this.load.spritesheet('anim_Magician','assets/anim_Magician.png', { frameWidth: 323,
                                                                        frameHeight: 135,
                                                                      });
    this.load.image('line1', 'assets/ovr_Line_1_Box.png');

   //  this.load.spritesheet('anim_Magician_Blink','assets/anim_Magician_Blink.png', { frameWidth: 323, frameHeight: 135 });
   //  this.load.spritesheet('anim_Magician_Banner','assets/anim_Magician_Close.png', { frameWidth: 323, frameHeight: 135 });
   //  this.load.spritesheet('anim_Magician_Knock','assets/anim_Magician_Knock.png', { frameWidth: 323, frameHeight: 135 });
  
    this.load.spritesheet('anim_Win_1','assets/anim_Win_1.png', { frameWidth: 184, frameHeight: 160 });
    this.load.spritesheet('anim_Win_2','assets/anim_Win_2.png', { frameWidth: 184, frameHeight: 160 });
    this.load.spritesheet('anim_Win_3','assets/anim_Win_3.png', { frameWidth: 184, frameHeight: 160 });
    this.load.spritesheet('anim_Win_4','assets/anim_Win_4.png', { frameWidth: 184, frameHeight: 160 });
    this.load.spritesheet('anim_Win_5','assets/anim_Win_5.png', { frameWidth: 184, frameHeight: 160 });
    this.load.spritesheet('anim_Win_6','assets/anim_Win_6.png', { frameWidth: 184, frameHeight: 160 });
    this.load.spritesheet('anim_Win_7','assets/anim_Win_7.png', { frameWidth: 184, frameHeight: 160 });
    this.load.spritesheet('anim_Win_8','assets/anim_Win_8.png', { frameWidth: 184, frameHeight: 160 });
    this.load.spritesheet('anim_Win_9','assets/anim_Win_9.png', { frameWidth: 184, frameHeight: 160 });
    this.load.spritesheet('anim_Win_10','assets/anim_Win_10.png', { frameWidth: 184, frameHeight: 160 });
    this.load.spritesheet('anim_Win_11','assets/anim_Win_11.png', { frameWidth: 184, frameHeight: 160 });
    this.load.spritesheet('anim_MagicPoof','assets/anim_MagicPoof.png', { frameWidth: 204, frameHeight: 204 });
    this.load.spritesheet('icons','assets/ovr_SlotIcons.png', {frameWidth: 184, frameHeight: 160, startFrame: 1, endFrame: 12});
    this.load.spritesheet('icons_Win','assets/ovr_SlotIcons_Win.png', {frameWidth: 184, frameHeight: 160});
}



function create ()
{
   this.background = this.add.image(512, 384, 'bg_MainScreen');

   var icon1 = {key: 'icon1',
   frames: this.anims.generateFrameNumbers('icons', { start: 0, end: 0, first: 23 }),
   };
   this.anims.create(icon1);
   icon1 = this.add.sprite(320, 300, 'icons');
   icon1.anims.play('icon1');

   var icon2 = {key: 'icon2',
   frames: this.anims.generateFrameNumbers('icons', { start: 1, end: 1, first: 23 }),
   };
   this.anims.create(icon2);
   icon2 = this.add.sprite(320, 300, 'icons');
   icon2.anims.play('icon2');

   var icon3 = {key: 'icon3',
   frames: this.anims.generateFrameNumbers('icons', { start: 2, end: 2, first: 23 }),
   };
   this.anims.create(icon3);
   icon3 = this.add.sprite(150, 350, 'icons');
   icon3.anims.play('icon3');

   var icon4 = {key: 'icon4',
   frames: this.anims.generateFrameNumbers('icons', { start: 3, end: 3, first: 23 }),
   };
   this.anims.create(icon4);
   icon4 = this.add.sprite(512, 500, 'icons');
   icon4.anims.play('icon4');

   var icon5 = {key: 'icon5',
   frames: this.anims.generateFrameNumbers('icons', { start: 4, end: 4, first: 23 }),
   };
   this.anims.create(icon5);
   icon5 = this.add.sprite(320, 500, 'icons');
   icon5.anims.play('icon5');

   var icon6 = {key: 'icon6',
   frames: this.anims.generateFrameNumbers('icons', { start: 5, end: 5, first: 23 }),
   };
   this.anims.create(icon6);
   icon6 = this.add.sprite(320, 200, 'icons');
   icon6.anims.play('icon6');

   var icon7 = {key: 'icon7',
   frames: this.anims.generateFrameNumbers('icons', { start: 6, end: 6, first: 23 }),
   };
   this.anims.create(icon7);
   icon7 = this.add.sprite(720, 500, 'icons');
   icon7.anims.play('icon7');

   var icon8 = {key: 'icon8',
   frames: this.anims.generateFrameNumbers('icons', { start: 7, end: 7, first: 23 }),
   };
   this.anims.create(icon8);
   icon8 = this.add.sprite(720, 200, 'icons');
   icon8.anims.play('icon8');

   var icon9 = {key: 'icon9',
   frames: this.anims.generateFrameNumbers('icons', { start: 8, end: 8, first: 23 }),
   };
   this.anims.create(icon9);
   icon9 = this.add.sprite(512, 250, 'icons');
   icon9.anims.play('icon9');

   var icon10 = {key: 'icon10',
   frames: this.anims.generateFrameNumbers('icons', { start: 9, end: 9, first: 23 }),
   };
   this.anims.create(icon10);
   icon10 = this.add.sprite(920, 200, 'icons');
   icon10.anims.play('icon10');

   var icon11 = {key: 'icon11',
   frames: this.anims.generateFrameNumbers('icons', { start: 10, end: 10, first: 23 }),
   };
   this.anims.create(icon11);
   icon11 = this.add.sprite(512, 500, 'icons');
   icon11.anims.play('icon11');

   var btn_Play = {key: 'btn_Play_Normal',
                frames: this.anims.generateFrameNumbers('btn_Play', { start: 0, end: 0 }),
                  };
   var btn_Play_Highlight = {key: 'btn_Play_Highlight',
               frames: this.anims.generateFrameNumbers('btn_Play', { start: 1, end: 1 }),
                 };
   var btn_Play_Down = {key: 'btn_Play_Down',
               frames: this.anims.generateFrameNumbers('btn_Play', { start: 2, end: 2 }),
                 };
   this.anims.create(btn_Play_Highlight);
   this.anims.create(btn_Play);
   this.anims.create(btn_Play_Down);
   
   var btn_BetUp = {
      key: 'btn_BetUp_Normal',
      frames: this.anims.generateFrameNumbers('btn_BetUp', {
         start: 0,
         end: 0
      }),
   };
   var btn_BetUp_Highlight = {
      key: 'btn_BetUp_Highlight',
      frames: this.anims.generateFrameNumbers('btn_BetUp', {
         start: 1,
         end: 1
      }),
   };
   var btn_BetUp_Down = {
      key: 'btn_BetUp_Down',
      frames: this.anims.generateFrameNumbers('btn_BetUp', {
         start: 2,
         end: 2
      }),
   };
this.anims.create(btn_BetUp);
this.anims.create(btn_BetUp_Highlight);
this.anims.create(btn_BetUp_Down);
var btn_BetDown = {
   key: 'btn_BetDown_Normal',
   frames: this.anims.generateFrameNumbers('btn_BetDown', {
      start: 0,
      end: 0
   }),
};
var btn_BetDown_Highlight = {
   key: 'btn_BetDown_Highlight',
   frames: this.anims.generateFrameNumbers('btn_BetDown', {
      start: 1,
      end: 1
   }),
};
var btn_BetDown_Down = {
   key: 'btn_BetDown_Down',
   frames: this.anims.generateFrameNumbers('btn_BetDown', {
      start: 2,
      end: 2
   }),
};
this.anims.create(btn_BetDown);
this.anims.create(btn_BetDown_Highlight);
this.anims.create(btn_BetDown_Down);

icon1.visible = false;
icon2.visible = false;
icon3.visible = false;
icon4.visible = false;
icon5.visible = false;
icon6.visible = false;
icon7.visible = false;
icon8.visible = false;
icon9.visible = false;
icon10.visible = false;
icon11.visible = false;

symHolder1_1 = this.add.sprite(512, 510, 'icons');
symHolder1_2 = this.add.sprite(512, 520, 'icons');
symHolder1_3 = this.add.sprite(512, 530, 'icons');

symHolder2_1 = this.add.sprite(512, 500, 'icons');
symHolder2_2 = this.add.sprite(512, 502, 'icons');
symHolder2_3 = this.add.sprite(512, 500, 'icons');

symHolder3_1 = this.add.sprite(512, 530, 'icons');
symHolder3_2 = this.add.sprite(512, 503, 'icons');
symHolder3_3 = this.add.sprite(512, 500, 'icons');

symHolder4_1 = this.add.sprite(512, 500, 'icons');
symHolder4_2 = this.add.sprite(512, 500, 'icons');
symHolder4_3 = this.add.sprite(512, 500, 'icons');

symHolder5_1 = this.add.sprite(512, 500, 'icons');
symHolder5_2 = this.add.sprite(512, 500, 'icons');
symHolder5_3 = this.add.sprite(512, 500, 'icons');
//symHolder1_0 = this.add.sprite(512, 500, 'icons');
stopReel_1_Disp = this.add.image(140, 389, 'reelStopBtnDisp').setAlpha(0);
stopReel_2_Disp = this.add.image(325, 389, 'reelStopBtnDisp').setAlpha(0);
stopReel_3_Disp = this.add.image(510, 389, 'reelStopBtnDisp').setAlpha(0);
stopReel_4_Disp = this.add.image(695, 389, 'reelStopBtnDisp').setAlpha(0);
stopReel_5_Disp = this.add.image(885, 389, 'reelStopBtnDisp').setAlpha(0);






btn_Stop_Reel_1 = this.add.image(140, 389, 'reelStopBtn').setInteractive();
btn_Stop_Reel_1.on('pointerup', function (pointer) {
   reel_1.stopped = true;
});
btn_Stop_Reel_1.on('pointerdown', function (pointer) {
   reel_1.stopped = true;
});
btn_Stop_Reel_2 = this.add.image(325, 389, 'reelStopBtn').setInteractive();
btn_Stop_Reel_2.on('pointerup', function (pointer) {
   reel_2.stopped = true;
});
btn_Stop_Reel_2.on('pointerdown', function (pointer) {
   reel_2.stopped = true;
});
btn_Stop_Reel_3 = this.add.image(510, 389, 'reelStopBtn').setInteractive();
btn_Stop_Reel_3.on('pointerup', function (pointer) {
   reel_3.stopped = true;
});
btn_Stop_Reel_3.on('pointerdown', function (pointer) {
   reel_3.stopped = true;
});
btn_Stop_Reel_4 = this.add.image(695, 389, 'reelStopBtn').setInteractive();
btn_Stop_Reel_4.on('pointerup', function (pointer) {
   reel_4.stopped = true;
});
btn_Stop_Reel_4.on('pointerdown', function (pointer) {
   reel_4.stopped = true;
});
btn_Stop_Reel_5 = this.add.image(885, 389, 'reelStopBtn').setInteractive();
btn_Stop_Reel_5.on('pointerup', function (pointer) {
   reel_5.stopped = true;
});
btn_Stop_Reel_5.on('pointerdown', function (pointer) {
   reel_5.stopped = true;
});


/////-----------Touch to Stop Button Flash----------------///////////
this.tweens.add({
   targets: [stopReel_1_Disp, stopReel_2_Disp, stopReel_3_Disp, stopReel_4_Disp, stopReel_5_Disp],
   alpha: {
      value: 1,
      duration: 200,
      ease: 'Bounce.easeInOut'
   },
   yoyo: true,
   loop: 2,
   delay: function (i, total, target) {
      return i * 100;
   }
});


///OVERLAY//////////////////////////////////////////////////////////////
this.overlay = this.add.image(512, 384, 'ovr_MainScreen');
/////////////////////////////////////////////////////////////////////////

//////////////------------------Line Boxes-----------------------//////////////////////////

lineBox1 = this.add.image(reel_1.topSymbolPos[0], reel_1.topSymbolPos[1], 'line1').setAlpha(0);
lineBox2 = this.add.image(reel_2.topSymbolPos[0], reel_2.topSymbolPos[1], 'line1').setAlpha(0);
lineBox3 = this.add.image(reel_3.topSymbolPos[0], reel_3.topSymbolPos[1], 'line1').setAlpha(0);
lineBox4 = this.add.image(reel_4.topSymbolPos[0], reel_4.topSymbolPos[1], 'line1').setAlpha(0);
lineBox5 = this.add.image(reel_5.topSymbolPos[0], reel_5.topSymbolPos[1], 'line1').setAlpha(0);

lineBox6 = this.add.image(reel_1.middleSymbolPos[0], reel_1.middleSymbolPos[1], 'line1').setAlpha(0);
lineBox7 = this.add.image(reel_2.middleSymbolPos[0], reel_2.middleSymbolPos[1], 'line1').setAlpha(0);
lineBox8 = this.add.image(reel_3.middleSymbolPos[0], reel_3.middleSymbolPos[1], 'line1').setAlpha(0);
lineBox9 = this.add.image(reel_4.middleSymbolPos[0], reel_4.middleSymbolPos[1], 'line1').setAlpha(0);
lineBox10 = this.add.image(reel_5.middleSymbolPos[0], reel_5.middleSymbolPos[1], 'line1').setAlpha(0);

lineBox11 = this.add.image(reel_1.bottomSymbolPos[0], reel_1.bottomSymbolPos[1], 'line1').setAlpha(0);
lineBox12 = this.add.image(reel_2.bottomSymbolPos[0], reel_2.bottomSymbolPos[1], 'line1').setAlpha(0);
lineBox13 = this.add.image(reel_3.bottomSymbolPos[0], reel_3.bottomSymbolPos[1], 'line1').setAlpha(0);
lineBox14 = this.add.image(reel_4.bottomSymbolPos[0], reel_4.bottomSymbolPos[1], 'line1').setAlpha(0);
lineBox15 = this.add.image(reel_5.bottomSymbolPos[0], reel_5.bottomSymbolPos[1], 'line1').setAlpha(0);


/////----------Value Holder Style and Positions -------------//////////////////////
costText = this.add.text(670, 740, '', { font: '32px Berkshire Swash', fill: '#fff' });
costText.setOrigin(.5,.5);
wonText = this.add.text(510, 740, '', { font: '32px Berkshire Swash', fill: '#fff' });
wonText.setOrigin(.5,.5);
balanceText = this.add.text(350, 740, '', { font: '32px Berkshire Swash', fill: '#fff' });
balanceText.setOrigin(.5,.5);
infoText = this.add.text(510, 635, '', {
   font: '26px Berkshire Swash',
   fill: '#fff'
});
infoText.setOrigin(.5, .5);


//////----------Buttons----------///////////////
btn_Play = this.add.sprite(937, 699, 'btn_Play').setInteractive();
btn_Play.anims.play('btn_Play_Normal');

    btn_Play.on('pointerup', function (pointer) {
        btn_Play.anims.play('btn_Play_Normal');
        if(allReelsStopped()){
           
        
            play();
        } else{
           reel_1.stopped = true;
           reel_2.stopped = true;
           reel_3.stopped = true;
           reel_4.stopped = true;
           reel_5.stopped = true;
           console.log('reels force stop');           
        }
    });
    btn_Play.on('pointerdown', function (pointer){
        btn_Play.anims.play('btn_Play_Down');
    });

btn_BetDown = this.add.sprite(800, 750, 'btn_BetDown').setInteractive();
btn_BetDown.anims.play('btn_BetDown_Normal');
btn_BetDown.on('pointerup', function (pointer) {
   if (denom > 1){
      denom--;
      playCost = denom * paylines;
            
   } 
   btn_BetDown.anims.play('btn_BetDown_Normal');
});
btn_BetDown.on('pointerdown', function (pointer){
   btn_BetDown.anims.play('btn_BetDown_Down');
});

btn_BetUp = this.add.sprite(800, 699, 'btn_BetUp').setInteractive();
btn_BetUp.anims.play('btn_BetUp_Normal');
btn_BetUp.on('pointerup', function (pointer) {
   if (playCost < balance ) {
      denom++;
      playCost = denom * paylines;
      
   }
   btn_BetUp.anims.play('btn_BetUp_Normal');
});
btn_BetUp.on('pointerdown', function (pointer) {
   btn_BetUp.anims.play('btn_BetUp_Down');
});

symWin1_1 = this.add.sprite(reel_1.topSymbolPos[0], reel_1.topSymbolPos[1], 'anim_1').setAlpha(0);
symWin1_2 = this.add.sprite(reel_1.middleSymbolPos[0], reel_1.middleSymbolPos[1], 'anim_1').setAlpha(0);
symWin1_3 = this.add.sprite(reel_1.bottomSymbolPos[0], reel_1.bottomSymbolPos[1], 'anim_1').setAlpha(0);

symWin2_1 = this.add.sprite(reel_2.topSymbolPos[0], reel_2.topSymbolPos[1], 'anim_1').setAlpha(0);
symWin2_2 = this.add.sprite(reel_2.middleSymbolPos[0], reel_2.middleSymbolPos[1], 'anim_1').setAlpha(0);
symWin2_3 = this.add.sprite(reel_2.bottomSymbolPos[0], reel_2.bottomSymbolPos[1], 'anim_1').setAlpha(0);

symWin3_1 = this.add.sprite(reel_3.topSymbolPos[0], reel_3.topSymbolPos[1], 'anim_1').setAlpha(0);
symWin3_2 = this.add.sprite(reel_3.middleSymbolPos[0], reel_3.middleSymbolPos[1], 'anim_1').setAlpha(0);
symWin3_3 = this.add.sprite(reel_3.bottomSymbolPos[0], reel_3.bottomSymbolPos[1], 'anim_1').setAlpha(0);

symWin4_1 = this.add.sprite(reel_4.topSymbolPos[0], reel_4.topSymbolPos[1], 'anim_1').setAlpha(0);
symWin4_2 = this.add.sprite(reel_4.middleSymbolPos[0], reel_4.middleSymbolPos[1], 'anim_1').setAlpha(0);
symWin4_3 = this.add.sprite(reel_4.bottomSymbolPos[0], reel_4.bottomSymbolPos[1], 'anim_1').setAlpha(0);

symWin5_1 = this.add.sprite(reel_5.topSymbolPos[0], reel_5.topSymbolPos[1], 'anim_1').setAlpha(0);
symWin5_2 = this.add.sprite(reel_5.middleSymbolPos[0], reel_5.middleSymbolPos[1], 'anim_1').setAlpha(0);
symWin5_3 = this.add.sprite(reel_5.bottomSymbolPos[0], reel_5.bottomSymbolPos[1], 'anim_1').setAlpha(0);



//////////////--------------------END OF BUTONS-----------------------//////////////////////

    this.anims.create({key: 'anim_1',
      frames: [
                   { key: 'anim_Win_1', frame: 0 },
                   { key: 'anim_Win_1', frame: 1 },
                   { key: 'anim_Win_1', frame: 2 },
                   { key: 'anim_Win_1', frame: 3 },
                   { key: 'anim_Win_1', frame: 4 },
                   { key: 'anim_Win_1', frame: 5 },
                   { key: 'anim_Win_1', frame: 6 },
                   { key: 'anim_Win_1', frame: 7 },
                   { key: 'anim_Win_1', frame: 8 },
                   { key: 'anim_Win_1', frame: 9 },
                   { key: 'anim_Win_1', frame: 10 },
                   { key: 'anim_Win_1', frame: 11 },
                   { key: 'anim_Win_1', frame: 12 },
                   { key: 'anim_Win_1', frame: 13 },
                   { key: 'anim_Win_1', frame: 14 },
                   { key: 'anim_Win_1', frame: 15 },
                   { key: 'anim_Win_1', frame: 16 },
                   { key: 'anim_Win_1', frame: 17 },
                   { key: 'anim_Win_1', frame: 18 },
                   { key: 'anim_Win_1', frame: 19 },
                   { key: 'anim_Win_1', frame: 20 },
                   { key: 'anim_Win_1', frame: 21 },
                   { key: 'anim_Win_1', frame: 22 },
                   { key: 'anim_Win_1', frame: 23 },
                   { key: 'anim_Win_1', frame: 24 },
                   { key: 'anim_Win_1', frame: 25 },
                   { key: 'anim_Win_1', frame: 26 },
      ],
   frameRate: 19,
      repeat: 0,
   });

   this.anims.create({key: 'anim_2',
      frames: [
                   { key: 'anim_Win_2', frame: 0 },
                   { key: 'anim_Win_2', frame: 1 },
                   { key: 'anim_Win_2', frame: 2 },
                   { key: 'anim_Win_2', frame: 3 },
                   { key: 'anim_Win_2', frame: 4 },
                   { key: 'anim_Win_2', frame: 5 },
                   { key: 'anim_Win_2', frame: 6 },
                   { key: 'anim_Win_2', frame: 7 },
                   { key: 'anim_Win_2', frame: 8 },
                   { key: 'anim_Win_2', frame: 9 },
                   { key: 'anim_Win_2', frame: 10 },
                   { key: 'anim_Win_2', frame: 11 },
                   { key: 'anim_Win_2', frame: 12 },
                   { key: 'anim_Win_2', frame: 13 },
                   { key: 'anim_Win_2', frame: 14 },
                   { key: 'anim_Win_2', frame: 15 },
                   { key: 'anim_Win_2', frame: 16 },
                   { key: 'anim_Win_2', frame: 17 },
                   { key: 'anim_Win_2', frame: 18 },
                   { key: 'anim_Win_2', frame: 19 },
                   { key: 'anim_Win_2', frame: 20 },
                   { key: 'anim_Win_2', frame: 21 },
                   { key: 'anim_Win_2', frame: 22 },
                   { key: 'anim_Win_2', frame: 23 },
                   { key: 'anim_Win_2', frame: 24 },
                   { key: 'anim_Win_2', frame: 25 },
                   { key: 'anim_Win_2', frame: 26 },
      ],
   frameRate: 19,
      repeat: 0,
   });
   this.anims.create({key: 'anim_3',
      frames: [
                   { key: 'anim_Win_3', frame: 0 },
                   { key: 'anim_Win_3', frame: 1 },
                   { key: 'anim_Win_3', frame: 2 },
                   { key: 'anim_Win_3', frame: 3 },
                   { key: 'anim_Win_3', frame: 4 },
                   { key: 'anim_Win_3', frame: 5 },
                   { key: 'anim_Win_3', frame: 6 },
                   { key: 'anim_Win_3', frame: 7 },
                   { key: 'anim_Win_3', frame: 8 },
                   { key: 'anim_Win_3', frame: 9 },
                   { key: 'anim_Win_3', frame: 10 },
                   { key: 'anim_Win_3', frame: 11 },
                   { key: 'anim_Win_3', frame: 12 },
                   { key: 'anim_Win_3', frame: 13 },
                   { key: 'anim_Win_3', frame: 14 },
                   { key: 'anim_Win_3', frame: 15 },
                   { key: 'anim_Win_3', frame: 16 },
                   { key: 'anim_Win_3', frame: 17 },
                   { key: 'anim_Win_3', frame: 18 },
                   { key: 'anim_Win_3', frame: 19 },
                   { key: 'anim_Win_3', frame: 20 },
                   { key: 'anim_Win_3', frame: 21 },
                   { key: 'anim_Win_3', frame: 22 },
                   { key: 'anim_Win_3', frame: 23 },
                   { key: 'anim_Win_3', frame: 24 },
                   { key: 'anim_Win_3', frame: 25 },
                   { key: 'anim_Win_3', frame: 26 },
                   { key: 'anim_Win_3', frame: 25 },
      ],
   frameRate: 19,
      repeat: 0,
   });
   this.anims.create({key: 'anim_4',
      frames: [
                   { key: 'anim_Win_4', frame: 0 },
                   { key: 'anim_Win_4', frame: 1 },
                   { key: 'anim_Win_4', frame: 2 },
                   { key: 'anim_Win_4', frame: 3 },
                   { key: 'anim_Win_4', frame: 4 },
                   { key: 'anim_Win_4', frame: 5 },
                   { key: 'anim_Win_4', frame: 6 },
                   { key: 'anim_Win_4', frame: 7 },
                   { key: 'anim_Win_4', frame: 8 },
                   { key: 'anim_Win_4', frame: 9 },
                   { key: 'anim_Win_4', frame: 10 },
                   { key: 'anim_Win_4', frame: 11 },
                   { key: 'anim_Win_4', frame: 12 },
                   { key: 'anim_Win_4', frame: 13 },
                   { key: 'anim_Win_4', frame: 14 },
                   { key: 'anim_Win_4', frame: 15 },
                   { key: 'anim_Win_4', frame: 16 },
                   { key: 'anim_Win_4', frame: 17 },
                   { key: 'anim_Win_4', frame: 18 },
                   { key: 'anim_Win_4', frame: 19 },
                   { key: 'anim_Win_4', frame: 20 },
                   { key: 'anim_Win_4', frame: 21 },
                   { key: 'anim_Win_4', frame: 22 },
                   { key: 'anim_Win_4', frame: 23 },
                   { key: 'anim_Win_4', frame: 24 },
                   { key: 'anim_Win_4', frame: 25 },
                   { key: 'anim_Win_4', frame: 26 },
                   { key: 'anim_Win_4', frame: 25 },
                   { key: 'anim_Win_4', frame: 24 },
      ],
   frameRate: 19,
      repeat: 0,
   });
   this.anims.create({key: 'anim_5',
      frames: [
                   { key: 'anim_Win_5', frame: 0 },
                   { key: 'anim_Win_5', frame: 1 },
                   { key: 'anim_Win_5', frame: 2 },
                   { key: 'anim_Win_5', frame: 3 },
                   { key: 'anim_Win_5', frame: 4 },
                   { key: 'anim_Win_5', frame: 5 },
                   { key: 'anim_Win_5', frame: 6 },
                   { key: 'anim_Win_5', frame: 7 },
                   { key: 'anim_Win_5', frame: 8 },
                   { key: 'anim_Win_5', frame: 9 },
                   { key: 'anim_Win_5', frame: 10 },
                   { key: 'anim_Win_5', frame: 11 },
                   { key: 'anim_Win_5', frame: 12 },
                   { key: 'anim_Win_5', frame: 13 },
                   { key: 'anim_Win_5', frame: 14 },
                   { key: 'anim_Win_5', frame: 15 },
                   { key: 'anim_Win_5', frame: 16 },
                   { key: 'anim_Win_5', frame: 17 },
                   { key: 'anim_Win_5', frame: 18 },
                   { key: 'anim_Win_5', frame: 19 },
                   { key: 'anim_Win_5', frame: 20 },
                   { key: 'anim_Win_5', frame: 21 },
                   { key: 'anim_Win_5', frame: 22 },
                   { key: 'anim_Win_5', frame: 23 },
                   { key: 'anim_Win_5', frame: 24 },
                   { key: 'anim_Win_5', frame: 25 },
                   { key: 'anim_Win_5', frame: 26 },
      ],
   frameRate: 19,
      repeat: 0,
   });
   this.anims.create({key: 'anim_6',
      frames: [
                   { key: 'anim_Win_6', frame: 0 },
                   { key: 'anim_Win_6', frame: 1 },
                   { key: 'anim_Win_6', frame: 2 },
                   { key: 'anim_Win_6', frame: 3 },
                   { key: 'anim_Win_6', frame: 4 },
                   { key: 'anim_Win_6', frame: 5 },
                   { key: 'anim_Win_6', frame: 6 },
                   { key: 'anim_Win_6', frame: 7 },
                   { key: 'anim_Win_6', frame: 8 },
                   { key: 'anim_Win_6', frame: 9 },
                   { key: 'anim_Win_6', frame: 10 },
                   { key: 'anim_Win_6', frame: 11 },
                   { key: 'anim_Win_6', frame: 12 },
                   { key: 'anim_Win_6', frame: 13 },
                   { key: 'anim_Win_6', frame: 14 },
                   { key: 'anim_Win_6', frame: 15 },
                   { key: 'anim_Win_6', frame: 16 },
                   { key: 'anim_Win_6', frame: 17 },
                   { key: 'anim_Win_6', frame: 18 },
                   { key: 'anim_Win_6', frame: 19 },
                   { key: 'anim_Win_6', frame: 20 },
                   { key: 'anim_Win_6', frame: 21 },
                   { key: 'anim_Win_6', frame: 22 },
                   { key: 'anim_Win_6', frame: 23 },
                   { key: 'anim_Win_6', frame: 24 },
                   { key: 'anim_Win_6', frame: 25 },
                   { key: 'anim_Win_6', frame: 26 },
      ],
   frameRate: 19,
      repeat: 0,
   });

   this.anims.create({key: 'anim_7',
      frames: [
                   { key: 'anim_Win_7', frame: 0 },
                   { key: 'anim_Win_7', frame: 1 },
                   { key: 'anim_Win_7', frame: 2 },
                   { key: 'anim_Win_7', frame: 3 },
                   { key: 'anim_Win_7', frame: 4 },
                   { key: 'anim_Win_7', frame: 5 },
                   { key: 'anim_Win_7', frame: 6 },
                   { key: 'anim_Win_7', frame: 7 },
                   { key: 'anim_Win_7', frame: 8 },
                   { key: 'anim_Win_7', frame: 9 },
                   { key: 'anim_Win_7', frame: 10 },
                   { key: 'anim_Win_7', frame: 11 },
                   { key: 'anim_Win_7', frame: 12 },
                   { key: 'anim_Win_7', frame: 13 },
                   { key: 'anim_Win_7', frame: 14 },
                   { key: 'anim_Win_7', frame: 15 },
                   { key: 'anim_Win_7', frame: 16 },
                   { key: 'anim_Win_7', frame: 17 },
                   { key: 'anim_Win_7', frame: 18 },
                   { key: 'anim_Win_7', frame: 19 },
                   { key: 'anim_Win_7', frame: 20 },
                   { key: 'anim_Win_7', frame: 21 },
                   { key: 'anim_Win_7', frame: 22 },
                   { key: 'anim_Win_7', frame: 23 },
                   { key: 'anim_Win_7', frame: 24 },
                   { key: 'anim_Win_7', frame: 25 },
                   { key: 'anim_Win_7', frame: 26 },
      ],
   frameRate: 19,
      repeat: 0,
   });
   this.anims.create({key: 'anim_8',
      frames: [
                   { key: 'anim_Win_8', frame: 0 },
                   { key: 'anim_Win_8', frame: 1 },
                   { key: 'anim_Win_8', frame: 2 },
                   { key: 'anim_Win_8', frame: 3 },
                   { key: 'anim_Win_8', frame: 4 },
                   { key: 'anim_Win_8', frame: 5 },
                   { key: 'anim_Win_8', frame: 6 },
                   { key: 'anim_Win_8', frame: 7 },
                   { key: 'anim_Win_8', frame: 8 },
                   { key: 'anim_Win_8', frame: 9 },
                   { key: 'anim_Win_8', frame: 10 },
                   { key: 'anim_Win_8', frame: 11 },
                   { key: 'anim_Win_8', frame: 12 },
                   { key: 'anim_Win_8', frame: 13 },
                   { key: 'anim_Win_8', frame: 14 },
                   { key: 'anim_Win_8', frame: 15 },
                   { key: 'anim_Win_8', frame: 16 },
                   { key: 'anim_Win_8', frame: 17 },
                   { key: 'anim_Win_8', frame: 18 },
                   { key: 'anim_Win_8', frame: 19 },
                   { key: 'anim_Win_8', frame: 20 },
                   { key: 'anim_Win_8', frame: 21 },
                   { key: 'anim_Win_8', frame: 22 },
                   { key: 'anim_Win_8', frame: 23 },
                   { key: 'anim_Win_8', frame: 24 },
                   { key: 'anim_Win_8', frame: 25 },
                   { key: 'anim_Win_8', frame: 26 },
      ],
   frameRate: 19,
      repeat: 0,
   });
   this.anims.create({key: 'anim_9',
      frames: [
                   { key: 'anim_Win_9', frame: 0 },
                   { key: 'anim_Win_9', frame: 1 },
                   { key: 'anim_Win_9', frame: 2 },
                   { key: 'anim_Win_9', frame: 3 },
                   { key: 'anim_Win_9', frame: 4 },
                   { key: 'anim_Win_9', frame: 5 },
                   { key: 'anim_Win_9', frame: 6 },
                   { key: 'anim_Win_9', frame: 7 },
                   { key: 'anim_Win_9', frame: 8 },
                   { key: 'anim_Win_9', frame: 9 },
                   { key: 'anim_Win_9', frame: 10 },
                   { key: 'anim_Win_9', frame: 11 },
                   { key: 'anim_Win_9', frame: 12 },
                   { key: 'anim_Win_9', frame: 13 },
                   { key: 'anim_Win_9', frame: 14 },
                   { key: 'anim_Win_9', frame: 15 },
                   { key: 'anim_Win_9', frame: 16 },
                   { key: 'anim_Win_9', frame: 17 },
                   { key: 'anim_Win_9', frame: 18 },
                   { key: 'anim_Win_9', frame: 19 },
                   { key: 'anim_Win_9', frame: 20 },
                   { key: 'anim_Win_9', frame: 21 },
                   { key: 'anim_Win_9', frame: 22 },
                   { key: 'anim_Win_9', frame: 23 },
                   { key: 'anim_Win_9', frame: 24 },
                   { key: 'anim_Win_9', frame: 25 },
                   { key: 'anim_Win_9', frame: 26 },
      ],
   frameRate: 19,
      repeat: 0,
   });
   this.anims.create({key: 'anim_10',
      frames: [
                   { key: 'anim_Win_10', frame: 0 },
                   { key: 'anim_Win_10', frame: 1 },
                   { key: 'anim_Win_10', frame: 2 },
                   { key: 'anim_Win_10', frame: 3 },
                   { key: 'anim_Win_10', frame: 4 },
                   { key: 'anim_Win_10', frame: 5 },
                   { key: 'anim_Win_10', frame: 6 },
                   { key: 'anim_Win_10', frame: 7 },
                   { key: 'anim_Win_10', frame: 8 },
                   { key: 'anim_Win_10', frame: 9 },
                   { key: 'anim_Win_10', frame: 10 },
                   { key: 'anim_Win_10', frame: 11 },
                   { key: 'anim_Win_10', frame: 12 },
                   { key: 'anim_Win_10', frame: 13 },
                   { key: 'anim_Win_10', frame: 14 },
                   { key: 'anim_Win_10', frame: 15 },
                   { key: 'anim_Win_10', frame: 16 },
                   { key: 'anim_Win_10', frame: 17 },
                   { key: 'anim_Win_10', frame: 18 },
                   { key: 'anim_Win_10', frame: 19 },
                   { key: 'anim_Win_10', frame: 20 },
                   { key: 'anim_Win_10', frame: 21 },
                   { key: 'anim_Win_10', frame: 22 },
                   { key: 'anim_Win_10', frame: 23 },
                   { key: 'anim_Win_10', frame: 24 },
                   { key: 'anim_Win_10', frame: 25 },
                   { key: 'anim_Win_10', frame: 26 },
      ],
   frameRate: 19,
      repeat: 0,
   });
this.anims.create({key: 'anim_11',
      frames: [
                   { key: 'anim_Win_11', frame: 0 },
                   { key: 'anim_Win_11', frame: 1 },
                   { key: 'anim_Win_11', frame: 2 },
                   { key: 'anim_Win_11', frame: 3 },
                   { key: 'anim_Win_11', frame: 4 },
                   { key: 'anim_Win_11', frame: 5 },
                   { key: 'anim_Win_11', frame: 6 },
                   { key: 'anim_Win_11', frame: 7 },
                   { key: 'anim_Win_11', frame: 8 },
                   { key: 'anim_Win_11', frame: 9 },
                   { key: 'anim_Win_11', frame: 10 },
                   { key: 'anim_Win_11', frame: 11 },
                   { key: 'anim_Win_11', frame: 12 },
                   { key: 'anim_Win_11', frame: 13 },
                   { key: 'anim_Win_11', frame: 14 },
                   { key: 'anim_Win_11', frame: 15 },
                   { key: 'anim_Win_11', frame: 16 },
                   { key: 'anim_Win_11', frame: 17 },
                   { key: 'anim_Win_11', frame: 18 },
                   { key: 'anim_Win_11', frame: 19 },
                   { key: 'anim_Win_11', frame: 20 },
                   { key: 'anim_Win_11', frame: 21 },
                   { key: 'anim_Win_11', frame: 22 },
                   { key: 'anim_Win_11', frame: 23 },
                   { key: 'anim_Win_11', frame: 24 },
                   { key: 'anim_Win_11', frame: 25 },
                   { key: 'anim_Win_11', frame: 26 },
      ],
   frameRate: 19,
      repeat: 0,
   });

    this.anims.create({key: 'spin',
                 frames: [
                   { key: 'anim_Magician', frame: 0 },
                   { key: 'anim_Magician', frame: 1 },
                   { key: 'anim_Magician', frame: 2 },
                   { key: 'anim_Magician', frame: 3 },
                   { key: 'anim_Magician', frame: 4 },
                   { key: 'anim_Magician', frame: 5 },
                   { key: 'anim_Magician', frame: 6 },
                   { key: 'anim_Magician', frame: 7 },
                   { key: 'anim_Magician', frame: 8 },
                   { key: 'anim_Magician', frame: 9 },
                   { key: 'anim_Magician', frame: 10 },
                   { key: 'anim_Magician', frame: 11 },
                   { key: 'anim_Magician', frame: 12 },
                   { key: 'anim_Magician', frame: 13 },
                   { key: 'anim_Magician', frame: 14 },
                   { key: 'anim_Magician', frame: 15 },
                   { key: 'anim_Magician', frame: 16 },
                   { key: 'anim_Magician', frame: 17 },
                   { key: 'anim_Magician', frame: 18 },
                   { key: 'anim_Magician', frame: 19 },
                   { key: 'anim_Magician', frame: 20 },
                   { key: 'anim_Magician', frame: 21 },
                   { key: 'anim_Magician', frame: 22 },
                   { key: 'anim_Magician', frame: 23 },
                   { key: 'anim_Magician', frame: 24 },
                   { key: 'anim_Magician', frame: 25 },
                   { key: 'anim_Magician', frame: 26 },
                   { key: 'anim_Magician', frame: 27 },
                   { key: 'anim_Magician', frame: 28 },
                   { key: 'anim_Magician', frame: 29 },
                   { key: 'anim_Magician', frame: 30 },
                   { key: 'anim_Magician', frame: 31 },
                   { key: 'anim_Magician', frame: 32 },
                   { key: 'anim_Magician', frame: 33 },
                   { key: 'anim_Magician', frame: 34 },
                   { key: 'anim_Magician', frame: 35 },
                   { key: 'anim_Magician', frame: 36 },
                   { key: 'anim_Magician', frame: 37 },
                   { key: 'anim_Magician', frame: 38 },
                   { key: 'anim_Magician', frame: 39 },
                   { key: 'anim_Magician', frame: 40 },
                   { key: 'anim_Magician', frame: 41 },
                   { key: 'anim_Magician', frame: 42 },
                   { key: 'anim_Magician', frame: 43 },
                   { key: 'anim_Magician', frame: 44 },
                   { key: 'anim_Magician', frame: 45 },
                   { key: 'anim_Magician', frame: 46 },
                   { key: 'anim_Magician', frame: 47 },
                   { key: 'anim_Magician', frame: 48 },
                   { key: 'anim_Magician', frame: 49 },
                   { key: 'anim_Magician', frame: 50 },
                   { key: 'anim_Magician', frame: 51 },
                   { key: 'anim_Magician', frame: 52 },
                   { key: 'anim_Magician', frame: 53 },
                   { key: 'anim_Magician', frame: 54 },
                   { key: 'anim_Magician', frame: 55 },
                   { key: 'anim_Magician', frame: 56 },
                 ],
                 frameRate: 19,
                 repeat: 0,
                   });

   this.anims.create({key: 'dance',
                frames: [
                  { key: 'anim_Magician', frame: 57 },
                  { key: 'anim_Magician', frame: 58 },
                  { key: 'anim_Magician', frame: 59 },
                  { key: 'anim_Magician', frame: 60 },
                  { key: 'anim_Magician', frame: 61 },
                  { key: 'anim_Magician', frame: 62 },
                  { key: 'anim_Magician', frame: 63 },
                  { key: 'anim_Magician', frame: 64 },
                  { key: 'anim_Magician', frame: 65 },
                  { key: 'anim_Magician', frame: 66 },
                  { key: 'anim_Magician', frame: 67 },
                  { key: 'anim_Magician', frame: 68 },
                  { key: 'anim_Magician', frame: 69 },
                  { key: 'anim_Magician', frame: 70 },
                  { key: 'anim_Magician', frame: 71 },
                  { key: 'anim_Magician', frame: 72 },
                  { key: 'anim_Magician', frame: 73 },
                  { key: 'anim_Magician', frame: 74 },
                  { key: 'anim_Magician', frame: 75 },
                  { key: 'anim_Magician', frame: 76 },
                  { key: 'anim_Magician', frame: 77 },
                  { key: 'anim_Magician', frame: 78 },
                  { key: 'anim_Magician', frame: 79 },
                  { key: 'anim_Magician', frame: 80 },
                  { key: 'anim_Magician', frame: 81 },
                  { key: 'anim_Magician', frame: 82 },
                  { key: 'anim_Magician', frame: 83 },
                  { key: 'anim_Magician', frame: 84 },
                  { key: 'anim_Magician', frame: 85 },
                  { key: 'anim_Magician', frame: 86 },
                  { key: 'anim_Magician', frame: 87 },
                  { key: 'anim_Magician', frame: 88 },
                  { key: 'anim_Magician', frame: 89 },
                ],
                frameRate: 19,
                repeat: 0,
                  });

magician = this.add.sprite(512, 72, 'anim_Magician');





}


function update ()
{
displaySymbolTime();

   ///////////////////////////------Value Holder Text------------////////////  
    this.data.set('balance', '$'+ insertDecimal(balance));
    balanceText.setText([this.data.get('balance')]);

      if (won > 0 && allReelsStopped()) {
            
            wonText.setAlpha(1);
            this.data.set('won', '$' + insertDecimal(won));
            wonText.setText([this.data.get('won')]);
            incrementBalance();
      }else{
         wonText.setAlpha(0);
      }



    this.data.set('cost', '$' + insertDecimal(playCost));
    costText.setText([this.data.get('cost')]);

    /////////////////////////Win Info and Text Cycle Function // Play Animations ///////////////////////////////  
    infoText.setText([this.data.get('infoText')]);

      if (won > 0 && allReelsStopped()) {
         ///---------------counter for cycle timing--------------////
         infoCount++;
         if (infoIterate < payoutArray.length && infoCount == 60 || infoCount == 1 && infoIterate < payoutArray.length) {
            infoCount = 1;
            infoText.setAlpha(1);
            
            magician.anims.play('dance');
            this.data.set('infoText', `$${insertDecimal(payoutArray[infoIterate][0])} on line ${payoutArray[infoIterate][1]} `);
             
            //console.log(infoIterate + 'the count is' + infoCount);
            showLineBoxes(paylineReturn(payoutArray[infoIterate][1]), payoutArray[infoIterate][3], payoutArray[infoIterate][2]);
            
            
            infoIterate++;
         } else if (infoIterate >= payoutArray.length) {
            infoIterate = 0;
            infoCount = 1;
            
         }
      }else{
         ///turn off animations // Line Boxes //text info// counters
         this.data.set('infoText', '');
         infoText.setAlpha(0);
         infoIterate = 0;
         infoCount = 0;
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
      }
    //////////////////////////------END OF VALUE HOLDERS-----------////////////////


}

function custom ()
{
}




function iconReturn(num) {

   switch (num) {
      case 0:

         return 'icon1';
      case 1:


         return 'icon2';
      case 2:

         return 'icon3';
      case 3:

         return 'icon4';
      case 4:

         return 'icon5';
      case 5:

         return 'icon6';
      case 6:

         return 'icon7';
      case 7:

         return 'icon8';
      case 8:

         return 'icon9';
      case 9:

         return 'icon10';
      case 10:

         return 'icon11';
      case 11:

         return 'icon12';
      default:
         //console.log(num);
         return 'icon1';
   }
}

function iconNameReturn(num) {

   switch (num) {
      case 0:
         return 'Magician';
      case 1:
         return 'Hat';
      case 2:

         return 'Crystal Ball';
      case 3:

         return 'Magic Box';
      case 4:

         return 'Knife';
      case 5:

         return 'Ace';
      case 6:

         return 'King';
      case 7:

         return 'Queen';
      case 8:

         return 'Jack';
      case 9:

         return '10';
      case 10:

         return 'Bonus';
      case 11:

         return 'not yet a symbol';
      default:
         //console.log(num);
         return 'not a symbol';
   }
}

function animReturn(num) {

   switch (num) {
      case 0:

         return 'anim_1';
      case 1:

         return 'anim_2';
      case 2:

         return 'anim_3';
      case 3:

         return 'anim_4';
      case 4:

         return 'anim_5';
      case 5:

         return 'anim_6';
      case 6:

         return 'anim_7';
      case 7:

         return 'anim_8';
      case 8:

         return 'anim_9';
      case 9:

         return 'anim_10';
      case 10:

         return 'anim_11';
      case 11:

         return 'anim_12';
      default:
         //console.log(num);
         return 'anim_12';
   }
}

function iconNameReturn(num) {

   switch (num) {
      case 0:
         return 'Magician';
      case 1:
         return 'Hat';
      case 2:

         return 'Crystal Ball';
      case 3:

         return 'Magic Box';
      case 4:

         return 'Knife';
      case 5:

         return 'Ace';
      case 6:

         return 'King';
      case 7:

         return 'Queen';
      case 8:

         return 'Jack';
      case 9:

         return '10';
      case 10:

         return 'Bonus';
      case 11:

         return 'not yet a symbol';
      default:
         //console.log(num);
         return 'not a symbol';
   }
}


function paylineReturn(num) {

   switch (num) {
      case 0:
         return payline1;
      case 1:
         return payline1;
      case 2:
         return payline2;
      case 3:
         return payline3;
      case 4:
         return payline4;
      case 5:
         return payline5;
      case 6:
         return payline6;
      case 7:
         return payline7;
      case 8:
         return payline8;
      case 9:
         return payline9;
      case 10:
         return payline10;
      case 11:
         return payline11;
      case 12:
         return payline12;
      case 13:
         return payline13;
      case 14:
         return payline14;
      case 15:
         return payline15;
      case 16:
         return payline16;
      case 17:
         return payline17;
      case 18:
         return payline18;
      case 19:
         return payline19;
      case 20:
         return payline20;
      case 21:
         return payline21;
      case 22:
         return payline22;
      case 23:
         return payline23;
      case 24:
         return payline24;
      case 25:
         return payline25;
      default:
         //console.log(num);
         return 'not a line';
   }
}

function lineReturn(payline) {

   switch (payline) {
      case 0:
         return 'not a payline';
      case payline1:
         return 0X12ff00;
      case payline2:
         return 0Xfffc00;
      case payline3:
         return 0Xff0000;
      case payline4:
         return 0Xc000ff;
      case payline5:
         return 0X00fff6;
      case payline6:
         return 0Xffc000;
      case payline7:
         return 0Xff00f0;
      case payline8:
         return 0X0072ff;
      case payline9:
         return 0Xbaff00;
      case payline10:
         return 0Xffd200;
      case payline11:
         return 0X00ffba;
      case payline12:
         return 0X0096ff;
      case payline13:
         return 0Xff8383;
      case payline14:
         return 0X009163;
      case payline15:
         return 0Xfeff98;
      case payline16:
         return 0X8a9bff;
      case payline17:
         return 0X9e0000;
      case payline18:
         return 0X9c4200;
      case payline19:
         return 0X81009d;
      case payline20:
         return 0Xc9c9c9;
      case payline21:
         return 0X00ce91;
      case payline22:
         return 0Xc48100;
      case payline23:
         return 0X00299f;
      case payline24:
         return 0X00c1ba;
      case payline25:
         return 0Xc7c500;
      default:
         //console.log(num);
         return 'not a payline';
   }
}


// function resize (width, height)
// {
//     if (width === undefined) { width = this.sys.game.config.width; }
//     if (height === undefined) { height = this.sys.game.config.height; }
//
//     this.cameras.resize(width, height);
//
//     this.bg.setSize(width, height);
//     this.logo.setPosition(width / 2, height / 2);
// }
//
// window.addEventListener('resize', function (event) {
//
//     game.resize(window.innerWidth, window.innerHeight);
//
// }, false);
let speed_reel_1 = 0;
function displaySymbolTime() {

reel_1.animate();
reel_2.animate();
reel_3.animate();
reel_4.animate();
reel_5.animate();

  //reel_1.spin();
  // symHolder1_1.anims.play(iconReturn(topSymbol));
 symHolder1_1.x = reel_1.topSymbolPos[0];
 symHolder1_1.y = reel_1.topSymbolPos[1] += speed_reel_1;
  //
  //
  // symHolder1_2.anims.play(iconReturn(middleSymbol));
 symHolder1_2.x = reel_1.middleSymbolPos[0];
 symHolder1_2.y = reel_1.middleSymbolPos[1] += speed_reel_1;
  //
  //
  // symHolder1_3.anims.play(iconReturn(bottomSymbol));
  symHolder1_3.x = reel_1.bottomSymbolPos[0];
  symHolder1_3.y = reel_1.bottomSymbolPos[1] += speed_reel_1;

  // symHolder1_4 = this.add.sprite(512, 500, 'icons');
//  // symHolder2_0 = this.add.sprite(512, 540, 'icons');

  // symHolder2_1.anims.play(iconReturn(allReels[1][reel_2.spinInfo[1] - 1]));
   symHolder2_1.x = reel_2.topSymbolPos[0];
   symHolder2_1.y = reel_2.topSymbolPos[1];


   //symHolder2_2.anims.play(iconReturn(allReels[1][reel_2.spinInfo[1]]));
   symHolder2_2.x = reel_2.middleSymbolPos[0];
   symHolder2_2.y = reel_2.middleSymbolPos[1];


//   symHolder2_3.anims.play(iconReturn(allReels[1][reel_2.spinInfo[1] + 1]));
   symHolder2_3.x = reel_2.bottomSymbolPos[0];
   symHolder2_3.y = reel_2.bottomSymbolPos[1];
   // symHolder2_4 = this.add.sprite(512, 530, 'icons');

   // symHolder3_0 = this.add.sprite(512, 500, 'icons');

  // symHolder3_1.anims.play(iconReturn(allReels[2][reel_3.spinInfo[1] - 1]));
   symHolder3_1.x = reel_3.topSymbolPos[0];
   symHolder3_1.y = reel_3.topSymbolPos[1];

//   symHolder3_2.anims.play(iconReturn(allReels[2][reel_3.spinInfo[1]]));
   symHolder3_2.x = reel_3.middleSymbolPos[0];
   symHolder3_2.y = reel_3.middleSymbolPos[1];


//   symHolder3_3.anims.play(iconReturn(allReels[2][reel_3.spinInfo[1] + 1]));
   symHolder3_3.x = reel_3.bottomSymbolPos[0];
   symHolder3_3.y = reel_3.bottomSymbolPos[1];
   // symHolder3_4 = this.add.sprite(512, 504, 'icons');

   // symHolder4_0 = this.add.sprite(512, 500, 'icons');

//   symHolder4_1.anims.play(iconReturn(allReels[3][reel_4.spinInfo[1] - 1]));
   symHolder4_1.x = reel_4.topSymbolPos[0];
   symHolder4_1.y = reel_4.topSymbolPos[1];


//   symHolder4_2.anims.play(iconReturn(allReels[3][reel_4.spinInfo[1]]));
   symHolder4_2.x = reel_4.middleSymbolPos[0];
   symHolder4_2.y = reel_4.middleSymbolPos[1];


//   symHolder4_3.anims.play(iconReturn(allReels[3][reel_4.spinInfo[1] + 1]));
   symHolder4_3.x = reel_4.bottomSymbolPos[0];
   symHolder4_3.y = reel_4.bottomSymbolPos[1];
   // symHolder4_4 = this.add.sprite(512, 500, 'icons');

   // symHolder5_0 = this.add.sprite(512, 500, 'icons');

//   symHolder5_1.anims.play(iconReturn(allReels[4][reel_5.spinInfo[1] - 1]));
   symHolder5_1.x = reel_5.topSymbolPos[0];
   symHolder5_1.y = reel_5.topSymbolPos[1];

  // symHolder5_2.anims.play(iconReturn(allReels[4][reel_5.spinInfo[1]]));
   symHolder5_2.x = reel_5.middleSymbolPos[0];
   symHolder5_2.y = reel_5.middleSymbolPos[1];


//   symHolder5_3.anims.play(iconReturn(allReels[4][reel_5.spinInfo[1] + 1]));
   symHolder5_3.x = reel_5.bottomSymbolPos[0];
   symHolder5_3.y = reel_5.bottomSymbolPos[1];
   // symHolder5_4 = this.add.sprite(512, 500, 'icons');



   //let newTop = this.add.sprite(512, 500, 'icons');
   //let newMiddle = this.add.sprite(512, 500, 'icons');
   //let newBottom = this.add.sprite(512, 500, 'icons');

}
