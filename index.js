const Express = require('express');

const express = new Express();

function status(req, resp){
    resp.json({
        status:'ok'
    })
}


express.get('/api/status', status);

express.listen(8001,'localhost', ()=>{
    console.log('server is listening at ' , 8001);
} )
