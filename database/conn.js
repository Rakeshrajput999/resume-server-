const mongoose = require("mongoose");
const dbConnection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Rakesh999:Rakesh999@crud.yqvo1.mongodb.net/Studentapi?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("sucessfully connected to atlas");
  } catch (error) {
    console.log(error);
  }
};
// const url = "mongodb+srv://Rakesh999:GZ$R4qin*m.@kg3@crud.yqvo1.mongodb.net/Studentapi?retryWrites=true&w=majority"
// mongoose.connect(url).then(()=>{
//         console.log("connection established with mongodb student");
//     }).catch((e)=>{
//         console.log("no connection established mongo");

//     })

dbConnection();
