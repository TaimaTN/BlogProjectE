import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";

const blogModel= sequelize.define('Blog',{
    title:{
        type:DataTypes.STRING(100),
        unique:true
    },
    body:{
        type:DataTypes.TEXT,
        allowNull:false
    }
}
);

export default blogModel;