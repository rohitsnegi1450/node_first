const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/e-comm");

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
});

const main = async () => {
    const ProductsModel = mongoose.model('product', ProductSchema);
    let data = new ProductsModel({ name: "s21", price: 1000 });
    let result = await data.save();

    console.log(result);
}

const updateDb = async () => {
    const ProductsModel = mongoose.model('product', ProductSchema);
    let data = await ProductsModel.updateOne(
        { name: 's21' },
        { $set: { price: 1100 } }
    );
    console.log(data);
}

// updateDb();

const deletedb = async () => {
    const ProductsModel = mongoose.model('product', ProductSchema);
    let data =await ProductsModel.deleteOne({name: 's21'})
};

// main();