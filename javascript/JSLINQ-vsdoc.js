//-----------------------------------------------------------------------
// Visual Studio JavaScript Intellisense Helper for LINQ to JavaScript
// Part of the LINQ to JavaScript (JSLINQ) v2.10 Project - http://jslinq.codeplex.com
// Copyright (C) 2009 Chris Pietschmann (http://pietschsoft.com). All rights reserved.
// This project is licensed under the Microsoft Reciprocal License (Ms-RL)
// This license can be found here: http://jslinq.codeplex.com/license
//-----------------------------------------------------------------------
JSLINQ = function(dataItems) {
    /// <summary>The JSLINQ Object that provides LINQ query syntax to work with JavaScript Arrays.</summary>
    /// <param name="dataArray">The Array that this JSLINQ instance will work with.</param>
    /// <field name="items">The internal Array that contains the actual data items.</field>
};
JSLINQ.prototype = {
    ToArray: function() {
        /// <summary>Gets the underlieing Array object that holds the data.</summary>
        /// <returns type="Array"></returns>
    },
    Where: function(clause) {
        /// <summary>Filters a sequence of values based on a clause predicate.</summary>
        /// <param name="clause">The clause used to determine query matches.</param>
        /// <returns type="JSLINQ"></returns>
    },
    Select: function(clause) {
        /// <summary>Projects each element of a sequence into a new form.</summary>
        /// <param name="clause">The clause used to determine what values to select.</param>
        /// <returns type="JSLINQ"></returns>
    },
    OrderBy: function(clause) {
        /// <summary>Sorts the elements of a sequence in ascending order.</summary>
        /// <param name="clause">The clause used to determine how to order the data.</param>
        /// <returns type="JSLINQ"></returns>
    },
    OrderByDescending: function(clause) {
        /// <summary>Sorts the elements of a sequence in descending order.</summary>
        /// <param name="clause">The clause used to determine how to order the data.</param>
        /// <returns type="JSLINQ"></returns>
    },
    SelectMany: function(clause) {
        /// <summary>Projects each element of a sequence to a JSLINQ and flattens the resulting sequences into one sequence.</summary>
        /// <param name="clause">The clause used to determine what values to select.</param>
        /// <returns type="JSLINQ"></returns>
    },
    Count: function(clause) {
        /// <summary>Returns the number of elements in a sequence.</summary>
        /// <param name="clause">The clause used to determine what values to count.</param>
        /// <returns type="Number"></returns>
    },
    Distinct: function(clause) {
        /// <summary>Returns distinct elements from a sequence.</summary>
        /// <param name="clause">The clause used to determine what values to select.</param>
        /// <returns type="JSLINQ"></returns>
    },
    Any: function(clause) {
        /// <summary>Determines whether any element of a sequence exists or satisfies a condition.</summary>
        /// <param name="clause">The clause used to determine if a match exists.</param>
        /// <returns type="Boolean"></returns>
    },
    All: function(clause) {
        /// <summary>Determines whether all elements of a sequence satisfy a condition.</summary>
        /// <param name="clause">The clause used to determine if a match exists.</param>
        /// <returns type="Boolean">true if every element of the source sequence passes the test in the specified clause predicate, or if the sequence is empty; otherwise, false.</returns>
    },
    Reverse: function() {
        /// <summary>Inverts the order of the elements in a sequence.</summary>
        /// <returns type="JSLINQ"></returns>
    },
    First: function(clause) {
        /// <summary>Returns the first element of a sequence.</summary>
        /// <param name="clause">The clause used to determine which group of elements to return the first element from.</param>
        /// <returns type="Object"></returns>
    },
    Last: function(clause) {
        /// <summary>Returns the last element of a sequence.</summary>
        /// <param name="clause">The clause used to determine which group of elements to return the last element from.</param>
        /// <returns type="Object"></returns>
    },
    ElementAt: function(index) {
        /// <summary>Returns the element at a specified index in a sequence.</summary>
        /// <param name="index">The zero-based index of the element to retrieve.</param>
        /// <returns type="Object"></returns>
    },
    Concat: function(array) {
        /// <summary>Concatenates two sequences. (Is actually Idendical to the Array.concat method.)</summary>
        /// <param name="array">A JSLINQ or Array object that contains the elements to concatenate.</param>
        /// <returns type="JSLINQ"></returns>
    },
    Intersect: function(secondArray, clause) {
        /// <summary>Produces the set intersection of two sequences.</summary>
        /// <param name="secondArray">The second JSLINQ element sequence to perform the Intersect on.</param>
        /// <param name="clause"></param>
        /// <returns type="JSLINQ"></returns>
    },
    DefaultIfEmpty: function(defaultValue) {
        /// <summary>Returns the JSLINQ object, or a default value if the sequence is empty.</summary>
        /// <param name="defaultValue">The default value to return if the sequence is empty.</param>
    },
    ElementAtOrDefault: function(index, defaultValue) {
        /// <summary>Returns the element at a specified index in a sequence or a default value if the index is out of range.</summary>
        /// <param name="index">The zero-based index of the element to retrieve.</param>
        /// <param name="defaultValue">The default value to return if the index is out of range.</param>
        /// <returns type="">defaultValue if the index is outside the bounds of the source sequence; otherwise, the element at the specified position in the source sequense.</returns>
    },
    FirstOrDefault: function(defaultValue) {
        /// <summary>Returns the first element of a sequence, or a default value if no element is found.</summary>
        /// <param name="defaultValue">The default value to return if no element is found.</param>
    },
    LastOrDefault: function(defaultValue) {
        /// <summary>Returns the last element of a sequence, or a default value if no element is found.</summary>
        /// <param name="defaultValue">The default value to return if no element is found.</param>
    }
};