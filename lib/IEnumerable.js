
//(function() {
  var IEnumerable = function(dataItems) {
    if (!(this instanceof IEnumerable)) {
      return new IEnumerable(dataItems);
    }
	  
    this.clauses = new Array();
    this.source = dataItems;
  };
	
		
  IEnumerable.prototype = {
    getNext : function() {
      var next;
    
      var clauses = this.clauses;
      this.source.some(function (element, index, array) {
        if(clauses[0](element, index, array)) { // Generic predicate
          next = element;
          return true;
        }
        return false;
      }); 

      return next;
    },

    push: function(clause) { 
      this.clauses.push(clause);
      return this;
    }
  };
//})();


console.log(IEnumerable([2, 3, 5])
  .push(function (element, index, array) { 
    return index > 1 ? true : false;
  })
  .getNext());