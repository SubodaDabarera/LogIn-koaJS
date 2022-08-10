const { ObjectId } = require('mongodb');

const items = require('../dal/').db('ShoppingCart').collection('items')

const addItems = async(data) => {
    const {name, price, qty, traderId} = data;

    try{
        const result = await items.insertOne({name, price, qty, traderId})
        return result;
    }catch(err){
        console.log(err)
        return err;
    }
}

const getTraderItems = async(data) => {
    const {traderId} = data;

    try{
        const result = await items.find({traderId: traderId})
        return result;
    }catch(err){
        console.log(err)
        return err;
    }
}

const getItems = async() => {

    try{
        const result = await items.find()
        return result;
    }catch(err){
        console.log(err)
        return err;
    }
}

const editItems = async(data) => {
    const {itemId , name, price, qty, traderId} = data;

    try{
        const result = await items.replaceOne({_id: ObjectId(itemId)}, {name: name, price: price, qty: qty, traderId: traderId})
        return result;
    }catch(err){
        console.log(err)
        return err;
    }
}

const deleteItems = async(data) => {
    const {itemId} = data;
    try{
        const result = await items.deleteOne({_id: ObjectId(itemId)})
        return result;
    }catch(err){
        console.log(err)
        return err;
    }
}

module.exports = {addItems, getTraderItems,editItems, getItems, deleteItems}
