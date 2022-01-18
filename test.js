describe("higher", function() {

    it("gives the higher value ", function() {
      assert.equal(higher(1, 2), 2);
    });
    
    it("Equal test case passed ", function() {
        assert.equal(higher(3,3), 'Equal numbers');
    });
    
    it("Boolean case ", function() {
        assert.equal(higher(true, false), true);
    });
    it("String test case passed ", function() {
        assert.equal(higher('a','b'), 'string values');
    });

    it("large integer case passed", function() {
        assert.equal(higher(900000000000000000000000, 10000000000000000000), 900000000000000000000000);
      });

  });