const mongoose = require('mongoose');
const dotenv = require('dotenv');


dotenv.config({ path: './config.env' });
const app = require('./app');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://trying:Vj1GU4y9kozSbsPn@feedback-5kb8t.mongodb.net/test?retryWrites=true&w=majority').then(() => console.log('DB connection successful!'));;

// const DB = process.env.DATABASE.replace(
//   '<PASSWORD>',
//   process.env.DATABASE_PASSWORD
// );

// mongoose
//   .connect(DB, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false 
//   })
//   .then(() => console.log('DB connection successful!'));

const port =  5000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
