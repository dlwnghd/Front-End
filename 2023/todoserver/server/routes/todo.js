import express from 'express';
import { jwtAuth } from '../middlewares/jwtAuth.js';
import { TodoService } from '../services/todoService.js';
const router = express.Router();

router.get('/', jwtAuth, TodoService.read);

    // get /todo

router.post('/', jwtAuth,  TodoService.create);

    // post /todo => {title, content}

router.put('/:todoId', jwtAuth, TodoService.update);

    // put /todo/3 body => {content, state}

router.delete('/:todoId', jwtAuth, TodoService.delete);

    // delete /todo/3

export default router;
