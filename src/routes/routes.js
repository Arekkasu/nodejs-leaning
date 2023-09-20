const { Router } = require("express");
const router = Router();


router.post('/formulario_test', (req, res) => {

    console.log(req.body)
    res.send('NOC')

})


module.exports = router;