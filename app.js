require('@babel/register');

const express = require('express');
const path = require('path');
const morgan = require('morgan');

const indexRouter = require('./routes/index.routes');
const categoriesRouter = require('./routes/categories.routes');

const app = express();
const PORT = 3000;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/categories', categoriesRouter);

app.listen(PORT, () => {
  console.log(`Server started port: ${PORT}`);
});
