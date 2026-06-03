# Sistema-de-Controle-de-Estacionamento

Este é o trabalho da N1. O trabalho vale 10 pontos.
Ele é individual. A avaliação será feita por meio de apresentação para o professor.
Data da apresentação dia 04/06


Trabalho Prático — Sistema de Controle de Estacionamento em JavaScript
Objetivo
Desenvolver uma aplicação web simples utilizando HTML e JavaScript puro, com foco em:

Manipulação de objetos em JavaScript;
Uso de vetores/listas;
Persistência de dados utilizando localStorage;
Implementação de operações de CRUD;
Manipulação de datas e horários;
Organização lógica da aplicação.
O sistema deverá simular o funcionamento de um estacionamento, permitindo controlar os carros cadastrados, a entrada e saída dos veículos e o histórico de permanência.

Descrição do Problema
Um estacionamento precisa de um sistema simples para controlar os veículos que utilizam suas vagas.

O sistema deverá permitir:

Cadastrar veículos;
Editar informações de veículos;
Remover veículos;
Registrar entrada de um carro no estacionamento;
Registrar saída do carro;
Manter um histórico das entradas e saídas realizadas.
Todos os dados deverão ser armazenados utilizando o localStorage, funcionando como um pequeno banco de dados do navegador.

Requisitos do Sistema
1. Cadastro de Veículos
O sistema deverá possuir uma tela/formulário para cadastrar veículos.

Cada veículo deverá possuir as seguintes informações:

Placa;
Modelo;
Cor;
Nome do proprietário.
Regras:
Não permitir cadastro com placa repetida;
2. CRUD de Veículos
O sistema deverá permitir:

Criar
Cadastrar novos veículos.

Ler
Listar todos os veículos cadastrados.

Atualizar
Editar os dados de um veículo já cadastrado.

Deletar
Remover um veículo do sistema.

3. Controle de Entrada e Saída
Cada carro poderá estar em um dos seguintes estados:

Fora do estacionamento;
Dentro do estacionamento.
O sistema deverá possuir um botão para:

Registrar entrada;
Registrar saída.
Ver o histórico de entrada e saída de um determinado veículo
Registro de Entrada
Ao registrar a entrada:

O sistema deve salvar:
Data;
Hora;
Status.
Registro de Saída
Ao registrar a saída:

O sistema deve salvar:
Data;
Hora;
Status.

Todos os atributos listados no problema foram apenas sugestões. Vocês são livre para tomar as decisões necessárias para a implementação da solução.
