$(document).ready(function(){

    $('form').on('submit', function(e) {
        e.preventDefault();

        const inputTarefa = $('#tarefa').val();
        const novaTarefa = $(`<li class="listar">${inputTarefa}</li>`);

    $(novaTarefa).appendTo('ul')
    $('#tarefa').val('')

    })

    $('ul').on('click','li',function(){
        $(this).addClass("riscado");
    })




})