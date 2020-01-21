TypeScript React Run Custom Code for Dynamic Elements Demo
=============================================================

某些React component里可能有动态的内容，如果我们需要在动态内容变化时，
执行自己的代码进行某些操作（比如设置`tabindex`），就必须找到一种方式，
监控DOM Elements的改变。

目前我能想到的只有`MutationObserver`

```
npm install
npm run demo
```
