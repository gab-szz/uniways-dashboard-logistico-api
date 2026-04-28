import { IPremiacoesRepository } from '../infra/premiacoes.repository.js';

export class ConsultarPorHandleMotoristaUseCase {
  constructor(private readonly rep: IPremiacoesRepository) {}

  async exec(params: { dtini: string; dtfim: string; handle: number }) {}
}
