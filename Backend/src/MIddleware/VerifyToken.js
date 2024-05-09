import jwt from 'jsonwebtoken'

const verifyToken = async(req,res,next)=>{
    const token = req.header('Authorization')
    if(!token){
        return res.status(400).send({Message:"Login First"})
    }
    try {
        const decode =  jwt.verify(token,process.env.Secret_Key)
        if(decode){
            req.isCheck = decode.id
            next()
        }else{
            return res.status(400).send({Message:"no Token Provided"})
        }
    } catch (error) {
        console.log(`ERROR:${error}`);
    }
}


export {verifyToken}