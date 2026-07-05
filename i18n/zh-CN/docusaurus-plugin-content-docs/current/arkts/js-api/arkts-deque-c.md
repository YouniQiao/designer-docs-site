# Deque

Deque（double ended queue）是基于队列数据结构实现的序列容器，具备先进先出和先进后出的特点。 支持在两端进行元素的插入和删除。

**起始版本：** 8

**系统能力：** SystemCapability.Utils.Lang

## 导入模块

```TypeScript
import { Deque } from '@kit.ArkTS';
```

## $_iterator

```TypeScript
$_iterator(): IterableIterator<T>
```

返回一个迭代器，每一项都是一个ArkTS对象。

**起始版本：** 23

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

**返回值：**

| 类型 | 说明 |
| --- | --- |
| IterableIterator&lt;T> |  |

## [Symbol.iterator]

```TypeScript
[Symbol.iterator](): IterableIterator<T>
```

返回一个迭代器，迭代器的每一项都是一个JavaScript对象。

**起始版本：** 8

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

**返回值：**

| 类型 | 说明 |
| --- | --- |
| IterableIterator&lt;T> |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 10200011 | The Symbol.iterator method cannot be bound. |

**示例：**

```TypeScript
let deque = new Deque<number>();
deque.insertFront(2);
deque.insertFront(4);
deque.insertFront(5);
deque.insertFront(4);

// 使用方法一：
for (let item of deque) {
  console.info("value:" + item);
}
/*
输出结果：
value:4
value:5
value:4
value:2
 */

// 使用方法二：
let iter = deque[Symbol.iterator]();
let temp:IteratorResult<number> = iter.next();
while(!temp.done) {
  console.info("value:" + temp.value);
  temp = iter.next();
}
/*
输出结果：
value:4
value:5
value:4
value:2
 */

```

## constructor

```TypeScript
constructor()
```

Deque的构造函数。

**起始版本：** 8

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 10200012 | The Deque's constructor cannot be directly invoked. |

**示例：**

```TypeScript
let deque = new Deque<string | number | boolean | Object>();

```

## forEach

```TypeScript
forEach(callbackFn: (value: T, index?: number, deque?: Deque<T>) => void, thisArg?: Object): void
```

在遍历Deque实例对象中每一个元素的过程中，对每个元素执行回调函数。

**起始版本：** 8

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callbackFn | (value: T, index?: number, deque?: Deque&lt;T>) => void | 是 | 回调函数。 |
| thisArg | Object | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 10200011 | The forEach method cannot be bound. |

**示例：**

```TypeScript
let deque = new Deque<number>();
deque.insertFront(2);
deque.insertEnd(3);
deque.insertFront(1);
deque.insertEnd(4);
deque.forEach((value: number, index: number): void => {
  console.info("value:" + value, "index:" + index);
});
/*
输出结果：value:1 index:0
         value:2 index:1
         value:3 index:2
         value:4 index:3
 */

```

## forEach

```TypeScript
forEach(callbackFn: DequeForEachCb<T>): void
```

遍历泛型Deque（双端队列）中的元素，并对每个元素执行回调函数。

**起始版本：** 23

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callbackFn | DequeForEachCb&lt;T> | 是 | 对每个元素执行的回调函数。 |

## getFirst

```TypeScript
getFirst(): T
```

获取Deque实例的头元素。

**起始版本：** 8

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T | 返回T类型的头元素。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 10200011 | The getFirst method cannot be bound. |
| 10200010 | Container is empty. [since 23] [staticonly] |

**示例：**

```TypeScript
let deque = new Deque<number>();
deque.insertEnd(2);
deque.insertEnd(4);
deque.insertFront(5);
deque.insertFront(4);
let result = deque.getFirst();
console.info("result:", result);  // result: 4

```

## getLast

```TypeScript
getLast(): T
```

获取Deque实例的尾元素。

**起始版本：** 8

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T | 返回T类型的尾元素。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 10200011 | The getLast method cannot be bound. |
| 10200010 | Container is empty. [since 23] [staticonly] |

**示例：**

```TypeScript
let deque = new Deque<number>();
deque.insertFront(2);
deque.insertFront(4);
deque.insertFront(5);
deque.insertFront(4);
let result = deque.getLast();
console.info("result:", result);  // result: 2

```

## has

```TypeScript
has(element: T): boolean
```

判断此Deque中是否包含指定元素。

**起始版本：** 8

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| element | T | 是 | 指定的元素。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | 如果包含指定元素返回true，否则返回false。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 10200011 | The has method cannot be bound. |

**示例：**

```TypeScript
let deque = new Deque<string>();
deque.insertFront("squirrel");
let result = deque.has("squirrel");
console.info("result:", result);  // result: true

```

## insertEnd

```TypeScript
insertEnd(element: T): void
```

在deque尾部插入元素。

**起始版本：** 8

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| element | T | 是 | 插入的元素。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 10200011 | The insertEnd method cannot be bound. |

**示例：**

```TypeScript
class C1 {
  name: string = ""
  age: string = ""
}

let deque = new Deque<string | number | boolean | Array<number> | C1>();
deque.insertEnd("a");
deque.insertEnd(1);
let b = [1, 2, 3];
deque.insertEnd(b);
let c: C1 = {name : "Dylan", age : "13"};
deque.insertEnd(c);
deque.insertEnd(false);
console.info("result:", deque[0]);  // result: a

```

## insertFront

```TypeScript
insertFront(element: T): void
```

在deque头部插入元素。

**起始版本：** 8

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| element | T | 是 | 插入的元素。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 10200011 | The insertFront method cannot be bound. |

**示例：**

```TypeScript
class C1 {
  name: string = ""
  age: string = ""
}

let deque = new Deque<string | number | boolean | Array<number> | C1>();
deque.insertFront("a");
deque.insertFront(1);
let b = [1, 2, 3];
deque.insertFront(b);
let c: C1 = {name : "Dylan", age : "13"};
deque.insertFront(c);
deque.insertFront(false);
console.info("result:", deque[0]);  // result: false

```

## popFirst

```TypeScript
popFirst(): T
```

删除并返回双端队列的首元素。

**起始版本：** 8

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T | 返回被删除的首元素。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 10200011 | The popFirst method cannot be bound. |
| 10200010 | Container is empty. [since 23] [staticonly] |

**示例：**

```TypeScript
let deque = new Deque<number>();
deque.insertFront(2);
deque.insertFront(4);
deque.insertEnd(5);
deque.insertFront(2);
deque.insertFront(4);
let result = deque.popFirst();
console.info("result:", result);  // result: 4

```

## popLast

```TypeScript
popLast(): T
```

删除并返回双端队列的尾元素。

**起始版本：** 8

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T | 返回被删除的尾元素。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 10200011 | The popLast method cannot be bound. |
| 10200010 | Container is empty. [since 23] [staticonly] |

**示例：**

```TypeScript
let deque = new Deque<number>();
deque.insertFront(2);
deque.insertEnd(6);
deque.insertFront(5);
deque.insertFront(2);
deque.insertFront(4);
let result = deque.popLast();
console.info("result:", result);  // result: 6

```

## length

```TypeScript
length: number
```

Deque的元素个数。

**类型：** number

**起始版本：** 8

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

```TypeScript
get length(): int
```

获取Deque的元素个数。

**类型：** int

**起始版本：** 23

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

## index

```TypeScript
[index: int]: T
```

返回指定下标位置的元素。

**类型：** T

**起始版本：** 23

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

