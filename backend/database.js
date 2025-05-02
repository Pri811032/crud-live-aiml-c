const mongoose =require('mongoose');
async function dbConn(){
    const conn=await mongoose.connect('mongodb+srv://priyanshi230118:root@cluster0.lkquufp.mongodb.net/crud-live?retryWrites=true&w=majority&appName=Cluster0');
    if(conn){
        console.log('database connect successfully')

    }
    else{
        console.log('connection fail');
    }
}
module.exports=dbConn;