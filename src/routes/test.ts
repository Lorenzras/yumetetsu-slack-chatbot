import {RequestHandler, Router as router} from 'express';

const route = router();

const testHandler : RequestHandler = (req, res) => {
  console.log(req, 'Success');
  res.status(200).send('<p>SUCCESS</p>');
};

route.get('/show', testHandler);

export default route;
