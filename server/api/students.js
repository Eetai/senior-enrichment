const router = require('express').Router();
const {
    Campuses,
    Students
} = require('../db/models');

// GET api/students (Gets all students)
router.get('/', function (req, res, next) {
    Students.findAll()
        .then(students => res.json(students))
        .catch(next);
});

// GET api/students/:id (Gets specific student)
router.get('/:id', function (req, res, next) {
    Students.findById(req.params.id)
        .then(student => res.json(student))
        .catch(next);
});

// POST api/students/ (Creates new student)
router.post('/', function (req, res, next) {
    Students.create(req.body)
        .then(student => res.json(student))
        .catch(next);
});

// PUT api/students/:id (Updates student)
router.put('/:id', function (req, res, next) {
    Students.update(req.body, {
            where: {
                id: req.params.id
            },
            returning: true
        }).then(student => res.json(student))
        .catch(next);
});

// DELETE api/students/:id (Deletes student)
router.delete('/:id', function (req, res, next) {
    Students.destroy({
            where: {
                id: req.params.id
            }
        }).then(students => res.json(students))
        .catch(next);
})

module.exports = router;