const dbConnect = require('./config')

const deleteData = async () => {
    const db = await dbConnect();
    const result = await db.deleteMany(
        { name: 'note 5' }
    )
    console.warn(result);
}

deleteData()