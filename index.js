/**
 * Exports
 */

module.exports = {
  after: after,
  append: append,
  before: before,
  prepend: prepend
};

/**
 * after
 * @param {element} element
 * @param {string} content
 */
function after(element, content) {
  return element.insertAdjacentHTML('afterEnd', content);
}

/**
 * append
 * @param {element} element
 * @param {string} content
 */
function append(element, content) {
  return element.insertAdjacentHTML('beforeEnd', content);
}

/**
 * before
 * @param {element} element
 * @param {string} content
 */
function before(element, content) {
  return element.insertAdjacentHTML('beforeBegin', content);
}

/**
 * prepend
 * @param {element} element
 * @param {string} content
 */
function prepend(element, content) {
  return element.insertAdjacentHTML('afterBegin', content);
}
