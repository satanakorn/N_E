const express = require('express'); //เรียกใช้ express ผ่าน require

const morgan = require('morgan')
const cors = require('cors')
const bodyParse = require('body-parser')

const connectDB = require('./Config/db')

const { readdirSync } = require('fs')



/*const productRouter = require('./Routes/Product');
const AuthRouter = require('./Routes/auth');
*/
const App = express(); //สร้างตัวแปร App เพื่อใช้งาน express 

connectDB()


// middleware คือเป็นตัวกลางสำหรับการเช็กความปลอดถัย ex จะเข้ามา Route นี่แต่ไม่ได้ login และไม่มี token ส่งมาด้วย จะไม่ให้ทำงาน
//App.post('/product' , check  , (req , res) => {
//    some process here
//})

App.use(morgan('dev'))
App.use(cors())
App.use(bodyParse.json({limit: '10mb'}))


//Route มี 3 แบบ
// วิธีแรก Route 1 จะไม่ทำแบบนี้
//App.get('/product' ,  (req , res) => { 
//    res.send('hello route 554')
//})

//Route 2
//App.use('/api' , productRouter)
//App.use('/api' , AuthRouter)

//Route 3
readdirSync('./Routes').map((r) => App.use('/api' , require('./Routes/'+r))) //เข้าไป loop ว่าใน Routes มีไฟล์อะไรบ้าง


App.listen(5000 , () => console.log('Server is running port 5000') ) 