const { MongoClient } = require("mongodb");
const MONGO_URL = "mongodb+srv://nivea:nivea@cluster0.thite.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const MONGO_NAME = "blog";




const mongo = {
    db: null,
    async connect() {

        try {
            const Client = new MongoClient(MONGO_URL);
            await Client.connect();
            console.log("MongoDb connected successfully");
            this.db = await Client.db(MONGO_NAME);
            console.log(`Db connected successfully -${MONGO_NAME}`);

        } catch (err) {
            console.error("error connecting mongodb");
        }
    }
}


module.exports = mongo;