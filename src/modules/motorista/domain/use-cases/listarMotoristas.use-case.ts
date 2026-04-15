import type {
  IMotoristaRepository,
  MotoristaDto,
} from '../motorista.repository.js';

export class ListarMotoristasUseCase {
  constructor(private readonly repo: IMotoristaRepository) {}

  async execute(): Promise<MotoristaDto[]> {
    return this.repo.listarTodos();
  }
}
