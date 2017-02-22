var Game_Over = {

    preload : function() {
        // Here we load all the needed resources for the level.
        // In our case, that's just two squares - one for the snake body and one for the apple.
        game.load.image('gameover', 'game_over.png');
        game.load.audio('end','Funny-game-over-sound.mp3');
    },

    create : function() {

        // Create button to start game similar to the main menu.
        game_music.stop();
        var over=game.add.audio('end');
        over.play();
        this.add.button(0, 0, 'gameover', this.startGame, this);

        // Last Score Info.
        game.add.text(330, 370, "LAST SCORE", { font: "bold 24px sans-serif", fill: "#46c0f9", align: "center"});
        game.add.text(400, 420, count.toString(), { font: "bold 28px sans-serif", fill: "#fff", align: "center" });

    },

    startGame: function () {

        // Change the state to the actual game.
        count=0;
        this.state.start('Game');

    }

};
