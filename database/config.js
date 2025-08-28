const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        await mongoose.connect( process.env.DB_CNN, { serverSelectionTimeoutMS: 15000, family: 4} );
        console.log('DB Online');
    } catch (error) {
        console.log(error.message);
        throw new Error('Error a la hora de iniciar la BD');
    }
}

module.exports = {
    dbConnection,
}