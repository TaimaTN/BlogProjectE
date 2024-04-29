import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js"
import blogModel from "./blog.model.js";

const userModel = sequelize.define('Users', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
    },
    age:{
        type:DataTypes.INTEGER,
        defaultValue:16
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    confirmEmail: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }
},//options
    {
        timestamps: true,
    }
);
//relation BTW use->blog 
//               1->m
userModel.hasMany(blogModel,{
    onDelete: 'CASCADE'
});
blogModel.belongsTo(userModel);

export default userModel;