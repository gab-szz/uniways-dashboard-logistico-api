import { env } from '../../../config/env.js';
import { PremiacoesDTO, SumarioDTO } from '../dtos/premiacoes.dto.js';

export class Premiacao implements PremiacoesDTO {
  handle_motorista!: number;
  nome!: string;
  total_viagens!: number;
  finalizadas_total!: number;
  finalizadas_ravex!: number;
  ton_geral!: number;
  premiacao_por_ton?: number | undefined;
  volume_geral!: number;
  total_notas_emitidas!: number;
  total_notas_premiacao!: number;
  qtd_entregas_realizadas!: number;
  premiacao_por_entrega?: number | undefined;
  ton_entregue_real!: number;
  total_notas_entregues!: number;
  ton_devolvida!: number;
  total_notas_devolvidas!: number;

  constructor(input: PremiacoesDTO) {
    Object.assign(this, input);
    this.premiacao_por_ton = input.premiacao_por_ton || 0;
    this.premiacao_por_entrega = input.premiacao_por_entrega || 0;
  }

  calcularPremiacoes(): void {
    this.premiacao_por_entrega =
      this.qtd_entregas_realizadas * env.PARAM_VALOR_POR_ENTREGA;
    this.premiacao_por_ton = this.ton_entregue_real * env.PARAM_VALOR_POR_PESO;
  }

  static gerarSumario(lista: Premiacao[]): SumarioDTO {
    return lista.reduce(
      (total, atual) => {
        total.total_premiacao +=
          (atual.premiacao_por_ton || 0) + (atual.premiacao_por_entrega || 0);
        total.peso_total_ton += atual.ton_geral || 0;
        total.ton_entregue_real += atual.ton_entregue_real || 0;
        total.ton_devolvida += atual.ton_devolvida || 0;
        total.total_viagens += atual.total_viagens || 0;
        total.qtd_entregas_realizadas += atual.qtd_entregas_realizadas || 0;

        return total;
      },
      {
        total_premiacao: 0,
        peso_total_ton: 0,
        ton_entregue_real: 0,
        ton_devolvida: 0,
        total_viagens: 0,
        qtd_entregas_realizadas: 0,
      },
    );
  }
}
