const dbConnect = require('./config');

const updateData = async () => {
    let db = await dbConnect();
    const result = await db.updateOne(
        { name: '' },
        {
            $set: { name: 'f21', price: 560 }
        }
    )
    console.warn(result);
}

updateData();
