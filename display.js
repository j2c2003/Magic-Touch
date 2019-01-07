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
        update: update
    }
};

var game = new Phaser.Game(config);
}

function preload ()
{
    this.load.image('line_2', 'assets/ovr_Line_2.png');



    this.load.image('bg_MainScreen', 'assets/bg_MainScreen.png');
    this.load.image('ovr_MainScreen', 'assets/ovr_MainScreen.png');
    this.load.spritesheet('anim_Magician','assets/anim_Magician.png', { frameWidth: 323,
                                                                        frameHeight: 135,
                                                                      });
    this.load.spritesheet('anim_Magician_Blink','assets/anim_Magician_Blink.png', { frameWidth: 323, frameHeight: 135 });
    this.load.spritesheet('anim_Magician_Banner','assets/anim_Magician_Close.png', { frameWidth: 323, frameHeight: 135 });
    this.load.spritesheet('anim_Magician_Knock','assets/anim_Magician_Knock.png', { frameWidth: 323, frameHeight: 135 });
    this.load.spritesheet('anim_MagicPoof','assets/anim_MagicPoof.png', { frameWidth: 204, frameHeight: 204 });
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

    this.load.spritesheet('icons','assets/ovr_SlotIcons.png', {frameWidth: 184, frameHeight: 160, startFrame: 1, endFrame: 12});
    this.load.spritesheet('icons_Win','assets/ovr_SlotIcons_Win.png', {frameWidth: 184, frameHeight: 160});
}



function create ()
{
  var background = this.add.image(512, 384, 'bg_MainScreen');

  //this.add.image(200, 300, 'icon0');
  //this.add.image(400, 300, 'icon1');
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


line2 = this.add.image(565, 400, 'line_2');
//line2.setDepth(-1);

icon11.visible = true;
icon11.x = reel_1.middleSymbolPos[0];
icon11.y = reel_1.middleSymbolPos[1];

icon3.x = reel_1.bottomSymbolPos[0];
icon3.y = reel_1.bottomSymbolPos[1];

icon1.x = reel_1.topSymbolPos[0];
icon1.y = reel_1.topSymbolPos[1];

///Take Value of ALL REELS ARRAY and Return the opbject
// switch (number) {
//   case 0:
//     return icon1.visible;
//     break;
//   case 1:
//
//     break;
//   case 2:
//
//     break;
//   case 3:
//
//     break;
//   case 4:
//
//     break;
//   case 5:
//
//     break;
//   case 6:
//
//     break;
//   case 7:
//
//     break;
//   case 8:
//
//     break;
//   case 9:
//
//     break;
//   case 10:
//
//     break;
//   case 11:
//
//     break;
//
//   default:
//
// }

///OVERLAY//////////////////////////////////////////////////////////////
var overlay = this.add.image(512, 384, 'ovr_MainScreen');
/////////////////////////////////////////////////////////////////////////

   this.anims.create({key: 'dance',
                frames: [
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
                ],
                franeRate: 15,
                repeat: -1,
                  });
   this.add.sprite(512, 50, 'anim_Magician').play('dance');

}

function update ()
{



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
