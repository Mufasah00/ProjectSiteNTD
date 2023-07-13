if(!sessionStorage.getItem('nome')){ //! = não, se não existir um cookie de nome = puxar o swal
    Swal.fire({
        title: '<h1 class="silk-h1">please visitor, enter your name</h1>',
        background: '#242234',
        confirmButtonColor: '#644199',
        preConfirm: function(s){ //o preConfirm NECESSITA de um argumento, sendo ele QUALQUER CU porém, isso é algo específico do swal
            setarNome(document.getElementById('input-visitante'))
        },
        html: '<input type="text" id="input-visitante">',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
    })
} else {
    var resultado = document.getElementById("nomevisitante")
    resultado.innerHTML = sessionStorage.getItem('nome');
}

function setarNome(elemento) {
    var nome =  $(elemento).val() // $(e.target).val() ele pega o valor associado ao input e joga na variavel nome
    var resultado = document.getElementById("nomevisitante")
    resultado.innerHTML = nome
    sessionStorage.setItem('nome', nome)
}

$(document).on('keyup', '#input-visitante', function(e){ //o document on é o listener que toda vez que apertar enter invoca a function
    if(e.keyCode == 13){
        setarNome(e.target) //invocar a function setarNome
        Swal.close() //fecha o swal 
    }
})

/*
$(document).on('keyup', '#input-visitante', function(e){
    if(e.keyCode == 13){
        var nome =  $(e.target).val() // $(e.target).val() ele pega o valor associado ao input e joga na variavel nome
        var resultado = document.getElementById("nomevisitante")
        resultado.innerHTML = `${nome}`
    }
})
*/

/*
paradas de cookie
sessionStorage.setItem('nome', nome) //salva a variavel no cookie
sessionStorage.getItem('nome')       //recupera o dado
sessionStorage.removeItem('nome')    //deleta o dado do cookie
*/