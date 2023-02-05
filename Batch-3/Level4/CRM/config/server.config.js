if(process.env.NODE_ENV != 'production'){
    /**
     * It will read the properties of the .env file and insert inside the process.env object
     */
    require('dotenv').config();
}