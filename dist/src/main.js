import servidor from './app.js';
import { env } from './config/env.js';
servidor.listen({ port: env.PORTA }, (err, _address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Servidor rodando na porta ${env.PORTA}`);
});
//# sourceMappingURL=main.js.map