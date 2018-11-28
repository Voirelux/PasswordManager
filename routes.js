const UsersController = require('./user.controller');



exports.routesConfig = function (app) {
    app.post('/', [
        UsersController.insert
    ]);
    app.get('/',
        UsersController.list
    );

    app.get('/:userId', 
        UsersController.getById
    );
    app.patch('/:userId', 
        UsersController.patchById
    );
    app.delete('/:userId', 
        UsersController.removeById
    );
};
