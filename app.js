const express=require('express')
const sequelize=require('./config/dbconfig')
const reviews=require('./models/review')
const products=require('./models/product')
const app=express();
app.use(express.json())
const router=require('./routes/productr')
sequelize.sync({force:true}).then((result)=>{
   // console.log(result)
})
.catch((err)=>{
    console.log(err);
})
app.use('/api/products',router)
// class Parent extends Model {}
// Parent.init({
//     // Define your parent table fields here
//   }, {
//     sequelize,
//     modelName: 'parent'
//   });
  
//   // Define the association to the child model
//   Parent.hasMany(Child, { as: 'children' });
products.hasMany(reviews, {
    foreignKey: 'product_id',
    as: 'review'
})

reviews.belongsTo(products, {
    foreignKey: 'product_id',
    as: 'product'
})


app.listen(5000,(req,res)=>{
    console.log('server hitt')
})