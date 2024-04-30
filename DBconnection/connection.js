import { Sequelize } from "sequelize";

const sequelize=new Sequelize("freedb_BlogProject",'freedb_taima','36Qs8z?dYevPxKN',{
    host:"sql.freedb.tech", //"localhost"
    port:3306,
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