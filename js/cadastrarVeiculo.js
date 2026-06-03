function salvar() {
    let placa = document.getElementById('placa').value;
    let modelo = document.getElementById('modelo').value;
    let cor = document.getElementById('cor').value;
    let proprietario = document.getElementById('proprietario').value;

    let veiculos = JSON.parse(localStorage.getItem('veiculos')) || [];

    if (veiculos.find(v => v.placa === placa)) {
        alert('Placa já cadastrada');
        return;
    }

    veiculos.push({ placa, modelo, cor, proprietario, status: 'Fora' });

    localStorage.setItem('veiculos', JSON.stringify(veiculos));
    alert('Veículo cadastrado com sucesso');
}