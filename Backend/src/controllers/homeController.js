import db from '../models/index';
import CRUDService from '../services/CRUDService';


let getHomePage = async(req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)

        });
    } catch (e) {
        console.log(e)
    }

}
let getCRUD = (req, res) => {
    return res.render('crud.ejs')
}
let postCRUD = async(req, res) => {
    let message = await CRUDService.createNewUser(req.body);
    console.log(message);
    return res.send('post crud form server');
}
let displaygetCRUD = async(req, res) => {
    let data = await CRUDService.getAllUser();
    //console.log('--------------------------');
    //console.log(data);
    // console.log('--------------------------');
    return res.render('displayCRUD.ejs', {
        datatable: data
    });
}
let getEditCRUD = async(req, res) => {

    let userId = req.query.id;
    console.log(userId)
    if (userId) {
        let userData = await CRUDService.getUserInfoById(userId);
        // console.log('--------------------------');
        //console.log(userData);
        //console.log('--------------------------');
        //let userData
    } else {
        return res.send("user not found")
    }


}

module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displaygetCRUD: displaygetCRUD,
    getEditCRUD: getEditCRUD,
}