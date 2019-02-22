var game;
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


    this.load.spritesheet('btn_Play','assets/btn_Play.png', { frameWidth: 174,
                                                                      frameHeight: 139,
                                                                    });

    this.load.image('bg_MainScreen', 'assets/bg_MainScreen.png');
    this.load.image('ovr_MainScreen', 'assets/ovr_MainScreen.png');
    this.load.spritesheet('anim_Magician','assets/anim_Magician.png', { frameWidth: 323,
                                                                        frameHeight: 135,
                                                                      });
    this.load.spritesheet('anim_Magician_Blink','assets/anim_Magician_Blink.png', { frameWidth: 323, frameHeight: 135 });
    this.load.spritesheet('anim_Magician_Banner','assets/anim_Magician_Close.png', { frameWidth: 323, frameHeight: 135 });
    this.load.spritesheet('anim_Magician_Knock','assets/anim_Magician_Knock.png', { frameWidth: 323, frameHeight: 135 });
    this.load.spritesheet('anim_MagicPoof','assets/anim_MagicPoof.png', { frameWidth: 204, frameHeight: 204 });
    // this.load.spritesheet('anim_Win_1','assets/anim_Win_1.png', { frameWidth: 184, frameHeight: 160 });
    // this.load.spritesheet('anim_Win_2','assets/anim_Win_2.png', { frameWidth: 184, frameHeight: 160 });
    // this.load.spritesheet('anim_Win_3','assets/anim_Win_3.png', { frameWidth: 184, frameHeight: 160 });
    // this.load.spritesheet('anim_Win_4','assets/anim_Win_4.png', { frameWidth: 184, frameHeight: 160 });
    // this.load.spritesheet('anim_Win_5','assets/anim_Win_5.png', { frameWidth: 184, frameHeight: 160 });
    // this.load.spritesheet('anim_Win_6','assets/anim_Win_6.png', { frameWidth: 184, frameHeight: 160 });
    // this.load.spritesheet('anim_Win_7','assets/anim_Win_7.png', { frameWidth: 184, frameHeight: 160 });
    // this.load.spritesheet('anim_Win_8','assets/anim_Win_8.png', { frameWidth: 184, frameHeight: 160 });
    // this.load.spritesheet('anim_Win_9','assets/anim_Win_9.png', { frameWidth: 184, frameHeight: 160 });
    // this.load.spritesheet('anim_Win_10','assets/anim_Win_10.png', { frameWidth: 184, frameHeight: 160 });
    // this.load.spritesheet('anim_Win_11','assets/anim_Win_11.png', { frameWidth: 184, frameHeight: 160 });
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







//displayReel_1();


///OVERLAY//////////////////////////////////////////////////////////////
this.overlay = this.add.image(512, 384, 'ovr_MainScreen');
/////////////////////////////////////////////////////////////////////////

/////----------Value Holder Style and Positions -------------//////////////////////
costText = this.add.text(670, 740, '', { font: '32px Berkshire Swash', fill: '#fff' });
costText.setOrigin(.5,.5);
wonText = this.add.text(510, 740, '', { font: '32px Berkshire Swash', fill: '#fff' });
wonText.setOrigin(.5,.5);
balanceText = this.add.text(350, 740, '', { font: '32px Berkshire Swash', fill: '#fff' });
balanceText.setOrigin(.5,.5);

//////----------Buttons----------///////////////
btn_Play = this.add.sprite(937, 699, 'btn_Play').setInteractive();
btn_Play.anims.play('btn_Play_Normal');

    btn_Play.on('pointerup', function (pointer) {
        btn_Play.anims.play('btn_Play_Normal');
        magician.anims.play('spin');
            play();
    });
    btn_Play.on('pointerdown', function (pointer){
        btn_Play.anims.play('btn_Play_Down');
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
                 repeat: 2,
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
                frameRate: 10,
                repeat: 1,
                  });

magician = this.add.sprite(512, 72, 'anim_Magician');

}


function update ()
{
displaySymbolTime();


    balanceText.setText([this.data.get('balance')]);
    this.data.set('balance', '$'+ balance);
    balanceText.setText([this.data.get('balance')]);
    this.data.set('won', '$' + won);
    wonText.setText([this.data.get('won')]);
    this.data.set('cost', '$' + playCost);
    costText.setText([this.data.get('cost')]);

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
         return 'icon1'
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
