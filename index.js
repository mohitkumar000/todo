const express = require('express');
const app = express();
const port = 3000;

//use express router
app.use('/',require('./routes'))

app.listen(port,function(err) {
    if(err)
    {
        console.log('error: ',err);
    }
    console.log(`Server is running on Port :${port}`)
})
