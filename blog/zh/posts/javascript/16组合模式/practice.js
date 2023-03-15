/*
 * @Author: HotSuitor
 * @Date: 2020-03-19 12:26:05
 * @LastEditors: hs
 * @LastEditTime: 2020-03-19 14:12:12
 * @Description: hotsuitor@qq.com
 */
const createElement = function({ tag, attr, children }) {
  const node = tag
    ? document.createElement(tag)
    : document.createTextNode(attr.text);
  tag && Object.keys(attr).forEach(key => node.setAttribute(key, attr[key]));
  children &&
    children.forEach(child =>
      node.appendChild(createElement(child))
    );
  return node;
};

const ulElement = createElement({
  tag: 'ul',
  attr: {id: 'data-list'},
  children: [
    {
      tag: 'li',
      attr: {class: 'item'},
      children:[{attr:{text: 'item1'}}]
    },
    {
      tag: 'li',
      attr: {class: 'item'},
      children:[{attr:{text: 'item2'}}]
    },
    {
      tag: 'li',
      attr: {class: 'item'},
      children:[{attr:{text: 'item3'}}]
    },
  ]
})
console.log(ulElement);
document.body.appendChild(ulElement);
/* <ul id="data-list"><li class="item">item1</li><li class="item">item2</li><li class="item">item3</li></ul> */
