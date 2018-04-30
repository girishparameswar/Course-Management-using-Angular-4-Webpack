let express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    jwt = require('jsonwebtoken'),
    cors = require('cors');
    const port = 2000;
    
    let corsOptions = {
        origin: 'http://localhost:3000',
        optionsSuccessStatus: 200
    };

    app.use(cors(corsOptions));
    app.use(bodyParser.json());

    mongoose.connect('mongodb://localhost/reactJS');
    
    let db = mongoose.connection;

    db.on('error', function() {
        console.log("Connection failed!");
    });

    db.on('open', function() {
        console.log('Connection Established!');
    });

 
    let userSchema = mongoose.Schema({
        username: {
            type:String,
            required:true
        },
        password: {
            type:String,
            required:true
        },
        fullname: {
            stype:String,
            required:false
        },
        email: {
            type:String,
            required:false
        }
    });

let User = mongoose.model('users', userSchema); 

    app.post('/auth', function(req, res){
        console.log("User details: ",req.body);
        User.findOne({username: req.body.username,
                     password: req.body.password}, function(err, docs){
            if(err){
                console.log("No Users!", err);
            }else{
                if(docs){
                    res.send(docs);
                    res.json({"flg":true});
                    //const token = jwt.sign({'uname'})
                }else{
                    res.send({"flg":false});
                }
            }
        });
    });

    app.post('/createUser', function(req, res) {
        console.log(req.body);
        let user1 = new User(req.body);
        user1.save();
        res.send({"flg":"success"});
    });
    


app.listen(port, function() {
        console.log("Server running at localhost:2000");
});