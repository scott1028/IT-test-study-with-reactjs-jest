var fetch = require('whatwg-fetch').fetch;
var $ = require("jquery");
var sinon = require('sinon');
var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;


describe('mocha tests', function () {

  // Important!! new version of jsdom need origin if it's null some api like localStorage will throw error.
  jsdom({
    url: "https://www.example.org/",
    referrer: "https://example.com/",
    contentType: "text/html",
    userAgent: "Mellblomenator/9000",
    includeNodeLocations: true,
    storageQuota: 10000000
  });

  it('testcase-1', async function () {
    // in browser env
    var div = document.createElement('div');
    expect(div.nodeName).eql('DIV');

    var originXMLHttpRequest = XMLHttpRequest;
    this.server = sinon.createFakeServer();

    // because here is not browser environment, so make a patch for nodejs
    global.XMLHttpRequest = this.server.xhr;  // use FakeXMLHttpRequest to Replace window.XMLHTTPRequest Class
    this.server.autoRespond = true;
    this.server.respondWith("GET", "/abc",
      [200, { "Content-Type": "application/json" }, '[{ "id": 12, "comment": "Hey there" }]']);
    console.log('**Before**');
    await fetch('/abc').then(resp => resp.text()).then(data => console.log(data)).catch(e => console.log(e));
    console.log('**After**');

    // restore, non browser env, we make a monkeyPatch
    this.server.restore(); global.XMLHttpRequest = originXMLHttpRequest;
    await fetch('/abc').then(resp => resp.text()).then(data => console.log(data)).catch(e => console.log(e));
  })
});
