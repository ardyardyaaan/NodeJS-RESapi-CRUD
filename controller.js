'use strict';

var response = require('./res');
var connection = require('./connection');

//READ(GET)
exports.employees = function(req, res) {
    connection.query('SELECT * FROM employee', function (error, rows, fields) {
        if (error) {
            console.log(error)
        } else {
            response.ok(rows, res)
        }
    });
}

//SEARCH(GET)
exports.findEmployee = function(req, res) {
    var employee_id = req.params.employee_id;

    connection.query('SELECT * FROM employee where id = ?', [employee_id], function(error, rows, fields) {
        if (error) {
            console.log(error)
        } else {
            response.ok(rows, res)
        }
    });
}

//CREATE(POST)
exports.createEmployee = function(req, res) {
    var nomor_karyawan = req.body.nomor_karyawan;
    var nama_karyawan = req.body.nama_karyawan;
    var departemen = req.body.departemen;
    var jabatan = req.body.jabatan;
    var alamat = req.body.alamat;

    connection.query('INSERT INTO employee (nomor_karyawan, nama_karyawan, departemen, jabatan, alamat) values (?,?,?,?,?)', [
        nomor_karyawan,
        nama_karyawan,
        departemen,
        jabatan,
        alamat],
        function(error, rows, fields) {
        if (error) {
            console.log(error)
        } else {
            response.ok(rows, res)
        }
    });
}

//UPDATE(PUT)
exports.updateEmployee = function(req, res) {
    var employee_id = req.body.employee_id;
    var nomor_karyawan = req.body.nomor_karyawan;
    var nama_karyawan = req.body.nama_karyawan;
    var departemen = req.body.departemen;
    var jabatan = req.body.jabatan;
    var alamat = req.body.alamat;

    connection.query('UPDATE employee SET nomor_karyawan = ?, nama_karyawan = ?, departemen = ?, jabatan = ?, alamat = ? WHERE id = ?', [
        nomor_karyawan,
        nama_karyawan,
        departemen,
        jabatan,
        alamat,
        employee_id],
        function(error, rows, fields) {
        if (error) {
            console.log(error)
        } else {
            response.ok(rows, res)
        }
    });
}

//DELETE(DELETE)
exports.deleteEmployee = function(req, res) {
    var employee_id = req.body.employee_id;

    connection.query('DELETE FROM employee WHERE id = ?', [employee_id], function(error, rows, fields) {
        if (error) {
            console.log(error)
        } else {
            response.ok(rows, res)
        }
    });
}

exports.index = function(req, res) {
    response.ok("Im from NodeJS RESTful side!", res)
}