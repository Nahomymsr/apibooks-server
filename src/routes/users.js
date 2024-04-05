const{Router} = require('express')
const router = Router()

router.route('/').get((req,res) => res.send("user books"))

module.exports = router;