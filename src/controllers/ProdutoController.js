const admin = require('../../firebase');
const produtoRef = admin.firestore().collection('Produtos');
// const BUCKET = 'projeto-api-ff52d.appspot.com';
// const bcrypt = require('bcrypt');

class ProdutoController {

  async getprodutos(req, res) {
    try {
      const produtos = [];
      const queryProduto = await produtoRef.get();
      queryProduto.forEach((doc) => {
        produtos.push(doc.data());
      });
      res.send(produtos);
    } catch (error) {
      console.error("Error ao retornar todos os produtos: ", error);
      res.status(500).send("Error ao retornar os produtos");
    }
  }

  async getprodutoById(req, res) {
    try {
      const produtoId = req.params.id;
      const produtoDoc = await produtoRef.doc(produtoId).get();
      if (!produtoDoc.exists) {
        res.status(404).send("produto not found");
      } else {
        const produtoData = produtoDoc.data();
        res.send(produtoData);
        res.send(produtoData.id);
        console.log(`Error getting produto with ID ${produtoId} `);
      }
    } catch (error) {
      console.error(`Error getting produto with ID ${req.params.produtoId}: `, error);
      res.status(500).send(`Error getting produto with ID ${req.params.produtoId}`);
    }
  }

  async createproduto(req, res) {
    try {
      const {
        nomeProduto, descricaoProduto, valor, userId, usuarioNome, regiaoProduto,
      } = req.body;
      // verifica se os valores vem  undfined
      if (
        typeof nomeProduto === 'undefined'
          || typeof descricaoProduto === 'undefined'
          || typeof valor === 'undefined'
          || typeof userId === 'undefined'
          || typeof usuarioNome === 'undefined'
          || typeof regiaoProduto === 'undefined'
      ) {
        res.status(400).send('Algum valor obrigatório não foi fornecido');
        return;
      }

      const novoProduto = {
        nomeProduto,
        descricaoProduto,
        valor,
        userId,
        usuarioNome,
        regiaoProduto,
      };

      const produtoDoc = await produtoRef.add(novoProduto);
      res.send(`Produto criado com sucesso. ID do produto: ${produtoDoc.id}`);
    } catch (error) {
      console.error('Erro ao criar produto: ', error);
      res.status(500).send('Erro ao criar produto');
    }
  }

  async updateproduto(req, res) {
    try {
      const { id } = req.params;
      const {
        nomeProduto, descricaoProduto, valor, userId, usuarioNome, regiaoProduto,
      } = req.body;

      const produtoDoc = await produtoRef.doc(id).get();
      if (!produtoDoc.exists) {
        res.status(404).send('Produto não encontrado');
        return;
      }

      const updateData = {
        nomeProduto,
        userId,
        usuarioNome,
        regiaoProduto,
        descricaoProduto,
        valor,
      };

      if (typeof valor !== 'undefined') {
        updateData.valor = valor;
      }

      await produtoRef.doc(id).update(updateData);

      res.send(`Produto com id: ${req.params.id}  atualizado com sucesso`);
    } catch (error) {
      console.error(`Erro ao atualizar o produto com id: ${req.params.id}: `, error);
      res.status(500).send(`Erro ao atualizar o produto com id: ${req.params.id}`);
    }
  }

  async deleteprodutoById(req, res) {

    try {
      const produtoId = req.params.id;

      // Verifica se o produto existe antes de excluí-lo
      const produtoDoc = await produtoRef.doc(produtoId).get();
      if (!produtoDoc.exists) {
        res.status(404).send("Produto não encontrado");
      } else {
        // Exclui o produto da coleção "Produtos"
        await produtoRef.doc(produtoId).delete();
        res.send("Produto deletado com sucesso");
      }
    } catch (error) {
      console.error(`Erro ao deletar o produto com id: ${req.params.id}: `, error);
      res.status(500).send(`Erro ao deletar o produto com id: ${req.params.id}`);
    }
  };

  async getProdutosByUser(req, res) {
    try {
      const { userId } = req.params;

      // Obtem todos os produtos relacionados ao usuário
      const produtos = await produtoRef.find({ usuario: userId });

      res.send(produtos);
    } catch (error) {
      console.error(`Error getting produtos by user with ID ${req.params.userId}: `, error);
      res.status(500).send(`Error getting produtos by user with ID ${req.params.userId}`);
    }
  };
}
export default new ProdutoController();
