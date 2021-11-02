import db from '../models/index';
import bcrypt from 'bcryptjs';
const salt = bcrypt.genSaltSync(10);

let createNewUser = async(data) => {
    return new Promise(async(resolve, reject) => {
        try {
            let hashPassWordFromBcrypt = await hashUserPassWord(data.password);
            await db.User.create({
                email: data.email,
                password: hashPassWordFromBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phonenumber: data.phonenumber,
                gender: data.gender === "1" ? true : false,
                roleId: data.roleId,
            })

            resolve('da tao 1 user moi thanh cong')
        } catch (e) {
            reject(e);
        }

    })

}
let hashUserPassWord = (password) => {
    return new Promise(async(resolve, reject) => {
        try {
            var hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (e) {
            reject(e);
        }
    })
}
let getAllUser = () => {
    return new Promise(async(resolve, reject) => {
        try {
            let users = db.User.findAll({
                raw: true,
            });
            resolve(users);
        } catch (e) {
            reject(e);
        }

    })
}
let getUserInfoById = (id) => {
    return new Promise(async(resolve, reject) => {
        try {
            let user = db.User.findOne({
                where: { id: userId }
            })
            if (user) {
                resolve(user)
            } else {
                resolve([])
            }
        } catch (e) {
            reject(e)
        }
    })
}
module.exports = {

    createNewUser: createNewUser,
    getAllUser: getAllUser,
    getUserInfoById: getUserInfoById,
}