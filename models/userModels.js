// Simulando uma base de dados na memória

let users = [
     {id: '1', name: 'João', age: 30},
     {id: '2', name: 'Maria', age: 25}

];

const getAllUsers = () => users;

const getUserById = (id) => users.find(user => user.id === id);

const createUser = (name, age) => {
    const newUser = { id: String(users.length + 1), name, age};
    users.push(newUser);
    return newUser;
};

module.exports = { getAllUsers, getUserById, createUser };

