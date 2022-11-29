/**
 * This file will have the db related configs.
 */

module.exports = {
    HOST : "localhost",
    USER : "root",
    PASSWORD : "0000",
    dialect : "mysql",
    DB : "ecom_db",
    pool : {
        min : 0,
        max : 5,            //Maximum connection possible at any time.
        acquire : 30000,    //In ms --> wait for 30000ms before aborting a connection.
        idle : 1000         //If the client does't made a connection for the last 1000ms,their connection will be re-released.
        //if their is no request for next 1000ms,then the connection thread will be released.
    }
};