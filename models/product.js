const Sequelize=require('sequelize')
const sequelize=require('../config/dbconfig')
const product=sequelize.define("product", {
    // image: {
    //     type:Sequelize.STRING
   // },
    title: {
        type:Sequelize.STRING,
        allowNull: false
    },
    price: {
        type:Sequelize.INTEGER,
        allowNull: false
    },
    description: {
        type:Sequelize.TEXT,
        allowNull: false
    },
    published: {
        type:Sequelize.BOOLEAN,
        allowNull: false
    }

})
module.exports=product