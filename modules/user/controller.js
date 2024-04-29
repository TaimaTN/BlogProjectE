import { Op } from "sequelize";
import blogModel from "../../DBconnection/model/blog.model.js";
import userModel from "../../DBconnection/model/user.model.js";

const getUsers = async (req, res) => {
    try {
        const users = await userModel.findAll();//select all *
        return res.json({ message: "get allusers", users })
    } catch (error) {
        return res.json(error.original ? error.original.sqlMessage : error.stack);
    }
}

const usersGT20=async(req,res)=>{
    try {
        const users = await userModel.findAll({
            include:{
                model:blogModel,
                attributes:['title','body']
            },
            where:{
                age:{
                    [Op.gt]:req.params.age
                }
            }
        });//select all *
        return res.json({ message: "get users in age", users })
    } catch (error) {
        return res.json(error.original ? error.original.sqlMessage : error.stack);
    }
}

const update = async (req, res) => {
    try {
        const updateUSER = await userModel.update({ name: req.body.name },
            {
                where: {
                    id: req.params.id
                }
            });

        if (!updateUSER[0])
            return res.json({ message: "user nOt fOund   " });
        return res.json({ message: "suceSs Update user name" ,updateUSER});

    } catch (error) {
        return res.json(error.original ? error.original.sqlMessage : error.stack);
    }
}

const destroy = async (req, res) => {
    try {
        const deleteUser = await userModel.destroy({
            where: {
                id: req.params.id
            }
        });
        if (!deleteUser)
            return res.json({ message: "user iD not fOund to delete" });

        return res.json({ message: "success to delete", deleteUser });

    } catch (error) {
        return res.json(error.original ? error.original.sqlMessage : error.stack);
    }
}


export { getUsers, update, destroy, usersGT20 };