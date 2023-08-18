 import mongoose from "mongoose"
 
 const DBconnection = () => {
    const DB_URL = "mongodb+srv://gaurav:qgMJmBG4FlzY5K3q@cluster0.o3ij4s4.mongodb.net/" ;
    try{
            mongoose.connect( DB_URL  , {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                
            } ) ;
            console.log("your db connection is established")
    }catch(error){
        console.log("error in  DB connection")
    }
};



export default DBconnection ;
//qgMJmBG4FlzY5K3q