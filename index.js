const fastify = require('fastify')({ logger: true});

// Define uma rota GET
fastify.get('/', async (request, reply) => {
    return {message: 'Bem-vindo ao Fastify'};
});

//Define uma rota com parametro dinâmico

fastify.get('/user/:id', async (request, reply) => {
    const { id } = request.params;
    return { userId: id, message:`Você buscou o usuário com ID ${id}`};

});

//Define uma Rota POST
fastify.post('/user', async ( request, reply) => {
    const { name, age} = request.body;
    return { message: `Usuário criado com sucesso`, user: { name, age}};
})

// Inicializa o servidor
const start = async () => {
    try {
        await fastify.listen({ port: 3000});
        console.log('Servido rodando em http://localhost:3000');
    }catch(err){
        fastify.log.error(err);
        process.exit(1);
    }
};

start();