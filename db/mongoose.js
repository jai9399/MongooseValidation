const mongoose = require('mongoose');
const validator = require('validator');
mongoose.connect('mongodb://127.0.0.1:27017/taskApi',{
  useNewUrlParser: true,
  useUnifiedTopology: true  
})
 const User =mongoose.model('User',{
     name:{
         type: String,
         required:true
     },
     email:{
        type:String,
        required:true,
           validate(value){
               if(!validator.isEmail(value)){
                    throw new Error("Incorrect Email");
                }
                 
           }
    },
    age:{
         type:Number,
            validate(value){
                if(value<0 || value >150){
                     throw new Error('Incorrect Age')
                 }
           
            }
     }
 })

 const me = new User({
     name:"Jai",
     age:90,
     email:"jai9399@gmail.com"
 });

 me.save().then(()=>{
     console.log(me);
 }).catch((error)=>{
     console.log(error);  
})


// const Tasks = mongoose.model('tasks',{
//     task:{type:String},
//     completed:{type:Boolean}
// })
// const next = new Tasks({
//    task:"Clean Room",
//    completed:false})   

//  next.save().then(()=>{
//          console.log(next)}).catch(console.log('Error'))
