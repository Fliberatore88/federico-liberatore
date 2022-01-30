const express = require('express');
const path = require('path');
const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use (express.static(publicPath) );

app.get ('/', (req,res) => {
    res.sendFile (path.resolve(__dirname, 'views','index.html'))
    
})

app.listen(process.env.PORT || 2828, (err) => {
    if (err){
        console.log('Error', err)
    }else {
        console.log('Levantó el Server correctamente')
    }
})
