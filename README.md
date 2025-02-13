<h1 align="center"> Gerenciador de Investimento </h1>

# Introdução
O produto desenvolvido em questão é um aplicativo web, que tem como objetivo facilitar o acompanhamento de investimentos ao decorrer dos dia e meses percorridos.

## Ferramentas utilizadas
  Para desenvolver desse aplicativo, foi utilizado a IDE Visual Studio Code para edição de código, o Postman para realizar operações envolvendo as rotas e navegador para testar a funcionalidade na web.
  - [IDE Visual Studio](https://code.visualstudio.com) (v1.92.2)
  - Para a visualização do banco de dados, foi baixado as seguintes extensões:
    - [SQLite Viewer](https://marketplace.visualstudio.com/items?itemName=qwtel.sqlite-viewer) (v0.5.12)
    - [SQLite](https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite) (v0.14.1)

  Sobre as principais tecnologias/bibliotecas utilizadas, vale-se destacar as seguintes:
  - [React.js](https://react.dev) (v.18.3.1)
  - [Sqlite](https://www.sqlite.org) (v.5.1.1)
  - [Sequelize](https://sequelize.org) (v.6.37.3)

# Funcionamento

## Como rodar?
Clonar https://github.com/JoaoVitorSDelfino/gerenciador-de-investimentos
  - Abrir uma o arquivo em uma IDE de sua preferência
  - Abrir um novo terminal (Ctrl + shift + ‘)
  - Digitar o comando npm install, logo em seguida rodar o comando npm start
  - Abra um segundo terminal, e rode o comando cd src/investmentApi
  - Ainda no novo terminal digite node index.js
  - Acesse [http://localhost:3000](http://localhost:3000), clique em "Começar agora"
  - Digite o login e senha:
    - Login: admin@gmail.com
    - Senha: 12345678

## Login
Para realizar o login, é preciso acessar a rota /signin por meio do menu inicial, aonde será necessário informar um email de login e uma senha:

![image](https://github.com/user-attachments/assets/7336c36a-8cef-4876-9d57-81e50b65c513)
![image](https://github.com/user-attachments/assets/2c0b437a-6bf2-4c42-943b-b1d878275840)

O login padrão de admin é:
Email: admin@gmail.com
Senha: 12345678

Caso queira criar uma nova conta, basta clicar o botão "Registre-se"

![image](https://github.com/user-attachments/assets/5383f40a-fcfb-461d-a8e0-3311c24ccd73)

Após criar uma conta, o novo usuário será armazenado no banco de dados, e ao relizar o login, o usuário entrará na página principal do projeto, a rota /home.

![image](https://github.com/user-attachments/assets/ac2f7257-0a0f-4585-a90b-11e7981aba9b)

## Funcionalidades
A partir da tela principal de usuário (/home), o usuário pode realizar as seguintes operações:

### 2 Operações
  Criar Investimento: O usuário pode criar um investimento de acordo com sua mudança diária e mensal.
  
  ![image](https://github.com/user-attachments/assets/0d4303b3-ea33-44dc-93da-12097f519369)

  Deletar Investimento: O usuário pode escolher quais investimento deseja excluir

  ![image](https://github.com/user-attachments/assets/8f919052-d14c-40b4-8fa1-6be4e4ba35a1)

  Visualizar Investimento: O usuário pode clicar em um investimento e mostrar em detalhes o seu percurso

  ![image](https://github.com/user-attachments/assets/f4fa814c-d97b-4545-890d-c00ab14d3cd7)
  
  Comparar Investimentos: O usuário pode escolher dois investimentos que possa comparar para então definir qual deles está mais interessante de manter

  ![image](https://github.com/user-attachments/assets/21c2404b-3f4b-430b-80dd-6a1132d58c9f)

### 3 APIs
As operações de criar, excluir e visualizar investimentos é feita por meio de uma API Restful, que realiza se comunica com o backend do projeto e o banco de dados por meio das seguuintes rotas:
  - POST http://localhost:3001/investmentApi/investments/addInvestment
  - GET http://localhost:3001/investmentApi/palestras/showInvestment/:id
  - DELETE http://localhost:3001/investmentApi/palestras/deleteInvestment/:id

Também tem a parte da ChatAPI, onde a comunicação é feita por meio de middlewares que garantam que os gráficos sejam gerados de forma correta. Tem três tipos de gráficos, o de linha, linha duplo (comparação) e o de coluna (percentual)

### 4 Banco de Dados
  Para o banco de dados, foi utilizado o SQLite para armazenar os dados, e o Sequelize.

  A API possui 2 tabelas atuantes:
    - Usuários: Pessoas que vão acessar o sistema
    - Investimentos: Investimentos cadastrados por usuários

  Por sua vez, cada tabela armazena as seguinte informações:

  Investimento 
    - id (INT)
    - nome (STRING)
    - descricao (STRING)
    - dados (JSON)
    - gráfico (STRING, URL da imagem)

  Usuário
    - id (INT)
    - senha (STRING, tamanho de 8 até 20)
    - email/login (STRING, obrigatório @)

  Como dito anteriormente, há duas informações sendo armazenadas no banco de dados, usuários e investimentos, ligados por meio de uma ligação 1:n
  
  ![image](https://github.com/user-attachments/assets/166a3247-eb1d-415a-8e16-c89b5cdf0ca9)

  O atributo "dados" contém todos os dados essenciais de cada investmento, cada "dados" está organizado em JSON no seguinte formato:
```c
{
  "id": 1
     "nome": "Nome de exemplo",
     "descricao": "Descrição de exemplo",
     "dados": JSON contendo os dados do investimento,
     "grafico": URL contendo imagem do gráfico
}
```
