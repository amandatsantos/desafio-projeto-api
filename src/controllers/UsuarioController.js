const admin = require('../../firebase');
const produtoRef = admin.firestore().collection('Produtos');

class UserController {
  async getProdutosExcluindoUsuario(req, res) {
    try {
      const {userId} = req.query;

      if (!userId) {
        res.status(400).send('O parâmetro de userId é obrigatório');
        return;
      }

      // Obter todos os produtos criados pelo usuário com base em seu ID
      const queryProduto = await produtoRef.where('userId', '!=', userId).get();
      const produtos = queryProduto.docs.map((doc) => doc.data());

      if (produtos.length === 0) {
        res.send('Nenhum produto encontrado');
      } else {
        res.send(produtos);
      }
    } catch (error) {
      console.error(`Erro ao obter os produtos do usuário com ID ${req.params.id}: `, error);
      res.status(500).send(`Erro ao obter os produtos do usuário com ID ${req.params.id}`);
    }

  }
  async getProductsByUser(req, res) {
    try {
      const {userId} = req.query;

      if (!userId) {
        res.status(400).send('O parâmetro de userId é obrigatório');
        return;
      }

      // Obter todos os produtos criados pelo usuário com base em seu ID
      const queryProduto = await produtoRef.where('userId', '==', userId).get();
      const produtos = queryProduto.docs.map((doc) => doc.data());

      res.send(produtos);
    } catch (error) {
      console.error(`Erro ao obter os produtos do usuário com ID ${req.params.id}: `, error);
      res.status(500).send(`Erro ao obter os produtos do usuário com ID ${req.params.id}`);
    }
  }

}
export default new UserController();
