const express = require('express')
const router = express.Router()

const { read , list , create , update, remove } = require('../Controllers/Product')

//เราใช้สามารถ ใช้ตัว Postman ในการ test
//http://localhost:5000/api/product


router.get('/product' , list)
router.get('/product/:id' , read)
router.post('/product' , create)
router.put('/product/:id' , update) //put is update 
router.delete('/product/:id' , remove)




module.exports = router //ไฟล์อื่นจะใช้ไฟล์นี้ได้อย่างไร ก็สร้าง Export เพื่อให้ไฟล์อื่น import ไป