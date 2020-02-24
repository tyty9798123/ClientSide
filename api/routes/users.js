const { Router } = require('express')

const router = Router()

// Mock Users
const users = [
  { name: 'Alexandre' },
  { name: 'Pooya' },
  { name: 'Sébastien' }
]

/* GET users listing. */
router.get('/users', function (req, res, next) {
  res.json(users)
})

/* GET user by ID. */
router.get('/users/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < users.length) {
    res.json(users[id])
  } else {
    res.sendStatus(404)
  }
})

router.post('/users/login', function(req, res, next){
  if (req.body.account === 'admin' && req.body.password === 'admin4321'){
    req.session.uid = "1";
    res.send({
      success: true,
    })
  }else{
    res.send({
      success: false,
    })
  }
})

module.exports = router
