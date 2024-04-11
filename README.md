# Descrição

<p>Este projeto tem como objetivo aprender a usar e criar uma API (Application Programming Interface).<br>
  
  Para auxiliar no desenvolvimento peguei informações do site **Pichau.com** e **Americanas.com**, como: nome, preço e imagem dos produtos.</p>
  
## Como criar o corpo do projeto

1. Instalar o Node.js.

2. Criar uma pasta para o projeto.

3. Criar uma pasta chamada src (source) dentro da pasta do projeto

4. No terminal do projeto digite:

   - "npm init -y" para criar o arquivo **package.json**

   - "npm install express --save" para criar a pasta **node_modules** e o arquivo **package-lock.json**.

   - "npm install nodeman -D" para fazer alterações no código sem precisar parar e iniciar novamente.

5. Criar um arquivo dentro da pasta src chamado **app.js**.

6. Criar um arquivo na pasta do projeto chamado **server.js**.

## Como pegar as informações da API

Para acessar a rota padrão ou raiz da API (Application Programming Interface), deve-se ir na seguinte URL: 

Para acessar as informações da API (Application Programming Interface), acrescente:

- Informações dos produtos e imagens de forma de pagamento:
  - /prod 
  - /pag 
- Acessar pela ID do produto:
  - /prod?id= 
- Pesquisar o nome de um determinado produto:
  - /prod?nome= 
- Filtrar por categoria um determinado produto:
  - /prod?categoria= 

## O que tem nesse projeto

← `README.md`: Este arquivo é onde está toda a informação sobre o projeto.

← `node_modules` & `package-lock.json`: É onde se encontra todas as dependências do projeto.

← `server.js`: Arquivo responsável por abrir o servidor.

← `package.json`: Arquivo onde se encontra as dependências do projeto, também contendo especificações das versões das bibliotecas que o projeto requer. Por padrão vem sem as alterações:

- "type": "module" - responsável por importar e exportar informações para outros arquivos.
- "start": "nodemon server.js" - responsável por ligar a API sempre que vier uma requisição.
- "dev": "nodemon server.js" - responsável por ligar a API pelo terminal usado para testar a API quando se está em produção. Digite no terminal: "npm run dev".

← `src/`: Pasta para boa prática de organização de código, é usado para arazenar todo o código-fonte do projeto.

← `src/app.js`: Onde se encontra o cógigo-fonte do projeto.

_Última Alteração: 11 / 04 / 2024_
