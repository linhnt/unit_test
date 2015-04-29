describe("A very simple Unit testing", function () {

    var counter;
    
    // Preparation (set up a scenario)
    beforeEach(function () {
        counter = 0;
    });
    
    it("Increments value", function () {
        // attempt the operation
        counter++;
        // verify the result
        expect(counter).toEqual(1);
    })

    it("Decrements value", function () {
        // attempt the operation
        counter--;
        // verify the result
        expect(counter).toEqual(-1);
    })
});
