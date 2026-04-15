import { Service, Inject } from 'fastify-decorators';
import { PrismaMotoristaRepository } from '../../infra/prisma.motorista.repository.js';
import type {
  IMotoristaRepository,
  MotoristaDto,
} from '../motorista.repository.js';

@Service()
export class ListarMotoristasUseCase {
  @Inject(PrismaMotoristaRepository)
  private repo!: IMotoristaRepository;

  async execute(): Promise<MotoristaDto[]> {
    return this.repo.listarTodos();
  }
}
