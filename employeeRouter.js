const express = require('express');
const Employee = require('./models/Employee');

const router = express.Router();

router.get('/', async (request, response) => {
    try {
        const employees = await Employee.find({});
        response.status(200).json(employees);
    } catch (error) {
        response.status(500).json(error);
    }
});

router.get('/:id', async (request, response) => {
    try {
        const employee = await Employee.findById(request.params.id);
        if (!employee) {
            return response.status(404).send("Employeee not found");
        }
        response.status(200).json(employee);
    } catch (error) {
        response.status(500).json(error);
    }
});

router.post('/', async (request, response) => {
    try {
        const employee = new Employee(request.body);
        await employee.save();
        response.status(200).json(employee);
    } catch (error) {
        response.status(500).json(error);
    }
});

router.put('/:id', async (request, response) => {
    try {
        const employee = await Employee.findByIdAndUpdate(request.params.id, request.body, { new: true });
        if (!employee) {
            return response.status(404).send("Employeee not found");
        }
        response.status(200).json(employee);
    } catch (error) {
        response.status(500).json(error);
    }
});

router.delete('/:id', async (request, response) => {
    try {
        const employee = await Employee.findByIdAndDelete(request.params.id);
        if (!employee) {
            return response.status(404).send("Employeee not found");
        }
        response.status(200).json(employee);
    } catch (error) {
        response.status(500).json(error);
    }
});

module.exports = router;