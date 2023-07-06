# API de Produtos
A API de Produtos permite gerenciar produtos em um marketplace. Ela oferece operações para criar, listar, atualizar e excluir produtos, bem como obter informações detalhadas sobre produtos específicos e produtos de usuários.

# Instalação e Execução
Para rodar o projeto, siga os passos abaixo:

Certifique-se de ter o Node.js instalado em seu ambiente.
Faça o clone do repositório.
Navegue até o diretório do projeto e execute o comando npm install para instalar as dependências.
Após a conclusão da instalação, execute o comando npm run dev para iniciar o servidor.
A API estará disponível em http://localhost:9000.
Documentação da API
A documentação da API foi elaborada utilizando o Swagger e está disponível em Swagger UI.

# Endpoints da API
A seguir estão os endpoints disponíveis na API de Produtos:

GET /produtos/:userId
Retorna todos os produtos no marketplace, exceto os produtos criados pelo usuário especificado.

Parâmetros de entrada:

userId (obrigatório): ID do usuário para filtrar os produtos.
GET /produtosUser/
Retorna todos os produtos no marketplace, excluindo os produtos do usuário especificado.

POST /produtos/
Cria um novo produto no marketplace.

exemplo Corpo da requisição (JSON):

{
  "descricaoProduto": "livros do george martin",
  "regiaoProduto": "Itapetinga",
  "usuarioNome": "amanda",
  "valor": {
    "currency": "BRL",
    "value": "10"
  },
  "nomeProduto": "dança dos dragões",
  "userId": "147852"
}

GET /produtos/:id exemplo : {{ _.base_url }}/produtos/G4aWljSPnCsIGQEvPk7a
Retorna informações detalhadas de um produto específico com base no seu ID.

Parâmetros de entrada:

id (obrigatório): ID do produto.

* Obter Produtos por Usuário
Retorna todos os produtos relacionados a um usuário específico com base no ID do usuário.

URL: {{ _.base_url }}/produtosUsuario?userId=147852
Método: GET
Parâmetros de Consulta
userId (obrigatório): ID do usuário para filtrar os produtos.
Observações

Certifique-se de substituir {{ _.base_url }} pela base URL correta do seu ambiente.

O parâmetro userId deve ser adicionado na query da URL utilizando o formato ?userId=147852.

 * A coleção de requisições do Insomnia para consultar os produtos está disponível no diretório do projeto, juntamente com a documentação da API. Certifique-se de importar essa coleção para o Insomnia para facilitar o teste das requisições.

