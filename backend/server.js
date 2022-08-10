const Koa = require('koa')
const cors = require('@koa/cors')
const bodyParcer = require('koa-bodyparser')
require('./dal/')
const itemRouter = require('./routes/itemRoutes')
const userRouter = require('./routes/userRoutes')

const app = new Koa();

app.use(cors())
app.use(bodyParcer())

app.use(userRouter.routes())
    .use(userRouter.allowedMethods())

app.use(itemRouter.routes())
    .use(itemRouter.allowedMethods())

app.use(async ctx => {
    ctx.body = 'Hello world'
})

app.listen(3000, () => {
    console.log('App is running on PORT 3000')
})