function salvar() {
    //Formulario
    let placa = document.getElementById('placa').value;
    let modelo = document.getElementById('modelo').value;
    let cor = document.getElementById('cor').value;
    let proprietario = document.getElementById('proprietario').value;

    let veiculos = JSON.parse(localStorage.getItem('veiculos')) || []; //Busca os veiculos ja registrados,se não tem registro, retorna null

    //Evita repetição de placas
    if (veiculos.find(v => v.placa === placa)) {
        alert('Placa já cadastrada');
        return;
    }

    //Adiciona o novo veículo ao vetor
    veiculos.push({ placa, modelo, cor, proprietario, status: 'Fora' });

    //Salva o vetor com atulização
    localStorage.setItem('veiculos', JSON.stringify(veiculos));
    alert('Veículo cadastrado com sucesso');
}
