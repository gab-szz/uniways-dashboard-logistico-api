import { Inject, Service } from 'fastify-decorators';
import type { IPremiacoesRepository } from '../../infra/premiacoes.repository.js';
import { MssqlPremiacoesRepository } from '../../infra/mssql.premiacoes.repository.js';

@Service()
export class ListarPremiacoesUseCase {
  @Inject(MssqlPremiacoesRepository)
  private readonly rep!: IPremiacoesRepository;

  constructor(rep?: IPremiacoesRepository) {
    if (rep) this.rep = rep;
  }

  async exec(params: { dtini: string; dtfim: string }) {
    // Garante que as datas cubram o dia inteiro ignorando qualquer hora que venha no JSON
    const dtini = new Date(`${params.dtini}T00:00:00`);
    const dtfim = new Date(`${params.dtfim}T23:59:59`);

    if (isNaN(dtini.getTime()) || isNaN(dtfim.getTime())) {
      throw new Error('Datas inválidas. Use o formato YYYY-MM-DD.');
    }

    const periodo = {
      dtini,
      dtfim,
    };

    return this.rep.consultarTodas(periodo);
  }
}
