var html = require('..');

describe('dom-insert-html', function () {
  var fixture, reference;

  beforeEach(function () {
    // initial fixture
    fixture = document.createElement('div');
    fixture.innerHTML = '<div id="ref">ref</div>';
    document.body.appendChild(fixture);
    // reference element
    reference = document.getElementById('ref');
  });

  afterEach(function () {
    document.body.removeChild(fixture);
  });

  describe('after(element, content)', function () {
    it('inserts an HTML string after a given Element', function () {
      html.after(reference, '<div id="one"></div>');
      var actual = fixture.innerHTML;
      expect(actual).toBe('<div id="ref">ref</div><div id="one"></div>');
    });
  });

  describe('append(element, content)', function () {
    it('appends an HTML string to the content of a given Element', function () {
      html.append(reference, '<div id="one"></div>');
      var actual = fixture.innerHTML;
      expect(actual).toBe('<div id="ref">ref<div id="one"></div></div>');
    });
  });

  describe('before(element, content)', function () {
    it('inserts an HTML string before a given Element', function () {
      html.before(reference, '<div id="two"></div>');
      var actual = fixture.innerHTML;
      expect(actual).toBe('<div id="two"></div><div id="ref">ref</div>');
    });
  });

  describe('prepend(element, content)', function () {
    it('prepends an HTML string to the content of a given Element', function () {
      html.prepend(reference, '<div id="one"></div>');
      var actual = fixture.innerHTML;
      expect(actual).toBe('<div id="ref"><div id="one"></div>ref</div>');
    });
  });
});
