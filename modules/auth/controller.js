
import { where } from "sequelize";
import userModel from "../../DBconnection/model/user.model.js";

const getAuth = (req, res) => {
    return res.json({ message: "sucessAuth" });
}

const registor = async (req, res) => {
    try {
        const { name, email, password,age } = req.body;
        //create new user
        const user = await userModel.create({ name, email, password ,age});
        return res.json(user)
    } catch (error) {
        return res.json(error.original ? error.original.sqlMessage : error.stack);
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const checkUser = await userModel.findOne({ where: { email, password }, attributes: ['id', "name"] });
        if (!checkUser)
            return res.json("email or pass not correct, plz try again!");
        return res.json({ checkUser });

    } catch (error) {
        return res.json(error.original ? error.original.sqlMessage : error.stack);
    }
}


export { getAuth, registor, login };