import authRouter from './auth/router.js';
import homeRouter from './home/router.js';
import blogRouter from './blog/router.js';
import userRouter from './user/router.js';
import { connectDB } from '../DBconnection/connection.js';

const PORT=process.env.PORT|| 3000;
const initApp=(express)=>{
    connectDB();
    const app= express();
    app.use(express.json());
    // DEhault PaGE 
    app.use('/',homeRouter);

    app.use('/auth',authRouter);
    app.use('/blogs',blogRouter);
    app.use('/users',userRouter);
// / nOt FOUNd Url 
    app.use('*',(req,res)=>{
        return res.json("page not found");
    });

    app.listen(PORT,()=>{
        console.log(`server runing on ${PORT}`)
    })
}

export default initApp;