import { Service, Inject } from 'fastify-decorators';
import { MssqlMotoristaRepository } from '../../infra/mssql.motorista.repository.js';
import type { IMotoristaRepository } from '../../infra/motorista.repository.js';
import { MotoristaDto } from '../../dtos/motorista.dto.js';

@Service()
export class ListarMotoristasUseCase {
  @Inject(MssqlMotoristaRepository)
  private repo!: IMotoristaRepository;

  async execute(): Promise<MotoristaDto[]> {
    return this.repo.listarTodos();
  }
}
