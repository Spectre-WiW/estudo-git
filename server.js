const fastify = require('fastify')({ logger: true});
const userRoutes = require('./routes/userRoutes');

// Register as rotas do modulo de usuários



fastify.register(userRoutes, {prefix: '/user'})

const start =  async () => {
    try{
        await fastify.listen({ port: 3000})
        console.log('Servidor rodando em http://localhost:3000')
    }catch(err){
        fastify.log.error(err)
        process.exit(1);
    }
}

start();