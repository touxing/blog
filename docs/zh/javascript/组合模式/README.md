
场景：
系统文件夹结构，文件夹里面可以有文件夹和文件，子文件夹下又可以有文件夹和文件，以此类推，组成了一个文件数


### 实战，借助组合模式，实现dom树节点的创建
```js
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
```
vue和react的虚拟DOM也是这样类似的树形结构渲染DOM节点的

### 优缺点
优点：
1. 由于组合对象和叶对象具有相同的接口，因此调用组合对象还是叶对象对使用者来说没有区别，使得使用者面向对象接口编程
2. 对扩展友好，如何开闭原则，利于维护。如果想要在组合模式中增加一个节点比较容易，在目标组合节点中添加即可，不会影响到其他对象。
缺点：
1. 增加了系统的复杂性，如果树中的对象不多，不一定需要使用；
2. 如果通过组合对象创建了太多对象，会增加系统负担。

### 适用场景
1. 对象组织呈树形结构
2. 使用者希望统一对待树形结构中的对象，比如用户不想写一堆`if-else`来处理树中的节点时
