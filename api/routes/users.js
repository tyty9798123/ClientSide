const { Router } = require('express')

const router = Router()

// Mock Users
const users = [
  { name: 'Alexandre' },
  { name: 'Pooya' },
  { name: 'Sébastien' }
]

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json(users)
})

/* GET user by ID. */
router.get('/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < users.length) {
    res.json(users[id])
  } else {
    res.sendStatus(404)
  }
})

router.post('/login', function(req, res, next){
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

router.post('/is_login', function(req, res, next){
  console.log('ed')
  if(req.session.uid){
    res.json({
      is_login: true,
      user_id: 1
    })
    console.log('login');
    return;
  }
  res.json({
    is_login: false,
  })
  console.log('no login')
})

module.exports = router
