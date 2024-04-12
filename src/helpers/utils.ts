const jwt = require('jsonwebtoken');
require('dotenv').config()


const privateKEY = process.env.SECRET
interface payloadInterface {
    email: string
    userId: number
}


const Utils = {
    generateJWT: (payload: payloadInterface) => {
        return jwt.sign(payload, privateKEY)
    },
    verifyJWT: (payload: any) => {
        return jwt.verify(payload, privateKEY)
    }
}



export default Utils