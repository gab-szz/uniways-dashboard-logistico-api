// src/libs/logger.ts
import fs from 'fs';
import path from 'path';

/**
 * Classe utilitária para registro de logs em arquivos locais.
 * Os logs são organizados em pastas mensais e arquivos diários.
 */
export class Logger {
  /**
   * Obtém o caminho completo para o arquivo de log com base na data atual.
   * @returns {string} - O caminho completo para o arquivo de log.
   */
  private static getLogPath(): string {
    // 1. Obtém a data atual
    const agora = new Date();

    // 2. Extrai ano, mês e dia da data atual
    const ano = agora.getFullYear();
    const mes = String(agora.getMonth() + 1).padStart(2, '0');
    const dia = String(agora.getDate()).padStart(2, '0');

    // Pasta: logs/ano/mes
    const pastaCompleta = path.resolve('logs', ano.toString(), mes);
    // Arquivo: dia-mes-ano.log
    const nomeArquivo = `${dia}-${mes}-${ano}.log`;
    const caminhoCompleto = path.join(pastaCompleta, nomeArquivo);

    // 5. Cria a pasta, se não existir
    fs.mkdirSync(pastaCompleta, { recursive: true });

    // 6. Retorna o caminho completo para o arquivo
    return caminhoCompleto;
  }

  private static escrever(
    tipo: 'INFO' | 'ERROR' | 'DEBUG' | 'WARN',
    mensagem: string,
  ) {
    const agora = new Date();

    // 2. Formata a data e hora
    const dia = String(agora.getDate()).padStart(2, '0');
    const mes = String(agora.getMonth() + 1).padStart(2, '0');
    const ano = agora.getFullYear();

    const hora = String(agora.getHours()).padStart(2, '0');
    const min = String(agora.getMinutes()).padStart(2, '0');
    const seg = String(agora.getSeconds()).padStart(2, '0');

    const dataHora = `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
    const mensagemFormatada = `${dataHora} - [${tipo}] - ${mensagem}`;

    // 4. Obtém o caminho do arquivo de log
    const caminho = Logger.getLogPath();
    // 5. Escreve a linha no arquivo (com \n apenas aqui)
    fs.appendFileSync(caminho, mensagemFormatada + '\n', { encoding: 'utf-8' });

    // 6. Exibe no console sem \n extra (console já adiciona quebra de linha)
    if (tipo === 'ERROR') {
      console.error(mensagemFormatada);
    } else {
      console.log(mensagemFormatada);
    }
  }

  /**
   * Registra uma mensagem informativa.
   * @param {string} mensagem - A mensagem a ser registrada.
   */
  static info(mensagem: string) {
    Logger.escrever('INFO', mensagem);
  }

  /**
   * Registra uma mensagem de erro.
   * @param {string} mensagem - A mensagem a ser registrada.
   */
  static error(mensagem: string) {
    Logger.escrever('ERROR', mensagem);
  }

  /**
   * Registra uma mensagem de depuração.
   * @param {string} mensagem - A mensagem a ser registrada.
   */
  static debug(mensagem: string) {
    Logger.escrever('DEBUG', mensagem);
  }

  static warn(mensagem: string) {
    Logger.escrever('WARN', mensagem);
  }
}

/**
 * Função utilitária para montar o caminho do arquivo de log.
 * @param {string} [data] - Data no formato YYYY-MM-DD ou DD-MM-YYYY. Se não fornecida, usa a data atual.
 * @returns {string} - Caminho completo para o arquivo de log.
 * @throws {Error} - Lança um erro se o formato da data for inválido.
 */
export function getLogFilePath(data?: string): string {
  let ano: string, mes: string, dia: string;

  if (data) {
    // Aceita YYYY-MM-DD ou DD-MM-YYYY
    if (/^\d{4}-\d{2}-\d{2}$/.test(data)) {
      // Padrão internacional
      const [a, m, d] = data.split('-');
      ano = a;
      mes = m.padStart(2, '0');
      dia = d.padStart(2, '0');
    } else if (/^\d{2}-\d{2}-\d{4}$/.test(data)) {
      // Padrão brasileiro DD-MM-YYYY
      const [d, m, a] = data.split('-');
      ano = a;
      mes = m.padStart(2, '0');
      dia = d.padStart(2, '0');
    } else {
      throw new Error('Formato inválido. Use YYYY-MM-DD ou DD-MM-YYYY.');
    }
  } else {
    const agora = new Date();
    ano = String(agora.getFullYear());
    mes = String(agora.getMonth() + 1).padStart(2, '0');
    dia = String(agora.getDate()).padStart(2, '0');
  }

  // Novo padrão: logs/ano/mes/dia-mes-ano.log
  const pastaCompleta = path.resolve('logs', ano, mes);
  const nomeArquivo = `${dia}-${mes}-${ano}.log`;
  return path.join(pastaCompleta, nomeArquivo);
}
