import express from 'express';
import { jwtAuth } from '../middlewares/jwtAuth.js';
import { TodoService } from '../services/todoService.js';
const router = express.Router();

router.post('/',  TodoService.create);

    // post /todo

router.get('/', TodoService.read);

    // get /todo

router.put('/:todoId', TodoService.update);

    // put /todo/3 body => {content, state}

router.delete('/:todoId', TodoService.delete);

    // delete /todo/3

export default router;
