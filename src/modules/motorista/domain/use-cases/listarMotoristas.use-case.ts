import { Service, Inject } from 'fastify-decorators';
import { MssqlMotoristaRepository } from '../../infra/mssql.motorista.repository.js';
import type {
  IMotoristaRepository,
  MotoristaDto,
} from '../motorista.repository.js';

@Service()
export class ListarMotoristasUseCase {
  @Inject(MssqlMotoristaRepository)
  private repo!: IMotoristaRepository;

  async execute(): Promise<MotoristaDto[]> {
    return this.repo.listarTodos();
  }
}
