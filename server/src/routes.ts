import express from 'express';
import ClassesController from './controlles/ClassesController';
import ConnectionsController from './controlles/ConnectionsController';


const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsController = new ConnectionsController();

routes.get('/classes', classesControllers.index );
routes.post('/classes', classesControllers.create );

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);

export default routes;