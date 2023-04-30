const mongoose = require('mongoose')

// const url = "mongodb+srv://shreyac1144:T2yLcs10EXjRsW1d@cluster0.eqylffr.mongodb.net/?retryWrites=true&w=majority"
const url = "mongodb+srv://shreyac1144:4dnkdfeJX1VoxNvw@cluster0.eqylffr.mongodb.net/BITDiscussionForum?retryWrites=true&w=majority"

//pass:s2xq7h92Jy66F77M
module.exports.connect = () => {
    mongoose
        .connect(url)
        .then((res) => console.log("MongoDb is connected successfully"))
        .catch((err) => console.log('Error: ', err));
};

