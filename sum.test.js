const sum = require("./sum");

test("2개 숫자의 합", function(){
    expect(sum(2,48)).toBe(50);
    expect(sum(5, 41)).toBe(46);
});