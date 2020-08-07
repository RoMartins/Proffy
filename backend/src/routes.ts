import express from 'express'
import ClassesController from './controllers/classesController';
import ConnectionsController from './controllers/connectionsController';

const routes = express.Router();
const classesController = new ClassesController();
const connectionsController = new ConnectionsController();


routes.post('/classes', classesController.create )
routes.get('/classes', classesController.index )

routes.post('/connections', connectionsController.create)
routes.get('/connections', connectionsController.index )

export default routes;