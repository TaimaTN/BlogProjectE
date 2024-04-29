import blogModel from "../../DBconnection/model/blog.model.js";
import userModel from "../../DBconnection/model/user.model.js";

const getBlogs = async (req, res) => {
    try {
        const blogs = await blogModel.findAll({
            include: {
                model: userModel,
                attributes: ['id', 'name']
            } , 
            attributes: {
                exclude: ['UserId','updatedAt']
            }
    });//select all *
        return res.json({ message: "get bloGS", blogs })
    } catch (error) {
        return res.json(error.original ? error.original.sqlMessage : error.stack);
    }

}
const addBlog = async (req, res) => {
    try {
        const { UserId, title, body } = req.body;
        const blog = await blogModel.create({ UserId, title, body });
        return res.json({ message: "success add blog", blog });

    } catch (error) {
        return res.json(error.original ? error.original.sqlMessage : error.stack);
    }

}

export { getBlogs, addBlog };