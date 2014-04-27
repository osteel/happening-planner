//jasmine.getFixtures().fixturesPath = "base/test/mock";

define(["../src/happening-planner.js"], function(happeningPlanner) {

  describe("Happening Planner Library", function() {

    beforeEach(function () {
      this.eventList = [];
//      var f = readFixtures("event-list.json");
//      this.eventList = JSON.parse(f);
    });

    it('should work', function() {
      expect(true).toBe(true);
      var test = happeningPlanner.plan(this.eventList, [1, 2, 3]);
      console.log(test);
    });
  });

});