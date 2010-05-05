/// <reference name="JSLINQ.js" />
//-----------------------------------------------------------------------
// Part of the LINQ to JavaScript (JSLINQ) v2.00 Project - http://jslinq.codeplex.com
// Copyright (C) 2009 Chris Pietschmann (http://pietschsoft.com). All rights reserved.
// This project is licensed under the Microsoft Reciprocal License (Ms-RL)
// This license can be found here: http://jslinq.codeplex.com/license
//-----------------------------------------------------------------------
var Samples = {};

/* *** Arrays that Sample Code Uses *** */
Samples.People = [
    { ID: 1, FirstName: "Chris", LastName: "Pearson", BookIDs: [1001, 1002, 1003] },
    { ID: 2, FirstName: "Kate", LastName: "Johnson", BookIDs: [2001, 2002, 2003] },
    { ID: 3, FirstName: "Josh", LastName: "Sutherland", BookIDs: [3001, 3002, 3003] },
    { ID: 4, FirstName: "John", LastName: "Ronald", BookIDs: [4001, 4002, 4003] },
    { ID: 5, FirstName: "Steve", LastName: "Pinkerton", BookIDs: [1001, 1002, 1003] },
    { ID: 6, FirstName: "Katie", LastName: "Zimmerman", BookIDs: [2001, 2002, 2003] },
    { ID: 7, FirstName: "Dirk", LastName: "Anderson", BookIDs: [3001, 3002, 3003] },
    { ID: 8, FirstName: "Chris", LastName: "Stevenson", BookIDs: [4001, 4002, 4003] },
    { ID: 9, FirstName: "Bernard", LastName: "Sutherland", BookIDs: [1001, 2002, 3003] },
    { ID: 10, FirstName: "Kate", LastName: "Pinkerton", BookIDs: [4001, 3002, 2003] }
];

/* *** Array of Samples Contained in this page *** */
Samples.SampleList = [
    { Group: "Where Operator", Samples: ["Samples.Where01", "Samples.Where02"] },
    { Group: "Select Operator", Samples: ["Samples.Select01"] },
    { Group: "SelectMany Operator", Samples: ["Samples.SelectMany01"] },
    { Group: "OrderBy Operator", Samples: ["Samples.OrderBy01"] },
    { Group: "OrderByDescending Operator", Samples: ["Samples.OrderByDescending01"] },
    { Group: "All Operator", Samples: ["Samples.All01", "Samples.All02"] },
    { Group: "Any Operator", Samples: ["Samples.Any01", "Samples.Any02"] },
    { Group: "Count Operator", Samples: ["Samples.Count01", "Samples.Count02", "Samples.Count03"] },
    { Group: "DefaultIfEmpty Operator", Samples: ["Samples.DefaultIfEmpty01", "Samples.DefaultIfEmpty02"] },
    { Group: "Distinct Operator", Samples: ["Samples.Distinct01"] },
    { Group: "ElementAt Operator", Samples: ["Samples.ElementAt01"] },
    { Group: "ElementAtOrDefault Operator", Samples: ["Samples.ElementAtOrDefault01"] },
    { Group: "First Operator", Samples: ["Samples.First01", "Samples.First02"] },
    { Group: "FirstOrDefault Operator", Samples: ["Samples.FirstOrDefault01"] },
    { Group: "Intersect Operator", Samples: ["Samples.Intersect01", "Samples.Intersect02", "Samples.Intersect03"] },
    { Group: "Last Operator", Samples: ["Samples.Last01", "Samples.Last02"] },
    { Group: "LastOrDefault Operator", Samples: ["Samples.LastOrDefault01"] },
    { Group: "Reverse Operator", Samples: ["Samples.Reverse01"] }
];


/* *** Code used for executing and showing the samples in the page *** */
Samples.ShowSampleList = function() {
    var sampleList = document.getElementById("SampleList");
    for (var g = 0; g < Samples.SampleList.length; g++) {
        var group = document.createElement("li");
        group.innerHTML = Samples.SampleList[g].Group;
        sampleList.appendChild(group);
        group = document.createElement("ul");

        for (var s = 0; s < Samples.SampleList[g].Samples.length; s++) {
            var sample = eval("new " + Samples.SampleList[g].Samples[s] + "()");

            var sampleElement = document.createElement("li");
            sampleElement.innerHTML = "<a href='javascript:Samples.Show(" + Samples.SampleList[g].Samples[s] + ");'>" + sample.Name + "</a>";
            group.appendChild(sampleElement);
        }

        sampleList.appendChild(group);
    }
};
Samples.ShowSourceData = function(){
    document.getElementById("SourceData").innerHTML = Samples.Views.People(Samples.People);
};
Samples.Show = function(sample) {
    if (typeof sample === "string") { sample = eval(sample); }
    var s = new sample();
    // Display Sample Name, Description and Code on the page
    document.getElementById("lblSampleTitle").innerHTML = s.Title;
    document.getElementById("lblSampleDescription").innerHTML = s.Description;
    document.getElementById("txtSampleCode").value = s.Code;
    // Execute the Sample to prove it works
    var results = s.Code();
    document.getElementById("ResultData").innerHTML = s.View(results.items || results);
};
Samples.RunTests = function(){
    var failureCount = 0;
    var successCount = 0;
    var strFailedTest = "";
    
    var start = (new Date()).getTime();
    
    for(var g = 0; g < Samples.SampleList.length; g++)
    {
        for(var i = 0; i < Samples.SampleList[g].Samples.length; i++)
        {
            var s = eval("new " + Samples.SampleList[g].Samples[i] + "()");
            if (s.Test())
                successCount++;
            else
            {
                failureCount++;
                strFailedTest += Samples.SampleList[g].Samples[i] + "<br/>";
            }
        }
    }
    
    var end = (new Date()).getTime();
    
    var elem = document.getElementById("TestResults");
    elem.innerHTML = "Successes: " + successCount + " - Failures: " + failureCount + " - Timing: " + (end - start);
    if (failureCount > 0) {
        elem.innerHTML += "<br/><strong>Failed Tests:</strong><br/>" + strFailedTest;
    }
};

Samples.Views = {};
Samples.Views.People = function(people) {
    var str = "<table class='peopleList'><tr><th>ID</th><th>First Name</th><th>Last Name</th><th>Books</th></tr>";
    if (people.length == undefined)
    {
        /// If the length of the people array is undefined, then it's not an array but a Person object instead.
        str += "<tr><td>" + people.ID + "</td><td>" + people.FirstName + "</td><td>" + people.LastName + "</td><td>" + Samples.Views.StringArray(people.BookIDs) + "</td></tr>";
    }
    else
    {
        for(var i = 0; i < people.length; i++){
            str += "<tr><td>" + people[i].ID + "</td><td>" + people[i].FirstName + "</td><td>" + people[i].LastName + "</td><td>" + Samples.Views.StringArray(people[i].BookIDs) + "</td></tr>";
        }
    }
    str += "</table>";
    return str;
};
Samples.Views.StringArray = function(strArray) {
    var str = "<table>";
    for(var i = 0; i < strArray.length; i++){
        str += "<tr><td>" + strArray[i] + "</td></tr>";
    }
    str += "</table>";
    return str;
};
Samples.Views.Count = function(b) {
    return "Count: " +  b.toString();
};
Samples.Views.Boolean = function(b) {
    return b.toString();
};
Samples.Views.String = function(str){
    return str;
};



/* *** Where Operator Samples *** */
Samples.Where01 = function(){
    this.Name = "Basic Function Clause";
    this.Title = "Where Operator: " + this.Name;
    this.Description = "This is the most basic example of using the Where Operator by passing in a function for the operator clause.";
    this.View = Samples.Views.People;
};
Samples.Where01.prototype = {
    Code: function() {
    var sample = JSLINQ(Samples.People).
            Where(function(item){return item.FirstName == 'Chris';});
        return sample;
    },
    Test:function(){
        try
        {
            var r = this.Code().items;
            return (r.length == 2);
        }
        catch(ex)
        {
            return false;
        }
    }
};

Samples.Where02 = function(){
    this.Name = "Function Clause - Reference Item Index";
    this.Title = "Where Operator: " + this.Name;
    this.Description = "This is the most basic example of using the Where Operator by passing in a function for the operator clause, and referencing the Array items index within the clause.";
    this.View = Samples.Views.People;
};
Samples.Where02.prototype = {
    Code:function(){
        var sample = JSLINQ(Samples.People).
            Where(function(item, index){return item.FirstName == 'Chris' && index == 0;});
        return sample;
    },
    Test:function(){
        try
        {
            var r = this.Code().items;
            return (r.length == 1);
        }
        catch(ex)
        {
            return false;
        }
    }
};

/* *** Select Operator *** */
Samples.Select01 = function(){
    this.Name = "Basic Function Clause";
    this.Title = "Select Operator: " + this.Name;
    this.Description = "This is the most basic example of using the Select Operator by passing in a function for the operator clause.";
    this.View = Samples.Views.StringArray;
};
Samples.Select01.prototype = {
    Code:function(){
    var sample = JSLINQ(Samples.People).
            Select(function(item){return item.FirstName;});
        return sample;
    },
    Test:function(){
        try
        {
            var r = this.Code().items;
            return (r.length == 10 && typeof(r[0]) == 'string');
        }
        catch(ex)
        {
            return false;
        }
    }
};

/* *** SelectMany Operator * ***/
Samples.SelectMany01 = function(){
    this.Name = "Basic Function Clause";
    this.Title = "SelectMany Operator: " + this.Name;
    this.Description = "This is the most basic example of using the SelectMany Operator by passing in a function for the operator clause.";
    this.View = Samples.Views.StringArray;
};
Samples.SelectMany01.prototype = {
    Code:function(){
    var sample = JSLINQ(Samples.People).
            SelectMany(function(item){return item.BookIDs;});
        return sample;
    },
    Test:function(){
        try
        {
            var r = this.Code().items;
            return (r.length == 30 && typeof(r[0]) == 'number');
        }
        catch(ex)
        {
            return false;
        }
    }
};

/* *** OrderBy Operator *** */
Samples.OrderBy01 = function(){
    this.Name = "Basic Function Clause";
    this.Title = "Select Operator: " + this.Name;
    this.Description = "This is the most basic example of using the OrderBy Operator by passing in a function for the operator clause.";
    this.View = Samples.Views.People;
};
Samples.OrderBy01.prototype = {
    Code:function(){
    var sample = JSLINQ(Samples.People).
            OrderBy(function(item){return item.FirstName;});
        return sample;
    },
    Test:function(){
        try
        {
            var r = this.Code().items;
            return (r.length == 10 && r[0].FirstName == "Bernard" && r[r.length - 1].FirstName == "Steve");
        }
        catch(ex)
        {
            return false;
        }
    }
};


/* *** OrderByDescending Operator *** */
Samples.OrderByDescending01 = function(){
    this.Name = "Basic Function Clause";
    this.Title = "Select Operator: " + this.Name;
    this.Description = "This is the most basic example of using the OrderByDescending Operator by passing in a function for the operator clause.";
    this.View = Samples.Views.People;
};
Samples.OrderByDescending01.prototype = {
    Code:function(){
    var sample = JSLINQ(Samples.People).
            OrderByDescending(function(item){return item.FirstName;});
        return sample;
    },
    Test:function(){
        try
        {
            var r = this.Code().items;
            return (r.length == 10 && r[0].FirstName == "Steve" && r[r.length - 1].FirstName == "Bernard");
        }
        catch(ex)
        {
            return false;
        }
    }
};


/* *** Count Operator *** */
Samples.Count01 = function(){
    this.Name = "Basic Usage";
    this.Title = "Count Operator: " + this.Name;
    this.Description = "This is the most basic example of using the Count Operator.";
    this.View = Samples.Views.Count;
};
Samples.Count01.prototype = {
    Code:function(){
    var sample = JSLINQ(Samples.People).Count();
        return sample;
    },
    Test:function(){
        try
        {
            var r = this.Code();
            return (r == 10);
        }
        catch(ex)
        {
            return false;
        }
    }
};

Samples.Count02 = function(){
    this.Name = "Basic Function Clause";
    this.Title = "Count Operator: " + this.Name;
    this.Description = "This is the most basic example of using the Count Operator by passing in a function for the operator clause.";
    this.View = Samples.Views.Count;
};
Samples.Count02.prototype = {
    Code:function(){
    var sample = JSLINQ(Samples.People).
            Count(function(item){return item.FirstName == 'Chris';});
        return sample;
    },
    Test:function(){
        try
        {
            var r = this.Code();
            return (r == 2);
        }
        catch(ex)
        {
            return false;
        }
    }
};

Samples.Count03 = function(){
    this.Name = "Function Clause - Reference Item Index";
    this.Title = "Count Operator: " + this.Name;
    this.Description = "This is the most basic example of using the Count Operator by passing in a function for the operator clause, and referencing the Array items index within the clause.";
    this.View = Samples.Views.Count;
};
Samples.Count03.prototype = {
    Code:function(){
    var sample = JSLINQ(Samples.People).
            Count(function(item, index){return item.FirstName == 'Chris' && index == 4;});
        return sample;
    },
    Test:function(){
        try
        {
            var r = this.Code();
            return (r == 0);
        }
        catch(ex)
        {
            return false;
        }
    }
};


/* *** Distinct Operator *** */
Samples.Distinct01 = function(){
    this.Name = "Basic Function Clause";
    this.Title = "Distinct Operator: " + this.Name;
    this.Description = "This is the most basic example of using the Distinct Operator by passing in a function for the operator clause.";
    this.View = Samples.Views.StringArray;
};
Samples.Distinct01.prototype = {
    Code:function(){
    var sample = JSLINQ(Samples.People).
            Distinct(function(item){return item.FirstName;});
        return sample;
    },
    Test:function(){
        try
        {
            var r = this.Code().items;
            return (r.length == 8);
        }
        catch(ex)
        {
            return false;
        }
    }
};

        
        
/* *** Any Operator *** */
Samples.Any01 = function(){
    this.Name = "Basic Function Clause";
    this.Title = "Any Operator: " + this.Name;
    this.Description = "This is the most basic example of using the Any Operator by passing in a function for the operator clause.";
    this.View = Samples.Views.Boolean;
};
Samples.Any01.prototype = {
    Code:function(){
    var sample = JSLINQ(Samples.People).Any(function(item) { return item.FirstName == 'Chris' });
        return sample;
    },
    Test:function(){
        try
        {
            return (this.Code() == true);
        }
        catch(ex)
        {
            return false;
        }
    }
};

Samples.Any02 = function(){
    this.Name = "Function Clause - Reference Item Index";
    this.Title = "Any Operator: " + this.Name;
    this.Description = "This is the most basic example of using the Any Operator by passing in a function for the operator clause, and referencing the Array items index within the clause.";
    this.View = Samples.Views.Boolean;
};
Samples.Any02.prototype = {
    Code:function(){
    var sample = JSLINQ(Samples.People).Any(function(item, index) { return item.FirstName == 'Chris' && index == 4 });
        return sample;
    },
    Test:function(){
        try
        {
            return (this.Code() == false);
        }
        catch(ex)
        {
            return false;
        }
    }
};
    
        
/* *** All Operator *** */
Samples.All01 = function(){
    this.Name = "Basic Function Clause";
    this.Title = "All Operator: " + this.Name;
    this.Description = "This is the most basic example of using the All Operator by passing in a function for the operator clause.";
    this.View = Samples.Views.Boolean;
};
Samples.All01.prototype = {
    Code:function(){
    var sample = JSLINQ(Samples.People).All(function(item) { return item.FirstName == 'Chris' });
        return sample;
    },
    Test:function(){
        try
        {
            return (this.Code() == false);
        }
        catch(ex)
        {
            return false;
        }
    }
};

Samples.All02 = function(){
    this.Name = "Function Clause - Reference Item Index";
    this.Title = "All Operator: " + this.Name;
    this.Description = "This is the most basic example of using the All Operator by passing in a function for the operator clause, and referencing the Array items index within the clause.";
    this.View = Samples.Views.Boolean;
};
Samples.All02.prototype = {
    Code:function(){
    var sample = JSLINQ(Samples.People).All(function(item, index) { return item.FirstName == 'Chris' && index == 0 });
        return sample;
    },
    Test:function(){
        try
        {
            return (this.Code() == false);
        }
        catch(ex)
        {
            return false;
        }
    }
};
        
        
        
/* *** Reverse Operator * ***/
Samples.Reverse01 = function(){
    this.Name = "Basic Usage";
    this.Title = "Reverse Operator: " + this.Name;
    this.Description = "This is the most basic example of using the Reverse Operator by passing in a string for the operator clause.";
    this.View = Samples.Views.People;
};
Samples.Reverse01.prototype = {
    Code:function(){
    var sample = JSLINQ(Samples.People).Reverse();
        return sample;
    },
    Test:function(){
        try
        {
            var r = this.Code().items;
            return (r.length == 10 && r[0].FirstName == "Kate" && r[r.length - 1].FirstName == "Chris");
        }
        catch(ex)
        {
            return false;
        }
    }
};

        
        
/* *** First Operator * ***/
Samples.First01 = function(){
    this.Name = "Basic Function Clause";
    this.Title = "First Operator: " + this.Name;
    this.Description = "This is the most basic example of using the First Operator by passing in a function for the operator clause.";
    this.View = Samples.Views.People;
};
Samples.First01.prototype = {
    Code:function(){
    var sample = JSLINQ(Samples.People).First(function(item) { return item.FirstName == 'Chris' });
        return sample;
    },
    Test:function(){
        try
        {
            var r = this.Code();
            return (r.FirstName == "Chris" && r.ID == 1);
        }
        catch(ex)
        {
            return false;
        }
    }
};

Samples.First02 = function(){
    this.Name = "Function Clause - Reference Item Index";
    this.Title = "First Operator: " + this.Name;
    this.Description = "This is the most basic example of using the First Operator by passing in a function for the operator clause, and referencing the Array items index within the clause.";
    this.View = Samples.Views.People;
};
Samples.First02.prototype = {
    Code:function(){
    var sample = JSLINQ(Samples.People).First(function(item, index) { return item.FirstName == 'Chris' && index == 0 });
        return sample;
    },
    Test:function(){
        try
        {
            var r = this.Code();
            return (r.FirstName == "Chris" && r.ID == 1);
        }
        catch(ex)
        {
            return false;
        }
    }
};

        
        
/* *** Last Operator * ***/
Samples.Last01 = function(){
    this.Name = "Basic Function Clause";
    this.Title = "Last Operator: " + this.Name;
    this.Description = "This is the most basic example of using the Last Operator by passing in a function for the operator clause.";
    this.View = Samples.Views.People;
};
Samples.Last01.prototype = {
    Code:function(){
    var sample = JSLINQ(Samples.People).Last(function(item) { return item.FirstName == 'Chris' });
        return sample;
    },
    Test:function(){
        try
        {
            var r = this.Code();
            return (r.FirstName == "Chris" && r.ID == 8);
        }
        catch(ex)
        {
            return false;
        }
    }
};

Samples.Last02 = function(){
    this.Name = "Function Clause - Reference Item Index";
    this.Title = "Last Operator: " + this.Name;
    this.Description = "This is the most basic example of using the Last Operator by passing in a function for the operator clause, and referencing the Array items index within the clause.";
    this.View = Samples.Views.People;
};
Samples.Last02.prototype = {
    Code:function(){
    var sample = JSLINQ(Samples.People).Last(function(item, index) { return item.FirstName == 'Chris' && index == 0 });
        return sample;
    },
    Test:function(){
        try
        {
            var r = this.Code();
            return (r.FirstName == "Chris" && r.ID == 1);
        }
        catch(ex)
        {
            return false;
        }
    }
};
  
        
/* *** ElementAt Operator * ***/
Samples.ElementAt01 = function(){
    this.Name = "Basic Usage";
    this.Title = "ElementAt Operator: " + this.Name;
    this.Description = "This is the most basic example of using the ElementAt Operator.";
    this.View = Samples.Views.People;
};
Samples.ElementAt01.prototype = {
    Code:function(){
    var sample = JSLINQ(Samples.People).ElementAt(1);
        return sample;
    },
    Test:function(){
        try
        {
            var r = this.Code();
            return (r.FirstName == "Kate" && r.ID == 2);
        }
        catch(ex)
        {
            return false;
        }
    }
};

/* *** Intersect Operator * ***/
Samples.Intersect01 = function(){
    this.Name = "Basic Usage";
    this.Title = "Intersect Operator: " + this.Name;
    this.Description = "This is the most basic example of using the Intersect Operator, passing an Array for the secondArray parameter.";
    this.View = Samples.Views.StringArray;
};
Samples.Intersect01.prototype = {
    Code:function(){
        var NameList1 = ["Chris","Steve","John"];
        var NameList2 = ["Katie","Chris","John", "Aaron"];
        var sample = JSLINQ(NameList1).Intersect(NameList2);
        return sample;
    },
    Test:function(){
        try
        {
            var r = this.Code().items;
            return (r.length == 2);
        }
        catch(ex)
        {
            return false;
        }
    }
};

Samples.Intersect02 = function() {
    this.Name = "Basic Usage";
    this.Title = "Intersect Operator: " + this.Name;
    this.Description = "This is the most basic example of using the Intersect Operator, passing an JSLINQ object for the secondArray parameter.";
    this.View = Samples.Views.StringArray;
};
Samples.Intersect02.prototype = {
    Code: function() {
        var NameList1 = ["Chris", "Steve", "John"];
        var NameList2 = ["Katie", "Chris", "John", "Aaron"];
        var sample = JSLINQ(NameList1).Intersect(JSLINQ(NameList2));
        return sample;
    },
    Test: function() {
        try {
            var r = this.Code().items;
            return (r.length == 2);
        }
        catch (ex) {
            return false;
        }
    }
};

Samples.Intersect03 = function(){
    this.Name = "Function Clause";
    this.Title = "Intersect Operator: " + this.Name;
    this.Description = "This is the most basic example of using the Intersect Operator by passing in a function for the operator clause.";
    this.View = Samples.Views.People;
};
Samples.Intersect03.prototype = {
    Code:function(){
        var NameList1 = ["Katie","Chris","John", "Aaron"];
        var sample = JSLINQ(Samples.People).Intersect(NameList1, function(item, index, item2, index2) { return item.FirstName == item2; });
        return sample;
    },
    Test:function(){
        try
        {
            var r = this.Code().items;
            return (r.length == 4);
        }
        catch(ex)
        {
            return false;
        }
    }
};

/* *** DefaultIfEmpty Operator * ***/
Samples.DefaultIfEmpty01 = function(){
    this.Name = "Basic Usage";
    this.Title = "DefaultIfEmpty Operator: " + this.Name;
    this.Description = "This is the most basic example of using the DefaultIfEmpty Operator, passing in a JSLINQ object as the Default value.";
    this.View = Samples.Views.People;
};
Samples.DefaultIfEmpty01.prototype = {
    Code:function(){
        var people = new Array();
        var sample = JSLINQ(people).DefaultIfEmpty(JSLINQ(Samples.People));
        return sample;
    },
    Test:function(){
        try
        {
            var r = this.Code().items;
            return (r.length == 10);
        }
        catch(ex)
        {
            return false;
        }
    }
};

Samples.DefaultIfEmpty02 = function() {
    this.Name = "Basic Usage, pass Array";
    this.Title = "DefaultIfEmpty Operator: " + this.Name;
    this.Description = "This is the most basic example of using the DefaultIfEmpty Operator, passing in an Array object as the Default value.";
    this.View = Samples.Views.People;
};
Samples.DefaultIfEmpty02.prototype = {
    Code: function() {
        var people = new Array();
        var sample = JSLINQ(people).DefaultIfEmpty(Samples.People);
        return sample;
    },
    Test: function() {
        try {
            var r = this.Code();
            return (r.length == 10);
        }
        catch (ex) {
            return false;
        }
    }
};

/* *** ElementAtOrDefault Operator * ***/
Samples.ElementAtOrDefault01 = function(){
    this.Name = "Basic Usage";
    this.Title = "ElementAtOrDefault Operator: " + this.Name;
    this.Description = "This is the most basic example of using the ElementAtOrDefault Operator.";
    this.View = Samples.Views.String;
};
Samples.ElementAtOrDefault01.prototype = {
    Code:function(){
    var sample = JSLINQ(Samples.People).ElementAtOrDefault(150, "DefaultValue");
        return sample;
    },
    Test:function(){
        try
        {
            var r = this.Code();
            return (r == "DefaultValue");
        }
        catch(ex)
        {
            return false;
        }
    }
};

/* *** FirstOrDefault Operator * ***/
Samples.FirstOrDefault01 = function(){
    this.Name = "Basic Usage";
    this.Title = "FirstOrDefault Operator: " + this.Name;
    this.Description = "This is the most basic example of using the FirstOrDefault Operator.";
    this.View = Samples.Views.People;
};
Samples.FirstOrDefault01.prototype = {
    Code:function(){
        var defaultValue = {ID:999,FirstName:"Johny",LastName:"Stone",BookIDs:[999]};
        var sample = JSLINQ(Samples.People).FirstOrDefault(defaultValue);
        return sample;
    },
    Test:function(){
        try
        {
            var r = this.Code();
            return (r.FirstName == "Chris");
        }
        catch(ex)
        {
            return false;
        }
    }
};

/* *** LastOrDefault Operator * ***/
Samples.LastOrDefault01 = function(){
    this.Name = "Basic Usage";
    this.Title = "LastOrDefault Operator: " + this.Name;
    this.Description = "This is the most basic example of using the LastOrDefault Operator.";
    this.View = Samples.Views.People;
};
Samples.LastOrDefault01.prototype = {
    Code: function() {
        var defaultValue = { ID: 999, FirstName: "Johny", LastName: "Stone", BookIDs: [999] };
        var sample = JSLINQ(Samples.People).LastOrDefault(defaultValue);
        return sample;
    },
    Test: function() {
        try {
            var r = this.Code();
            return (r.FirstName == "Kate");
        }
        catch (ex) {
            return false;
        }
    }
};