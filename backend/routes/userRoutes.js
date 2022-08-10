const Router = require('@koa/router');
const {createProfile, userLogIn} = require('../controllers/userController');

const userRouter = new Router({
    prefix: '/users'
})

userRouter.post('/new', async(ctx) => {
    const data = ctx.request.body;
    ctx.body = await createProfile(data)
})

userRouter.post('/logIn', async(ctx) => {
    const data = ctx.request.body;
    ctx.body = await userLogIn(data)
    
})

module.exports = userRouter;