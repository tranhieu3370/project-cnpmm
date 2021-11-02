import express from "express";
import homeController from "../controllers/homeController"
import userController from "../controllers/userControllers"
let router = express.Router();
let initWebRoutes = (app) => {
    // de hoc
    router.get('/', homeController.getHomePage);
    router.get('/crud', homeController.getCRUD);
    router.post('/post-crud', homeController.postCRUD);
    router.get('/get-crud', homeController.displaygetCRUD);
    router.get('/edit-crud', homeController.getEditCRUD);



    //
    router.post('/api/login', userController.handleLogin)
    router.get('/api/get-all-user', userController.handleGetAllUsers);
    router.post('/api/create-new-user', userController.handleCreateNewUsers);
    router.put('/api/edit-user', userController.handleEditUsers);
    router.delete('/api/delete-user', userController.handleDeleteUsers);
    return app.use("/", router)


}
module.exports = initWebRoutes;