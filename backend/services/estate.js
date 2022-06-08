const { ObjectId } = require('mongodb')
const { DATABASE_NAME, COLLECTION_ESTATE , getMongoCollection } = require("../db")

async function findAllEstate() {
    const collection = await getMongoCollection(DATABASE_NAME, COLLECTION_ESTATE)
    return await collection.find().toArray() 
}
async function findEstateById(id) {
    if (ObjectId.isValid(id)) {
        const collection = await getMongoCollection(DATABASE_NAME, COLLECTION_ESTATE)
        return await collection.findOne({ _id: new ObjectId(id) })
    }
}

async function findEstateByPerfect(data) {
    const collection = await getMongoCollection(DATABASE_NAME, COLLECTION_ESTATE)
    const result = await collection.find({
        $and: [
            {price: { $gt :  data.priceMin, $lt : data.priceMax}},
            {size: { $gt :  data.sizeMin, $lt : data.sizeMax}}, 
            {wc: { $gt :  data.wcMin, $lt : data.wcMax}},
        ]
        }).toArray() 
    return result
}

module.exports = { 
    findAllEstate,
    findEstateById,
    findEstateByPerfect
}