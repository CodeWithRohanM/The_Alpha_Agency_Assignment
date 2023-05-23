const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const URI = "mongodb://localhost:27017/TheAlphaAgencyAssignment";

const root = mongoose.connect(URI)
.then(()=>{
    console.log("Database Connected Successfully!!");
})
.catch((err)=>{
    console.warn("Error Occured..");
    console.warn(err);
});