export type MotoristaDto = {
  handle: number;
  nome: string | null;
};

export interface IMotoristaRepository {
  listarTodos(): Promise<MotoristaDto[]>;
}
