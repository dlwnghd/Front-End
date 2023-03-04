import express from 'express';
import { jwtAuth } from '../middlewares/jwtAuth.js';
import { TodoService } from '../services/todoService.js';
const router = express.Router();

router.get('/', TodoService.read);

    // get /todo

router.post('/',  TodoService.create);

    // post /todo => {title, content}

router.put('/:todoId', TodoService.update);

    // put /todo/3 body => {content, state}

router.delete('/:todoId', TodoService.delete);

    // delete /todo/3

export default router;
