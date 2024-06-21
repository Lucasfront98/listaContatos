const form = document.getElementById('formulario');
const nomeContato = document.getElementById('nome-contato')
const numeroContato = document.getElementById('numero-contato')  
const listaContato = []
const contatos = []

    let allcontacts = ' ';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    addContato();
    atualizalista();

})

function  addContato(){

    if(listaContato.includes(nomeContato.value)){
        alert(`O contato ${nomeContato.value} já foi inserido`);
} else{
    listaContato.push(nomeContato.value);
    contatos.push(numeroContato.value);

    let contacts = '<tr>';
    contacts += `<td>${nomeContato.value}</td>`
    contacts += `<td>${numeroContato.value}</td>`
    allcontacts += contacts

}
    nomeContato.value = ' ';
    numeroContato.value = ' ';
}

function atualizalista() {
    const listContacts = document.querySelector('tbody');
    listContacts.innerHTML = allcontacts;
}