const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/rajistraform",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true

}).then(()=>{
    console.log(`cunnection success`);
}).catch((e)=>{
    console.log(`no connection`);
})