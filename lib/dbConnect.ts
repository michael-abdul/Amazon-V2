import mongoose from 'mongoose';

async function dbConnect(){
    try{
        await mongoose.connect(process.env.MONGODB_URI!)
        console.log('Connected to MongoDB');
    }catch(erorr){
        throw new Error('Connection failed!')

}
}

export default dbConnect;