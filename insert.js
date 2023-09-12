const dbConnect = require('./config');

const insert = async () => {
    const db = await dbConnect();
    const result = await db.insertMany([
        {name: 'note 5', brand: 'vivo', price: 320, category: 'mobile'},
        {name: 'realme 6', brand: 'realme', price: 420, category: 'mobile'},
        {name: 'poco f1', brand: 'poco', price: 400, category: 'mobile'}
    ]);
    if (result.acknowledged) {
        console.log(result, "log");
    }
}

insert();