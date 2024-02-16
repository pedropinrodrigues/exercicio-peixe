var config = {
    type: Phaser.AUTO,
    width: 800,
    length: 600,

    scene: {
        preload: preload,
        create: create,
        update: update 
    }
};

var game = new Phaser.Game(config);

var peixe;

function preload() {
    this.load.image('mar', 'assests/bg_azul-claro.png');
    this.load.image('logo', 'assests/logo-inteli_azul.png');
    this.load.image('peixe', 'assests/peixes/baiacu.png');
}
    
function create() {
    this.add.image(400, 300, 'mar');
    this.add.image(400, 525, 'logo').setScale(0.5);
    peixe = this.add.image(400, 300, 'peixe')
    peixe.setFlip(true, false);
}

function update() {
    peixe.x = this.input.x;
    peixe.y = this.input.y;
}
