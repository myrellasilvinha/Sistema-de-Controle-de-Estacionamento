# Sistema de Controle de Estacionamento

Projeto desenvolvido como trabalho prático da disciplina de JavaScript, com o objetivo de aplicar conceitos de manipulação de dados, armazenamento local e operações CRUD em uma aplicação web.

## 📋 Sobre o Projeto

O Sistema de Controle de Estacionamento simula o gerenciamento de veículos em um estacionamento, permitindo o cadastro de veículos, controle de entrada e saída, além do registro de um histórico de movimentações.

Todos os dados são armazenados localmente utilizando o **localStorage**, dispensando a necessidade de um banco de dados externo.

## 🎯 Objetivos de Aprendizagem

* Manipulação de objetos em JavaScript;
* Utilização de arrays (vetores/listas);
* Persistência de dados com localStorage;
* Implementação das operações CRUD;
* Manipulação de datas e horários;
* Organização modular do código;
* Desenvolvimento de interfaces utilizando HTML, CSS e JavaScript puro.

## ⚙️ Funcionalidades

### Cadastro de Veículos

* Cadastro de novos veículos;
* Validação para impedir placas duplicadas;
* Armazenamento dos dados no navegador.

### Gerenciamento de Veículos (CRUD)

* ➕ Criar veículos;
* 📖 Listar veículos cadastrados;
* ✏️ Editar informações dos veículos;
* 🗑️ Excluir veículos.

### Controle de Entrada e Saída

* Registro de entrada de veículos;
* Registro de saída de veículos;
* Controle do status do veículo:

  * Dentro do estacionamento;
  * Fora do estacionamento.

### Histórico de Movimentações

* Registro automático de:

  * Data;
  * Hora;
  * Status (Entrada ou Saída).
* Consulta do histórico completo de movimentações.

## 🛠️ Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* LocalStorage

## 📂 Estrutura do Projeto

```text
Sistema-de-Controle-de-Estacionamento/
│
├── index.html
├── cadastrarVeiculo.html
├── listarVeiculos.html
├── controleEstacionamento.html
├── historico.html
│
├── css/
│   ├── style.css
│   └── styles.css
│
├── js/
│   ├── cadastrarVeiculo.js
│   ├── listarVeiculos.js
│   ├── controleEstacionamento.js
│   └── historico.js
│
└── img/
|   ├── branco-ondulado.png
│   └── elegante-abstrato.png
│
```

## 💾 Armazenamento de Dados

A aplicação utiliza o **localStorage** do navegador para armazenar:

* Veículos cadastrados;
* Histórico de movimentações;
* Informações temporárias para edição de registros.

## ▶️ Como Executar

1. Clone este repositório:

```bash
git clone https://github.com/myrellasilvinha/Sistema-de-Controle-de-Estacionamento.git
```

2. Abra o arquivo `index.html` em qualquer navegador moderno.

3. Utilize o sistema normalmente.

## 📸 Funcionalidades Demonstradas

* Cadastro de veículos;
* Edição e exclusão de registros;
* Controle de entrada e saída;
* Histórico completo das movimentações.

## 👩‍💻 Autora

**Myrella Silvinha**

Projeto desenvolvido para fins acadêmicos como atividade avaliativa da disciplina de JavaScript.
