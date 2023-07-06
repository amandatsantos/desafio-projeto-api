import express from 'express';
import swaggerUI from 'swagger-ui-express';
import homeRoutes from './src/routes/homeRoutes';
import produtoRoutes from './src/routes/produtoRoutes';
import usuarioRoutes from './src/routes/usuarioRoutes';
import swaggerDocument from './swagger.json';

// Rota para exibir a documentação do Swagger

class App {
  constructor(){
    this.app = express();
    this.middlewares();
    this.routes();

  }
  middlewares(){
    this.app.use(express.urlencoded({extended: true}));
    this.app.use(express.json());
    console.log('Middleware executado');

  };

  routes(){
    this.app.use('/', homeRoutes);
    this.app.use('/', produtoRoutes);
    this.app.use('/', usuarioRoutes);
    this.app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

  };

};

export default new App().app;
