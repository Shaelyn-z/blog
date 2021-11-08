# JavaScript 面向对象

**找对象了嘛, 没有的话我们看怎么自己 new 一个吧~**

## 原型

**下面的解说基于如下示例代码**

```javascript
// Person构造函数
function Person(id) {
  this.id = id;
}
// 使用Person构造函数创建的实例对象obj
let obj = new Person(1);
```

- 首先我们要知道, js 中构造函数和普通函数语法是一样的, 只是我们对于构造函数一般会使用首字母大写的方式来定义函数名称, 以便区分于一般函数,而已......
- js 中每个函数会有一个`prototype`属性, 指向原型:
  _打印 Person_

```javascript
console.dir(Person);
```

![打印的Person函数](https://upload-images.jianshu.io/upload_images/24602330-23d758c30b14abc8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 原型上也有一个`constructor`属性, 指向构造函数
  _打印 Person 的原型_

```javascript
console.dir(Person.prototype);
```

![Person的原型](https://upload-images.jianshu.io/upload_images/24602330-769b14fb024901c6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
以上可以得出结论:

```javascript
// true
console.log(Person.prototype.constructor === Person);
```

- 用函数创建出来的实例对象,有个`proto`属性(在多数浏览器中我们调试看到的是`__proto__`), 又指向了该函数的原型
  ![打印的obj对象](https://upload-images.jianshu.io/upload_images/24602330-3c211cd8690167a0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
  所以, `obj`的`__proto__`指向了`Person`的原型对象

```javascript
// true
console.log(obj.__proto__ === Person.prototype);
```

> 这么一看, `实例`, `prototype`, `__proto__`的关系是不是就出来了?

![实例, prototype, __proto__的关系.jpg](https://upload-images.jianshu.io/upload_images/24602330-decd3b728df9cc3e.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 原型链

以上说了`实例`, `prototype`, `__proto__`的关系, 下面来说下原型链;
还是以刚开始的代码为例:

- 我们知道一个实例对象的`__proto__`会指向该实例对象的原型
- 而 js 中所有函数的父类都是`Object`, 所有函数都是`Object`的实例,所以可以得出结论**所有函数的原型中的`__proto__`是指向`Object`原型的**

```javascript
// true
console.log(Person.prototype.__proto__ === Object.prototype);
```

- 现在给 Person 生成一个子类`Lucy`

```javascript
class Lucy extends Person {
  // 这里可以写Lucy特性相关的属性或函数...
}
let lucy = new Lucy(2);
console.dir(lucy);
```

![打印的lucy实例](https://upload-images.jianshu.io/upload_images/24602330-596cc3b5e27a1172.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
由此图可以得出结论:

```javascript
// true
console.log(lucy.__proto__ === Lucy.prototype);
// true
console.log(lucy.__proto__.__proto__ === Person.prototype);
// true
console.log(lucy.__proto__.__proto__.__proto__ === Object.prototype);
```

> 这么一看, 是不是原型链的关系就出来了?

![原型链.jpg](https://upload-images.jianshu.io/upload_images/24602330-d043d568ee10a382.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 基于 prototype 的继承

我们知道声明一个"类"可以使用这种方式:

```javascript
// 构造函数, 函数名称首字母大写
function Book(id, name) {
  this.id = id;
  this.name = name;
  this.title = "我是父类的成员";
}
```

然后在父类`Book`的原型上写个属性和方法, 方便待会儿验证子类的继承:

```javascript
// 原型上的属性
Book.prototype.type = "文学";
// 原型上的toStr方法,打印当前实例的成员
Book.prototype.toStr = function () {
  return `${JSON.stringify(this)}`;
};
// 创建父类book实例
let book = new Book(1, "es6从入门到精通");

// 打印结果:{"id":1,"name":"es6从入门到精通","title":"我是父类的成员"}
console.log(book.toStr());
```

那么如果有一个类要继承`Book`的属性或方法呢?
这时候我们一般会使用原型去实现继承:

```javascript
// 子类构造函数
function Page(id, name) {
  // 继承父类成员
  Book.apply(this, arguments);
  // 子类自身的属性
  this.pageSize = 10;
}
// 让子类的原型指向父类的实例,那么子类原型就可以访问父类原型上的成员
Page.prototype = new Book();
let page = new Page(2, "java从入门到精通");

// 打印结果{"id":2,"name":"java从入门到精通","title":"我是父类的成员","pageSize":10}
console.log(page.toStr());
```

从以上可以看出, `page`成功继承了父类的`title`属性和`toStr`方法.

## es6 面向对象

虽然以上实现了我想要的效果, 但说实话看着有点绕, 可读性比较差, 这时候就可以使用到 es6 提供的关于面向对象的语法糖了.

```javascript
class Book {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.title = "我是父类的成员";
  }
  toStr() {
    return `${JSON.stringify(this)}`;
  }
}

class Page extends Book {
  pageSize = 10;
}

let book = new Book(1, "es6从入门到精通");

// 打印结果: {"id":1,"name":"es6从入门到精通","title":"我是父类的成员"}
console.log(book.toStr());

let page = new Page(2, "java从入门到精通");

// 打印结果: {"id":2,"name":"java从入门到精通","title":"我是父类的成员","pageSize":10}
console.log(page.toStr());
```

真的是~~~
![](https://upload-images.jianshu.io/upload_images/24602330-b5f86bf4dca7fc0b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

另外想要提一下`extends`关键字:

```javascript
class Son extends Father {}

//等同于
class Son extends Parent {
  constructor(...args) {
    super(...args);
  }
}
```

这样一来, 看着友好简洁多了,可以说和一般后端的面向对象写法都大同小异了...

# 222
