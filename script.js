function addmateria() {
    var materia = (window.document.getElementById('pt1').value).toLowerCase()
    var codigo = (window.document.getElementById('pt2').value).toLowerCase()
    window.document.getElementById('pt1').value = ''
    window.document.getElementById('pt2').value = ''

    if (codigo.indexOf('m') !== -1) {
        var codsep = codigo.split('m')
        var turno = 'm'
    }
    else if (codigo.indexOf('t') !== -1) {
        var codsep = codigo.split('t')
        var turno = 't'
    }
    else if (codigo.indexOf('n') !== -1) {
        var codsep = codigo.split('n')
        var turno = 'n'
    }
    else {
        alert('Turno inválido. Digite um código horário válido. O código precisa ter as letras: M, T ou N. Exemplo de código horário: 26t45')
    }

    var dias = codsep[0]
    var horas = codsep[1]
    var pos = ""
    
    
    if (dias.indexOf('2') !== -1) {
        pos += "a"
    }
    if (dias.indexOf('3') !== -1) {
        pos += "b"
    }
    if (dias.indexOf('4') !== -1) {
        pos += "c"
    }
    if (dias.indexOf('5') !== -1) {
        pos += "d"
    }
    if (dias.indexOf('6') !== -1) {
        pos += "e"
    }
    if (dias.indexOf('7') !== -1) {
        pos += "f"
    }
    if (dias.indexOf('1') !== -1) {
        alert('Dia inválido. Digite um código horário válido. Os números antes da letra precisam ser de 2 até 7. Exemplo de código horário: 234t45')
    }
    if (dias.indexOf('7') !== -1) {
        alert('Dia inválido. Digite um código horário válido. Os números antes da letra precisam ser de 2 até 7. Exemplo de código horário: 234t45')
    }

    poss = ""

    if (turno == "m") {
        if (horas.indexOf('12') !== -1) {
            poss += "1"
        }
        if (horas.indexOf('34') !== -1) {
            poss += "2"
        }
    }
    if (turno == "t") {
        if (horas.indexOf('23') !== -1) {
            poss += "4"
        }
        if (horas.indexOf('45') !== -1) {
            poss += "5"
        }
    }
    if (turno == "n") {
        if (horas.indexOf('23') !== -1) {
            poss += "7"
        } 
    }
    
    switch (pos.length) {
        case 1:
            mat1 = pos[0]+poss[0]
            
            var um = document.getElementById(mat1)
            um.style.backgroundColor = "#090979"
            um.style.borderRadius = "24px"
            um.style.color = "#fff"
            um.style.lineHeight = "65px"
            um.innerText = materia
            break;
        case 2:
            mat1 = pos[0]+poss[0]
            mat2 = pos[1]+poss[0]
            
            var um = document.getElementById(mat1)
            um.style.backgroundColor = "#090979"
            um.style.borderRadius = "24px"
            um.style.color = "#fff"
            um.style.lineHeight = "65px"
            um.innerText = materia

            var dois = document.getElementById(mat2)
            dois.style.backgroundColor = "#090979"
            dois.style.borderRadius = "24px"
            dois.style.color = "#fff"
            dois.style.lineHeight = "65px"
            dois.innerText = materia
            break;
        case 3:
            mat1 = pos[0]+poss[0]
            mat2 = pos[1]+poss[0]
            mat3 = pos[2]+poss[0]
            
            var um = document.getElementById(mat1)
            um.style.backgroundColor = "#090979"
            um.style.borderRadius = "24px"
            um.style.color = "#fff"
            um.style.lineHeight = "65px"
            um.innerText = materia

            var dois = document.getElementById(mat2)
            dois.style.backgroundColor = "#090979"
            dois.style.borderRadius = "24px"
            dois.style.color = "#fff"
            dois.style.lineHeight = "65px"
            dois.innerText = materia

            var tres = document.getElementById(mat3)
            tres.style.backgroundColor = "#090979"
            tres.style.borderRadius = "24px"
            tres.style.color = "#fff"
            tres.style.lineHeight = "65px"
            tres.innerText = materia
            break;
        case 4:
            mat1 = pos[0]+poss[0]
            mat2 = pos[1]+poss[0]
            mat3 = pos[2]+poss[0]
            mat4 = pos[3]+poss[0]
            
            var um = document.getElementById(mat1)
            um.style.backgroundColor = "#090979"
            um.style.borderRadius = "24px"
            um.style.color = "#fff"
            um.style.lineHeight = "65px"
            um.innerText = materia

            var dois = document.getElementById(mat2)
            dois.style.backgroundColor = "#090979"
            dois.style.borderRadius = "24px"
            dois.style.color = "#fff"
            dois.style.lineHeight = "65px"
            dois.innerText = materia

            var tres = document.getElementById(mat3)
            tres.style.backgroundColor = "#090979"
            tres.style.borderRadius = "24px"
            tres.style.color = "#fff"
            tres.style.lineHeight = "65px"
            tres.innerText = materia

            var quatro = document.getElementById(mat4)
            quatro.style.backgroundColor = "#090979"
            quatro.style.borderRadius = "24px"
            quatro.style.color = "#fff"
            quatro.style.lineHeight = "65px"
            quatro.innerText = materia
            break;
        default:
            break;
    }
    }
    
/*var dois = document.getElementById('')
                dois.style.backgroundColor = "#090979"
                dois.style.borderRadius = "24px"
                dois.style.color = "#fff"
                dois.style.lineHeight = "65px"
                dois.innerText = materia */ 
