function hit() {
    /*var s = 0
    var t = [0,1,2,3,4,5,6]
    for(var s in t){
        s++
        alert(s)
    }*/
    var s = 0
    

    //direção do ataque
    if(bater && char.dir == "left"){
        adaga.spriteY = 3
        adaga.spriteX = adaga.curFrame
        adaga.curFrame++
        if (adaga.curFrame > adaga.numSprites ) {
            adaga.spriteY = 4
            adaga.spriteX = 0
            adaga.curFrame = -1
            bater = false
        }
        render()
    }
    if(bater && char.dir == "right"){
        adaga.spriteY = 1
        adaga.spriteX = adaga.curFrame
        adaga.curFrame++
        if (adaga.spriteX > adaga.numSprites ) {
            adaga.spriteY = 4
            adaga.spriteX = 0
            adaga.curFrame = -1
            bater = false
        }
        render()
    }
    if(bater && char.dir == "up"){
        adaga.spriteY = 0
        adaga.spriteX = adaga.curFrame
        adaga.curFrame++
        if (adaga.spriteX > adaga.numSprites ) {
            adaga.spriteY = 4
            adaga.spriteX = 0
            adaga.curFrame = -1
            bater = false
        }
        render()
    }
    if(bater && char.dir == "down"){
        adaga.spriteY = 2
        adaga.spriteX = adaga.curFrame
        adaga.curFrame++
        if (adaga.spriteX > adaga.numSprites ) {
            adaga.spriteY = 4
            adaga.spriteX = 0
            adaga.curFrame = -1
            bater = false
        }
        render()
    }
}
