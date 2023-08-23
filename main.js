const form = document.getElementById('form');
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarLinha();
})

function adicionarLinha() {
    const nomeContato = document.getElementById('nome-contato');
    const celularContato = document.getElementById('celular-contato');


    let linha = '<tr>';
    linha += `<td>${nomeContato.value}</td>`;
    linha += `<td>${celularContato.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    const inserirAgenda = document.querySelector('tbody');
    inserirAgenda.innerHTML = linhas;

    nomeContato.value = '';
    celularContato.value = '';

    document.getElementById('nome-contato').focus();
}