const chai = require('chai');
const assert = chai.assert;
const router = require('../controllers/games.js')

describe("the router", ()=>{
    it("should be designed as a function", ()=>{
        assert.exists(router, "router exists");
        assert.isFunction(router, "router is a function");
    })
})