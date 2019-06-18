'use strict';

module.exports = function (app) {
    var todoList = require('./controller');

    app.route('/')
    .get(todoList.index);

    app.route('/employees')
    .get(todoList.employees);
    
    app.route('/employee/:employee_id')
    .get(todoList.findEmployee);

    app.route('/employee')
    .post(todoList.createEmployee);

    app.route('/employee')
    .put(todoList.updateEmployee);

    app.route('/employee')
    .delete(todoList.deleteEmployee);
}