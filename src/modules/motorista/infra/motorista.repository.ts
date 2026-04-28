import { MotoristaDTO } from '../dtos/motorista.dto.js';

export interface IMotoristaRepository {
  listarTodos(): Promise<MotoristaDTO[]>;
}
