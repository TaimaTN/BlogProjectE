import { Sequelize } from "sequelize";

const sequelize=new Sequelize("blogProject",'root','',{
    host:"localhost",
    dialect:"mysql"
});

const connectDB=async()=>{
try{
    return await sequelize.sync({alter:false});
}
catch{
    console.log("err conectt to db")
}
}
export {connectDB,sequelize};