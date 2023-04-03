const express = require('express');
const bodyParser = require('body-parser');
const app = express();


const PORT = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
//.urlencoded returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option


app.use(bodyParser.json());
//.json returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.

//for now we will use this array to store our data, i.e. we are mimicing a database
let blogsList = [];

app.get('/blogs', (req, res) => {
    return res.status(404).json ({
        data : blogsList,
        success : true,
    });
});

//creating a blog
app.post('/blogs', (req, res) => {
    blogsList.push({
        title : req.body.title,
        content : req.body.content,
        id: Math.floor(Math.random()*1000),
    });
    return res.status(201).json({
        success : true,
    });
});


//getting specific blog id by iterating over the array
app.get('/blogs/:id', (req, res) => {
    const result = blogsList.filter((blog) => blog.id == req.params.id);
    return res.status(200).json({
        data : result,
        success : true,
    });
});


//deleting a blog with given id
app.delete('/blogs/:id', (req, res) => {
    blogsList = blogsList.filter((blog) => blog.id != req.params.id);
    return res.status(200).json({
        success : true,
    });
});



/**
 * res.status(status code) returns same response object and on that response object, it sets that status code.
 * And on that response object, we can call json method to send the response.
 */

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

