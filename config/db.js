const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGODB_URI ||
        "mongodb+srv://newuser1:Password123@cluster0.jhmra.mongodb.net/dev-connector?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }
    );

    console.log(
      `MongoDb Connected ${conn.connection.host}`.cyan.underline.bold
    );
  } catch (err) {
    console.log(`Error ${err.message}`.red);
    process.exit(1);
  }
};

module.exports = connectDB;
