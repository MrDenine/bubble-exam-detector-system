
const express = require('express');
const app = express();
try {
    const server_port = 8000;
    app.listen(server_port, 
        function(){
            console.info(`[SERVER] Listening on port ${server_port}`)

            //Static File
            app.use(express.static('public'));
            app.use('/', express.static(__dirname));

            //Set Views engine
            app.set('views', './screens');
            app.set('view engine', 'ejs');

            //Setup Routes
            var route = require('./routes/route');
            // var signinRoute = require('./routes/signinRoute');
            // var reportRoute = require('./routes/reportRoute');
            // var borrowRoute = require('./routes/borrowRoute');
            // var returnRoute = require('./routes/returnRoute');
            // var regisEquipmentRoute = require('./routes/regisEquipmentRoute');
            // var regisMemberRoute = require('./routes/regisMemberRoute');
            // var departmentRoute = require('./routes/departmentRoute');
            // var notificationRoute = require('./routes/notificationRoute');
            // var logoutRoute = require('./routes/logoutRoute');

            //Initial Routes
            app.use('/', route);
            // app.use('/signin', signinRoute);
            // app.use('/report', reportRoute);
            // app.use('/borrow', borrowRoute);
            // app.use('/return', returnRoute);
            // app.use('/regisEquipment', regisEquipmentRoute);
            // app.use('/regisMember', regisMemberRoute);
            // app.use('/department', departmentRoute);
            // app.use('/notification', notificationRoute);
            // app.use('/logout',logoutRoute);

        }
    );

    module.exports = app;

} catch (e) {
    console.log('\x1b[36m%s\x1b[0m', 'Exception:' + e)
}