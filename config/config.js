require('dotenv').config();

module.exports = {
    development: {
        username: 'root',
        password: process.env.SEQUELIZE_PASSWORD,
        datebase: 'nodebird',
        host: '127.0.0.1',
        dialect: 'mysql',
    }, 
    test: {
        username: 'root',
        password: process.env.SEQUELIZE_PASSWORD,
        datebase: 'nodebird_test',
        host: '127.0.0.1',
        dialect: 'mysql',
    },
    production: {
        username: 'root',
        password: process.env.SEQUELIZE_PASSWORD,
        datebase: 'nodebird',
        host: '127.0.0.1',
        dialect: 'mysql',
        logging: false,
    }
}