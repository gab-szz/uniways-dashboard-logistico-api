// src/modules/perfil/perfil.test.ts
import { describe, it, expect, beforeAll } from 'vitest';
import app from '../../app.js';

describe('PremiacoesController (Integração)', () => {
  // Aguarda os plugins (bootstrap) carregarem antes dos testes
  beforeAll(async () => {
    await app.ready();
  });

  it('deve retornar os dados corretamente', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/premiacoes/status',
    });

    expect(response.statusCode).toBe(200);

    const payload = JSON.parse(response.payload);
    expect(payload.status).toBe('online');
  });

  it('deve retornar 404 para uma rota inexistente', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/rota-que-nao-existe',
    });

    expect(response.statusCode).toBe(404);
  });
});
