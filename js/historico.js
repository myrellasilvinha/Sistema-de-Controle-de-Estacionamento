//Resgitro de toda a movimentação
function mostrarHistorico() {
    let historico = JSON.parse(localStorage.getItem('historico')) || [];
    let lista = document.getElementById('historico');

    lista.innerHTML = '';

    //Percorre todos os registros
    historico.forEach(h => {
        lista.innerHTML += `
    <li>
        <p><strong>Placa:</strong> ${h.placa}</p>
        <p><strong>Data:</strong> ${h.data} | <strong>Hora:</strong> ${h.hora}</p>
        <p><strong>Status:</strong> ${h.status}</p>

        <hr class="separador">
    </li>`;
    });
}
