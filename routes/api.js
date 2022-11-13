const express = require("express");
const DataBase = require("../sql/database");
const ApiRouter = express.Router();

const sqldb = new DataBase();
sqldb.init();

const wrapper = (fn) => (req, res, next) => {
    return Promise.resolve(fn(req, res, next)).catch(next);
};

ApiRouter.get(
    "/login",
    wrapper(async (req, res) => {
        res.json(await sqldb.checkLogin(req.query));
    })
);

ApiRouter.get(
    "/register",
    wrapper(async (req, res) => {
        res.json(await sqldb.registerUser(req.query));
    })
);

ApiRouter.get(
    "/trends",
    wrapper(async (req, res) => {
        res.json(await sqldb.getTrends(req.query));
    })
);

ApiRouter.get(
    "/user/:userid",
    wrapper(async (req, res) => {
        res.json(await sqldb.getUserAndPosts(req.params.userid));
    })
);

ApiRouter.get(
    "/post/:postid",
    wrapper(async (req, res) => {
        res.json(await sqldb.getPost(req.params.postid));
    })
);

ApiRouter.use(async (req, res, next) => {
    const user = await sqldb.User.findOne({ attributes: ["id"], where: { token: req.query.token || "oops" } });
    if (user) {
        req.query.userid = user.id;
        next();
    } else {
        return res.status(401).json({
            code: 401,
            message: "Invalid authentication token",
        });
    }
});

ApiRouter.post(
    "/new",
    wrapper(async (req, res) => {
        const userid = req.query.userid;
        const body = req.body;
        console.log(body);
        res.json(
            await sqldb.savePost({
                title: body.title,
                data: body.data,
                author: userid,
                image: body.image || null,
            })
        );
    })
);

ApiRouter.use((err, req, res, next) => {
    let message = err?.message || err.toString() || "Something broke";
    let code = err?.code || 400;
    res.status(code).json({
        code: code,
        message: message,
    });
});

module.exports = ApiRouter;
