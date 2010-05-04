//-----------------------------------------------------------------------
// Part of the LINQ to JavaScript (JSLINQ) v2.10 Project - http://jslinq.codeplex.com
// Copyright (C) 2009 Chris Pietschmann (http://pietschsoft.com). All rights reserved.
// This project is licensed under the Microsoft Reciprocal License (Ms-RL)
// This license can be found here: http://jslinq.codeplex.com/license
//-----------------------------------------------------------------------

LINQ To JavaScript Project - http://jslinq.codeplex.com

To Run the Interactive SDK:
- Open up the Default.htm file in a web browser

To include JSLINQ within a website:
- 1) Copy the JSLINQ.js file into your website
- 2) Place the following script tag in the Head of your web page: <script type="text/javascript" src="JS/JSLINQ.js"></script>



JSLINQ Change Log
-----------------
Version 2.10
-------------
- Modified the JSLINQ object to allow you to create an instance of JSLINQ containing an Array of elements
using either of the following methods:
	var option1 = JSLINQ(myArray);
	var option2 = new JSLINQ(myArray);

- Added an extensibility example; located at "/Examples/Extensions/get.htm"
- Added Improved Intellisense Support and moved it to the "JSLINQ-vsdoc.js" file.


Version 2.00
-------------
- Removed use of "eval" method
- Added an example of search an HTML DOM Table using JSLINQ
- Placed all functionality within the global JSLINQ object. This is to improve possible compatibility with other
javascript frameworks (like jQuery and ASP.NET AJAX).


Version 1.03
------------
- Added Intersect Operator
- Added DefaultIfEmpty Operator
- Added ElementAtOrDefault Operator
- Added FirstOrDefault Operator
- Added LastOrDefault Operator
- Started adding Usage Examples
-- Count Word Occurrences
-- Count Set of Words

Version 1.02
------------
- A few Bug fixes that were revealed with Unit Tests
- Interactive SDK Created
- Unit Test Created
--- Intial testing of the Samples Unit Tests yielded the following speed results for all tests:
------ IE7: ~10 milliseconds
------ FireFox 2: ~10 milliseconds
------ Safari 3 for Windows: ~4 milliseconds

Version 1.01
------------
- Added the OrderByDescending Operator
- Added the SelectMany Operator
- Added the Count Operator
- Added the Distinct Operator
- Added the Any Operator
- Added the All Operator
- Made it so you can access the elements "index" within the clause/predicate of each of the following Operators: Where, Count, Any, All
- Added the Reverse Operator, this also allows access to the elements "index" within the clause/predicate
- Added First Operator, this also allows access to the elements "index" within the clause/predicate
- Added Last Operator, this also allows access to the elements "index" within the clause/predicate
- Added ElementAt Operator
- Added Concat Operator - this is identical to JavaScripts Array.concat method

Version 1.00
------------
Operators
- From
- Where
- OrderBy
- Select