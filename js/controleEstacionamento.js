function carregarVeiculos() {
    let veiculos = JSON.parse(localStorage.getItem('veiculos')) || [];
    let lista = document.getElementById('listaVeiculos');
    lista.innerHTML = '';

    veiculos.forEach(v => {
        lista.innerHTML += `
        <li>
            <p><strong>Placa:</strong> ${v.placa}</p>
            <p><strong>Modelo:</strong> ${v.modelo}</p>
            <p><strong>Status:</strong> ${v.status}</p>
            <button onclick="entrada('${v.placa}')">Entrada</button>
            <button onclick="saida('${v.placa}')">Saída</button>
        </li>`;
    });
}

function registrar(placa, status) {
    let historico = JSON.parse(localStorage.getItem('historico')) || [];
    let agora = new Date();

    historico.push({
        placa: placa,
        data: agora.toLocaleDateString(),
        hora: agora.toLocaleTimeString(),
        status: status
    });

    localStorage.setItem('historico', JSON.stringify(historico));
}

function entrada(placa) {
    let veiculos = JSON.parse(localStorage.getItem('veiculos')) || [];
    let v = veiculos.find(x => x.placa === placa);

    if (v.status === 'Dentro') {
        alert('Veículo já está dentro');
        return;
    }

    v.status = 'Dentro';
    registrar(placa, 'Entrada');

    localStorage.setItem('veiculos', JSON.stringify(veiculos));
    carregarVeiculos();
}

function saida(placa) {
    let veiculos = JSON.parse(localStorage.getItem('veiculos')) || [];
    let v = veiculos.find(x => x.placa === placa);

    if (v.status === 'Fora') {
        alert('Veículo já está fora');
        return;
    }

    v.status = 'Fora';
    registrar(placa, 'Saída');

    localStorage.setItem('veiculos', JSON.stringify(veiculos));
    carregarVeiculos();
}