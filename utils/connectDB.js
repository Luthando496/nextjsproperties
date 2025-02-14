import mongoose from 'mongoose'

let connected = false;

const connectDB = async()=>{
    mongoose.set("strictQuery",true);

    // if database is connected, don't connect again
    if(connected){
        console.log('mongo connected')
        return
    }

    /// connect to DB
    try{
       const connect =  await mongoose.connect(process.env.MONGODB_URI)
        connected = true;
        console.log(`${connect.connection.host}`)
    }catch(error){
        console.log(error,"MONGO ERROR")
    }
}


export default connectDB