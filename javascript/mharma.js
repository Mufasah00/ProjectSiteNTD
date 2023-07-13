var botao = document.getElementsByTagName('button')[0]


// listener
$(document).on('click', '.select-armas', function(e){ 
    if ($(this).attr('id') == 'select1') {
        var conteudo = `
        <div id="conteudo-do-swal">
                <h1 id="h1-do-swal">Greatsword</h1>
                <span id="nome-da-arma-swal">Masterizada</span>
                <span id="nivel-masterizacao-swal"><i class="fa-solid fa-star" style="color: #34455c;"></i><i class="fa-solid fa-star" style="color: #34455c;"></i><i class="fa-solid fa-star" style="color: #34455c;"></i></span>

                <div id="texto">
                    <p>
                        A grande espada é para pessoas que gostam de tomar seu tempo para cada golpe e, em seguida, causar uma quantidade insana de dano quando acerta.
                    </p>
                   
                    <p>
                        Apesar de ter ganhado novos movimentos especiais, como a possibilidade de fazer combos rápidos, ainda é uma arma relativamente lenta e bem difícil de usar.
                    </p>

                    <div id="area-build-armas">
                        <span style="display: block; text-align: center; color: #32f168;">Build Recomendada</span>
                        <table id="swal-table">
                            <thead>
                                <tr>
                                    <th>arma</th>
                                    <th>cabeça</th>
                                    <th>peito</th>
                                    <th>braço</th>
                                    <th>cintura</th>
                                    <th>perna</th>
                                    <th>talisman</th>
                                </tr>
                            </thead>

                            <tr>
                                <td><img src="imagens/MH/greatsword.png"/></td>
                                <td><img src="imagens/MH/armor/cabeça.jpg"></td>
                                <td><img src="imagens/MH/armor/peito.jpg"></td>
                                <td><img src="imagens/MH/armor/braco.jpg"></td>
                                <td><img src="imagens/MH/armor/cintura.jpg"></td>
                                <td><img src="imagens/MH/armor/perna.jpg"></td>
                                <td><img src="imagens/MH/armor/talisman.jpg"></td>
                            </tr>

                            <tr>
                                <td style="margin-top: -50px;"><span class="li-swal-span">azure blaze greatsword</span></td>
                                <td><span class="li-swal-span">lunagaron helm</span></td>
                                <td><span class="li-swal-span">flaming espinas muscle</span></td>
                                <td><span class="li-swal-span">risen mizuha sleeves</span></td>
                                <td><span class="li-swal-span">onmyo ateobi</span></td>
                                <td><span class="li-swal-span">onmyo sashiko</span></td>
                                <td><span class="li-swal-span">divine talisman</span></td>
                            </tr>

                        </table>
                    </div>
                </div>
            </div>

        `
        setarArma(conteudo)
    }else if($(this).attr('id') == 'select2') {
        var conteudo = `
        <div id="conteudo-do-swal">
        <h1 id="h1-do-swal">Longsword</h1>
        <span id="nome-da-arma-swal">Masterizada</span>
        <span id="nivel-masterizacao-swal"><i class="fa-solid fa-star" style="color: yellow;"></i><i class="fa-solid fa-star" style="color: #34455c;"></i><i class="fa-solid fa-star" style="color: #34455c;"></i></span>

        <div id="texto">
            <p>
                A espada longa possui movimento flexível, com grande potencial de combinação.
            </p>
           
            <p>
                Apesar de ter uma ofensiva muito alta, ser fácil de aprender a utilização dos combos e golpes variados, ainda assim é uma arma que tenho dificuldade por se tratar de uma arma full counter. Então ela engana nesse ponto, tem que ficar esperto.
            </p>

            <div id="area-build-armas">
                <span style="display: block; text-align: center; color: #32f168;">Build Recomendada</span>
                <table id="swal-table">
                    <thead>
                        <tr>
                            <th>arma</th>
                            <th>cabeça</th>
                            <th>peito</th>
                            <th>braço</th>
                            <th>cintura</th>
                            <th>perna</th>
                            <th>talisman</th>
                        </tr>
                    </thead>

                    <tr>
                        <td><img src="imagens/MH/longsword.png"/></td>
                        <td><img src="imagens/MH/armor/cabeça.jpg"></td>
                        <td><img src="imagens/MH/armor/peito.jpg"></td>
                        <td><img src="imagens/MH/armor/braco.jpg"></td>
                        <td><img src="imagens/MH/armor/cintura.jpg"></td>
                        <td><img src="imagens/MH/armor/perna.jpg"></td>
                        <td><img src="imagens/MH/armor/talisman.jpg"></td>
                    </tr>

                    <tr>
                        <td style="margin-top: -50px;"><span class="li-swal-span">pure sword ichimonji</span></td>
                        <td><span class="li-swal-span">risen kushala glaren</span></td>
                        <td><span class="li-swal-span">risen kaiser mail / rathalos mail</span></td>
                        <td><span class="li-swal-span">barioth vambraces X</span></td>
                        <td><span class="li-swal-span">sinister grudge tassets</span></td>
                        <td><span class="li-swal-span">flaming espinas heel</span></td>
                        <td><span class="li-swal-span">divine talisman</span></td>
                    </tr>

                </table>
            </div>
        </div>
    </div>
        `
        setarArma(conteudo)
    }else if($(this).attr('id') == 'select3') {
        //sword n shield
        var conteudo = `
        <div id="conteudo-do-swal">
        <h1 id="h1-do-swal">sword and shield</h1>
        <span id="nome-da-arma-swal">Masterizada</span>
        <span id="nivel-masterizacao-swal"><i class="fa-solid fa-star" style="color: yellow;"></i><i class="fa-solid fa-star" style="color: yellow;"></i><i class="fa-solid fa-star" style="color: yellow;"></i></span>

        <div id="texto">
            <p>
                A espada e o escudo permitem movimentos rápidos com muito pouca abertura entre os ataques, além de permitir que você use itens enquanto sua arma está em punho.
            </p>
           
            <p>
                Por mais inesperado para mim que possa parecer, foi a arma que eu tive mais afinidade em monster hunter rise, consigo usa-la bem, tenho uma boa taxa de sobrevivência com poucas mortes. E o dano bruto ou elemental aplicado com essa arma, mais dano de nocaute é literalmente o poder de surrar qualquer monstro.
            </p>

            <div id="area-build-armas">
                <span style="display: block; text-align: center; color: #32f168;">Build Recomendada</span>
                <table id="swal-table">
                    <thead>
                        <tr>
                            <th>arma</th>
                            <th>cabeça</th>
                            <th>peito</th>
                            <th>braço</th>
                            <th>cintura</th>
                            <th>perna</th>
                            <th>talisman</th>
                        </tr>
                    </thead>

                    <tr>
                        <td><img src="imagens/MH/shortsword.png"/></td>
                        <td><img src="imagens/MH/armor/cabeça.jpg"></td>
                        <td><img src="imagens/MH/armor/peito.jpg"></td>
                        <td><img src="imagens/MH/armor/braco.jpg"></td>
                        <td><img src="imagens/MH/armor/cintura.jpg"></td>
                        <td><img src="imagens/MH/armor/perna.jpg"></td>
                        <td><img src="imagens/MH/armor/talisman.jpg"></td>
                    </tr>

                    <tr>
                        <td style="margin-top: -50px;"><span class="li-swal-span">scorned magnamalo sword n shield</span></td>
                        <td><span class="li-swal-span">lunagaron helm</span></td>
                        <td><span class="li-swal-span">kaiser mail X</span></td>
                        <td><span class="li-swal-span">barroth vambraces X</span></td>
                        <td><span class="li-swal-span">rathalos coil X</span></td>
                        <td><span class="li-swal-span">lngot greaves X</span></td>
                        <td><span class="li-swal-span">polar night talisman</span></td>
                    </tr>

                    <tr>
                        <td style="margin-top: -50px;"><span class="li-swal-span">phecda's asterism</span></td>
                        <td><span class="li-swal-span">lunagaron helm</span></td>
                        <td><span class="li-swal-span">risen kaiser mail</span></td>
                        <td><span class="li-swal-span">risen mizuha sleeves</span></td>
                        <td><span class="li-swal-span">onmyo ateobi</span></td>
                        <td><span class="li-swal-span">onmyo sashiko</span></td>
                        <td><span class="li-swal-span">divine talisman</span></td>
                    </tr>

                </table>
            </div>
        </div>
    </div>
        `
        setarArma(conteudo)
    }else if($(this).attr('id') == 'select4') {
        //dual blades
        var conteudo = `
        <div id="conteudo-do-swal">
        <h1 id="h1-do-swal">dual blades</h1>
        <span id="nome-da-arma-swal">Masterizada</span>
        <span id="nivel-masterizacao-swal"><i class="fa-solid fa-star" style="color: #34455c;"></i><i class="fa-solid fa-star" style="color: #34455c;"></i><i class="fa-solid fa-star" style="color: #34455c;"></i></span>

        <div id="texto">
            <p>
                Quando alguém pergunta "Você viu aquela incrível combinação de lâminas duplas!?", A resposta é invariavelmente "Não". Isso é o quão rápido eles são.
            </p>
           
            <p>
                Nunca fui muito fã, mas nesse jogo em específico ela está incrível. Incrível a ponto de ser a terceira arma no meu top 3, gostaria muito de investir nela. Combos insanos, muito forte como arma elemental.
            </p>

            <div id="area-build-armas">
                <span style="display: block; text-align: center; color: #32f168;">Build Recomendada</span>
                <table id="swal-table">
                    <thead>
                        <tr>
                            <th>arma</th>
                            <th>cabeça</th>
                            <th>peito</th>
                            <th>braço</th>
                            <th>cintura</th>
                            <th>perna</th>
                            <th>talisman</th>
                        </tr>
                    </thead>

                    <tr>
                        <td><img src="imagens/MH/dualblades.png"/></td>
                        <td><img src="imagens/MH/armor/cabeça.jpg"></td>
                        <td><img src="imagens/MH/armor/peito.jpg"></td>
                        <td><img src="imagens/MH/armor/braco.jpg"></td>
                        <td><img src="imagens/MH/armor/cintura.jpg"></td>
                        <td><img src="imagens/MH/armor/perna.jpg"></td>
                        <td><img src="imagens/MH/armor/talisman.jpg"></td>
                    </tr>

                    <tr>
                        <td style="margin-top: -50px;"><span class="li-swal-span">kaktus ehrgeiz</span></td>
                        <td><span class="li-swal-span">chaotic helm</span></td>
                        <td><span class="li-swal-span">risen kaiser mail</span></td>
                        <td><span class="li-swal-span">golden lunebraces</span></td>
                        <td><span class="li-swal-span">rathalos coil X</span></td>
                        <td><span class="li-swal-span">lngot greaves X</span></td>
                        <td><span class="li-swal-span">divine talisman</span></td>

                    </tr>

                </table>
            </div>
        </div>
    </div>
        `
        setarArma(conteudo)
    }else if($(this).attr('id') == 'select5') {
        //hammer
        var conteudo = `
        <div id="conteudo-do-swal">
        <h1 id="h1-do-swal">hammer</h1>
        <span id="nome-da-arma-swal">Masterizada</span>
        <span id="nivel-masterizacao-swal"><i class="fa-solid fa-star" style="color: yellow;"></i><i class="fa-solid fa-star" style="color: yellow;"></i><i class="fa-solid fa-star" style="color: #34455c;"></i></span>

        <div id="texto">
            <p>
                O martelo é para destruir coisas que não vão te ouvir.
                Oferece uma quantidade surpreendente de mobilidade também!
            </p>
           
            <p>
                Obsceno! é de uma vulgaridade obscena! 
            </p>

            <div id="area-build-armas">
                <span style="display: block; text-align: center; color: #32f168;">Build Recomendada</span>
                <table id="swal-table">
                    <thead>
                        <tr>
                            <th>arma</th>
                            <th>cabeça</th>
                            <th>peito</th>
                            <th>braço</th>
                            <th>cintura</th>
                            <th>perna</th>
                            <th>talisman</th>
                        </tr>
                    </thead>

                    <tr>
                        <td><img src="imagens/MH/hummer.png"/></td>
                        <td><img src="imagens/MH/armor/cabeça.jpg"></td>
                        <td><img src="imagens/MH/armor/peito.jpg"></td>
                        <td><img src="imagens/MH/armor/braco.jpg"></td>
                        <td><img src="imagens/MH/armor/cintura.jpg"></td>
                        <td><img src="imagens/MH/armor/perna.jpg"></td>
                        <td><img src="imagens/MH/armor/talisman.jpg"></td>
                    </tr>

                    <tr>
                        <td style="margin-top: -50px;"><span class="li-swal-span">kaktus unwetter</span></td>
                        <td><span class="li-swal-span">risen kaiser horns</span></td>
                        <td><span class="li-swal-span">risen kaiser mail</span></td>
                        <td><span class="li-swal-span">risen mizuha sleeves</span></td>
                        <td><span class="li-swal-span">sinister grudge tassets</span></td>
                        <td><span class="li-swal-span">flaming espinas heel</span></td>
                        <td><span class="li-swal-span">divine talisman</span></td>

                    </tr>

                </table>
            </div>
        </div>
    </div>
        `
        setarArma(conteudo)
    }else if($(this).attr('id') == 'select6') {
        //horn
        var conteudo = `
        <div id="conteudo-do-swal">
        <h1 id="h1-do-swal">hunting horn</h1>
        <span id="nome-da-arma-swal">Masterizada</span>
        <span id="nivel-masterizacao-swal"><i class="fa-solid fa-star" style="color: #34455c;"></i><i class="fa-solid fa-star" style="color: #34455c;"></i><i class="fa-solid fa-star" style="color: #34455c;"></i></span>

        <div id="texto">
            <p>
                A trompa de caça é uma arma contundente com muito alcance, que permite tocar melodias para aplicar buffs em você e nas pessoas ao seu redor. Bater em algo na cabeça e então tocar um canto fúnebre.
            </p>
           
            <p>
                Nunca usei, mas é irado! 
            </p>

            <div id="area-build-armas">
                <span style="display: block; text-align: center; color: #32f168;">Build Recomendada</span>
                <table id="swal-table">
                    <thead>
                        <tr>
                            <th>arma</th>
                            <th>cabeça</th>
                            <th>peito</th>
                            <th>braço</th>
                            <th>cintura</th>
                            <th>perna</th>
                            <th>talisman</th>
                        </tr>
                    </thead>

                    <tr>
                        <td><img src="imagens/MH/horn.png"/></td>
                        <td><img src="imagens/MH/armor/cabeça.jpg"></td>
                        <td><img src="imagens/MH/armor/peito.jpg"></td>
                        <td><img src="imagens/MH/armor/braco.jpg"></td>
                        <td><img src="imagens/MH/armor/cintura.jpg"></td>
                        <td><img src="imagens/MH/armor/perna.jpg"></td>
                        <td><img src="imagens/MH/armor/talisman.jpg"></td>
                    </tr>

                    <tr>
                        <td style="margin-top: -50px;"><span class="li-swal-span">horn of the indomitable+</span></td>
                        <td><span class="li-swal-span">archfiend armor cerato</span></td>
                        <td><span class="li-swal-span">archfiend armor baulo</span></td>
                        <td><span class="li-swal-span">onmyo tekkou</span></td>
                        <td><span class="li-swal-span">onmyo ateobi</span></td>
                        <td><span class="li-swal-span">storge greaves</span></td>
                        <td><span class="li-swal-span">divine talisman</span></td>

                    </tr>

                </table>
            </div>
        </div>
    </div>
        `
        setarArma(conteudo)
    }else if($(this).attr('id') == 'select7') {
        //lance
        var conteudo = `
        <div id="conteudo-do-swal">
        <h1 id="h1-do-swal">lance</h1>
        <span id="nome-da-arma-swal">Masterizada</span>
        <span id="nivel-masterizacao-swal"><i class="fa-solid fa-star" style="color: #34455c;"></i><i class="fa-solid fa-star" style="color: #34455c;"></i><i class="fa-solid fa-star" style="color: #34455c;"></i></span>

        <div id="texto">
            <p>
            A lança oferece ataques de estocada com muito pouca abertura entre eles, ao mesmo tempo em que ostenta recursos de defesa de primeira classe. Fique atrás de seu escudo e cutuque, cutuque, cutuque!
            </p>
           
            <p>
                Nunca usei, todavia a defesa é boa, tem um ataque irado de investida mas o gameplay é meio simplório d+ 
            </p>

            <div id="area-build-armas">
                <span style="display: block; text-align: center; color: #32f168;">Build Recomendada</span>
                <table id="swal-table">
                    <thead>
                        <tr>
                            <th>arma</th>
                            <th>cabeça</th>
                            <th>peito</th>
                            <th>braço</th>
                            <th>cintura</th>
                            <th>perna</th>
                            <th>talisman</th>
                        </tr>
                    </thead>

                    <tr>
                        <td><img src="imagens/MH/lance.png"/></td>
                        <td><img src="imagens/MH/armor/cabeça.jpg"></td>
                        <td><img src="imagens/MH/armor/peito.jpg"></td>
                        <td><img src="imagens/MH/armor/braco.jpg"></td>
                        <td><img src="imagens/MH/armor/cintura.jpg"></td>
                        <td><img src="imagens/MH/armor/perna.jpg"></td>
                        <td><img src="imagens/MH/armor/talisman.jpg"></td>
                    </tr>

                    <tr>
                        <td style="margin-top: -50px;"><span class="li-swal-span">crimson sharpwing</span></td>
                        <td><span class="li-swal-span">storge helm</span></td>
                        <td><span class="li-swal-span">flaming espinas muscle</span></td>
                        <td><span class="li-swal-span">barroth vambraces X</span></td>
                        <td><span class="li-swal-span">rathalos coil X</span></td>
                        <td><span class="li-swal-span">onmyo sashiko</span></td>
                        <td><span class="li-swal-span">divine talisman</span></td>

                    </tr>

                </table>
            </div>
        </div>
    </div>
        `
        setarArma(conteudo)
    }else if($(this).attr('id') == 'select8') {
        //gunlance
        var conteudo = `
        <div id="conteudo-do-swal">
        <h1 id="h1-do-swal">gunlance</h1>
        <span id="nome-da-arma-swal">Masterizada</span>
        <span id="nivel-masterizacao-swal"><i class="fa-solid fa-star" style="color: yellow;"></i><i class="fa-solid fa-star" style="color: yellow;"></i><i class="fa-solid fa-star" style="color: #34455c;"></i></span>

        <div id="texto">
            <p>
                A gunlance é uma lança que também é uma arma.
                Esfaqueie as coisas e depois as exploda. É muito doce.
            </p>
           
            <p>
                É de uma vulgaridade atroz meus amigos, minha segunda arma no top 3! Obscena e maravilhosa!
            </p>

            <div id="area-build-armas">
                <span style="display: block; text-align: center; color: #32f168;">Build Recomendada</span>
                <table id="swal-table">
                    <thead>
                        <tr>
                            <th>arma</th>
                            <th>cabeça</th>
                            <th>peito</th>
                            <th>braço</th>
                            <th>cintura</th>
                            <th>perna</th>
                            <th>talisman</th>
                        </tr>
                    </thead>

                    <tr>
                        <td><img src="imagens/MH/gunlance.png"/></td>
                        <td><img src="imagens/MH/armor/cabeça.jpg"></td>
                        <td><img src="imagens/MH/armor/peito.jpg"></td>
                        <td><img src="imagens/MH/armor/braco.jpg"></td>
                        <td><img src="imagens/MH/armor/cintura.jpg"></td>
                        <td><img src="imagens/MH/armor/perna.jpg"></td>
                        <td><img src="imagens/MH/armor/talisman.jpg"></td>
                    </tr>

                    <tr>
                        <td style="margin-top: -50px;"><span class="li-swal-span">torci da lavater</span></td>
                        <td><span class="li-swal-span">archfiend armor cerato</span></td>
                        <td><span class="li-swal-span">malzeno mail</span></td>
                        <td><span class="li-swal-span">bazelgeuse braces X</span></td>
                        <td><span class="li-swal-span">bazelgeuse coil X</span></td>
                        <td><span class="li-swal-span">bazelgeuse greaves X</span></td>
                        <td><span class="li-swal-span">divine talisman</span></td>
                    </tr>
                    
                </table>
            </div>
        </div>
    </div>
        `
        setarArma(conteudo)
    }else if($(this).attr('id') == 'select9') {
        //switchaxe
        var conteudo = `
        <div id="conteudo-do-swal">
        <h1 id="h1-do-swal">switch axe</h1>
        <span id="nome-da-arma-swal">Masterizada</span>
        <span id="nivel-masterizacao-swal"><i class="fa-solid fa-star" style="color: #34455c;"></i><i class="fa-solid fa-star" style="color: #34455c;"></i><i class="fa-solid fa-star" style="color: #34455c;"></i></span>

        <div id="texto">
            <p>
                Não consegue escolher entre um machado ou uma espada? Ter ambos!
                O switch axe oferece longo alcance no modo machado e ataques rápidos no modo espada.
            </p>
           
            <p>
                Não gosto
            </p>

            <div id="area-build-armas">
                <span style="display: block; text-align: center; color: #32f168;">Build Recomendada</span>
                <table id="swal-table">
                    <thead>
                        <tr>
                            <th>arma</th>
                            <th>cabeça</th>
                            <th>peito</th>
                            <th>braço</th>
                            <th>cintura</th>
                            <th>perna</th>
                            <th>talisman</th>
                        </tr>
                    </thead>

                    <tr>
                        <td><img src="imagens/MH/slashaxe.png"/></td>
                        <td><img src="imagens/MH/armor/cabeça.jpg"></td>
                        <td><img src="imagens/MH/armor/peito.jpg"></td>
                        <td><img src="imagens/MH/armor/braco.jpg"></td>
                        <td><img src="imagens/MH/armor/cintura.jpg"></td>
                        <td><img src="imagens/MH/armor/perna.jpg"></td>
                        <td><img src="imagens/MH/armor/talisman.jpg"></td>
                    </tr>

                    <tr>
                        <td style="margin-top: -50px;"><span class="li-swal-span">the lightning shredder+</span></td>
                        <td><span class="li-swal-span">almudron helm X</span></td>
                        <td><span class="li-swal-span">archfiend armor baulo</span></td>
                        <td><span class="li-swal-span">charité gloves</span></td>
                        <td><span class="li-swal-span">malzeno coil</span></td>
                        <td><span class="li-swal-span">archfiend armor sceros</span></td>
                        <td><span class="li-swal-span">fatal tempest talisman</span></td>
                    </tr>
                    
                </table>
            </div>
        </div>
    </div>
        `
        setarArma(conteudo)
    }else if($(this).attr('id') == 'select10') {
        //chargeblade
        var conteudo = `
        <div id="conteudo-do-swal">
        <h1 id="h1-do-swal">charge blade</h1>
        <span id="nome-da-arma-swal">Masterizada</span>
        <span id="nivel-masterizacao-swal"><i class="fa-solid fa-star" style="color: #34455c;"></i><i class="fa-solid fa-star" style="color: #34455c;"></i><i class="fa-solid fa-star" style="color: #34455c;"></i></span>

        <div id="texto">
            <p>
                Os eixos de troca são bons e tudo mais, mas que tal uma combinação de espada/machado com EXPLOSÕES?
                A lâmina de carga permite que você armazene energia enquanto estiver no modo espada e, em seguida, use-a para causar grandes danos no modo machado.
            </p>
           
            <p>
                Gosto, mas não tenho técnica o suficinete para masterizar isso.
            </p>

            <div id="area-build-armas">
                <span style="display: block; text-align: center; color: #32f168;">Build Recomendada</span>
                <table id="swal-table">
                    <thead>
                        <tr>
                            <th>arma</th>
                            <th>cabeça</th>
                            <th>peito</th>
                            <th>braço</th>
                            <th>cintura</th>
                            <th>perna</th>
                            <th>talisman</th>
                        </tr>
                    </thead>

                    <tr>
                        <td><img src="imagens/MH/chargeaxe.png"/></td>
                        <td><img src="imagens/MH/armor/cabeça.jpg"></td>
                        <td><img src="imagens/MH/armor/peito.jpg"></td>
                        <td><img src="imagens/MH/armor/braco.jpg"></td>
                        <td><img src="imagens/MH/armor/cintura.jpg"></td>
                        <td><img src="imagens/MH/armor/perna.jpg"></td>
                        <td><img src="imagens/MH/armor/talisman.jpg"></td>
                    </tr>

                    <tr>
                        <td style="margin-top: -50px;"><span class="li-swal-span">dear lutemineva+</span></td>
                        <td><span class="li-swal-span">almudron helm x</span></td>
                        <td><span class="li-swal-span">archfiend armor baulo</span></td>
                        <td><span class="li-swal-span">kushala grip x</span></td>
                        <td><span class="li-swal-span">archfiend armor ura</span></td>
                        <td><span class="li-swal-span">archfiend armor sceros</span></td>
                        <td><span class="li-swal-span">fatal tempest talisman</span></td>
                    </tr>
                    
                </table>
            </div>
        </div>
    </div>
        `
        setarArma(conteudo)
    }else if($(this).attr('id') == 'select11') {
        //insect glaive
        var conteudo = `
        <div id="conteudo-do-swal">
        <h1 id="h1-do-swal">insect glaive</h1>
        <span id="nome-da-arma-swal">Masterizada</span>
        <span id="nivel-masterizacao-swal"><i class="fa-solid fa-star" style="color: #34455c;"></i><i class="fa-solid fa-star" style="color: #34455c;"></i><i class="fa-solid fa-star" style="color: #34455c;"></i></span>

        <div id="texto">
            <p>
            Isso é um passaro? É um avião? Não, é... um caçador empunhando uma glaive inseto!
            Domine os céus com esta arma que também permite que você use Kinsects para extrair extrato de monstros para se fortalecer.
            Vá para o Smithy para comprar e gerenciar Kinsects e criar seu próprio bug de aniquilação!
            </p>
           
            <p>
                Gosto, mas é enjoativo de jogar.
            </p>

            <div id="area-build-armas">
                <span style="display: block; text-align: center; color: #32f168;">Build Recomendada</span>
                <table id="swal-table">
                    <thead>
                        <tr>
                            <th>arma</th>
                            <th>cabeça</th>
                            <th>peito</th>
                            <th>braço</th>
                            <th>cintura</th>
                            <th>perna</th>
                            <th>talisman</th>
                        </tr>
                    </thead>

                    <tr>
                        <td><img src="imagens/MH/insectglaive.png"/></td>
                        <td><img src="imagens/MH/armor/cabeça.jpg"></td>
                        <td><img src="imagens/MH/armor/peito.jpg"></td>
                        <td><img src="imagens/MH/armor/braco.jpg"></td>
                        <td><img src="imagens/MH/armor/cintura.jpg"></td>
                        <td><img src="imagens/MH/armor/perna.jpg"></td>
                        <td><img src="imagens/MH/armor/talisman.jpg"></td>
                    </tr>

                    <tr>
                        <td style="margin-top: -50px;"><span class="li-swal-span">crimson springwing</span></td>
                        <td><span class="li-swal-span">kaiser crown X</span></td>
                        <td><span class="li-swal-span">archfiend armor baulo</span></td>
                        <td><span class="li-swal-span">lunagaron braces</span></td>
                        <td><span class="li-swal-span">rathalos coil x</span></td>
                        <td><span class="li-swal-span">storge greaves</span></td>
                        <td><span class="li-swal-span">fatal tempest talisman</span></td>
                    </tr>
                    
                </table>
            </div>
        </div>
    </div>
        `
        setarArma(conteudo)
    }else if($(this).attr('id') == 'select12') {
        //lightbowgun
        var conteudo = `
        <div id="conteudo-do-swal">
        <h1 id="h1-do-swal">light bowgun</h1>
        <span id="nome-da-arma-swal">Masterizada</span>
        <span id="nivel-masterizacao-swal"><i class="fa-solid fa-star" style="color: #34455c;"></i><i class="fa-solid fa-star" style="color: #34455c;"></i><i class="fa-solid fa-star" style="color: #34455c;"></i></span>

        <div id="texto">
            <p>
            Uma arma que se destaca em combate de longo alcance.
            Cumpre uma variedade de funções, desde barragem de tiro rápido até infligir doenças de status com base no tipo de munição usada.
            </p>
           
            <p>
                Muito maneiro, mas não sei usar direito. Exige um tempo e técnica que eu não tenho.
            </p>

            <div id="area-build-armas">
                <span style="display: block; text-align: center; color: #32f168;">Build Recomendada</span>
                <table id="swal-table">
                    <thead>
                        <tr>
                            <th>arma</th>
                            <th>cabeça</th>
                            <th>peito</th>
                            <th>braço</th>
                            <th>cintura</th>
                            <th>perna</th>
                            <th>talisman</th>
                        </tr>
                    </thead>

                    <tr>
                        <td><img src="imagens/MH/lightbowgun.png"/></td>
                        <td><img src="imagens/MH/armor/cabeça.jpg"></td>
                        <td><img src="imagens/MH/armor/peito.jpg"></td>
                        <td><img src="imagens/MH/armor/braco.jpg"></td>
                        <td><img src="imagens/MH/armor/cintura.jpg"></td>
                        <td><img src="imagens/MH/armor/perna.jpg"></td>
                        <td><img src="imagens/MH/armor/talisman.jpg"></td>
                    </tr>

                    <tr>
                        <td style="margin-top: -50px;"><span class="li-swal-span">rebel stopper</span></td>
                        <td><span class="li-swal-span">archfiend armor carato</span></td>
                        <td><span class="li-swal-span">archfiend armor baulo</span></td>
                        <td><span class="li-swal-span">charité gloves</span></td>
                        <td><span class="li-swal-span">artillery corps tassets</span></td>
                        <td><span class="li-swal-span">storge greaves</span></td>
                        <td><span class="li-swal-span">fatal tempest talisman</span></td>
                    </tr>
                    
                </table>
            </div>
        </div>
    </div>
        `
        setarArma(conteudo)
    }else if($(this).attr('id') == 'select13') {
        //heavybowgun
        var conteudo = `
        <div id="conteudo-do-swal">
        <h1 id="h1-do-swal">heavy bowgun</h1>
        <span id="nome-da-arma-swal">Masterizada</span>
        <span id="nivel-masterizacao-swal"><i class="fa-solid fa-star" style="color: yellow;"></i><i class="fa-solid fa-star" style="color: #34455c;"></i><i class="fa-solid fa-star" style="color: #34455c;"></i></span>

        <div id="texto">
            <p>
            A arma de arco pesada causa muito dano por bala, mas é lenta e leva algum tempo para recarregar.
            Pode ser carregado com munição Wyvernheart ou Wyvernsnipe, dependendo da situação.
            </p>
           
            <p>
                Melhor arma de projétil na minha opinião. É lenta mas é muito satisfatório de usar!!
            </p>

            <div id="area-build-armas">
                <span style="display: block; text-align: center; color: #32f168;">Build Recomendada</span>
                <table id="swal-table">
                    <thead>
                        <tr>
                            <th>arma</th>
                            <th>cabeça</th>
                            <th>peito</th>
                            <th>braço</th>
                            <th>cintura</th>
                            <th>perna</th>
                            <th>talisman</th>
                        </tr>
                    </thead>

                    <tr>
                        <td><img src="imagens/MH/heavybowgun.png"/></td>
                        <td><img src="imagens/MH/armor/cabeça.jpg"></td>
                        <td><img src="imagens/MH/armor/peito.jpg"></td>
                        <td><img src="imagens/MH/armor/braco.jpg"></td>
                        <td><img src="imagens/MH/armor/cintura.jpg"></td>
                        <td><img src="imagens/MH/armor/perna.jpg"></td>
                        <td><img src="imagens/MH/armor/talisman.jpg"></td>
                    </tr>

                    <tr>
                        <td style="margin-top: -50px;"><span class="li-swal-span">grand reversal barrage+</span></td>
                        <td><span class="li-swal-span">rakna helm X</span></td>
                        <td><span class="li-swal-span">barioth mail x</span></td>
                        <td><span class="li-swal-span">barroth vambraces x</span></td>
                        <td><span class="li-swal-span">anjanath coil x</span></td>
                        <td><span class="li-swal-span">malzeno greaves</span></td>
                        <td><span class="li-swal-span">divine talisman</span></td>
                    </tr>
                    
                </table>
            </div>
        </div>
    </div>
        `
        setarArma(conteudo)
    }else if($(this).attr('id') == 'select14') {
        //bow
        var conteudo = `
        <div id="conteudo-do-swal">
        <h1 id="h1-do-swal">bow</h1>
        <span id="nome-da-arma-swal">Masterizada</span>
        <span id="nivel-masterizacao-swal"><i class="fa-solid fa-star" style="color: #34455c;"></i><i class="fa-solid fa-star" style="color: #34455c;"></i><i class="fa-solid fa-star" style="color: #34455c;"></i></span>

        <div id="texto">
            <p>
                O arco permite que você reúna força antes de disparar uma variedade de tiros.
                Ao aplicar um revestimento, você também pode infligir doenças de status.
            </p>
           
            <p>
                Dizem que é bom, mas o estilo de play não funciona comigo. Então pra mim nem fede nem cheira!
            </p>

            <div id="area-build-armas">
                <span style="display: block; text-align: center; color: #32f168;">Build Recomendada</span>
                <table id="swal-table">
                    <thead>
                        <tr>
                            <th>arma</th>
                            <th>cabeça</th>
                            <th>peito</th>
                            <th>braço</th>
                            <th>cintura</th>
                            <th>perna</th>
                            <th>talisman</th>
                        </tr>
                    </thead>

                    <tr>
                        <td><img src="imagens/MH/bow.png"/></td>
                        <td><img src="imagens/MH/armor/cabeça.jpg"></td>
                        <td><img src="imagens/MH/armor/peito.jpg"></td>
                        <td><img src="imagens/MH/armor/braco.jpg"></td>
                        <td><img src="imagens/MH/armor/cintura.jpg"></td>
                        <td><img src="imagens/MH/armor/perna.jpg"></td>
                        <td><img src="imagens/MH/armor/talisman.jpg"></td>
                    </tr>

                    <tr>
                        <td style="margin-top: -50px;"><span class="li-swal-span">lunoloony frostbow</span></td>
                        <td><span class="li-swal-span">storge helm</span></td>
                        <td><span class="li-swal-span">archfiend armor baulo</span></td>
                        <td><span class="li-swal-span">rakna armguards x</span></td>
                        <td><span class="li-swal-span">archfiend armor ura</span></td>
                        <td><span class="li-swal-span">rakna greaves x</span></td>
                        <td><span class="li-swal-span">divine talisman</span></td>
                    </tr>
                    
                </table>
            </div>
        </div>
    </div>
        `
        setarArma(conteudo)
    }
  })

//função que chama o swal
function setarArma(conteudo) {
    Swal.fire({
        title: '',
        icon: '',
        background: '#242234',
        confirmButtonColor: '#644199',
        width: 'fit-content', 
        html:
          conteudo,

        focusConfirm: false,
        confirmButtonText:
          'Close',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
          '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down'
      })
}


//botão de layer armor 
function layerarmor() {
    var botao = document.getElementById('armorbutton')

    Swal.fire({
        title: '',
        icon: '',
        background: '#242234',
        confirmButtonColor: '#644199',
        width: 'fit-content', 
        html:
          `
            <h6 class="eventos-swal">Guia de Eventos</h6> 
            <p class="swal-armadurasp">Armaduras / Armas / Collabs</p>
            <ul class="ul-swal-armaduras">
                <li>devagar se vai ao longe [ <span class="ranking">7★</span> ] = arm.camadas = óculos astutos</li> 
                <li>serpássaros da ruína ? [ <span class="ranking">1★ ]</span> = arm.camadas.gato = collab monster hunter stories</li>
                <li>almudron vítima da moda [ <span class="ranking">7★</span> ] = arm.camadas = couro negro</li>
                <li>lâmina de gelo reluzente [ <span class="ranking">7★</span> ] = arm.camadas = óculos das sombras</li> 
                <li>sol nascete [ <span class="ranking">1★</span> ] = arm.camadas.dog = collab okami amaterasu</li> 
                <li>teste de promoção de sf ultimate = arm.camadas = collab street fighter akuma</li>
                <li>o melhor amigo do blue bomber [ <span class="ranking">6★</span> ] = arm.camadas.dog = collab megaman rush</li>
                <li>cavaleiro de armadura estilhaçada [ <span class="ranking">6★</span> ] = arm.camadas = collab ghost'n goblins arthur</li>
                <li>águas turbulentas [ <span class="ranking">6★</span> ] = arm.camadas = mergulhador</li>
                <li>sósia muito suspeito [ <span class="ranking">7★</span> ] = arm.camadas = sonic</li> 
                <li>tenho que pegar depressa [ <span class="ranking">2★</span> ] = arm.camadas.cat.dog = sonic + tails</li> 
                <li>geladuras [ <span class="ranking">7★</span> ] = arm.camadas = orion/papai noel</li>
                <li>frenesi usj massacre dos arzuros [ <span class="ranking">7★</span> ] = arm.camadas.cat.dog = collab usj gato e cachorro</li>
                <li>usj confronto do santuário [ <span class="ranking">7★</span> ] = arm.camadas = armadura samurai cabelo longo + arco + long sword</li>
                <li>um bom frenesi a moda antiga [ <span class="ranking">7★</span> ] = arm.camadas = origem/armadura clássica</li> 
                <li>zin e yang [ <span class="ranking">7★</span> ] = arm.camadas = traje de gala</li>
                <li>lembranças daquele dia [ <span class="ranking">7★</span> ] = arm.camadas = florecer</li>
            </ul>
            <br>

                <h6 class="eventos-swal">Guia de Armaduras Secretas</h6>
                <p class="swal-armadurasp">Itens especiais do Argosy</p>
            <ul class="ul-swal-armaduras">
                <li>caos {2peças} - cogusombra - ruinas do templo - miaucenários - cogumelo brilhante</li>
                <li>edel s {5peças} - broto astrônomo - ilhas gélidas - miaucenários - planta brilhante</li>
                <li>mosgharl s {5peças} - omegabóbora - selva inundada - miaucenários - seed brilhante</li> 
                <li>putrefato s {5peças} - sudário sinistro - planícies arenosas - miaucenários - ? brilhante</li>
                <li>gelatina s {5peças} - aguótica-viva - cavernas de lava - simbolo dragão brilhante</li>
                <li>melahoa s {5peças} - dosbiscus - argosy - coletando qualquer grão</li> 
                <li>makluva s {5peças} - carpa primaveril - argosy - coletando qualquer grão</li> 
                <li>cravejado s {5peças} - cascosonho - argosy - coletando qualquer cogumelo ou inseto</li>
                <li>aelucanth s {5peças} - besouroleta - argosy - coletando qualquer cogumelo ou inseto</li> 
                <li>skalda s {5peças} - kumori tóxico - argosy - coletando qualquer peixe ou erva</li>
                <li>vaik s {5peças} - kumori tóxico - argosy</li> 
                <li>traje capitão pirata sei la {5peças} - baú do tesouro - argosy - qualquer coleta, basta marcar a carta no gato</li>
            </ul>
          `,

        focusConfirm: false,
        confirmButtonText:
          'Close',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
          '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down'
      })
}