const mongoose=require("mongoose");

// const host ="localhost";
// const port ="27017";
// const db= "Villaplast";

const host ="santiago_0";
const port ="12345";
const db= "villa.yb49rxn.mongodb.net/?retryWrites=true&w=majority";

// mongodb+srv://santiago_0:<password>@villa.yb49rxn.mongodb.net/?retryWrites=true&w=majority
exports.mongoConnect=()=>{
    // const mongoStringConnection=`mongodb://${host}:${port}/${db}`;
    const mongoStringConnection=`mongodb+srv://${host}:${port}@${db}`;

    mongoose.connect(mongoStringConnection);
    mongoose.Promise=global.Promise;
    const dbConnection=mongoose.connection;
    dbConnection.on("error",console.error.bind(console,"Mongo connection error"));

}