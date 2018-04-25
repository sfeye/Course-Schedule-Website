// File: /api/controllers/sam.js

//uses the classes model
var Classes = require('../models/classes');

module.exports.index = function(req, res) {
    // This controller will provide the data for each of the query buttons
    res.render('api/views/scheduleApi', {
        title: "Classes",
        pageHeader: "Class Queries",

        queries: [ 
            { text: "List Classes",              url: "/api/classes"},
            { text: "Add this Class",            url: "/api/newclass"},
            { text: "Delete Class",              url: "/api/delete"},
            { text: "All Class Info",            url: "/api/classinfo"},
            { text: "View Schedule",             url: "/api/schedule"}
        ]
    });
};

// Controller for listing all classes.
module.exports.listClasses = function( req, res ) {
    Classes.find(
        {},
        function(err, classes) {
            if (err) { res.status(400).send(err);}
            else     { res.render("api/views/queryResults", { pageHeader: "Classes", classes: classes}); }
        }
    );
};

// Controller for adding a new class
module.exports.addClass = function( req, res ) {
    foreach(classe in classes)
    {
        if(classe.id == 'CS234') 
        {
            res.send( "CS234 already added...");
            return;
        }
    }
    var classes = new Classes({
        id: "CS234",
        courseName: "Database and Web System Dev",
        location: "EB2150",
        time: "15.00",
        day: "TR"
    });
    classes.save( function(err, classes) {
        res.send( "Created class: " + classes.id + "...");
    });
};

// Controller for deleting the new class (CS234)
module.exports.deleteClass = function( req, res ) {
    Classes.remove(
        { id: 'CS234' }, 
        function(err, status) {
            if      (err)              { res.status(400).send(err);          }
            else if (status.n === 0)   { res.send("Class: CS234 not found."); }
            else                       
            { 
                res.send("Class CS234 deleted.");
                classCount = 4;   
            }
        }
    );
};
module.exports.viewSchedule = function( req, res ) {
    Classes.find(
        {},
          function(err, classes) {
            if (err) { res.status(400).send(err);}
            else     { res.render("api/views/index", { pageHeader: "Classes", classes: classes}); }
        }
    );
};

module.exports.viewAllClassInfo = function( req, res ) {
    Classes.find(
        {},
          function(err, classes) {
            if (err) { res.status(400).send(err);}
            else     { res.render("api/views/classinfo", { pageHeader: "All-Class-Info", classes: classes}); }
        }
    );
};
