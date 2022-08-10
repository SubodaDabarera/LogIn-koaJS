const users = require('../dal').db('ShoppingCart').collection('users')
const bcrypt = require('bcrypt')

const createProfile = async(data) => {
    const {username, email, password,role, age} = data;

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    try{
        const result = await users.insertOne({username, email, hashedPassword,role, age})
        return result;
    }catch(err){
        console.log(err)
        return err;
    }
}

const userLogIn = async(data) => {
    console.log(data)
    const {email, password} = data;
    
    console.log(email, password)
    const user = await users.findOne({email: email})
    console.log(user)

    if(user){

        if(bcrypt.compareSync(password, user.hashedPassword) == true){
            console.log("matches")
            return [true, user]
        }
        else{
            console.log("mis-matches")
            return [false, user]
        }
    }
    else{
        let userArr = [false, user]
        return userArr;
    }
}

module.exports = {createProfile, userLogIn};