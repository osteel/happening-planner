; (function (define) {
  define('happeningPlanner', function () {
    return (function () {
      
      function plan(eventList, selectedIds) {
        
        var unorderedList = [];
        
        // - for each selected id, go through events to find the corresponding one
        // - store it in a orderedList, ordered by start date
        _.forEach(selectedIds, function(id) {
          var event = _.find(eventList, { 'id': id });
          unorderedList.push(event);
        });
        
        var orderedList = _.sortBy(unorderedList, ['start_date', 'name']);

        // - go through the orderedList array and, for each element:
        //     - push it in the planning array following this format:
        //       {
        //         "happening": element,
        //         "conflicts": []
        //       }
        //     - compare its end date to the start date of the next event.
        //       If they clash, place this event into the conflicts array.
        //       Precise the level of conflict as following:
        //         - 1: end date happens after the start date of the next event
        //           but before its end date
        //         - 2: end date happens at the same date or after the end date
        //           of the next event
        //       Repeat with all the next events until the end date doesn't
        //       clash with the start date.
        var planning  = [];
        var index     = 0;
        
        _.forEach(orderedList, function(event) {
          planning.push({
            "happening": event,
            "conflicts": []
          });
          
          var incr  = 1,
              level,
              nextEvent;
          
          while (true) {
            nextEvent = orderedList[index + incr];
            if (typeof nextEvent === "undefined") { break; }
            level = conflictLevel(event, nextEvent);
            
            if (level === 0) { break; }
            
            planning[index].conflicts.push({
              "happening": nextEvent,
              "level": level
            });
            
            incr ++;
          }
          
          index ++;
        });
        
        // The way the conflicts are resolved is up to the developer using the
        // library. The selection can be passed to the library until there are
        // no more conflicts.
        return planning;
      }
      
      function conflictLevel(event1, event2) {
        if (event1.end_date >= event2.end_date) {
          return 2;
        } else if (event1.end_date > event2.start_date) {
          return 1;
        }
        return 0;
      }
      
      var happeningPlanner = {
        plan: plan
      };
      
      return happeningPlanner;
      
    })();
  });
}(typeof define === 'function' && define.amd ? define : function (id, factory) {
  if (typeof module !== 'undefined' && module.exports) { //Node
    module.exports = factory(require);
  } else {
    window[id] = factory();
  }
}));