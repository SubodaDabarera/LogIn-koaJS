const Router = require('@koa/router');
const { getItems, editItems, getTraderItems, addItems, deleteItems } = require('../controllers/itemController');

const itemRouter = new Router({
    prefix: '/items'
})

// add items
itemRouter.post('/new', async(ctx) => {
    const data = ctx.request.body;
    ctx.body = await addItems(data);
    ctx.status = 201
})

// get trader items
itemRouter.get('/trader/inventory', async(ctx) => {
    const data = ctx.request.query;
    ctx.body = await getTraderItems(data);
})

// get all items
itemRouter.get('/',async(ctx) => {
    ctx.body = await getItems();
})

//edit items
itemRouter.put('/edit', async(ctx) => {
    const data = ctx.request.body
    ctx.body = await editItems(data);
})

// delete an item
itemRouter.delete('/delete', async(ctx) => {
    const data = ctx.request.query;
    ctx.body = await deleteItems(data)
})

// add to cart
// itemRouter.post('/cart/new', async(ctx) => {
//     const data = ctx.request.body;
//     ctx.body = await addToCart();
//     ctx.status = 201
// })

// // view cart
// itemRouter.get('/cart/',async(ctx) => {
//     const data = ctx.request.query;
//     ctx.body = await getCart();
// })

// // purchase
// itemRouter.post('/purchase', async(ctx) => {
//     const data = ctx.request.body
//     ctx.body = await makePurchase(data)

// })

module.exports = itemRouter