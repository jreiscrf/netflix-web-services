const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/netflix', {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
});