function listar() {
    let veiculos = JSON.parse(localStorage.getItem('veiculos')) || [];
    let lista = document.getElementById('lista');
    let editando = localStorage.getItem('indiceVeiculo'); 

    lista.innerHTML = '';

    veiculos.forEach((v, i) => {

        //Se o veículo estiver sendo editado, exibir o formulário
        if (editando == i) {

            lista.innerHTML += `
            <li>
                <p><strong>Placa:</strong><input type="text" id="placa${i}" value="${v.placa}"></p>
                <p><strong>Modelo:</strong><input type="text" id="modelo${i}" value="${v.modelo}"></p>
                <p><strong>Cor:</strong><input type="text" id="cor${i}" value="${v.cor}"></p>
                <p><strong>Proprietário:</strong><input type="text" id="proprietario${i}" value="${v.proprietario}"></p>

                <button class="green" onclick="confirmar(${i})">Salvar</button>
            </li>`;
        } else { //Não muda nada

            lista.innerHTML += `
            <li>
                <p><strong>Placa:</strong> ${v.placa}</p>
                <p><strong>Modelo:</strong> ${v.modelo}</p>
                <p><strong>Cor:</strong> ${v.cor}</p>
                <p><strong>Proprietário:</strong> ${v.proprietario}</p>

                <button onclick="editar(${i})">Editar</button>
                <button class="red" onclick="excluir(${i})">Excluir</button>
            </li>`;
        }
    });
}

function excluir(i) {
    let veiculos = JSON.parse(localStorage.getItem('veiculos')) || [];
    veiculos.splice(i, 1); //Removendo o veículo da posição desejada
    localStorage.setItem('veiculos', JSON.stringify(veiculos));
    listar();
}

function editar(i) {
    localStorage.setItem('indiceVeiculo', i); //Guarda o índice do veículo que será editada
    listar();
}

//Atualiza os dados com os valores dos inputs
function confirmar(i) {

    let veiculos = JSON.parse(localStorage.getItem('veiculos')) || [];

    veiculos[i].placa = document.getElementById(`placa${i}`).value;
    veiculos[i].modelo = document.getElementById(`modelo${i}`).value;
    veiculos[i].cor = document.getElementById(`cor${i}`).value;
    veiculos[i].proprietario = document.getElementById(`proprietario${i}`).value;

    localStorage.setItem('veiculos', JSON.stringify(veiculos));

    localStorage.removeItem('indiceVeiculo');

    listar();

    alert('Alterado com sucesso!');
}
