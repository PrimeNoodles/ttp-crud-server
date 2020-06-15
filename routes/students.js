var express = require('express');
var router = express.Router();
const { Student, Campus } = require('../database/models');

router.get('/', async(req, res, next) => {

    try {
        const students = await Student.findAll({ include: Campus });
        console.log(students);
        res.status(200).json(students);
      } catch (err) {
        next(err);
      }

});

router.get('/:id',async (req, res, next)=>{
    const { id } = req.params;
    try {
      const student = await Student.findByPk(id);
      res.status(200).json(student);
    } catch (err) {
      next(err);
    }
});

router.post('/', async (req, res, next)=>{
    const { firstName, lastName, email, imageUrl, gpa,} = req.body;
    const studentObj = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        imageUrl: imageUrl,
        gpa: gpa,
    };
  try{
    const newStudent = await Student.create(studentObj);
    res.status(201).json (newStudent);
  }
  catch (err){
    next(err);
  }
});

router.put('/:id', async (req, res, next) =>{
    const { id } = req.params;
    const { firstName, lastName, email, imageUrl, gpa } = req.body;
    const updatedObj = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        imageUrl: imageUrl,
        gpa: gpa,

    };
  try{
    const student = await Student.findByPk(id);
    console.log(updatedObj);
    await student.set(updatedObj);
    const updatedStudent = await student.save();
    console.log(updatedStudent)
    res.status(201).send(updatedStudent);
  }
  catch (err){
    next(err);
  }
});

router.delete('/:id', async (req, res, next) =>{
    const { id } = req.params;
  try{
    const student = await Student.findByPk(id);
    await student.destroy();
    res.sendStatus(204);
  }
  catch(err){
    next(err);
  }
});

module.exports = router;