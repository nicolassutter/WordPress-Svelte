/**
 * Allows to get the json value of an attribute
 * @param {HTMLElement} el The element we want to get the data from
 * @param {String} data The data we want to get
 * @param {Boolean} del If the attribute should then be deleted
 * @returns {Object|null} The corresponding json OR null if an error occured
 */
export const getData = (el, data, del = true) => {
  if (el && data) {
    const attribute = el.getAttribute(`data-${data}`)
    if (attribute) {
      try {
        const json = JSON.parse(attribute)
        del && el.removeAttribute(`data-${data}`)
        return json
      } catch (error) {
        del && el.removeAttribute(`data-${data}`)
        return null
      }
    }
    return null
  }
  return null
}
