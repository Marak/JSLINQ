A pure JS implementation of Microsoft's Language Integrated Query library
http://en.wikipedia.org/wiki/Language_Integrated_Query
(note: just because microsoft is evil, doesn't mean that this one little JS library doesn't kick ass)

#Perform SQL against JSON
## works in the browser or in node.js (CommonJS)

###basic examples

assume the following JSON data:

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
    ]



###simple Select statement

    var sample = JSLINQ(data).
      Select(function (item) {return item.FirstName;});

    output : {"items":["Chris","Kate","Josh","John","Steve","Katie","Dirk","Chris","Bernard","Kate"]}

###simple Select statement with OrderBY

     var sample = JSLINQ(Samples.People).
       OrderBy(function (item) {return item.FirstName;}).
       Select(function (item) {return item.FirstName;});

     output : {"items":["Bernard","Chris","Chris","Dirk","John","Josh","Kate","Kate","Katie","Steve"]}

console.log(sample);

Select, Join, Where, GroupBy

###Full API Spec: 
