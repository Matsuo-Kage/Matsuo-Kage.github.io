window.onload = function jogo(){
            
    
    var tela = document.getElementById('tela');
    var ctx = tela.getContext("2d");

    //recursos
    var player = new Image()
    player.src = "thief.png"
    var grama = new Image()
    grama.src = "Gramado.png"
    var monstro = new Image()
    monstro.src = "sapo-f.png"

    //objetos
    var sprites = []

    var mundo = {
        img: grama,
        x: 0,
        y: 0,
        width: 3200,
        height: 3200,
        tamX: 3200,
        tamY: 3200
    }
    sprites.push(mundo)

    var char = {
        img: player,
        x: 0,
        y: 0,
        width: 160,
        height: 160,
        tamX: 160,
        tamY: 160,
        vel: 5,
        vida: 10,
        mana: 10,
        stamina: 10,
        dir: 'up'
    }
    sprites.push(char)

    var sapo = {
        img: monstro,
        x: Math.floor(Math.random() * mundo.width) + 1 ,
        y: Math.floor(Math.random() * mundo.height) + 1 ,
        width: 40,
        height: 40,
        tamX: 80,
        tamY: 80,
        vel: 5,
        vida: 10
    }
    sprites.push(sapo)
    
    //centralizar player
    char.x = (mundo.width - char.width)/2
    char.y = (mundo.height - char.height)/2

    var cam = {
        x: 0,
        y: 0,
        width: tela.width,
        height: tela.height,
        leftEdge: function(){
			return this.x + (this.width * 0.25)
		},
		rightEdge: function(){
			return this.x + (this.width * 0.75)
		},
		topEdge: function(){
			return this.y + (this.height * 0.25)
		},
		bottomEdge: function(){
			return this.y + (this.height * 0.75)
		}
    }

    //centralizar cam
    cam.x = (mundo.width - cam.width)/2
    cam.y = (mundo.height - cam.height)/2

    //mover personagem
    var mvLeft = mvRight = mvUp = mvDown = false
    window.addEventListener('keydown',function (e){
        var key = e.keyCode
        switch (key) {
            case 37:
                mvLeft = true;
                break;
            case 39:
                mvRight = true;
                break;
            case 38:
                mvUp = true;
                break;
            case 40:
                mvDown = true;
                break;
        
            default:
                break;
        }
    },false)

    window.addEventListener('keyup',function (e) {
        var key = e.keyCode
        switch (key) {
            case 37:
                mvLeft = false;
                break;
            case 39:
                mvRight = false;
                break;
            case 38:
                mvUp = false;
                break;
            case 40:
                mvDown = false;
                break;
        
            default:
                break;
        }
    },false);

    function loop () {
        window.requestAnimationFrame(loop,tela)
        update()
        render()
    }

    function update() {
        if(mvLeft && !mvRight){
			char.x -= char.vel;
		}
		if(mvRight && !mvLeft){
			char.x += char.vel;
		}
		if(mvUp && !mvDown){
			char.y -= char.vel;
		}
		if(mvDown && !mvUp){
			char.y += char.vel;
		}

        //limite do player
        if(char.x < 0){
			char.x = 0;
		}
		if(char.x + char.width > mundo.width){
			char.x = mundo.width - char.width;
		}
		if(char.y < 0){
			char.y = 0;
		}
		if(char.y + char.height > mundo.height){
			char.y = mundo.height - char.height;
		}
		
		//atualizar a posição da câmera em função do char
		if(char.x < cam.leftEdge()){
			cam.x = char.x - (cam.width * 0.25);
		}
		if(char.x + char.width > cam.rightEdge()){
			cam.x = char.x + char.width - (cam.width * 0.75);
		}
		if(char.y < cam.topEdge()){
			cam.y = char.y - (cam.height * 0.25);
		}
		if(char.y + char.height > cam.bottomEdge()){
			cam.y = char.y + char.height - (cam.height * 0.75);
		}
		
		//limite da câmera
		if(cam.x < 0){
			cam.x = 0;
		}
		if(cam.x + cam.width > mundo.width){
			cam.x = mundo.width - cam.width;
		}
		if(cam.y < 0){
			cam.y = 0;
		}
		if(cam.y + cam.height > mundo.height){
			cam.y = mundo.height - cam.height;
		}
    }
    
    function render() {
        ctx.save()
        ctx.translate(-cam.x,-cam.y)
        for(var i in sprites) {
            var spr = sprites[i]
            ctx.drawImage(spr.img,0,0,spr.width,spr.height,spr.x,spr.y,spr.tamX,spr.tamY)
        }
        ctx.restore()
        
    }

    loop()
}