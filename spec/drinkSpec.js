describe("whatCanIDrink", function(){
    describe("whatCanIDrink Age test", function() {
        it("should return Sorry. I can’t tell what drink because that age is incorrect", function(){
            expect(whatCanIDrink(-5)).toBe("Sorry. I can’t tell what drink because that age is incorrect");
        });
        it("should return Drink Toddy", function() {
            expect(whatCanIDrink(12)).toBe("Drink Toddy");
        });
        it("should return Drink Coke", function() {
            expect(whatCanIDrink(16)).toBe("Drink Coke");
        });
        it("should return Drink Beer", function() {
            expect(whatCanIDrink(20)).toBe("Drink Beer");
        });
        it("should return Drink Whiskey", function() {
            expect(whatCanIDrink(122)).toBe("Drink Whiskey");
        });
        it("should return Sorry. I can’t tell what drink because that age is incorrect!", function() {
            expect(whatCanIDrink(145)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
        it("should return Sorry. I can’t tell what drink because that age is incorrect!", function() {
            expect(whatCanIDrink("thirty")).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
    });
});