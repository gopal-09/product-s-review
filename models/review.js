const Sequelize=require('sequelize')
const sequelize=require('../config/dbconfig')
const Review = sequelize.define("review", {
    rating: {
        type:Sequelize.INTEGER
    },
    description: {
        type:Sequelize.TEXT
    }
})
module.exports=Review;
