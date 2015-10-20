exports.neData = require('ne-data');

var neAuto = {

    //Configure Server
    server: require('./serverConfig'),

    //Import modules to use in project
    mongoose: require('mongoose'),
    react: require('react'),
    express: require('express'),
    axios: require('axios'),

    //ne modules
    neData: require('ne-data'),
    neHandler: require('ne-handler'),
    neAdmin: require('ne-admin'),
    neAuth: require('ne-auth'),
    neGulp: require('ne-gulp')

};

module.exports = neAuto;