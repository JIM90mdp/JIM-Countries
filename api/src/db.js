require("dotenv").config(); // Dotenv es un módulo de npm que carga las variables de entorno de un archivo .env en process.env.para poder cargar el archivo .env
const { Sequelize } = require("sequelize"); // importo Sequelize
const fs = require("fs"); // FS es parte de Node.js, para acceder e interactuaar con el file system
const path = require("path"); // path es parte de Node.js, para acceder al path (métodos dirname, basename o extname)
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME} = process.env; // me traigo los datos de .env

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);



// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const {  Country, Activity } = sequelize.models;

// Aca vendrían las relaciones
// Product.hasMany(Reviews);
Country.belongsToMany(Activity, { through: "country_activities" });
Activity.belongsToMany(Country, { through: "country_activities" });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importar la conexión { conn } = require('./db.js');
};