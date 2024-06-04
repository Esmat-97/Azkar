const express=require('express');
const app=express();


/*    */
const connectToDatabase = require('./connection');
app.use(connectToDatabase);


/*    */

const  morningRouter=require('./morning');
app.use('/morning', morningRouter)
    

/*    */
app.listen(2001,()=>{
    console.log('the server listen at posrt http://localhost:2001');
    });