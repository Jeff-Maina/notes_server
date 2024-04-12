const dotenv = require('dotenv').config()

const { Sequelize } = require('sequelize-typescript');


const sequelize = new Sequelize(`notes_server`, 'notes', 'notespassword', {
    dialect: 'postgres',
    host: process.env.HOST,
    port: Number(process.env.PORT),
    models: [__dirname + "/models"],
});


sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err: any) => {
        console.error('Unable to connect to the database:', err);
    });

// sequelize
//     .sync({force: true})
//     .then(() => {
//         console.log('All models were synchronized successfully.');
//     })
export default sequelize