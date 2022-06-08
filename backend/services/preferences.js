const { ObjectId } = require('mongodb')
const { DATABASE_NAME, COLLECTION_PREFERENCE , getMongoCollection } = require("../db")

async function createPreference(data) {
    const collection = await getMongoCollection(DATABASE_NAME, COLLECTION_PREFERENCE)
    return await collection.insertOne(data)
}
async function findLast5Preference(id) {
    //console.log(id)
    const collection = await getMongoCollection(DATABASE_NAME, COLLECTION_PREFERENCE)
    /*
    return await collection.find(
        { userId: id }
    ).sort({$natural:1}).limit(5).toArray();
    */


    // return await collection.find({userId: id}).limit(5).toArray()
    
    return await collection.aggregate([
        {
            '$match': {
                'userId': id,
            }
        }, {
            '$lookup': {
                'from': 'estate', 
                'localField': 'estateId', 
                'foreignField': '_id', 
                'as': 'estate'
            }
        },
        {
            $sort: {
                'addDate': -1
            }
        }
    ]).limit(5).toArray()
}

module.exports = { 
    createPreference,
    findLast5Preference
}