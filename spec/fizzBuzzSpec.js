describe ("fizzBuzz", function(){
   describe("FizzBuzz test",function() {
       it("should return FizzBuzz", function(){
           expect(fizzBuzz(15)).toBe("FizzBuzz");
       });
       it("should return Fizz", function(){
           expect(fizzBuzz(21)).toBe("Fizz");
       });
       it("should return Buzz", function(){
           expect(fizzBuzz(20)).toBe("Buzz");
       });
       it("should return number", function(){
           expect(fizzBuzz(11)).toBe(11);
       });
   });
});