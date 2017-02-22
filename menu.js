var music;
var Menu = {

    preload : function() {
        // Load all the needed resources for the menu.
        game.load.image('menu', 'game_menu.png');
        game.load.audio('intro','bodenstaendig_2000_in_rock_4bit.mp3');
    },

    create: function () {

        // Add menu screen.
        // It will act as a button to start the game.
        music= game.add.audio('intro');
       music.play();
        this.add.button(0, 0, 'menu', this.startGame, this);

    },

    startGame: function () {

        // Change the state to the actual game.
        this.state.start('Game');

    }

};
