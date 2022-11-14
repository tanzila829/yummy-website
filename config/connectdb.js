const mongoose=require('mongoose');
// require('dotenv').config()
// const DATABASE_URL=process.env.DATABASE_URL


// const connectDB=require('./config/connectdb.js')
// connectDB(DATABASE_URL)


const connectDB=async (DATABASE_URL)=>{
    try {
        const db_options={
            dbName:'user'
        }
        
        console.log('database connection success');
        
    } catch (error) {
        console.log(error);
        
    }
    

}
module.exports=connectDB