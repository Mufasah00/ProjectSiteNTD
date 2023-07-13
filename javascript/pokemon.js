function iv() {
    var botaoiv = document.getElementById("ivdiv");
    if (botaoiv.style.display === "none") {
      botaoiv.style.display = "block";
    } else {
      botaoiv.style.display = "none";
    }
}

function nature() {
    var botaonature = document.getElementById("naturediv");
    if (botaonature.style.display === "none") {
      botaonature.style.display = "block";
    } else {
      botaonature.style.display = "none";
    }
}

function ev() {
    var botaoev = document.getElementById("evtrainingdiv");
    if (botaoev.style.display === "none") {
        botaoev.style.display = "block";
    } else {
        botaoev.style.display = "none";
    }
}





var tabelinha = document.getElementById("tabeladetipos")
var botaoexpandir = document.getElementById("expandirb")

function typexpand() {
    Swal.fire({
        title: `<img class="donna-gif" src="imagens/donna2.gif"/>`,
        icon: '',
        background: '#242234',
        width: '90vw',
        height: '78vh',
        html:
          `
          <div class="tipos">
                <h5 class="tabelaswal">Tabela de Tipagem</h5>

                <table id="tabeladetipo">
                    <thead>
                        <tr>
                            <th>Tipo</th>
                            <th>Forte Contra</th>
                            <th>Fraco Contra</th>
                        </tr>
                    </thead>

                    <tr id="corpotabelatipo">
                        <td style="background: #a8b820; text-shadow: 1px 1px 0px #000;">bug</td>
                        <td>grass, dark, psychic</td>
                        <td>fire, flying, rock</td>
                    </tr>
    
                    <tr id="corpotabelatipo">
                        <td style="background: #705848; text-shadow: 1px 1px 0px #000;">dark</td>
                        <td>ghost, psychic</td>
                        <td>bug, fairy, fighting</td>
                    </tr>
    
                    <tr id="corpotabelatipo">
                        <td style="background: #7038f8; text-shadow: 1px 1px 0px #000;">dragon</td>
                        <td>dragon</td>
                        <td>dragon, fairy, ice</td>
                    </tr>

                    <tr id="corpotabelatipo">
                        <td style="background: #f8d030; text-shadow: 1px 1px 0px #000;">electric</td>
                        <td>flying, water</td>
                        <td>ground</td>
                    </tr>

                    <tr id="corpotabelatipo">
                        <td style="background: #f0b6bc; text-shadow: 1px 1px 0px #000;">fairy</td>
                        <td>fighting, dark, dragon</td>
                        <td>poison, steel</td>
                    </tr>

                    <tr id="corpotabelatipo">
                        <td style="background: #c03028; text-shadow: 1px 1px 0px #000;">fighting</td>
                        <td>dark, ice, normal, rock, steel</td>
                        <td>fairy, flying, psychic</td>
                    </tr>

                    <tr id="corpotabelatipo">
                        <td style="background: #f08030; text-shadow: 1px 1px 0px #000;">fire</td>
                        <td>bug, grass, ice, steel</td>
                        <td>ground, rock, water</td>
                    </tr>

                    <tr id="corpotabelatipo">
                        <td style="background: #a890f0; text-shadow: 1px 1px 0px #000;">flying</td>
                        <td>bug, fighting, grass</td>
                        <td>eletric, ice, rock</td>
                    </tr>

                    <tr id="corpotabelatipo">
                        <td style="background: #705898; text-shadow: 1px 1px 0px #000;">ghost</td>
                        <td>ghost, psychic</td>
                        <td>dark, ghost</td>
                    </tr>

                    <tr id="corpotabelatipo">
                        <td style="background: #78c850; text-shadow: 1px 1px 0px #000;">grass</td>
                        <td>ground, rock, water</td>
                        <td>bug, fire, flying, ice, poison</td>
                    </tr>

                    <tr id="corpotabelatipo">
                        <td style="background: #e0c068; text-shadow: 1px 1px 0px #000;">ground</td>
                        <td>electric, fire, poison, rock, steel</td>
                        <td>grass, ice, water</td>
                    </tr>

                    <tr id="corpotabelatipo">
                        <td style="background: #98d8d8; text-shadow: 1px 1px 0px #000;">ice</td>
                        <td>dragon, flying, grass, ground</td>
                        <td>fighting, fire, rock, steel</td>
                    </tr>

                    <tr id="corpotabelatipo">
                        <td style="background: #a8a878; text-shadow: 1px 1px 0px #000;">normal</td>
                        <td>--</td>
                        <td>fighting</td>
                    </tr>

                    <tr id="corpotabelatipo">
                        <td style="background: #a040a0; text-shadow: 1px 1px 0px #000;">poison</td>
                        <td>fairy, grass</td>
                        <td>ground, psychic</td>
                    </tr>

                    <tr id="corpotabelatipo">
                        <td style="background: #f85888; text-shadow: 1px 1px 0px #000;">psychic</td>
                        <td>fighting, poison</td>
                        <td>bug, dark, ghost</td>
                    </tr>

                    <tr id="corpotabelatipo">
                        <td style="background: #b8a038; text-shadow: 1px 1px 0px #000;">rock</td>
                        <td>bug, fire, flying, ice</td>
                        <td>fighting, grass, ground, steel, water</td>
                    </tr>

                    <tr id="corpotabelatipo">
                        <td style="background: #b8b8d0; text-shadow: 1px 1px 0px #000;">steel</td>
                        <td>fairy, ice, rock</td>
                        <td>fighting, fire, ground</td>
                    </tr>

                    <tr id="corpotabelatipo">
                        <td style="background: #6890f0; text-shadow: 1px 1px 0px #000;">water</td>
                        <td>fire, ground, rock</td>
                        <td>eletric, grass</td>
                    </tr>

                </table>
          `,

        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText:
          'Fechar',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
          '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down'
      })
}