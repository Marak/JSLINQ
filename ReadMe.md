A pure JS implementation of Microsoft's Language Integrated Query library
http://en.wikipedia.org/wiki/Language_Integrated_Query

(note: just because microsoft is evil, doesn't mean that this one little JS library doesn't kick ass)

##Perform SQL against JSON

###High Level API

Select, Join, Where, GroupBy

###Full API Spec: 

<h2> 
    LINQ Pad</h2> 
<table> 
    <tr> 
        <td style="width: 50%; vertical-align: top"> 
            <textarea cols="10" rows="10" id="codeInput" style="width: 100%">Enumerable.Range(0, 20)&#13;.Where("$ % 3 == 0")&#13;.Select("value, index => {index:index, value:value * 10}")&#13;.WriteLine("$.index + ':' + $.value")</textarea> 
        </td> 
        <td style="vertical-align: top"> 
            <p id="codeResult" style="padding-left: 20px"> 
            </p> 
        </td> 
    </tr> 
</table> 
<h2 class="clear:both"> 
    Generating Methods</h2> 
<table> 
    <thead> 
        <tr> 
            <td> 
                method name
            </td> 
            <td> 
                return type
            </td> 
            <td> 
                arguments
            </td> 
            <td> 
                example (click code)
            </td> 
        </tr> 
    </thead> 
    <tbody> 
        <tr> 
            <td> 
                Choice
            </td> 
            <td> 
                Enumerable
            </td> 
            <td> 
                params T obj
            </td> 
            <td> 
                <pre><code>Enumerable.Choice("a","b","c","d").Take(10)</code></pre>
                <pre><code>Enumerable.Choice(["a","b","c","d"]).Take(10)</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                Cycle
            </td> 
            <td> 
                Enumerable
            </td> 
            <td> 
                params T obj
            </td> 
            <td> 
                <pre><code>Enumerable.Cycle(1,"foo",true).Take(10)</code></pre>
                <pre><code>Enumerable.Cycle([1,"foo",true]).Take(10)</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                Empty
            </td> 
            <td> 
                Enumerable
            </td> 
            <td> 
                ()
            </td> 
            <td> 
                <pre><code>Enumerable.Empty()</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td rowspan="6"> 
                From
            </td> 
            <td rowspan="6"> 
                Enumerable
            </td> 
            <td> 
                Array obj
            </td> 
            <td> 
                <pre><code>var arr = [1,124,"aaa",function(){},false];
Enumerable.From(arr)</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                Object obj
            </td> 
            <td> 
                <pre><code>var obj = {a:3,b:"3",z:function(){},d:true};
Enumerable.From(obj).Select("$.Key + ':' + $.Value")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                NodeList obj
            </td> 
            <td> 
                <pre><code>var node = document.getElementsByTagName("h2");
Enumerable.From(node).Select("$.innerHTML")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                Number obj
            </td> 
            <td> 
                <pre><code>Enumerable.From(5)</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                String obj
            </td> 
            <td> 
                <pre><code>Enumerable.From("foobar")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                IEnumerable(WSH) obj
            </td> 
            <td> 
                <pre><code> 
// using with Windows Script Host
// var fso = WScript.CreateObject("Scripting.FileSystemObject");
// var files = fso.GetFolder("C:\\").Files;
// Enumerable.From(files).Select("$.Name").ForEach("WScript.Echo($)");</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                Return
            </td> 
            <td> 
                Enumerable
            </td> 
            <td> 
                T element
            </td> 
            <td> 
                <pre><code>Enumerable.Return("foobar")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td rowspan="3"> 
                Matches
            </td> 
            <td rowspan="3"> 
                Enumerable
            </td> 
            <td> 
                string input, RegExp pattern
            </td> 
            <td> 
                <pre><code>Enumerable.Matches("xbcyBCzbc", /(.)bc/i)
.Select("'index='+$.index+' all='+$[0]+' capture='+$[1]")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                string input, string pattern
            </td> 
            <td> 
                <pre><code>Enumerable.Matches("xbcyBCzbc", "(.)bc")
.Select("'index='+$.index+' all='+$[0]+' capture='+$[1]")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                string input, string pattern, string flags
            </td> 
            <td> 
                <pre><code>Enumerable.Matches("xbcyBCzbc", "(.)bc", "i")
.Select("'index='+$.index+' all='+$[0]+' capture='+$[1]")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td rowspan="2"> 
                Range
            </td> 
            <td rowspan="2"> 
                Enumerable
            </td> 
            <td> 
                int start, int count
            </td> 
            <td> 
                <pre><code>Enumerable.Range(10,5)</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                int start, int count, int step
            </td> 
            <td> 
                <pre><code>Enumerable.Range(10,5,3)</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td rowspan="2"> 
                RangeDown
            </td> 
            <td rowspan="2"> 
                Enumerable
            </td> 
            <td> 
                int start, int count
            </td> 
            <td> 
                <pre><code>Enumerable.RangeDown(10,5)</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                int start, int count, int step
            </td> 
            <td> 
                <pre><code>Enumerable.RangeDown(10,5,3)</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td rowspan="2"> 
                RangeTo
            </td> 
            <td rowspan="2"> 
                Enumerable
            </td> 
            <td> 
                int start, int to
            </td> 
            <td> 
                <pre><code>Enumerable.RangeTo(10,18)</code></pre>
                <pre><code>Enumerable.RangeTo(3,-5)</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                int start, int to, int step
            </td> 
            <td> 
                <pre><code>Enumerable.RangeTo(1,9,3)</code></pre>
                <pre><code>Enumerable.RangeTo(1,-9,3)</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td rowspan="2"> 
                Repeat
            </td> 
            <td rowspan="2"> 
                Enumerable
            </td> 
            <td> 
                T obj
            </td> 
            <td> 
                <pre><code>Enumerable.Repeat(3).Take(5)</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                T obj, int count
            </td> 
            <td> 
                <pre><code>Enumerable.Repeat("foo",10)</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                RepeatWithFinalize
            </td> 
            <td> 
                Enumerable
            </td> 
            <td> 
                T initializer(), void finalizer(T)
            </td> 
            <td> 
                <pre><code>// example for WScript(Text EnumerateLines and Finally Close)
// var fso = WScript.CreateObject("Scripting.FileSystemObject");
// Enumerable.RepeatWithFinalize(
//         function () { return fso.OpenTextFile("C:\\file.txt") },
//         function (ts) { ts.Close() })
//     .TakeWhile(function (ts) { return !ts.AtEndOfStream })
//     .Select(function (ts) { return ts.ReadLine() });
</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td rowspan="2"> 
                Generate
            </td> 
            <td rowspan="2"> 
                Enumerable
            </td> 
            <td> 
                T func()
            </td> 
            <td> 
                <pre><code>Enumerable.Generate("Math.random()").Take(5)</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                T func(), int count
            </td> 
            <td> 
                <pre><code>Enumerable.Generate("Math.random()", 5)</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td rowspan="3"> 
                ToInfinity
            </td> 
            <td rowspan="3"> 
                Enumerable
            </td> 
            <td> 
                ()
            </td> 
            <td> 
                <pre><code>Enumerable.ToInfinity().Take(5)</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                int start
            </td> 
            <td> 
                <pre><code>Enumerable.ToInfinity(1000).Take(5)</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                int start, int step
            </td> 
            <td> 
                <pre><code>Enumerable.ToInfinity(1000,5).Take(5)</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td rowspan="3"> 
                ToNegativeInfinity
            </td> 
            <td rowspan="3"> 
                Enumerable
            </td> 
            <td> 
                ()
            </td> 
            <td> 
                <pre><code>Enumerable.ToNegativeInfinity().Take(5)</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                int start
            </td> 
            <td> 
                <pre><code>Enumerable.ToNegativeInfinity(1000).Take(5)</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                int start, int step
            </td> 
            <td> 
                <pre><code>Enumerable.ToNegativeInfinity(1000,5).Take(5)</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                Unfold
            </td> 
            <td> 
                Enumerable
            </td> 
            <td> 
                T seed, T func(T)
            </td> 
            <td> 
                <pre><code>Enumerable.Unfold(5, "$+3").Take(10)</code></pre>
            </td> 
        </tr> 
    </tbody> 
</table> 
<h2> 
    Projection and Filtering Methods</h2> 
<table> 
    <thead> 
        <tr> 
            <td> 
                method name
            </td> 
            <td> 
                return type
            </td> 
            <td> 
                arguments
            </td> 
            <td> 
                example (click code)
            </td> 
        </tr> 
    </thead> 
    <tbody> 
        <tr> 
            <td rowspan="3"> 
                CascadeBreadthFirst
            </td> 
            <td rowspan="3"> 
                Enumerable
            </td> 
            <td> 
                T[] func(T)
            </td> 
            <td> 
                <pre><code>Enumerable.Return(1).CascadeBreadthFirst("$+$").Take(5)</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                T[] func(T), T resultSelector(T)
            </td> 
            <td> 
                <pre><code>Enumerable.Return(1).CascadeBreadthFirst("$+$","$*$").Take(5)</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                T[] func(T), T resultSelector(T, int)
            </td> 
            <td> 
                <pre><code>Enumerable.Return(document.body)
.CascadeBreadthFirst("$.childNodes", "v,n=>{value:v,nestLevel:n}")
.Where("$.nestLevel<3 && $.value.nodeType == 1")
.Select("$.nestLevel + ':' + $.value.tagName")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td rowspan="3"> 
                CascadeDepthFirst
            </td> 
            <td rowspan="3"> 
                Enumerable
            </td> 
            <td> 
                T[] func(T)
            </td> 
            <td> 
                <pre><code>Enumerable.Return(1).CascadeDepthFirst("$+$").Take(5)</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                T[] func(T), T resultSelector(T)
            </td> 
            <td> 
                <pre><code>Enumerable.Return(1).CascadeDepthFirst("$+$","$*$").Take(5)</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                T[] func(T), T resultSelector(T, int)
            </td> 
            <td> 
                <pre><code>Enumerable.Return(document.body)
.CascadeDepthFirst("$.childNodes", "v,n=>{value:v,nestLevel:n}")
.Where("$.nestLevel<3 && $.value.nodeType == 1")
.Select("$.nestLevel + ':' + $.value.tagName")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                Flatten
            </td> 
            <td> 
                Enumerable
            </td> 
            <td> 
                ()
            </td> 
            <td> 
                <pre><code>var array = [1,[234,2,[62,3]],[234,5],3];
Enumerable.From(array).Flatten()</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                Pairwise
            </td> 
            <td> 
                Enumerable
            </td> 
            <td> 
                T selector(T, T)
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10)
.Pairwise("prev,next=>prev + ':' + next")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td rowspan="3"> 
                Scan
            </td> 
            <td rowspan="3"> 
                Enumerable
            </td> 
            <td> 
                T func(T, T)
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10).Scan("a,b=>a+b")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                T seed, T func(T, T)
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10).Scan(100,"a,b=>a+b")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                T seed, T func(T, T), T resultSelector(T)
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10).Scan(100,"a,b=>a+b","$*10")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td rowspan="2"> 
                Select
            </td> 
            <td rowspan="2"> 
                Enumerable
            </td> 
            <td> 
                T selector(T)
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10).Select("$*10")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                T selector(T, int)
            </td> 
            <td> 
                <pre><code>Enumerable.RangeDown(10,10).Select("value,index=>index + ':' + value")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td rowspan="4"> 
                SelectMany
            </td> 
            <td rowspan="4"> 
                Enumerable
            </td> 
            <td> 
                T[] collectionSelector(T)
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,3).SelectMany("Enumerable.Repeat($,3)")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                T[] collectionSelector(T, int)
            </td> 
            <td> 
                <pre><code>Enumerable.Range(5,5)
.SelectMany("value,index=>Enumerable.Repeat('str'+value,index+1)")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                T[] collectionSelector(T), resultSelector(T, T)
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,3)
.SelectMany("Enumerable.Repeat($,3)","first,middle=>first + ':' + middle*10")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                T[] collectionSelector(T, int), resultSelector(T, T)
            </td> 
            <td> 
                <pre><code>Enumerable.Range(5,5)
.SelectMany("v,i=>Enumerable.Repeat('str'+v,i+1)","f,m=>f + ':' + m")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td rowspan="2"> 
                Where
            </td> 
            <td rowspan="2"> 
                Enumerable
            </td> 
            <td> 
                bool predicate(T)
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10).Where("$%2==0")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                bool predicate(T, int)
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10).Where("value,index=>value*index>10")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                OfType
            </td> 
            <td> 
                Enumerable
            </td> 
            <td> 
                Class type
            </td> 
            <td> 
                <pre><code>Enumerable.From([1,"a",2,"b","c",3]).OfType(Number)</code></pre>
                <pre><code>Enumerable.From([1,"a",2,"b","c",3]).OfType(String)</code></pre>
                <pre><code>function ClassA(v){this.v = v}
Enumerable.From([new ClassA("a"),1,2,new ClassA("b")])
.OfType(ClassA).Select("$.v")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td rowspan="2"> 
                Zip
            </td> 
            <td rowspan="2"> 
                Enumerable
            </td> 
            <td> 
                T[] second,T selector(T, T)
            </td> 
            <td> 
                <pre><code>Enumerable.RangeDown(10,10)
.Zip(Enumerable.Range(1,10),"outer,inner=>outer + ':' + inner")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                T[] second,T selector(T, T, int)
            </td> 
            <td> 
                <pre><code>Enumerable.RangeDown(10,10)
.Zip(Enumerable.Range(1,10),"outer,inner,index=>index + ':' + outer*inner")</code></pre>
            </td> 
        </tr> 
    </tbody> 
</table> 
<h2> 
    Join Methods</h2> 
<table> 
    <thead> 
        <tr> 
            <td> 
                method name
            </td> 
            <td> 
                return type
            </td> 
            <td> 
                arguments
            </td> 
            <td> 
                example (click code)
            </td> 
        </tr> 
    </thead> 
    <tbody> 
        <tr> 
            <td> 
                Join
            </td> 
            <td> 
                Enumerable
            </td> 
            <td> 
                T[] inner, T outerKeySelector(T), T innerKeySelector(T), T resultSelector(T, T)
            </td> 
            <td> 
                <pre><code>var array1 = [13,413,5,135,61,631,13,61,3];
var array2 = [13,134,53,6,3,7,13,7,7,135,61,3,13];
Enumerable.From(array1)
.Join(Enumerable.From(array2),"","","outer,inner=>outer + ':' + inner")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                GroupJoin
            </td> 
            <td> 
                Enumerable
            </td> 
            <td> 
                T[] inner, T outerKeySelector(T), T innerKeySelector(T), T resultSelector(T, T[])
            </td> 
            <td> 
                <pre><code>var array1 = [13,413,5,135,61,631,13,61,3];
var array2 = [13,134,53,6,3,7,13,7,7,135,61,3,13];
Enumerable.From(array1)
.GroupJoin(array2,"","","outer,lookup=>outer + ':' + lookup.ToString('-')")</code></pre>
            </td> 
        </tr> 
    </tbody> 
</table> 
<h2> 
    Set Methods</h2> 
<table> 
    <thead> 
        <tr> 
            <td> 
                method name
            </td> 
            <td> 
                return type
            </td> 
            <td> 
                arguments
            </td> 
            <td> 
                example (click code)
            </td> 
        </tr> 
    </thead> 
    <tbody> 
        <tr> 
            <td> 
                All
            </td> 
            <td> 
                Boolean
            </td> 
            <td> 
                bool predicate(T)
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10).All("$<5")</code></pre>
                <pre><code>Enumerable.Range(1,10).All("$<15")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td rowspan="2"> 
                Any
            </td> 
            <td rowspan="2"> 
                Boolean
            </td> 
            <td> 
                ()
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,0).Any()</code></pre>
                <pre><code>Enumerable.Range(1,10).Any()</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                bool predicate(T)
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10).Any("$==5")</code></pre>
                <pre><code>Enumerable.Range(1,10).Any("$==15")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                Concat
            </td> 
            <td> 
                Enumerable
            </td> 
            <td> 
                T[] second
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,5).Concat(Enumerable.Repeat("foo",5))</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                Insert
            </td> 
            <td> 
                Enumerable
            </td> 
            <td> 
                int index, T[] second
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,5).Insert(3,Enumerable.Repeat("foo",5))</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                Alternate
            </td> 
            <td> 
                Enumerable
            </td> 
            <td> 
                T value
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,5).Alternate(-1)</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td rowspan="2"> 
                Contains
            </td> 
            <td rowspan="2"> 
                Boolean
            </td> 
            <td> 
                T value
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,5).Contains(3)</code></pre>
                <pre><code>Enumerable.Range(1,5).Contains(10)</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                T value, T compareSelector(T)
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,5).Select("{test:$}").Contains(3)</code></pre>
                <pre><code>Enumerable.Range(1,5).Select("{test:$}").Contains(3,"$.test")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                DefaultIfEmpty
            </td> 
            <td> 
                Enumerable
            </td> 
            <td> 
                T defaultValue
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,5).DefaultIfEmpty("default")</code></pre>
                <pre><code>Enumerable.Range(1,0).DefaultIfEmpty("default")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td rowspan="2"> 
                Distinct
            </td> 
            <td rowspan="2"> 
                Enumerable
            </td> 
            <td> 
                ()
            </td> 
            <td> 
                <pre><code>var array = [1,412,5,3,5,412,7];
Enumerable.From(array).Distinct()</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                T compareSelector(T)
            </td> 
            <td> 
                <pre><code>var seq = Enumerable.Range(1,10).Select("{test:$%3}");
seq.Distinct("$.test").Select("$.test")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td rowspan="2"> 
                Except
            </td> 
            <td rowspan="2"> 
                Enumerable
            </td> 
            <td> 
                T[] second
            </td> 
            <td> 
                <pre><code>var array1 = [1,412,5,3,5,412,7];
var array2 = [20,12,5,5,7,310];
Enumerable.From(array1).Except(array2)</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                T[] second, T compareSelector(T)
            </td> 
            <td> 
                <pre><code>var seq1 = Enumerable.Range(1,10).Select("{test:$%5}");
var seq2 = Enumerable.Range(1,10).Select("{test:$%2}");
seq1.Except(seq2,"$.test").Select("$.test")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td rowspan="2"> 
                Intersect
            </td> 
            <td rowspan="2"> 
                Enumerable
            </td> 
            <td> 
                T[] second
            </td> 
            <td> 
                <pre><code>var array1 = [1,412,5,3,5,412,7];
var array2 = [20,12,5,5,7,310];
Enumerable.From(array1).Intersect(array2)</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                T[] second, T compareSelector(T)
            </td> 
            <td> 
                <pre><code>var seq1 = Enumerable.Range(1,10).Select("{test:$%5}");
var seq2 = Enumerable.Range(1,10).Select("{test:$%2}");
seq1.Intersect(seq2,"$.test").Select("$.test")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td rowspan="2"> 
                SequenceEqual
            </td> 
            <td rowspan="2"> 
                Boolean
            </td> 
            <td> 
                T[] second
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,5).SequenceEqual(Enumerable.Range(1,5))</code></pre>
                <pre><code>Enumerable.Range(1,5).SequenceEqual(Enumerable.Range(1,6))</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                T[] second, T compareSelector(T)
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10).Select("{test:$%5}")
.SequenceEqual(Enumerable.Range(1,10).Select("{test:$%5}"),"$.test")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td rowspan="2"> 
                Union
            </td> 
            <td rowspan="2"> 
                Enumerable
            </td> 
            <td> 
                T[] second
            </td> 
            <td> 
                <pre><code>var array1 = [1,412,5,3,5,412,7];
var array2 = [20,12,5,5,7,310];
Enumerable.From(array1).Union(array2)</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                T[] second, T compareSelector(T)
            </td> 
            <td> 
                <pre><code>var seq1 = Enumerable.Range(1,5).Select("{test:$}");
var seq2 = Enumerable.Range(3,7).Select("{test:$}");
seq1.Union(seq2,"$.test").Select("$.test")</code></pre>
            </td> 
        </tr> 
    </tbody> 
</table> 
<h2> 
    Ordering Methods</h2> 
<table> 
    <thead> 
        <tr> 
            <td> 
                method name
            </td> 
            <td> 
                return type
            </td> 
            <td> 
                arguments
            </td> 
            <td> 
                example (click code)
            </td> 
        </tr> 
    </thead> 
    <tbody> 
        <tr> 
            <td rowspan="2"> 
                OrderBy
            </td> 
            <td rowspan="2"> 
                Enumerable
            </td> 
            <td> 
                ()
            </td> 
            <td> 
                <pre><code> 
var array = [1,51,61,75,8,35,43];
Enumerable.From(array).OrderBy()</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                T keySelector(T)
            </td> 
            <td> 
                <pre><code> 
var array = [{a:"a"},{a:"z"},{a:"k"},{a:"l"},{a:"m"},{a:"c"}];
Enumerable.From(array).OrderBy("$.a").Select("$.a")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td rowspan="2"> 
                OrderByDescending
            </td> 
            <td rowspan="2"> 
                Enumerable
            </td> 
            <td> 
                ()
            </td> 
            <td> 
                <pre><code> 
var array = [1,51,61,75,8,35,43];
Enumerable.From(array).OrderByDescending()</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                T keySelector(T)
            </td> 
            <td> 
                <pre><code> 
var array = [{a:"a"},{a:"z"},{a:"k"},{a:"l"},{a:"m"},{a:"c"}];
Enumerable.From(array).OrderByDescending("$.a").Select("$.a")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                ThenBy
            </td> 
            <td> 
                Enumerable
            </td> 
            <td> 
                T keySelector(T)
            </td> 
            <td> 
                <pre><code> 
var list = [
       { a: 2, b: 4, c: 1 },
       { a: 2, b: 3, c: 7 },
       { a: 2, b: 3, c: 3 },
       { a: 4, b: 7, c: 5 },
       { a: 7, b: 3, c: 2 },
       { a: 4, b: 1, c: 5 }];
Enumerable.From(list).OrderBy("$.a").ThenBy("$.c").ThenBy("$.b")
.Select("$.a + ':' + $.b + ':' + $.c")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                ThenByDescending
            </td> 
            <td> 
                Enumerable
            </td> 
            <td> 
                T keySelector(T)
            </td> 
            <td> 
                <pre><code> 
var list = [
       { a: 2, b: 4, c: 1 },
       { a: 2, b: 3, c: 7 },
       { a: 2, b: 3, c: 3 },
       { a: 4, b: 7, c: 5 },
       { a: 7, b: 3, c: 2 },
       { a: 4, b: 1, c: 5 }];
Enumerable.From(list).OrderBy("$.a").ThenByDescending("$.c").ThenByDescending("$.b")
.Select("$.a + ':' + $.b + ':' + $.c")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                Reverse
            </td> 
            <td> 
                Enumerable
            </td> 
            <td> 
                ()
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10).Reverse()</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                Shuffle
            </td> 
            <td> 
                Enumerable
            </td> 
            <td> 
                ()
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10).Shuffle()</code></pre>
            </td> 
        </tr> 
    </tbody> 
</table> 
<h2> 
    Grouping Methods</h2> 
<table> 
    <thead> 
        <tr> 
            <td> 
                method name
            </td> 
            <td> 
                return type
            </td> 
            <td> 
                arguments
            </td> 
            <td> 
                example (click code)
            </td> 
        </tr> 
    </thead> 
    <tbody> 
        <tr> 
            <td rowspan="3"> 
                GroupBy
            </td> 
            <td rowspan="3"> 
                Enumerable
            </td> 
            <td> 
                T keySelector(T)
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,5).GroupBy("$%2==0")
.Select("$.Key + ':' + $.Value.ToString('-')")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                T keySelector(T), T elementSelector(T)
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,5).GroupBy("$%2==0","$*10")
.Select("$.Key + ':' + $.Value.ToString('-')")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                T keySelector(T), T elementSelector(T), T resultSelector(T, Enumerable)
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,5)
.GroupBy("$%2==0","","key,value=>key+':'+value.ToString('-')")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td rowspan="3"> 
                PartitionBy
            </td> 
            <td rowspan="3"> 
                Enumerable
            </td> 
            <td> 
                T keySelector(T)
            </td> 
            <td> 
                <pre><code>Enumerable.From([1,2,2,3,3,2,1,1]).PartitionBy("i=>i")
.Select("$.Key + ':' + $.Value.ToString('-')")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                T keySelector(T), T elementSelector(T)
            </td> 
            <td> 
                <pre><code>Enumerable.From([1,2,2,3,3,2,1,1]).PartitionBy("i=>i","i=>i*100")
.Select("$.Key + ':' + $.Value.ToString('-')")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                T keySelector(T), T elementSelector(T), T resultSelector(T, Enumerable)
            </td> 
            <td> 
                <pre><code>Enumerable.From([1,2,2,3,3,2,1,1])
.PartitionBy("i=>i","i=>i","key,value=>key+':'+value.ToString('-')")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                BufferWithCount
            </td> 
            <td> 
                Enumerable
            </td> 
            <td> 
                int count
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10).BufferWithCount(4)</code></pre>
            </td> 
        </tr> 
    </tbody> 
</table> 
<h2> 
    Aggregate Methods</h2> 
<table> 
    <thead> 
        <tr> 
            <td> 
                method name
            </td> 
            <td> 
                return type
            </td> 
            <td> 
                arguments
            </td> 
            <td> 
                example (click code)
            </td> 
        </tr> 
    </thead> 
    <tbody> 
        <tr> 
            <td rowspan="3"> 
                Aggregate
            </td> 
            <td rowspan="3"> 
                T
            </td> 
            <td> 
                T func(T, T)
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,5).Aggregate("a,b=>a*b")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                T seed, T func(T, T)
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10).Aggregate(100,"a,b=>a+b")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                T seed, T func(T, T), T resultSelector(T)
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10).Aggregate(100,"a,b=>a+b","$*10")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td rowspan="2"> 
                Average
            </td> 
            <td rowspan="2"> 
                Number
            </td> 
            <td> 
                ()
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10).Average()</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                Number selector(T)
            </td> 
            <td> 
                <pre><code>Enumerable.From([{a:"foo",b:5},{a:"bar",b:20},{a:"foobar",b:10}])
.Average("$.b")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td rowspan="2"> 
                Count
            </td> 
            <td rowspan="2"> 
                Number
            </td> 
            <td> 
                ()
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10).Count()</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                bool predicate(T)
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10).Count("$>7")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td rowspan="2"> 
                Max
            </td> 
            <td rowspan="2"> 
                Number
            </td> 
            <td> 
                ()
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10).Max()</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                Number selector(T)
            </td> 
            <td> 
                <pre><code>Enumerable.From([{a:"foo",b:5},{a:"bar",b:20},{a:"foobar",b:10}])
.Max("$.b")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td rowspan="2"> 
                Min
            </td> 
            <td rowspan="2"> 
                Number
            </td> 
            <td> 
                ()
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10).Min()</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                Number selector(T)
            </td> 
            <td> 
                <pre><code>Enumerable.From([{a:"foo",b:5},{a:"bar",b:20},{a:"foobar",b:10}])
.Min("$.b")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                MaxBy
            </td> 
            <td> 
                T
            </td> 
            <td> 
                Number selector(T)
            </td> 
            <td> 
                <pre><code>Enumerable.From([{a:"foo",b:5},{a:"bar",b:20},{a:"foobar",b:10}])
.MaxBy("$.b").a</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                MinBy
            </td> 
            <td> 
                T
            </td> 
            <td> 
                Number selector(T)
            </td> 
            <td> 
                <pre><code>Enumerable.From([{a:"foo",b:5},{a:"bar",b:20},{a:"foobar",b:10}])
.MinBy("$.b").a</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td rowspan="2"> 
                Sum
            </td> 
            <td rowspan="2"> 
                Number
            </td> 
            <td> 
                ()
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10).Sum()</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                Number selector(T)
            </td> 
            <td> 
                <pre><code>Enumerable.From([{a:"foo",b:5},{a:"bar",b:20},{a:"foobar",b:10}])
.Sum("$.b")</code></pre>
            </td> 
        </tr> 
    </tbody> 
</table> 
<h2> 
    Paging Methods</h2> 
<table> 
    <thead> 
        <tr> 
            <td> 
                method name
            </td> 
            <td> 
                return type
            </td> 
            <td> 
                arguments
            </td> 
            <td> 
                example (click code)
            </td> 
        </tr> 
    </thead> 
    <tbody> 
        <tr> 
            <td> 
                ElementAt
            </td> 
            <td> 
                T
            </td> 
            <td> 
                int index
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10).ElementAt(3)</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                ElementAtOrDefault
            </td> 
            <td> 
                T
            </td> 
            <td> 
                int index, T defaultValue
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10).ElementAtOrDefault(15,-1)</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td rowspan="2"> 
                First
            </td> 
            <td rowspan="2"> 
                T
            </td> 
            <td> 
                ()
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10).First()</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                bool predicate(T)
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10).First("$>4")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td rowspan="2"> 
                FirstOrDefault
            </td> 
            <td rowspan="2"> 
                T
            </td> 
            <td> 
                T defaultValue
            </td> 
            <td> 
                <pre><code>Enumerable.Empty().FirstOrDefault(-1)</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                T defaultValue, bool predicate(T)
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10).FirstOrDefault(-1,"$>15")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td rowspan="2"> 
                Last
            </td> 
            <td rowspan="2"> 
                T
            </td> 
            <td> 
                ()
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10).Last()</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                bool predicate(T)
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10).Last("$<4")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td rowspan="2"> 
                LastOrDefault
            </td> 
            <td rowspan="2"> 
                T
            </td> 
            <td> 
                T defaultValue
            </td> 
            <td> 
                <pre><code>Enumerable.Empty().LastOrDefault(-1)</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                T defaultValue, bool predicate(T)
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10).LastOrDefault(-1,"$>15")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td rowspan="2"> 
                Single
            </td> 
            <td rowspan="2"> 
                T
            </td> 
            <td> 
                ()
            </td> 
            <td> 
                <pre><code>Enumerable.From("a").Single()</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                bool predicate(T)
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10).Single("$==4")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td rowspan="2"> 
                SingleOrDefault
            </td> 
            <td rowspan="2"> 
                T
            </td> 
            <td> 
                T defaultValue
            </td> 
            <td> 
                <pre><code>Enumerable.Empty().SingleOrDefault(-1)</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                T defaultValue, bool predicate(T)
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10).SingleOrDefault(-1,"$==15")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                Skip
            </td> 
            <td> 
                Enumerable
            </td> 
            <td> 
                int count
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10).Skip(5)</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td rowspan="2"> 
                SkipWhile
            </td> 
            <td rowspan="2"> 
                Enumerable
            </td> 
            <td> 
                bool predicate(T)
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10).SkipWhile("$<=5")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                bool predicate(T, int index)
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10).SkipWhile("value,index=>value+index<=5")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                Take
            </td> 
            <td> 
                Enumerable
            </td> 
            <td> 
                int count
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10).Take(5)</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td rowspan="2"> 
                TakeWhile
            </td> 
            <td rowspan="2"> 
                Enumerable
            </td> 
            <td> 
                bool predicate(T)
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10).TakeWhile("$<=5")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                bool predicate(T, int index)
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10).TakeWhile("value,index=>value+index<=5")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td rowspan="2"> 
                TakeExceptLast
            </td> 
            <td rowspan="2"> 
                Enumerable
            </td> 
            <td> 
                ()
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10).TakeExceptLast()</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                Number count
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10).TakeExceptLast(3)</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                IndexOf
            </td> 
            <td> 
                int
            </td> 
            <td> 
                T item
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10).IndexOf(3)</code></pre>
                <pre><code>Enumerable.Range(1,10).IndexOf(15)</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                LastIndexOf
            </td> 
            <td> 
                int
            </td> 
            <td> 
                T item
            </td> 
            <td> 
                <pre><code>Enumerable.From([1,2,3,2,5]).LastIndexOf(2)</code></pre>
                <pre><code>Enumerable.From([1,2,3,2,5]).LastIndexOf(20)</code></pre>
            </td> 
        </tr> 
    </tbody> 
</table> 
<h2> 
    Convert Methods</h2> 
<table> 
    <thead> 
        <tr> 
            <td> 
                method name
            </td> 
            <td> 
                return type
            </td> 
            <td> 
                arguments
            </td> 
            <td> 
                example (click code)
            </td> 
        </tr> 
    </thead> 
    <tbody> 
        <tr> 
            <td> 
                ToArray
            </td> 
            <td> 
                Array
            </td> 
            <td> 
                ()
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10).ToArray()</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td rowspan="2"> 
                ToLookup
            </td> 
            <td rowspan="2"> 
                Object
            </td> 
            <td> 
                T keySelector(T)
            </td> 
            <td> 
                <pre><code>var result = Enumerable.From(["temp.xls", "temp.pdf", "temp.jpg", "temp2.pdf"])
.ToLookup("$.match(/\\.(.+$)/)[1]");
Enumerable.From(result).Select("$.Key + ' : ' + $.Value")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                T keySelector(T), T elementSelector(T)
            </td> 
            <td> 
                <pre><code>var result = Enumerable.From(["temp.xls", "temp.pdf", "temp.jpg", "temp2.pdf"])
.ToLookup("$.match(/\\.(.+$)/)[1]","$.match(/(.+)\\.[^.]+$/)[1]");
Enumerable.From(result).Select("$.Key + ' : ' + $.Value")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                ToObject
            </td> 
            <td> 
                Object
            </td> 
            <td> 
                T keySelector(T), T elementSelector(T)
            </td> 
            <td> 
                <pre><code>var obj = Enumerable.Range(1,10).Select("value,index=>{id:'id_' + index,value:value}")
.ToObject("$.id","$.value");
Enumerable.From(obj).Select("$.Key + ':' + $.Value")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td rowspan="3"> 
                ToString
            </td> 
            <td rowspan="3"> 
                String
            </td> 
            <td> 
                ()
            </td> 
            <td> 
                <pre><code>Enumerable.Range(0,10).ToString()</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                String separator
            </td> 
            <td> 
                <pre><code>Enumerable.Range(0,10).ToString("-")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                String separator, T selector(T)
            </td> 
            <td> 
                <pre><code>Enumerable.From([{k:"foo"},{k:"bar"}]).ToString("-","$.k")</code></pre>
            </td> 
        </tr> 
    </tbody> 
</table> 
<h2> 
    Action Methods</h2> 
<table> 
    <thead> 
        <tr> 
            <td> 
                method name
            </td> 
            <td> 
                return type
            </td> 
            <td> 
                arguments
            </td> 
            <td> 
                example (click code)
            </td> 
        </tr> 
    </thead> 
    <tbody> 
        <tr> 
            <td rowspan="2"> 
                Do
            </td> 
            <td rowspan="2"> 
                Enumerable
            </td> 
            <td> 
                void action(T)
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10).Do(function(i){
document.write('do:'+ i +'|');})
.Where("$%2==0")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                void action(T, index)
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10).Do(function(value,index){
document.write("do:" + index + '-' + value + "&lt;br/>");})
.OrderBy("").Take(2)</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td rowspan="4"> 
                ForEach
            </td> 
            <td rowspan="4"> 
                void
            </td> 
            <td> 
                void action(T)
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10).ForEach(function(i){
document.write(i);})</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                void action(T, index)
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10).ForEach(function(value,index){
document.write(index + ':' + value + "&lt;br/>");})</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                bool func(T)
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1, 10).ForEach(function(i)
{
if (i % 2 == 0) return; // continue
if (i > 6) return false; // break
document.write(i + "&lt;br/>");
})</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                bool func(T, index)
            </td> 
            <td> 
                <pre><code>Enumerable.Repeat("aaa", 10).ForEach(function(s,index)
{
if (index % 2 == 0) return; // continue
if (index > 6) return false; // break
document.write(index + s + "&lt;br/>");
})</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td rowspan="3"> 
                Write
            </td> 
            <td rowspan="3"> 
                void
            </td> 
            <td> 
                ()
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10).Write()</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                String separator
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10).Write("-")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                String separator, T selector(T)
            </td> 
            <td> 
                <pre><code>Enumerable.From([{a:"foo",b:1},{a:"bar",b:3}])
.Write("-","$.a + ':' + $.b")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td rowspan="2"> 
                WriteLine
            </td> 
            <td rowspan="2"> 
                void
            </td> 
            <td> 
                ()
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10).WriteLine()</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                T selector(T)
            </td> 
            <td> 
                <pre><code>Enumerable.From([{a:"foo",b:1},{a:"bar",b:3}])
.WriteLine("$.a + ':' + $.b")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                Force
            </td> 
            <td> 
                void
            </td> 
            <td> 
                ()
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10).Trace().Force()</code></pre>
            </td> 
        </tr> 
    </tbody> 
</table> 
<h2> 
    Error Handling Methods</h2> 
<table> 
    <thead> 
        <tr> 
            <td> 
                method name
            </td> 
            <td> 
                return type
            </td> 
            <td> 
                arguments
            </td> 
            <td> 
                example (click code)
            </td> 
        </tr> 
    </thead> 
    <tbody> 
        <tr> 
            <td> 
                Catch
            </td> 
            <td> 
                Enumerable
            </td> 
            <td> 
                void handler(Error)
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10).Select(function(i){
if(i == 5) throw new Error("enumerable_error"); else return i;})
.Catch("document.write($.message)")</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                Finally
            </td> 
            <td> 
                Enumerable
            </td> 
            <td> 
                void finallyAction()
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,5).Finally(function(){document.write("finally")})</code></pre>
            </td> 
        </tr> 
    </tbody> 
</table> 
<h2> 
    For Debug Methods</h2> 
<table> 
    <thead> 
        <tr> 
            <td> 
                method name
            </td> 
            <td> 
                return type
            </td> 
            <td> 
                arguments
            </td> 
            <td> 
                example (click code)
            </td> 
        </tr> 
    </thead> 
    <tbody> 
        <tr> 
            <td rowspan="3"> 
                Trace
            </td> 
            <td rowspan="3"> 
                Enumerable
            </td> 
            <td> 
                ()
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10).Trace().Force()</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                String message
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10).Trace("Gen").Where("$%3==0").Trace("Filtered").Force()</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                String message, T selector(T)
            </td> 
            <td> 
                <pre><code>Enumerable.From([{a:"foo",b:1},{a:"bar",b:3}])
.Trace("Gen","$.a").Force()</code></pre>
            </td> 
        </tr> 
    </tbody> 
</table> 
<h2> 
    IEnumerator</h2> 
<table> 
    <thead> 
        <tr> 
            <td> 
                method name
            </td> 
            <td> 
                return type
            </td> 
            <td> 
                arguments
            </td> 
            <td> 
                example (click code)
            </td> 
        </tr> 
    </thead> 
    <tbody> 
        <tr> 
            <td> 
                GetEnumerator
            </td> 
            <td> 
                IEnumerator
            </td> 
            <td> 
                ()
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10).GetEnumerator()</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                MoveNext
            </td> 
            <td> 
                Boolean
            </td> 
            <td> 
                ()
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10).GetEnumerator().MoveNext()</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                Current
            </td> 
            <td> 
                T
            </td> 
            <td> 
                ()
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10).GetEnumerator().Current()</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                Dispose
            </td> 
            <td> 
                void
            </td> 
            <td> 
                ()
            </td> 
            <td> 
                <pre><code>Enumerable.Range(1,10).GetEnumerator().Dispose()</code></pre>
            </td> 
        </tr> 
    </tbody> 
</table> 
<h2> 
    jQuery plugin</h2> 
<table> 
    <thead> 
        <tr> 
            <td> 
                method name
            </td> 
            <td> 
                return type
            </td> 
            <td> 
                arguments
            </td> 
            <td> 
                example (click code)
            </td> 
        </tr> 
    </thead> 
    <tbody> 
        <tr> 
            <td> 
                TojQuery
            </td> 
            <td> 
                jQuery
            </td> 
            <td> 
                ()
            </td> 
            <td> 
                <pre><code>// Enumerable.Repeat("foo",10).TojQuery()</code></pre>
            </td> 
        </tr> 
        <tr> 
            <td> 
                toEnumerable
            </td> 
            <td> 
                Enumerable
            </td> 
            <td> 
                ()
            </td> 
            <td> 
                <pre><code>// $("div").toEnumerable()</code></pre>
            </td> 
        </tr> 
    </tbody> 
</table>
http://msdn.microsoft.com/en-us/vcsharp/aa336746.aspx

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