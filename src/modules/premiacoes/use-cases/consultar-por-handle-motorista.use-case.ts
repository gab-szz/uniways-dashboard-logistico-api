import { IPremiacoesRepository } from '../infra/premiacoes.repository.js';
import { Premiacao } from '../domain/premiacoes.domain.js';

export class ConsultarPorHandleMotoristaUseCase {
  constructor(private readonly rep: IPremiacoesRepository) {}

  async exec(params: {
    dtini: string;
    dtfim: string;
    handle: number;
  }): Promise<Premiacao | null> {
    const dtini = new Date(`${params.dtini}T00:00:00`);
    const dtfim = new Date(`${params.dtfim}T23:59:59`);

    const dado = await this.rep.consultarPorMotorista({ dtini, dtfim }, params.handle);

    if (!dado) return null;

    const premiacao = new Premiacao(dado);
    premiacao.calcularPremiacoes();
    return premiacao;
  }
}
