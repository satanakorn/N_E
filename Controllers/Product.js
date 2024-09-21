//controller คือการเขียนฟังก์การทำงานต่าๆ เพื่อให้ file routes ใช้งาน 
const Product = require('../Models/Product');

exports.read = async (req , res) => { 
    
    try {
        const id =  req.params.id
        const producted = await Product.findOne({_id:id}).exec()
        res.send(producted)
    } catch (err) { 
        console.log(err)
        res.status(500).send('Server Error')
    }
} //การทำงานเป็นลำดับขั้น async / await


exports.list =  async (req , res) => { 
    try{
        //code

        const producted = await Product.find({}).exec()

        res.send(producted)
    } catch (err) { 
        //error 
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.create =  async (req , res) => { 
    try{
        //code
        console.log(req.body)
        const producted = await Product(req.body).save()
        res.send(producted)
    } catch (err) { 
        //error 
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.update =  async (req , res) => { 
    try{
        //code
        const id = req.params.id
        const update = await Product.findOneAndUpdate({ _id:id }, req.body , {new : true}).exec()
        res.send(update)
    } catch (err) { 
        //error 
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.remove =  async (req , res) => { 
    try{
        //code
        const id = req.params.id 
        const removed = await Product.findOneAndDelete({ _id: id}).exec()
        res.send(removed)
    } catch (err) { 
        //error 
        console.log(err)
        res.status(500).send('Server Error')
    }
}