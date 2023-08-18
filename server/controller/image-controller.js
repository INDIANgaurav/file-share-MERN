import file from "../models/file.js";
import File from "../models/file.js"

export const uploadImage = async(req , res ) =>{
const fileobj = {
    path : req.file.path ,
    name: req.file.originalname
}
    try{
   const file =  await File.create(fileobj) ;

console.log(file._id)
res.status(200).json({
    path:`http://localhost:8000/file/${file._id}`
})





}catch(err){
    console.log(err);
    res.status(500).json({
        error: err.message
    })
}
    

}



export const downloadImage = async(req , res ) =>{ 
    try{
        const file = await File.findById(req.params.fileId)
          await file.save();
        res.download(file.path , file.name)
    }catch(err){
        console.log(err);
        res.status(500).json({
            error: err.message
        })
    }
}