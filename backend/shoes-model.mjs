import mongoose from 'mongoose';
import 'dotenv/config';

//Connect based on the .env file parameters
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;


db.once("open", (err) => {
    if(err){
        res.status(500).json({ error: '500: Connection to the server failed' });
    } else {
        console.log('Successfully connected to MongoDB ShoeLog collection using MongoDb ');
    }
});

//Define the schema
const shoeSchema = mongoose.Schema({
    brand: { type: String, required: true},
    name: { type: String, required: true},
    price: {type: Number, required: true},
    traction: {type: Number, required: true},
    materials: {type: Number, required: true},
    fit: {type: Number, required: true},
    weight: {type: Number, required: true}

});


const Shoe = mongoose.model("Shoe", shoeSchema);


const createShoe = async(brand, name, price, traction, materials, fit, weight) => {
    const shoe = new Shoe({
        brand: brand,
        name: name,
        price: price,
        traction: traction,
        materials: materials,
        fit: fit,
        weight: weight
    });
    return shoe.save();
}


// Find
const findShoe = async () => {
    const query = Shoe.find();
    return query.exec();
}


// Find by ID
const findShoeById = async (_id) => {
    const query = Shoe.findById({_id: _id});
    return query.exec();
}

//Delete shoe based on _id
const deleteById = async (_id) => {
    const result = await Shoe.deleteOne({_id: _id});
    return result.deletedCount;
};


//Update shoe
const replaceShoe = async (_id, brand, name, price, traction, materials, fit, weight) => {
    const result = await Shoe.replaceOne({_id: _id}, {
        brand: brand,
        name: name,
        price: price,
        traction: traction,
        materials: materials,
        fit: fit,
        weight: weight
    });
    return {
        _id: _id,
        brand: brand,
        name: name,
        price: price,
        traction: traction,
        materials: materials,
        fit: fit,
        weight: weight 
    }
}




export { createShoe, findShoe, findShoeById, replaceShoe, deleteById }