const  Sequelize =require("sequelize")

const sequelize =new Sequelize(
    "postgres",
    "postgres",
    "12345",
    {
        host: "localhost",
        dialect:"postgres"
    }
)

 sequelize.sync({force:true});
const x = async () => {
  try {
     
    await sequelize.authenticate();
    console.log("connection estblished with db");
  } catch (error) {
    console.error("unable to connect");
  }
}
x()

module.exports = sequelize