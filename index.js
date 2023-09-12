const dbConnect = require('./config')

// dbConnect().then((resp) => {
//     resp.find({ name: 'm14' }).toArray().then((data) => {
//         console.warn(data);
//     })
// })

const getData = async () => {
    let data = await dbConnect();
    data = await data.find({name:'moto12'}).toArray();
    console.warn(data, "data");
}

getData()