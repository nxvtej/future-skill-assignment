require('dotenv').config(); // Load environment variables

const mongoose = require("mongoose")

const mongoUrl = process.env.DOCKER_MONGODB;

mongoose.connect(mongoUrl, {
    
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>
{
    console.log("Connected to MongoDB");
}).catch(err => {
    console.log(err)
})


const cardSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})



const cardModel = mongoose.model('Card', cardSchema);

module.exports = {
    cardModel
}