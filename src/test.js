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

const checkNode = el => {
  if (!el) return
  const input = el.querySelector('input')
  if (input) {
    input.click()
  } else if (isLeaf(el)) {
    el.click()
  }
}
function noop () {}
const DefaultProps = {
  expandTrigger: 'click',
  multiple: false,
  checkStrictly: false,
  emitPath: true,
  lazy: false,
  value: 'value',
  label: 'label',
  children: 'children',
  leaf: 'leaf',
  disable: 'disable',
  hoverThreshold: 500,
  lazyLoad: noop
 }
 const props = {
   value: {},
   options:Arrray,
   props: Object,
   border: {
     type: Boolean,
     default: true
   },
   renderLabel: Function
 }
function merge (target) {
  // 从1开始循环
  for (let i = 1, j = arguments.length; i < j; i++){
    let source = arguments[i] || {}
    for (let prop in source) {
      if (source.hasOwnProperty(prop)) {
        let value = source[prop]
        if (value !== undefined) {
          target[prop] = value
        }
      }
    }
  }
  return target
}

function renderLabelFn() {
  return this.renderLabel || this.$scopedSlots.default
}