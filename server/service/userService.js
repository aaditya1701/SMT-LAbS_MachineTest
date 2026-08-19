import User from "../model/User.js";

const registerUser = async (userData) => {
    User.create(userData);
}


const loginUser = async (userData) => {
    console.log(userData.email
+"   " +userData.password)
   let user = await User.findOne({
        email: userData.email,
        password: userData.password
    }).exec();
 return user;
}


export default {
    registerUser,
    loginUser
};