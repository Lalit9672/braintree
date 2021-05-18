const express=require('express')
const cors=require('cors')
const app=express()
const paymentRoute=require('./paymentRoute')


app.use(cors())
app.use(express.json())
app.use('/api',paymentRoute)


const port=5000;
app.listen(port,()=>{
console.log(`App is running at ${port}`);
})


