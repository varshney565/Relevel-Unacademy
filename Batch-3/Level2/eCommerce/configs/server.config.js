if(process.env.NODE_ENV !== 'producion'){
    //try to read the values of environment parameters from .env file
    require('dotenv').config();
    //.config() will read the content of .env file and tries to translate in the form of
    //environment parameters.
}

module.exports = {
    PORT : process.env.PORT
};
