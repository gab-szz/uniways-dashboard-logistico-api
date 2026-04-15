import fastify from 'fastify';
import { bootstrap } from 'fastify-decorators';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const servidor = fastify();
servidor.register(bootstrap, {
    directory: resolve(__dirname, 'modules'),
    mask: /\.controller\./,
});
export default servidor;
//# sourceMappingURL=app.js.map