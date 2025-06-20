# Sistema de Gerenciamento de Atendimentos

Este projeto é uma aplicação web simples desenvolvida para demonstrar os conceitos fundamentais de desenvolvimento web Full-Stack, com foco em operações CRUD (Create, Read, Update, Delete) em um sistema de gerenciamento de atendimentos.

## 🎯 Objetivo da Aplicação

O principal objetivo desta aplicação é fornecer uma interface para:
* **Cadastrar** novos registros de atendimento (nome, e-mail, telefone, data, hora e descrição).
* **Visualizar** todos os atendimentos cadastrados em uma tabela organizada.
* **Editar** informações de atendimentos existentes.
* **Excluir** atendimentos do sistema.

A aplicação foi desenvolvida para atender aos requisitos propostos na atividade, enfatizando a integração entre as tecnologias e as boas práticas de organização de código.

---

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

* **Backend:**
    * **Node.js:** Ambiente de execução JavaScript.
    * **Express.js:** Framework web para Node.js, responsável por gerenciar as rotas e a lógica do servidor.
* **Frontend (Views):**
    * **EJS (Embedded JavaScript):** Motor de template que permite incorporar JavaScript em templates HTML para renderização dinâmica das páginas.
    * **Partials:** Utilizados para reutilizar componentes de interface (cabeçalho e rodapé) e manter o código das views mais organizado.
* **Banco de Dados:**
    * **MySQL:** Sistema de gerenciamento de banco de dados relacional para persistência dos dados.
    * **Sequelize:** ORM (Object-Relational Mapper) para Node.js, que facilita a interação com o MySQL de forma orientada a objetos, eliminando a necessidade de escrever SQL diretamente.
* **Estilização:**
    * **CSS (Cascading Style Sheets):** Utilizado para estilizar a interface da aplicação, proporcionando um design moderno e responsivo. Foi aplicada uma refatoração no CSS usando **Variáveis CSS** para melhor manutenção e nomes de classes mais semânticos (inspirados em BEM).

---

## ✨ Funcionalidades Implementadas

A aplicação contempla as seguintes funcionalidades:

1.  **Tela Inicial:** Uma página de boas-vindas com navegação clara para as principais seções do sistema.
2.  **Cadastro de Atendimento:** Um formulário intuitivo para inclusão de novos registros, incluindo campos para nome, e-mail, telefone, data e hora do atendimento e descrição.
3.  **Dados de Atendimento Cadastrado:** Uma tabela que lista todos os atendimentos, permitindo uma visualização rápida das informações.
4.  **Edição de Atendimento:** Funcionalidade para alterar os detalhes de um atendimento existente diretamente da tabela.
5.  **Exclusão de Atendimento:** Opção para remover atendimentos do sistema, com uma confirmação para evitar exclusões acidentais.
6.  **Fundo Animado:** Um gradiente de fundo dinâmico utilizando animações CSS para uma experiência visual mais agradável.
7.  **Estilização Profissional:** Design limpo e moderno, com botões com efeitos interativos (`hover`, `active`) e um layout responsivo básico.

---

## ⚙️ Como Configurar e Rodar o Projeto

Siga os passos abaixo para colocar a aplicação em funcionamento na sua máquina:

### Pré-requisitos

* **Node.js e npm:** Certifique-se de ter o Node.js (versão 14 ou superior recomendada) e o npm (gerenciador de pacotes do Node.js) instalados. Você pode baixá-los em [nodejs.org](https://nodejs.org/).
* **MySQL:** Tenha um servidor MySQL rodando localmente.
* **Banco de Dados:** Crie um banco de dados MySQL para a aplicação. Por exemplo, `gerencia_itens_db`.

### Passos para Instalação

1.  **Clone o Repositório:**
    Abra seu terminal ou prompt de comando e execute:
    ```bash
    git clone https://github.com/rayannegomes/rayannerayssan1.git
    cd rayannerayssan1
    ```

2.  **Abra o Projeto no VS Code:**
    Após navegar para a pasta do projeto, você pode abri-lo no Visual Studio Code para edição e visualização dos arquivos.
    ```bash
    code .
    ```
    *(Se o comando `code .` não funcionar, significa que o VS Code não está adicionado ao PATH do seu sistema. Nesse caso, abra o VS Code manualmente, vá em `Arquivo > Abrir Pasta...` e selecione a pasta `rayannerayssan1`.)*

3.  **Instale as Dependências:**
    Ainda no terminal (ou no terminal integrado do VS Code), instale as dependências necessárias do projeto:
    ```bash
    npm install
    ```

4.  **Configurar o Banco de Dados (e Variáveis de Ambiente):**
    * Crie um arquivo na raiz do projeto chamado `.env` (se ele ainda não existir).
    * Dentro do arquivo `.env`, adicione as seguintes variáveis, substituindo os valores entre `<>` pelos dados do seu ambiente MySQL e porta da aplicação:
        ```
        # .env

        # Configurações do Banco de Dados MySQL
        DB_HOST=localhost
        DB_USER=<seu_usuario_mysql>
        DB_PASS=<sua_senha_mysql>
        DB_NAME=<nome_do_seu_banco> # Ex: gerencia_itens_db

        # Porta da Aplicação
        PORT=3000
        ```
*Certifique-se de que seu servidor MySQL está ativo e com as credenciais corretas configuradas no .env.*

5.  **Sincronizar o Banco de Dados (Criação das Tabelas):**
    * No arquivo `app.js`, localize a linha `sequelize.sync({ force: false })`.
    * **Na primeira execução (ou após alterações no modelo que exigem recriação da tabela), altere para `sequelize.sync({ force: true })`.**
        ```javascript
        
        sequelize.sync({ force: true }) // Temporariamente para criar/recriar a tabela
            .then(() => {
                console.log('Banco de dados sincronizado!');
            })
            .catch(err => {
                console.error('Erro ao sincronizar o banco de dados:', err);
            });
        ```
    * **Salve o `app.js` e o `models/Atendimento.js`**.
    * **Execute a aplicação pela primeira vez:** `node app.js`
    * Após ver a mensagem "Banco de dados sincronizado!" no terminal, **volte a linha em `app.js` para `sequelize.sync({ force: false })`** e salve o arquivo novamente. Isso evita a perda de dados em reinícios futuros do servidor.

6.  **Rodar a Aplicação:**
    No terminal, inicie o servidor:
    ```bash
    node app.js
    ```
    Você deverá ver a mensagem "Servidor rodando em http://localhost:3000".

7.  **Acessar no Navegador:**
    Abra seu navegador e vá para `http://localhost:3000`.

    **Onde será possível:** 
    * Visualizar a tela inicial
    * Realizar cadastro de atendimento
    * Ver cadastros criados
    * Editar cadastro
    * Excluir cadastro

