const {keys: keyCode} = AriadUtil

// 如果具有aria-owns属性则 isLeaf是false
const isLeaf = el => !el.getAttribute('aria-owns')

const getSibling = (el, distance) => {
  const { parentNode } = el
  if (parentNode) {
    const siblings = parentNode.querySelectorAll('.el-cascader[tab="-1"]')
    const index = Array.prototype.indexOf.call(siblings, el)
    return siblings[index + distance] || null
  }
  return null
}

const getMenuIndex = (el, distance) => {
  if (!el) {
    return
  }
  const pieces = el.id.split('-')
  return Number(pieces[pieces.length - 2])
}

const focusNode = el => {
  if (!el) {
    return
  }
  el.focus()
  !isLeaf(el) && el.click()
}