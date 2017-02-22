var sprite;
var group;
var cursors;
var timer;
var total=1;
var count=0;
var game_music;
var Game={
preload: function() {

    game.load.image('phaser', 'Untitled-2.png');
    game.load.spritesheet('veggies', 'fruitnveg32wh37.png', 32, 32);
    game.load.audio('intro','bodenstaendig_2000_in_rock_4bit.mp3');

},

create:function() {
    music.stop();
    game_music=game.add.audio('intro');
    game_music.play();
    timer=game.time.create(false);
    timer.loop(1000,updateCounter,this);
        timer.start();


    function updateCounter()
    {
        total++;
        if(total==26)
        {
            
            game_music.stop();
            alert("SORRY!! TIME UP :(");
    game.state.start('Game_Over');
    total = 1;
    }
}

    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.stage.backgroundColor = '#180023';

    sprite = game.add.sprite(32, 200, 'phaser');

    game.physics.arcade.enable(sprite);
    
    group = game.add.physicsGroup();

    for (var i = 0; i < 50; i++)
    {
        var c = group.create(game.rnd.between(100, 770), game.rnd.between(0, 550), 'veggies', game.rnd.between(0, 35));
        c.body.mass = -100;
    }

    for (var i = 0; i < 20; i++)
    {
        var c = group.create(game.rnd.between(100, 770), game.rnd.between(0, 550), 'veggies', 17);
    }

    cursors = game.input.keyboard.createCursorKeys();

    },

update:function() {

      game.add.text(32, 32, "EAT 20 CHILLIES IN 25 SECS", { font: "16px sans-serif", fill: "#FFFFFF"});
    game.debug.text('TIME IN SECONDS: ' + total,32,32);
    game.debug.text('CHILLIES EATEN: ' +count,32,580);
    if (game.physics.arcade.collide(sprite, group, collisionHandler, processHandler, this))
    {
        console.log('boom');
    }

    sprite.body.velocity.x = 0;
    sprite.body.velocity.y = 0;

    if (cursors.left.isDown)
    {
        sprite.body.velocity.x = -200;
    }
    else if (cursors.right.isDown)
    {
        sprite.body.velocity.x = 200;
    }

    if (cursors.up.isDown)
    {
        sprite.body.velocity.y = -200;
    }
    else if (cursors.down.isDown)
    {
        sprite.body.velocity.y = 200;
    }

function processHandler (player, veg) {

    return true;

}

function collisionHandler (player, veg) {

    if (veg.frame == 17)
    {
        veg.kill();
        count++;
       if(count==20)
    {
       game_music.stop();
        alert("CONGRATS!! YOU WON :)");
        game.state.start('Game_Over');
        total=1;
    }

    }

}

},

};