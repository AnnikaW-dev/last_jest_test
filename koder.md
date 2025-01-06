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

#### ...js

/**
 * @jest-environment jsdom
 */

const buttonClick = require("../game");

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("DOM tests", () => {
    test("Expects content to change", () => {
        buttonClick();
        expect(document.getElementById("par")
            .innerHTML).toEqual("You Clicked");
    });
    test("h1 should exist", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1);
    });
});

#### .test.js

function buttonClick() {
    document.getElementById("par").innerHTML = "You Clicked";
}

module.exports = buttonClick;