const { Sequelize, where } = require("sequelize");
const { options } = require("../routes/api");
const ModelDefinition = require("./definitions");

class DataBase {
    constructor() {
        this.sequelize = new Sequelize({
            dialect: "sqlite",
            storage: "database.sqlite",
        });
    }

    async init() {
        this.User = this.sequelize.define("User", ModelDefinition.User);
        this.Post = this.sequelize.define("Post", ModelDefinition.Post);
        await this.User.sync({ alter: true });
        await this.Post.sync({ alter: true });
        // await this.printAll();
    }

    async printAll() {
        let all = await this.User.findAll();
        console.log(all);
    }

    async checkLogin({ email, password }) {
        let user = await this.User.findOne({
            attributes: ["name", "token", "id"],
            where: {
                email: email,
                password: password,
            },
        });
        if (user) return user;
        else
            throw {
                code: 400,
                message: "Invalid username or password",
            };
    }

    async registerUser({ name, email, password, avatar = null }) {
        try {
            return await this.User.create({
                name: name,
                email: email,
                password: password,
                avatar: avatar,
            });
        } catch (error) {
            throw {
                code: 400,
                message: error.errors[0].message,
            };
        }
    }

    async savePost({ title, data, author, image }) {
        try {
            return await this.Post.create({
                title: title,
                data: JSON.stringify(data),
                author: author,
                image: image,
            });
        } catch (error) {
            throw {
                code: 400,
                message: error.errors[0].message,
            };
        }
    }

    async getTrends() {
        let posts = await this.Post.findAll({ order: [["createdAt", "DESC"]] });
        for (var i in posts) {
            posts[i].author = await this.User.findByPk(posts[i].author, { attributes: ["name", "id", "avatar"] });
            posts[i].data = JSON.parse(posts[i].data);
        }
        return posts;
    }

    async getUserAndPosts(userid) {
        let user = await this.User.findByPk(userid, { attributes: ["name", "id", "avatar", "email"] });
        let posts = await this.Post.findAll({ where: { author: user.id }, order: [["createdAt", "DESC"]] });
        posts.map((post) => {
            post.author = user;
            post.data = JSON.parse(post.data);
            return post;
        });
        return {
            user: user,
            posts: posts,
        };
    }

    async getPost(postid) {
        let post = await this.Post.findByPk(postid);
        let user = await this.User.findByPk(post.author, { attributes: ["name", "id", "avatar"] });
        post.author = user;
        post.data = JSON.parse(post.data);
        return post;
    }
}

module.exports = DataBase;
