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

module.exports = { 
    findAllEstate,
    findEstateById
}