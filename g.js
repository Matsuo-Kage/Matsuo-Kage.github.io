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
    var espada = new Image()
    espada.src = "hit.png"
    var nohitsound = document.createElement('audio')
    nohitsound.src = "nohit.mp3"
    var adagatotalsprite
    var countAnim = 0

    //objetos
    var sprites = []

    var mundo = {
        img: grama,
        x: 0,
        y: 0,
        spriteX: 0,
        spriteY: 0,
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
        spriteX: 0,
        spriteY: 0,
        width: 160,
        height: 160,
        tamX: 160,
        tamY: 160,
        vel: 5,
        dir: 'up'
    }
    sprites.push(char)

    var sapo = {
        img: monstro,
        x: 300,//Math.floor(Math.random() * mundo.width) + 1,
        y: 300,//Math.floor(Math.random() * mundo.height) + 1,
        spriteX: 0,
        spriteY: 0,
        width: 40,
        height: 40,
        tamX: 80,
        tamY: 80,
        vel: 5,
        vida: 10
    }
    sprites.push(sapo)

    var bars = []

    var vida = {
        x: 35,
        y: -30,
        pontos: 100,
        max: 100,
        largura: 8,
        regen: 0.5
    }
    bars.push(vida)

    var magika = {
        x: 35,
        y: -20,
        pontos: 100,
        max: 100,
        largura: 4,
        regen: 1
    }
    bars.push(magika)

    var stamina = {
        x: 35,
        y: -15,
        pontos: 100,
        max: 100,
        largura: 4,
        regen: 3
    }
    bars.push(stamina)


    //golpes
    var attack = []

    var adaga = {
        img: espada,
        x: 1600,
        y: 1600,
        spriteX: 4,
        spriteY: 0,
        width: 160,
        height: 160,
        tamX: 160,
        tamY: 160,
        numSprites: 5
    }
    attack.push(adaga)
    
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
    var mvLeft = mvRight = mvUp = mvDown = mvAtk = false
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
            case 67:
                bater()
                if (stamina.pontos >= 10) {
                    stamina.pontos -= 10
                }
                else 
                    vida.pontos -= 5
                break;
            case 88:
                alert(tempo)
                break;
            case 90:
                vida.pontos += 10
                break;    
        
            default:
                break;
        }
    },false);

    

    

    function loop() {
        window.requestAnimationFrame(loop,tela)
        update()
        render()
    }

    function update() {
        if(mvLeft && !mvRight){
			char.x -= char.vel;
            char.spriteX = 3;
            adaga.spriteY = 1;
		}
		if(mvRight && !mvLeft){
			char.x += char.vel;
            char.spriteX = 1;
            adaga.spriteY = 3;
		}
		if(mvUp && !mvDown){
			char.y -= char.vel;
            char.spriteX = 2;
            adaga.spriteY = 2;
		}
		if(mvDown && !mvUp){
			char.y += char.vel;
            char.spriteX = 0;
            adaga.spriteY = 0;
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

        //lógica das barras
        if (vida.pontos > vida.max) {
            vida.pontos = vida.max  
        }
        else
        if (vida.pontos > 0 && vida.pontos < vida.max) {
            vida.pontos += vida.regen * 0.05
        }
        if (vida.pontos <= 0) {
            alert('game over')
        }
        //magika
        if (magika.pontos > magika.max) {
            magika.pontos = magika.max  
        }
        else
        if (magika.pontos > 0 && magika.pontos < magika.max) {
            magika.pontos += magika.regen * 0.05
        }
        //stamina
        if (stamina.pontos > stamina.max) {
            stamina.pontos = stamina.max  
        }
        else
        if (stamina.pontos > 0 && stamina.pontos < stamina.max) {
            stamina.pontos += stamina.regen * 0.05
        }
        
    }
    
    function render() {
        ctx.save()
        ctx.translate(-cam.x,-cam.y)
        for(var i in sprites) {
            var spr = sprites[i]
            ctx.drawImage(spr.img,spr.spriteX * spr.width,spr.spriteY * spr.height,spr.width,spr.height,spr.x,spr.y,spr.tamX,spr.tamY)
        }
        for(var b in bars) {
            var bar = bars[b]
            if(b == 0){ctx.fillStyle = "#ff0000"}
            else if(b == 1){ctx.fillStyle = "#0000ff"}
            else if(b == 2){ctx.fillStyle = "#00ff00"}
            ctx.fillRect(bar.x + char.x, bar.y + char.y, bar.pontos,bar.largura)
            }
        /*for (var a in attack) {
            var atk = attack[a]
            ctx.drawImage(atk.img, atk.spriteX * atk.width, atk.spriteY * atk.height, atk.height, atk.width, atk.x, atk.y, atk.tamX, atk.tamY)
        }
        if(1 = 1){

        }*/    
        
        
        ctx.restore()
        }
        loop()

        function bater() {
            if (1 == 1) {
            
            }
            nohitsound.play()
            }
        }

    
