#JSLINQ - Perform LINQ against JSON
##A pure JS implementation of Microsoft's [Language Integrated Query](http://en.wikipedia.org/wiki/Language_Integrated_Query) library
### works in the browser or in node.js (CommonJS)
<em>(note: just because microsoft is evil, doesn't mean that this one little JS library doesn't kick ass)</em>

##basic examples

assume the following JSON data:

    var sampleData = {
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
    ]};

now that we have some JSON data to work with, we can perform LINQ statements on it.

###simple Select

    var sample = JSLINQ(sampleData).
      Select(function (item) {return item.FirstName;});

    output: {"items":["Chris","Kate","Josh","John","Steve","Katie","Dirk","Chris","Bernard","Kate"]}

###simple Select with OrderBy

     var sample = JSLINQ(sampleData).
      Select(function (item) {return item.FirstName;}).
      OrderBy(function (item) {return item;});

     output: {"items":["Bernard","Chris","Chris","Dirk","John","Josh","Kate","Kate","Katie","Steve"]}

###simple Where 
					var sample = JSLINQ(sampleData).Where(function (item) {return item.FirstName == "Chris";});
					output: [{"ID":1,"FirstName":"Chris","LastName":"Pearson","BookIDs":[1001,1002,1003]},{"ID":8,"FirstName":"Chris","LastName":"Stevenson","BookIDs":[4001,4002,4003]}]

###For the Full API spec see the online demo @ [http://maraksquires.com/JSLINQ/](http://maraksquires.com/JSLINQ/)
