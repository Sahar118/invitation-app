// const mongoose = require("mongoose");

// const connectDB = async () => {
//     try {
//         const conn = await mongoose.connect(process.env.MONGO_URL, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log(`Mongo Connected: ${conn.connection.host}`);
//     } catch (error) {
//         console.log(`${error}`);
//     }
// };

// module.exports = connectDB;

const mongoose = require('mongoose');
// mongoose.set('strictQuery', false)

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.on('connected', () => {
    console.log('Mongo DB Connection Successful');
});

connection.on('error', (error) => {
    console.log('Mongo DB Connection Failed!');
    console.error(error);
});
