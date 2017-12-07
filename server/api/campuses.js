const router = require('express').Router();
const {
    Campuses,
    Students
} = require('../db/models');


// GET api/campuses (Gets all campuses)
router.get('/', function (req, res, next) {
    Campuses.findAll()
        .then(campuses => res.json(campuses))
        .catch(next);
});

// GET api/campuses/:id (Gets specific campus)
router.get('/:id', function (req, res, next) {
    Campuses.findById(req.params.id)
        .then(campus => res.json(campus))
        .catch(next);
});

// POST api/campuses/ (Creates new student)
router.post('/', function (req, res, next) {
    Campuses.create(req.body)
        .then(campus => res.json(campus))
        .catch(next);
});

// PUT api/campuses/:id (Updates campus)
router.put('/:id', function (req, res, next) {
    Campuses.update(req.body, {
            where: {
                id: req.params.id
            },
            returning: true
        }).then(student => res.json(student))
        .catch(next);
});

// DELETE api/students/:id (Deletes campus)
router.delete('/:id', function (req, res, next) {
    Campuses.destroy({
            where: {
                id: req.params.id
            }
        }).then(campus => res.json(campus))
        .catch(next);
})

module.exports = router;