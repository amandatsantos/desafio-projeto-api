import { Router } from 'express';
import produtoController from '../controllers/ProdutoController';
const router = new Router();

// ROTAS PRODUTO

router.post('/produtos/', produtoController.createproduto);
router.get('/produtos/', produtoController.getprodutos);
router.delete('/produtos/:id', produtoController.deleteprodutoById);
router.put('/produtos/:id', produtoController.updateproduto);
router.get('/produtos/:id', produtoController.getprodutoById);
router.get('/users/produtos/:userId', produtoController.getProdutosByUser);

export default router;
