import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import { jsonSchemaTransform } from 'fastify-type-provider-zod';
import type { FastifyInstance } from 'fastify';

export async function swagger(app: FastifyInstance) {
  await app.register(fastifySwagger, {
    transform: jsonSchemaTransform,
    openapi: {
      info: {
        title: 'Dashboard Logístico — API de Premiações',
        description:
          'API para gerenciamento e exibição de premiações de motoristas. Consolida dados de viagens, romaneios, notas fiscais e devoluções via MSSQL com cache Redis.',
        version: '1.0.0',
      },
      tags: [
        { name: 'Motoristas', description: 'Gestão de motoristas' },
        { name: 'Premiações', description: 'Cálculo e listagem de premiações' },
      ],
      components: {
        securitySchemes: {
          token: {
            type: 'apiKey',
            in: 'header',
            name: 'x-app-token',
          },
        },
      },
      security: [{ token: [] }],
    },
  });

  await app.register(fastifySwaggerUi, {
    routePrefix: '/docs',
    uiConfig: {
      docExpansion: 'list',
      deepLinking: false,
      tryItOutEnabled: true,
      persistAuthorization: true,
    },
  });
}
