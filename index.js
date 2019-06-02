const Express = require('express');

const express = new Express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


function status(req, resp){
    resp.json({
        status:'ok'
    })
}


function authentication(req, resp){
    // extract username and password
const username= "req.body.username";
const password = "req.body.password";

//query fetch the user's password

const hashedPassword = 'hashedPassword';
// compare hashed password with database
const isMatched =bcrypt.compareSync(password, hashedPassword);

if(!isMatched){
    const token = jwt.sign({username: username},'secret');
    resp.json({
        status: 'success',
        accessToken: token
    })

}else{
    resp.json({
        status:'fail'
    })
        
}


   
}

express.get('/api/status', status);
express.post('/api/auth', authentication);

express.listen(8001,'localhost', ()=>{
    console.log('server is listening at ' , 8001);
} )
