const express = require('express')
const router = express.Router()

//endpoint 
router.get('/auth' , (req ,res) => { 
    res.send('Hello auth endpoint')
})


module.exports = router //ไฟล์อื่นจะใช้ไฟล์นี้ได้อย่างไร ก็สร้าง Export เพื่อให้ไฟล์อื่น import ไป