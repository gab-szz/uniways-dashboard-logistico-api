import fastify from 'fastify';
import { bootstrap } from 'fastify-decorators';
import PremiacoesController from './modules/premiacoes/premiacoes.controller.js';
import MotoristaController from './modules/motorista/motorista.controller.js';

const servidor = fastify();

servidor.register(bootstrap, {
  controllers: [PremiacoesController, MotoristaController],
});

export default servidor;
