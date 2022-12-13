// 18ms45ss
import express from 'express';

let configViewEngine = (app) => {
  app.use(express.static('src/public')); //22ms44ss
  app.set('view engine', 'ejs');
  app.set('views', 'src/views'); //24ms41ss
};

export default configViewEngine;
