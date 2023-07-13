var leftButton = document.getElementById('botaoleft')
var rightButton = document.getElementById('botaoright')
var leftButton2 = document.getElementById('botaoleft2')
var rightButton2 = document.getElementById('botaoright2')
var leftButton3 = document.getElementById('botaoleft3')
var rightButton3 = document.getElementById('botaoright3')
var infoResult = document.getElementById('res-info')
var imageResult = document.getElementById('res-img')
var infoResult2 = document.getElementById('res-info2')
var imageResult2 = document.getElementById('res-img2')
var infoResult3 = document.getElementById('res-info3')
var imageResult3 = document.getElementById('res-img3')
var lista = []
var nintendo = 22
var steam = 18
var playstation = 32
var current = 1
var current2 = 1 
var current3 = 1
var notasjogos = {
    jogo0:{
        "porcentagem":"100%",
        "horas":"20+", 
        "nota":'<i class="fa-solid fa-medal" style="color: silver;"></i>'
    },     
    jogo1:{
        "porcentagem":"100%",
        "horas":"470+", 
        "nota":'<i class="fa-solid fa-medal" style="color: gold;"></i>'
    },
    jogo2:{
        "porcentagem":"100%",
        "horas":"80+", 
        "nota":'<i class="fa-solid fa-medal" style="color: gold;"></i>'
    },
    jogo3:{
        "porcentagem":"100%",
        "horas":"400+", 
        "nota":'<i class="fa-solid fa-medal" style="color: gold;"></i>'
    },
    jogo4:{
        "porcentagem":"100%",
        "horas":"200+", 
        "nota":'<i class="fa-solid fa-medal" style="color: gold;"></i>'
    },
    jogo5:{
        "porcentagem":"100%",
        "horas":"20+", 
        "nota":'<i class="fa-solid fa-medal" style="color: gold;"></i>'
    },
    jogo6:{
        "porcentagem":"100%",
        "horas":"250+", 
        "nota":'<i class="fa-solid fa-medal" style="color: gold;"></i>'
    },
    jogo7:{
        "porcentagem":"100%",
        "horas":"80+", 
        "nota":'<i class="fa-solid fa-medal" style="color: gold;"></i>'
    },
    jogo8:{
        "porcentagem":"100%",
        "horas":"80+", 
        "nota":'<i class="fa-solid fa-medal" style="color: silver;"></i>'
    },
    jogo9:{
        "porcentagem":"??%",
        "horas":"20+", 
        "nota":'<i class="fa-solid fa-medal" style="color: silver;"></i>'
    },
    jogo10:{
        "porcentagem":"100%",
        "horas":"80+", 
        "nota":'<i class="fa-solid fa-medal" style="color: #c56c2c;"></i>'
    },
    jogo11:{
        "porcentagem":"100%",
        "horas":"200+", 
        "nota":'<i class="fa-solid fa-medal" style="color: gold;"></i>'
    },
    jogo12:{
        "porcentagem":"100%",
        "horas":"150+", 
        "nota":'<i class="fa-solid fa-medal" style="color: silver;"></i>'
    },
    jogo13:{
        "porcentagem":"0%",
        "horas":"0+", 
        "nota":'??'
    },
    jogo14:{
        "porcentagem":"100%",
        "horas":"90+", 
        "nota":'<i class="fa-solid fa-medal" style="color: gold;"></i>'
    },
    jogo15:{
        "porcentagem":"??%",
        "horas":"30+", 
        "nota":'<i class="fa-solid fa-medal" style="color: gold;"></i>'
    },
    jogo16:{
        "porcentagem":"0%",
        "horas":"0+", 
        "nota":'<i class="fa-solid fa-medal" style="color: gold;"></i>'
    },
    jogo17:{
        "porcentagem":"0%",
        "horas":"0+", 
        "nota":'<i class="fa-solid fa-medal" style="color: gold;"></i>'
    },
    jogo18:{
        "porcentagem":"??%",
        "horas":"55+", 
        "nota":'<i class="fa-solid fa-medal" style="color: gold;"></i>'
    },
    jogo19:{
        "porcentagem":"100%",
        "horas":"3+", 
        "nota":'<i class="fa-solid fa-medal" style="color: gold;"></i>'
    }, 
    jogo20:{
        "porcentagem":"??%",
        "horas":"??+", 
        "nota":'<i class="fa-solid fa-medal" style="color: gold;"></i>'
    },
    jogo21:{
        "porcentagem":"??%",
        "horas":"??+", 
        "nota":'<i class="fa-solid fa-medal" style="color: gold;"></i>'
    }
}
var notasjogos2 = {
    sjogo0:{
        "porcentagem":"100%",
        "horas":"0.2+", 
        "nota":'<i class="fa-solid fa-medal" style="color: #c56c2c;"></i>'
    },
    sjogo1:{
        "porcentagem":"100%",
        "horas":"86+", 
        "nota":'<i class="fa-solid fa-medal" style="color: #c56c2c;"></i>'
    },
    sjogo2:{
        "porcentagem":"??%",
        "horas":"4+", 
        "nota":'<i class="fa-solid fa-medal" style="color: gold;"></i>'
    },
    sjogo3:{
        "porcentagem":"0%",
        "horas":"0+", 
        "nota":'??'
    },
    sjogo4:{
        "porcentagem":"100%",
        "horas":"5+", 
        "nota":'<i class="fa-solid fa-medal" style="color: gold;"></i>'
    },
    sjogo5:{
        "porcentagem":"100%",
        "horas":"21+", 
        "nota":'<i class="fa-solid fa-medal" style="color: silver;"></i>'
    },
    sjogo6:{
        "porcentagem":"100%",
        "horas":"19+", 
        "nota":'<i class="fa-solid fa-medal" style="color: silver;"></i>'
    },
    sjogo7:{
        "porcentagem":"0%",
        "horas":"0+", 
        "nota":'??'
    },
    sjogo8:{
        "porcentagem":"100%",
        "horas":"14+", 
        "nota":'<i class="fa-solid fa-medal" style="color: gold;"></i>'
    },
    sjogo9:{
        "porcentagem":"??%",
        "horas":"??+", 
        "nota":'<i class="fa-solid fa-medal" style="color: gold;"></i>'
    },
    sjogo10:{
        "porcentagem":"0%",
        "horas":"0+", 
        "nota":'<i class="fa-solid fa-medal" style="color: gold;"></i>'
    },
    sjogo11:{
        "porcentagem":"0%",
        "horas":"0+", 
        "nota":'<i class="fa-solid fa-medal" style="color: gold;"></i>'
    },
    sjogo12:{
        "porcentagem":"0%",
        "horas":"0+", 
        "nota":'<i class="fa-solid fa-medal" style="color: gold;"></i>'
    },
    sjogo13:{
        "porcentagem":"0%",
        "horas":"0+", 
        "nota":'<i class="fa-solid fa-medal" style="color: silver;"></i>'
    },
    sjogo14:{
        "porcentagem":"0%",
        "horas":"0+", 
        "nota":'<i class="fa-solid fa-medal" style="color: silver;"></i>'
    },
    sjogo15:{
        "porcentagem":"0%",
        "horas":"0+", 
        "nota":'<i class="fa-solid fa-medal" style="color: silver;"></i>'
    },
    sjogo16:{
        "porcentagem":"0%",
        "horas":"0+", 
        "nota":'<i class="fa-solid fa-medal" style="color: silver;"></i>'
    },
    sjogo17:{
        "porcentagem":"0%",
        "horas":"0+", 
        "nota":'<i class="fa-solid fa-medal" style="color: silver;"></i>'
    }
}
var notasjogos3 = {
    pjogo0:{
        "porcentagem":"100%",
        "horas":"119+",
        "nota": '<i class="fa-solid fa-medal" style="color: #c56c2c;"></i>'
    },
    pjogo1:{
        "porcentagem":"80%",
        "horas":"100+",
        "nota": '<i class="fa-solid fa-medal" style="color: #c56c2c;"></i>'
    },
    pjogo2:{
        "porcentagem":"??%",
        "horas":"4+", 
        "nota":'<i class="fa-solid fa-medal" style="color: silver;"></i>'
    },
    pjogo3:{
        "porcentagem":"100%",
        "horas":"515+", 
        "nota":'<i class="fa-solid fa-medal" style="color: gold;"></i>'
    },
    pjogo4:{
        "porcentagem":"100%",
        "horas":"118+", 
        "nota":'<i class="fa-solid fa-medal" style="color: gold;"></i>'
    },
    pjogo5:{
        "porcentagem":"100%",
        "horas":"154+", 
        "nota":'<i class="fa-solid fa-medal" style="color: silver;"></i>'
    },
    pjogo6:{
        "porcentagem":"100%",
        "horas":"236+", 
        "nota":'<i class="fa-solid fa-medal" style="color: gold;"></i>'
    },
    pjogo7:{
        "porcentagem":"100%",
        "horas":"89+", 
        "nota":'<i class="fa-solid fa-medal" style="color: gold;"></i>'
    },
    pjogo8:{
        "porcentagem":"100%",
        "horas":"150+", 
        "nota":'<i class="fa-solid fa-medal" style="color: silver;"></i>'
    },
    pjogo9:{
        "porcentagem":"??%",
        "horas":"71+", 
        "nota":'<i class="fa-solid fa-medal" style="color: silver;"></i>'
    },
    pjogo10:{
        "porcentagem":"100%",
        "horas":"68+", 
        "nota":'<i class="fa-solid fa-medal" style="color: silver;"></i>'
    },
    pjogo11:{
        "porcentagem":"??%",
        "horas":"214+", 
        "nota":'<i class="fa-solid fa-medal" style="color: #c56c2c;"></i>'
    },
    pjogo12:{
        "porcentagem":"??%",
        "horas":"34+", 
        "nota":'<i class="fa-solid fa-medal" style="color: silver;"></i>'
    },
    pjogo13:{
        "porcentagem":"0%",
        "horas":"0.5+", 
        "nota":'<i class="fa-solid fa-medal" style="color: silver;"></i>'
    },
    pjogo14:{
        "porcentagem":"0%",
        "horas":"0+", 
        "nota":'<i class="fa-solid fa-medal" style="color: #c56c2c;"></i>'
    },
    pjogo15:{
        "porcentagem":"??%",
        "horas":"13+", 
        "nota":'<i class="fa-solid fa-medal" style="color: #c56c2c;"></i>'
    },
    pjogo16:{
        "porcentagem":"100%",
        "horas":"242+", 
        "nota":'<i class="fa-solid fa-medal" style="color: gold;"></i>'
    },
    pjogo17:{
        "porcentagem":"90%",
        "horas":"182+", 
        "nota":'<i class="fa-solid fa-medal" style="color: silver;"></i>'
    },
    pjogo18:{
        "porcentagem":"??%",
        "horas":"79+", 
        "nota":'<i class="fa-solid fa-medal" style="color: silver;"></i>'
    },
    pjogo19:{
        "porcentagem":"0%",
        "horas":"0+", 
        "nota":'<i class="fa-solid fa-medal" style="color: #c56c2c;"></i>'
    },
    pjogo20:{
        "porcentagem":"??%",
        "horas":"2+", 
        "nota":'<i class="fa-solid fa-medal" style="color: #c56c2c;"></i>'
    },
    pjogo21:{
        "porcentagem":"??%",
        "horas":"2+", 
        "nota":'<i class="fa-solid fa-medal" style="color: silver;"></i>'
    },
    pjogo22:{
        "porcentagem":"90%",
        "horas":"82+", 
        "nota":'<i class="fa-solid fa-medal" style="color: silver;"></i>'
    },
    pjogo23:{
        "porcentagem":"95%",
        "horas":"40+", 
        "nota":'<i class="fa-solid fa-medal" style="color: gold;"></i>'
    },
    pjogo24:{
        "porcentagem":"??%",
        "horas":"25+", 
        "nota":'<i class="fa-solid fa-medal" style="color: silver;"></i>'
    },
    pjogo25:{
        "porcentagem":"100%",
        "horas":"13+", 
        "nota":'<i class="fa-solid fa-medal" style="color: silver;"></i>'
    },
    pjogo26:{
        "porcentagem":"??%",
        "horas":"??+", 
        "nota":'<i class="fa-solid fa-medal" style="color: #c56c2c;"></i>'
    },
    pjogo27:{
        "porcentagem":"0%",
        "horas":"2+", 
        "nota":'<i class="fa-solid fa-medal" style="color: #c56c2c;"></i>'
    },
    pjogo28:{
        "porcentagem":"0%",
        "horas":"0+", 
        "nota":'<i class="fa-solid fa-medal" style="color: #c56c2c;"></i>'
    },
    pjogo29:{
        "porcentagem":"0%",
        "horas":"0+", 
        "nota":'<i class="fa-solid fa-medal" style="color: #c56c2c;"></i>'
    },
    pjogo30:{
        "porcentagem":"0%",
        "horas":"0+", 
        "nota":'<i class="fa-solid fa-medal" style="color: #c56c2c;"></i>'
    },
    sjogo31:{
        "porcentagem":"0%",
        "horas":"0+", 
        "nota":'<i class="fa-solid fa-medal" style="color: gold;"></i>'
    }
}

function popularNotas(){
    infoResult.innerHTML = `                    
    <ul id="carrosel-ul">
        <li>zerado ${notasjogos["jogo"+current].porcentagem}</li>
        <li>${notasjogos["jogo"+current].horas} horas</li>
        <li>nota: ${notasjogos["jogo"+current].nota}</li>
    </ul>`
}

function popularNotas2(){
    infoResult2.innerHTML = `                    
    <ul id="carrosel-ul">
        <li>zerado ${notasjogos2["sjogo"+current2].porcentagem}</li>
        <li>${notasjogos2["sjogo"+current2].horas} horas</li>
        <li>nota: ${notasjogos2["sjogo"+current2].nota}</li>
    </ul>`
}

function popularNotas3(){
    infoResult3.innerHTML = `                    
    <ul id="carrosel-ul">
        <li>zerado ${notasjogos3["pjogo"+current3].porcentagem}</li>
        <li>${notasjogos3["pjogo"+current3].horas} horas</li>
        <li>nota: ${notasjogos3["pjogo"+current3].nota}</li>
    </ul>`
}

/*
for (var c=1; c<=17; c++){
    lista.push(`imagens/videogames/nintendo/g1.png`)
}
*/

function leftCarrosel() {
    current = (current-1)%nintendo
    if(current < 0){
        current = 21
    }
    $('#imagem-jogo').attr('src', `imagens/videogames/nintendo/g${current}.png`) 
    popularNotas()
    /*
    imageResult.innerHTML = `<img src="imagens/videogames/nintendo/g1.png">`
    infoResult.innerHTML = `                    
    <ul id="carrosel-ul">
    <li class="cem">zerado 100%</li>
    <li>400+ horas</li>
    <li>nota: <i class="fa-solid fa-medal" style="color: gold;"></i></li>
    </ul>` */
}

function leftCarrosel2() {
    current2 = (current2-1)%steam
    if(current2 < 0){
        current2 = 17
    }
    $('#imagem-jogo2').attr('src', `imagens/videogames/steam/g${current2}.png`) 
    popularNotas2()
}

function leftCarrosel3() {
    current3 = (current3-1)%playstation
    if(current3 < 0){
        current3 = 31
    }
    $('#imagem-jogo3').attr('src', `imagens/videogames/playstation/g${current3}.png`) 
    popularNotas3()
}

function rightCarrosel() {
    current = (current+1)%nintendo //conta de 0 a 16, chegando no 16 ele volta pro 0/ O % é resto = um truque
    $('#imagem-jogo').attr('src', `imagens/videogames/nintendo/g${current}.png`) //atribuir o valor da direita no src / pode-se fazer qualquer coisa nisso
    popularNotas()
/*
    imageResult.innerHTML = `<img src="imagens/videogames/nintendo/g17.png">`
    infoResult.innerHTML = `                    
    <ul id="carrosel-ul">
    <li class="nao-jogado">zerado 0%</li>
    <li>0+ horas</li>
    <li>nota: ?</li>
</ul>`*/
}

function rightCarrosel2() {
    current2 = (current2+1)%steam
    $('#imagem-jogo2').attr('src', `imagens/videogames/steam/g${current2}.png`)
    popularNotas2()
}

function rightCarrosel3() {
    current3 = (current3+1)%playstation
    $('#imagem-jogo3').attr('src', `imagens/videogames/playstation/g${current3}.png`)
    popularNotas3()
}

//listener's
$(document).on('click', '#botaoleft', function(e){
    //setar a função de voltar
    leftCarrosel(e.target)
})

$(document).on('click', '#botaoright', function(e){
    //setar a função de ir
    rightCarrosel(e.target)
})

$(document).on('click', '#botaoleft2', function(e){
    //setar a função de voltar
    leftCarrosel2(e.target)
})

$(document).on('click', '#botaoright2', function(e){
    //setar a função de ir
    rightCarrosel2(e.target)
})

$(document).on('click', '#botaoleft3', function(e){
    //setar a função de voltar
    leftCarrosel3(e.target)
})

$(document).on('click', '#botaoright3', function(e){
    //setar a função de ir
    rightCarrosel3(e.target)
})