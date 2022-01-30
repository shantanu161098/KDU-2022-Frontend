const express = require('express');
const app = express();
const users = require('./Users');

app.get('/api/user/:id', (req, res) => {
    const user = users.find(u => u.id === `@${req.params.id}` );
    res.send(user);
    if(!user){
        res.status(404).send("User not found");
    }
    res.send(user);
});



app.listen(3000,() => console.log('listening on port 3000'));