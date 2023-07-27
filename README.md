# Passos para executar a API

1. Configuração do Banco de Dados

   Certifique-se de ter um banco de dados instalado em sua máquina.
   Crie um arquivo .env na raiz do projeto e copie os dados do arquivo .env.example. Em seguida, altere a URL com as informações do seu banco de dados.

2. Instalação das Dependências

   Observação: O Node.js precisa estar instalado para continuar com esta etapa.

   pós garantir que o Node.js esteja instalado, execute o comando npm install no terminal a partir da pasta raiz do projeto para instalar as dependências necessárias.

3. Execução das Migrações

   Para garantir que o esquema do banco de dados esteja atualizado, execute o seguinte comando no terminal:

   npm run typeorm migration:run -- -d src/data-source

   Esse comando aplicará as migrações ao seu banco de dados, garantindo que ele esteja configurado corretamente.

4. Inicialização do Servidor

   Agora, você pode iniciar o servidor da API executando o seguinte comando no terminal:

   npm run dev

   O servidor será iniciado e estará pronto para receber solicitações.

# ENDPOINTS

# USERS

POST "/users": Cria um novo usuário.

POST "/users/login": Realiza o login do usuário e retorna um token de acesso com validade de 24 horas.

PATCH "/users": Edita o perfil do usuário logado.

GET "/users/:id": Busca um usuário pelo ID indicado e seus contatos associados.

GET "/users/profile": Busca o perfil do usuário logado e seus contatos associados.

GET "/users": Lista todos os usuários.

DELETE "/users": Deleta o usuário logado.

# CONTACT

POST "/contacts": Cria um novo contato e o associa ao usuário logado.

PATCH "/contacts/:id": Atualiza um contato pelo ID pertencente ao usuário logado, caso tente atualizar um contato que não é seu irá estourar um erro.

DELETE "/contacts/:id": Deleta um contato pelo ID pertencente ao usuário logado.
