
var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");

$(document).ready(function(){
	
    console.log("Ta chamando");
    tamanhoFrase();
    marcadores();
    tempoCronometro();
    comparaFrase();
    atualizaPlacar();

     $('.tooltip').tooltipster({
     	 trigger: 'custom'
     });

    $(".botao-reiniciar").on("click", reiniciar);

    $('#usuarios').selectize({
    create: true,
    sortField: 'text'
});

});


function tamanhoFrase () {
var frase = $(".frase").text();
var tamanhoFrase = $("#tamanhoFrase");
var numPalavras = frase.split(" ").length;
tamanhoFrase.text(numPalavras);
}



function tempoCronometro () {

campo.one("focus", function (){
	var tempoRestante = $("#tempo-digitacao").text();
	var contadorID = setInterval(function(){
	tempoRestante--;
	$("#tempo-digitacao").text(tempoRestante);
	if(tempoRestante < 1 ) {
	clearInterval(contadorID);
	finalizaJogo();
	}

	}, 1000);
});

}

function finalizaJogo() {
	campo.attr("disabled", true);
	campo.addClass("campo-desabilitado");
	inserePlacar();
}

function marcadores () {

	campo.on("input", function() {
	var conteudo = campo.val();

	var qtdPalavras = conteudo.split(/\S+/).length - 1;
	$("#contador-palavras").text(qtdPalavras);

	var qtdCaracters = conteudo.length;
	$("#contador-caracteres").text(qtdCaracters);
});

}


function reiniciar () {
	campo.attr("disabled", false);
	campo.val("");
	$("#contador-palavras").text("0");
	$("#contador-caracteres").text("0");
	$("#tempo-digitacao").text(tempoInicial);
	tempoCronometro();
	campo.removeClass("campo-desabilitado");
	campo.removeClass("borda-verde");
	campo.removeClass("borda-vermelha");
}

function comparaFrase () {
campo.on("input", function (){
	var frase = $(".frase").text();
 var digitado = campo.val();
 var compravel = frase.substr(0, digitado.length);

 if (digitado == compravel){
 	campo.addClass("borda-verde");
 	campo.removeClass("borda-vermelha");
 }else {
 	campo.addClass("borda-vermelha");
 	campo.removeClass("borda-verde");
 }

});
}
function atualizaTempoInicial (tempo) {
	tempoInicial = tempo;
	$("#tempo-digitacao").text(tempo);
}