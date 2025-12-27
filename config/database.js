import { Sequelize } from 'sequelize';
 
const db = new Sequelize('node_db', 'admin', 'admin', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});
 
export default db;
