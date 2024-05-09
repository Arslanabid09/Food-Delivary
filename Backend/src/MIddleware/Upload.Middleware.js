import multer from "multer";


const storage = multer.diskStorage({
    destination:(req,res ,cb)=>{
        cb(null,'Public/Images')
    },
    filename:(req,file,cb)=>{
        cb(null,`${Date.now()}-${file.originalname}`)
    }
})

const Upload = multer({storage:storage})

export default Upload