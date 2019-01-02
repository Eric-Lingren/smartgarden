SmartGarden is a Full-Stack project built with React, Express, MongoDB, Mongoose, HTML5, CSS, Javascript, and Node.js.

It is intended to provide optimal garden planting recommendations based on companion planting science.  It allows you to simulate your own garden plot and then suggests what you should or should not plant.

I built a custom RESTful API in Node.js and Express which provides endpoints and routing for post/delete CRUD functionality.  My API uses a MongoDB with Mongoose to interface with Express and Axios to make requests.  

Users have the ability to create, build and save custom gardens.  If the users wants a plant that is not included or to delete one they will never use, they have the ability to make a POST or DELETE request from the front end.

Future improvements include integration to the Arduino platform to track sunlight, soil PH and moisture content.


//  NPM modules used in the creation of this app are:
    react-image-picker
    react-router-dom
    serialport
    axios
    express
    mongoose
    morgan
    nodemon
    parser-readline