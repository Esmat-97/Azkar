const express=require('express');
const app=express();


/*    */
const connectToDatabase = require('./connection');
app.use(connectToDatabase);


/*    */

const  morningRouter=require('./morning');
app.use('/morning', morningRouter);



const  eviningRouter=require('./evining');
app.use('/evining', eviningRouter);



const  sleepRouter=require('./sleep');
app.use('/sleep', sleepRouter);


const  adhkar_after_prayer_Router=require('./adhkar_after_prayer');
app.use('/adhkar_after_prayer', adhkar_after_prayer_Router);
    
const port=2001;
const hostname= `localhost`;



/*    */
app.listen(port, hostname ,()=>{
    console.log(`the server listen at posrt  http://${hostname}:${port}/`);
    });


