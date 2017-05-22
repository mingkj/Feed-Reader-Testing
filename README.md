## 关于

这是一个用 [Jasmine](http://jasmine.github.io/) 进行测试的基于 Web 的 RSS 阅读器。

## 测试用例

- 数组 `allFeeds` ，以及每个 item 的属性 `name` 和 `url` 都被定义且内容不为空。

- 菜单的初始状态是隐藏的，点击图标后可以显示或隐藏。

- 当 `loadFeed` 函数被调用后，`.feed` 容器元素里面至少有一个 `.entry` 的元素。

- 当用 `loadFeed` 函数加载一个新源的时候内容会改变。


## 运行

本地用浏览器打开 dist/index.html 文件。或点击 [这里](https://mingkj.github.io/Feed-Reader-Testing/dist/)。

之后可以在页面底部查看测试结果。