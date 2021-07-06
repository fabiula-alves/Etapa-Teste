//Notificação
$(document).ready(function(){
    $('.notification').popover({
    title: "<p><strong>Novos Oportunidades confira!</strong></p>", 
    content: "Hoje <br>", 
    html: true, placement: "bottom",
    }); 
});

//Tema Claro e Tema Escuro
document.getElementById("cor_escuro").onclick = function(){
  document.body.style.backgroundColor = '#888888';
  document.getElementById('fundo_bread').style.backgroundColor = '#888888';
}

document.getElementById("cor_claro").onclick = function(){
  document.body.style.backgroundColor = '#e5e5e5';
  document.getElementById('fundo_bread').style.backgroundColor = '#e5e5e5';
}

//Reset botão busca
function logReset(event) {
  alert('Busca Não Encontrada');
}

const form = document.getElementById('input_busca');

form.addEventListener('reset', logReset);

//Range - Valores

$(document).ready(function(){
  $("#valor").html($("#customRange2").val());

  $("#customRange2").change(function(){
      $("#valor").html($(this).val());
  });
}); 


