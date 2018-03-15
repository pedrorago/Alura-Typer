$(".botao-frase").click(fraseAleatoria);
$(".botao-frase-id").click(buscaFrase);

function fraseAleatoria () {
	$("#spinner").toggle();
	$.get("http://localhost:3000/frases", trocaFrases).
	fail(function(){
		$(".erro").toggle();
		setTimeout(function(){
			$(".erro").toggle();
		}, 2000);
	}).always(function(){
		$("#spinner").toggle();
	});
}

function trocaFrases (data) {
	var frase = $(".frase");
	var numAleatorio = Math.floor(Math.random() * data.length);
	frase.text(data[numAleatorio].texto);
	tamanhoFrase();
	atualizaTempoInicial(data[numAleatorio].tempo)
}


function buscaFrase () {
	$("#spinner").toggle();
	var fraseId= $("#frase-id").val();
	var dados = { id: fraseId };

	$.get("http://localhost:3000/frases",dados,trocaFrase)
	.fail(function(){
		$(".erro").toggle();
		setTimeout(function(){
			$(".erro").toggle();
		}, 2000);
	})
	.always(function(){
		$("#spinner").toggle();
	});
	
}
function trocaFrase (data) {

var frase = $(".frase");
frase.text(data.texto);
atualizaTempoInicial(data.tempo);
tamanhoFrase();
}