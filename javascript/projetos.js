var pixel = document.getElementById('pixelart')
var sketch = document.getElementById('sketchbook')
var arte = document.getElementById('art')
var resultado = window.document.querySelector('div#res')

function pa() {
    resultado.innerHTML = `<div id="pixelart">
    <p>
        Galeria com as minhas pixel art mais recentes. Desde estudos variados até algumas 
        tentativas de produzir animações mais básicas e fluídas. Também fiz alguns estudos de design, 
        como os personagens de Chrono Trigger, para melhor entendimento da estrutura e soluções usadas 
        na época.
    </p>

    <div class="row"> 
        <div class="column">
          <img src="imagens/arquivo_pa/pa1.png">
          <img src="imagens/arquivo_pa/pa2.png">
          <img src="imagens/arquivo_pa/pa2a.gif">
          <img src="imagens/arquivo_pa/pa7.png">
        </div>

        <div class="column">
            <img src="imagens/arquivo_pa/pa3.png">
            <img src="imagens/arquivo_pa/pa3a.gif">
            <img src="imagens/arquivo_pa/pa3ab.gif">
            <img src="imagens/arquivo_pa/pa5.png">
        </div>

        <div class="column">
          <img src="imagens/arquivo_pa/pa6.png">
          <img src="imagens/arquivo_pa/pa6a.gif">
          <img src="imagens/arquivo_pa/pa4.png">
          <img src="imagens/arquivo_pa/pa4a.gif">
        </div>  
      </div>

</div>`
}

function sb() {
    resultado.innerHTML = `<div id="sketchbook">
    <p> Sketchbook com ideias de personagens feitos nos últimos meses.
    </p>

    <div class="row"> 
        <div class="column">
          <img src="imagens/arquivo_sb/e10.png">
          <img src="imagens/arquivo_sb/e4.png">
          <img src="imagens/arquivo_sb/e3.png">
          <img src="imagens/arquivo_sb/e1.png">
          <img src="imagens/arquivo_sb/e11.png">
        </div>

        <div class="column">
            <img src="imagens/arquivo_sb/e2.png">
            <img src="imagens/arquivo_sb/e5.png">
            <img src="imagens/arquivo_sb/e7.png">
            <img src="imagens/arquivo_sb/e8.png">
        </div>

        <div class="column">
            <img src="imagens/arquivo_sb/e9.png">
            <img src="imagens/arquivo_sb/e6.png">
        </div>  
      </div>

</div>`
}

function art() {
    resultado.innerHTML = `<div id="art">
    <p> 
        Meus trabalhos mais recentes
    </p>

    <div class="row"> 
        <div class="column">
          <img src="imagens/arquivo_art/a1.png">
          <img src="imagens/arquivo_art/a2.png">
          <img src="imagens/arquivo_art/a3.png">
          <img src="imagens/arquivo_art/a4.png">
          <img src="imagens/arquivo_art/a5.png">
          <img src="imagens/arquivo_art/a16.png">
        </div>

        <div class="column">
            <img src="imagens/arquivo_art/a6.png">
            <img src="imagens/arquivo_art/a7.png">
            <img src="imagens/arquivo_art/a8.png">
            <img src="imagens/arquivo_art/a9.png">
            <img src="imagens/arquivo_art/a10.png">
            <img src="imagens/arquivo_art/a17.png">
        </div>

        <div class="column">
            <img src="imagens/arquivo_art/a11.png">
            <img src="imagens/arquivo_art/a12.png">
            <img src="imagens/arquivo_art/a13.png">
            <img src="imagens/arquivo_art/a14.png">
            <img src="imagens/arquivo_art/a15.png">
            <img src="imagens/arquivo_art/a18.png">
            <img src="imagens/arquivo_art/a19.png">
        </div>  
      </div>

</div>`
}

function gamedev() {
  resultado.innerHTML = `[EM CONSTRUÇÃO]`
}

function p5() {
  resultado.innerHTML = `[EM CONSTRUÇÃO]`
}