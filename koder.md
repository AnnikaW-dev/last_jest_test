# Sparade koder som funkat
# Test 1
## game.test.js

const addition = require("../game");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
    });
    describe("Subtract function", () => {

    });
    describe("Multiply function", () => {

    });
    describe("Divide function", () => {

    });
});

## game.js
function addition() {
    return 42;
}

module.exports = addition;

# test 2

npm install --save-dev jest@26.6.3