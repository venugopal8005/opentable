const mongoose = require('mongoose');
const connectdb  = async () => {
    try {
        await mongoose.connect('mongodb+srv://vgv38634:e1MKyNR6LLolaHt1@user-management.dyuro.mongodb.net/',{
        useNewUrlParser:true,
        useUnifiedTopology: true
    });
    console.log("connection successfull");
    } catch (error) {
        console.log("error");

    }
};
module.exports = connectdb;
