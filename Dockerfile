FROM node:22-alpine

WORKDIR /app

# Instala dependências primeiro (cache de layers)
COPY package*.json ./
RUN npm ci

# Copia o restante do código
COPY . .

EXPOSE 3094

# Usa tsx diretamente (sem compilação, consistente com o fluxo de dev)
CMD ["node_modules/.bin/tsx", "src/main.ts"]
