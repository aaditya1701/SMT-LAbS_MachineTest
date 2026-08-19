import express from 'express';
import userService from '../service/userService.js';

const app = express.Router();

app.post('/registerUser', async (req, res) => {
 try{   
    const { name, age, dateOfBirth, password, email } = req.body;
    // console.log(req.body)
   await userService.registerUser(req.body);
    res.status(201).json({ message: 'User registered successfully' });
 }catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/login',async (req,res)=>{
    try{
        let userData=req.body;
   let user = await userService.loginUser(userData);
   if(user){
    res.status(201).json({message:'Login Successful'});
  }else{
    res.status(401).json({message:'user not found'})
  }
    }catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
  
  
})



export default app;
