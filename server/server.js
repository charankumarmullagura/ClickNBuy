import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import router from './routes/userRoutes.js';

dotenv.config();
const app= express();

app.use(express.json());
app.use(cors(
    {
        origin:"*",
        credentials:true,
        optionSuccessStatus:200
    }
));

app.use('/userData', router);

const PORT= process.env.PORT || 4002;
connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running on port ${PORT}`);
        
    }) 
})
.catch((err)=> console.error('Error connecting to mongodb:',err));