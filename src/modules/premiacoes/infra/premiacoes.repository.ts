export type periodo = {
  dtini: Date;
  dtfim: Date;
};

export interface IPremiacoesRepository {
  visaoGeral(periodo: periodo);
  consultarTodas(periodo: periodo);
  consultarPorMotorista(motorista: number, periodo: periodo);
}
