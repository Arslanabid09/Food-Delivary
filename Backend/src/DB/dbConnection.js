import mongoose from "mongoose";


const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.Database)
        console.log('database is connected');
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}
export default  dbConnection