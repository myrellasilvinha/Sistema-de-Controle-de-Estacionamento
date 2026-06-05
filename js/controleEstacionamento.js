//Carrega os veículos que estão cadastrados
function carregarVeiculos() {
    let veiculos = JSON.parse(localStorage.getItem('veiculos')) || [];
    let lista = document.getElementById('listaVeiculos');
    lista.innerHTML = ''; //Limpa a lista antes de exibir novamente

    //Percorre todos os element6os do vetor, listando os veículos e o histórico
    veiculos.forEach(v => {
        //Serve dinamiucamente os elementos HTML, criando um item para cada veículo
        lista.innerHTML += `
        <li>
            <p><strong>Placa:</strong> ${v.placa}</p>
            <p><strong>Modelo:</strong> ${v.modelo}</p>
            <p><strong>Status:</strong> ${v.status}</p>
            <button class="green" onclick="entrada('${v.placa}')">Entrada</button>
            <button class="red" onclick="saida('${v.placa}')">Saída</button>
        </li>`;
    });
}

//Registrando a movimentação no histórico
function registrar(placa, status) {
    let historico = JSON.parse(localStorage.getItem('historico')) || [];
    let agora = new Date(); //Captura data e hora

    //Adiciona o registro ao histórico
    historico.push({
        placa: placa,
        data: agora.toLocaleDateString(),
        hora: agora.toLocaleTimeString(),
        status: status
    });

    //Salva o histórico atualizado
    localStorage.setItem('historico', JSON.stringify(historico));
}

//Entrada de veículos
function entrada(placa) {
    let veiculos = JSON.parse(localStorage.getItem('veiculos')) || [];
    let v = veiculos.find(x => x.placa === placa); //Procura o veículo pela placa

    //Sem duplicar
    if (v.status === 'Dentro') {
        alert('Veículo já está dentro');
        return;
    }

    v.status = 'Dentro'; //Atualiza o status
    registrar(placa, 'Entrada'); //Salva no histórico

    localStorage.setItem('veiculos', JSON.stringify(veiculos)); //Atualiza
    carregarVeiculos();
}

//Saída de veículos
function saida(placa) {
    let veiculos = JSON.parse(localStorage.getItem('veiculos')) || [];
    let v = veiculos.find(x => x.placa === placa); //Procura o veículo pela placa

     //Sem duplicar
    if (v.status === 'Fora') {
        alert('Veículo já está fora');
        return;
    }

    v.status = 'Fora'; //Atualiza o status
    registrar(placa, 'Saída'); //Salva no histórico

    localStorage.setItem('veiculos', JSON.stringify(veiculos)); //Atualiza
    carregarVeiculos();
}
