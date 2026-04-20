import { MotoristaDto } from '../dtos/motorista.dto.js';

export interface IMotoristaRepository {
  listarTodos(): Promise<MotoristaDto[]>;
}
