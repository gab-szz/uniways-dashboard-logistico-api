import type { IMotoristaRepository } from '../infra/motorista.repository.js';
import { MotoristaDto } from '../dtos/motorista.dto.js';

export class ListarMotoristasUseCase {
  private rep: IMotoristaRepository;

  constructor(repositorio: IMotoristaRepository) {
    this.rep = repositorio;
  }

  async exec(): Promise<MotoristaDto[]> {
    return await this.rep.listarTodos();
  }
}
