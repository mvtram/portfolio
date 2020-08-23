//Install express server
const express = require('express');
const path = require('path');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');



const app = express();

const clientuser = require('./api/routes/user');



// mongoose.connect('mongodb://127.0.0.1/portfoliodb',{ useNewUrlParser: true,useUnifiedTopology: true });
// // mongoose.connect('mongodb://ec2-13-234-48-42.ap-south-1.compute.amazonaws.com/admindb',{ useNewUrlParser: true,useUnifiedTopology: true });

// app.use(morgan('dev'));
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());


// app.use((req,res,next)=>{
//   res.header('Access-Control-Allow-Origin','*');
//   res.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept,Authorization');

//   if (req.method==='OPTIONS') {
//     res.header('Access-Control-Allow-Methods','PUT','POST','GET');
//     return res.status(200).json({});

//   }
//   next();
// });


// app.use('/users',clientuser);



// Serve only the static files form the angularapp directory
app.use(express.static(__dirname + '/angularapp'));


app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+'/angularapp/index.html'));
});


// app.use((req,res,next)=>{
//   const error = new Error('Not found');
//   error.status = 404;
//   next(error);
// })

// app.use((error,req,res,next)=>{
//   res.status(error.status || 500);
//   res.json({
//     error:{
//       message: error.message
//     }
//   })
// })

// Start the app by listening on the default Heroku port

app.listen(process.env.PORT || 8080);
// app.listen(process.env.PORT || 3000);
