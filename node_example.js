// this be the demo script for using JSLINQ in node.js

var JSLINQ = require('./JSLINQ'),
    sys = require('sys');
    
    var sampleData = 
    [
        {
            "ID": 1,
            "FirstName": "Chris",
            "LastName": "Pearson",
            "BookIDs": [
                1001,
                1002,
                1003
            ]
        },
        {
            "ID": 2,
            "FirstName": "Kate",
            "LastName": "Johnson",
            "BookIDs": [
                2001,
                2002,
                2003
            ]
        },
        {
            "ID": 3,
            "FirstName": "Josh",
            "LastName": "Sutherland",
            "BookIDs": [
                3001,
                3002,
                3003
            ]
        },
        {
            "ID": 4,
            "FirstName": "John",
            "LastName": "Ronald",
            "BookIDs": [
                4001,
                4002,
                4003
            ]
        },
        {
            "ID": 5,
            "FirstName": "Steve",
            "LastName": "Pinkerton",
            "BookIDs": [
                1001,
                1002,
                1003
            ]
        },
        {
            "ID": 6,
            "FirstName": "Katie",
            "LastName": "Zimmerman",
            "BookIDs": [
                2001,
                2002,
                2003
            ]
        },
        {
            "ID": 7,
            "FirstName": "Dirk",
            "LastName": "Anderson",
            "BookIDs": [
                3001,
                3002,
                3003
            ]
        },
        {
            "ID": 8,
            "FirstName": "Chris",
            "LastName": "Stevenson",
            "BookIDs": [
                4001,
                4002,
                4003
            ]
        },
        {
            "ID": 9,
            "FirstName": "Bernard",
            "LastName": "Sutherland",
            "BookIDs": [
                1001,
                2002,
                3003
            ]
        },
        {
            "ID": 10,
            "FirstName": "Kate",
            "LastName": "Pinkerton",
            "BookIDs": [
                4001,
                3002,
                2003
            ]
        }
    ];
    
    sys.puts('trying to find Chris : JSLINQ.Exec(sampleData).Where(function (item) {return item.FirstName == "Chris";});');
    var sampleQuery = JSLINQ.Exec(sampleData).Where(function (item) {return item.FirstName == "Chris";});
    sys.puts('found some Chris: ');
    sys.puts(JSON.stringify(sampleQuery));
    
