import { Router } from 'express';
import usuarioController from '../controllers/UsuarioController';
const router = new Router();

// Rotas de usuário

router.get('/produtosUser/', usuarioController.getProdutosExcluindoUsuario);
router.get('/produtosUsuario/', usuarioController.getProductsByUser);

export default router;
