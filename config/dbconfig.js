const Sequelize=require('sequelize');
const sequelize=new Sequelize("myserver","root","password",{
    dialect:'mysql',
    localhost:"localhost"
})
module.exports=sequelize;