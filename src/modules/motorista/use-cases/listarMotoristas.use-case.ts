import { MotoristaDTO } from '../dtos/motorista.dto.js';
import type { IMotoristaRepository } from '../infra/motorista.repository.js';

export class ListarMotoristasUseCase {
  private rep: IMotoristaRepository;

  constructor(repositorio: IMotoristaRepository) {
    this.rep = repositorio;
  }

  async exec(): Promise<MotoristaDTO[]> {
    return await this.rep.listarTodos();
  }
}
