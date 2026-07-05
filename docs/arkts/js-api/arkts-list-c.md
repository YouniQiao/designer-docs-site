# List

List底层基于单向链表实现。每个节点都有一个引用指向下一个元素。查询时需要从头开始遍历。

**Since:** 8

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { List } from '@kit.ArkTS';
```

## $_iterator

```TypeScript
$_iterator(): IterableIterator<T>
```

返回一个迭代器，每一项都是一个ArkTS对象。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| IterableIterator&lt;T> |  |

## [Symbol.iterator]

```TypeScript
[Symbol.iterator](): IterableIterator<T>
```

返回一个迭代器，迭代器的每一项都是一个JavaScript对象。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| IterableIterator&lt;T> |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The Symbol.iterator method cannot be bound. |

**Example**

```TypeScript
let list = new List<number>();
list.add(2);
list.add(4);
list.add(5);
list.add(4);

// Method 1:
for (let item of list) {
  console.info("value: " + item);
}
// value: 2
// value: 4
// value: 5
// value: 4

// Method 2:
let iter = list[Symbol.iterator]();
let temp: IteratorResult<number> = iter.next();
while(!temp.done) {
  console.info("value: " + temp.value);
  temp = iter.next();
}
// value: 2
// value: 4
// value: 5
// value: 4

```

## add

```TypeScript
add(element: T): boolean
```

在List尾部添加元素。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| element | T | Yes | 添加的成员数据。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 成功添加元素返回true，否则返回false。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The add method cannot be bound. |

**Example**

```TypeScript
let list = new List<string | number | boolean | object>();
let result1 = list.add("a");
let result2 = list.add(1);
let b = [1, 2, 3];
let result3 = list.add(b);
class C {
  name: string = ''
  age: string = ''
}
let c: C = {name : "Dylan", age : "13"};
let result4 = list.add(c);
let result5 = list.add(false);
console.info("result = ", result5) // result =  true

```

## clear

```TypeScript
clear(): void
```

清除List中的所有元素，并将length置为0。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The clear method cannot be bound. |

**Example**

```TypeScript
let list = new List<number>()
list.add(2);
list.add(4);
list.add(5);
list.add(4);
list.clear();
let result = list.isEmpty();
console.info("result:", result);  // result: true

```

## constructor

```TypeScript
constructor()
```

List的构造函数。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200012 | The List's constructor cannot be directly invoked. |

**Example**

```TypeScript
let list = new List<string | number | boolean | object>();

```

## convertToArray

```TypeScript
convertToArray(): Array<T>
```

将List实例转换为数组。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;T> | 返回数组。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The convertToArray method cannot be bound. |

**Example**

```TypeScript
let list = new List<number>()
list.add(2);
list.add(4);
list.add(5);
list.add(4);
let result = list.convertToArray();
console.info("result:", result);  // result: 2,4,5,4

```

## equal

```TypeScript
equal(obj: Object): boolean
```

判断此容器与obj的构成元素是否相同。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| obj | Object | Yes | 比较对象。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 构成元素相同时返回true，否则返回false。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The equal method cannot be bound. |

**Example**

```TypeScript
let list = new List<number>()
list.add(2);
list.add(4);
list.add(5);
let obj = new List<number>();
obj.add(2);
obj.add(4);
obj.add(5);
let result = list.equal(obj);
console.info("result:", result);  // result: true

```

## equal

```TypeScript
equal(obj: RecordData): boolean
```

判断指定对象与此list是否相同。如果对象与此list相同，返回true，否则返回false。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| obj | RecordData | Yes | 用于与此list比较的对象。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | boolean类型。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The equal method cannot be bound. |

## forEach

```TypeScript
forEach(callbackFn: (value: T, index?: number, List?: List<T>) => void, thisArg?: Object): void
```

通过回调函数来遍历List实例对象上的元素以及元素对应的下标。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackFn | (value: T, index?: number, List?: List&lt;T>) => void | Yes | 回调函数。 |
| thisArg | Object | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The forEach method cannot be bound. |

**Example**

```TypeScript
let list = new List<number>()
list.add(2);
list.add(4);
list.add(5);
list.add(4);
list.forEach((value: number, index: number) => {
  console.info("value:" + value, "index:" + index);
});
// value:2 index:0
// value:4 index:1
// value:5 index:2
// value:4 index:3

```

## forEach

```TypeScript
forEach(callbackFn: ListForEachCb<T>): void
```

用对该元素应用操作符的结果替换list中的每个元素。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackFn | ListForEachCb&lt;T> | Yes | 回调函数。 |

## get

```TypeScript
get(index: int): T
```

获取指定下标对应的元素。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | int | Yes | 查找的下标位置。需要小于等于int32_max即2147483647。 |

**Return value:**

| Type | Description |
| --- | --- |
| T | 返回指定下标对应的元素。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The get method cannot be bound. |
| 10200001 | The value of index is out of range. [since 23] [staticonly] |

**Example**

```TypeScript
let list = new List<number>()
list.add(2);
list.add(4);
list.add(5);
list.add(2);
list.add(1);
list.add(2);
list.add(4);
let result = list.get(2);
console.info("result:", result);  // result: 5

```

## getFirst

```TypeScript
getFirst(): T
```

获取List实例中的第一个元素。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| T | 返回List实例中的第一个元素。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The getFirst method cannot be bound. |
| 10200010 | Container is empty. [since 23] [staticonly] |

**Example**

```TypeScript
let list = new List<number>()
list.add(2);
list.add(4);
list.add(5);
list.add(4);
let result = list.getFirst();
console.info("result:", result);  // result: 2

```

## getIndexOf

```TypeScript
getIndexOf(element: T): int
```

获取指定元素第一次出现的下标值，如果未找到则返回-1。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| element | T | Yes | 指定元素。 |

**Return value:**

| Type | Description |
| --- | --- |
| int | 返回指定元素第一次出现时的下标值，查找失败返回-1。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The getIndexOf method cannot be bound. |

**Example**

```TypeScript
let list = new List<number>()
list.add(2);
list.add(4);
list.add(5);
list.add(2);
list.add(1);
list.add(2);
list.add(4);
let result = list.getIndexOf(2);
console.info("result:", result); // result: 0

```

## getLast

```TypeScript
getLast(): T
```

获取List实例中的最后一个元素。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| T | 返回List实例中的最后一个元素。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The getLast method cannot be bound. |
| 10200010 | Container is empty. [since 23] [staticonly] |

**Example**

```TypeScript
let list = new List<number>()
list.add(2);
list.add(4);
list.add(5);
list.add(4);
let result = list.getLast();
console.info("result:", result);  // result: 4

```

## getLastIndexOf

```TypeScript
getLastIndexOf(element: T): int
```

获取指定元素最后一次出现的下标值，如果未找到则返回-1。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| element | T | Yes | 指定元素。 |

**Return value:**

| Type | Description |
| --- | --- |
| int | 返回指定元素最后一次出现时的下标值，查找失败返回-1。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The getLastIndexOf method cannot be bound. |

**Example**

```TypeScript
let list = new List<number>()
list.add(2);
list.add(4);
list.add(5);
list.add(2);
list.add(1);
list.add(2);
list.add(4);
let result = list.getLastIndexOf(2);
console.info("result:", result); // result: 5

```

## getSubList

```TypeScript
getSubList(fromIndex: int, toIndex: int): List<T>
```

获取List实例中指定范围内的元素，包括起始位置但不包括结束位置的元素，作为一个新的List实例返回。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fromIndex | int | Yes | 起始位置的下标。 |
| toIndex | int | Yes | 结束位置的下标。 |

**Return value:**

| Type | Description |
| --- | --- |
| List&lt;T> | 返回新的List实例。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The getSubList method cannot be bound. |
| 10200001 | The value of fromIndex or toIndex is out of range. |

**Example**

```TypeScript
let list = new List<number>()
list.add(2);
list.add(4);
list.add(6);
list.add(8);
let result = list.getSubList(1, 3);
console.info("result:", result.convertToArray());  // result: 4,6

```

## has

```TypeScript
has(element: T): boolean
```

判断容器中是否包含指定元素。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| element | T | Yes | 指定的元素。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 包含指定元素返回true，否则返回false。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The has method cannot be bound. |

**Example**

```TypeScript
let list = new List<string>();
list.add("squirrel");
let result = list.has("squirrel");
console.info("result:", result);  // result: true

```

## insert

```TypeScript
insert(element: T, index: int): void
```

在List的指定位置插入元素。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| element | T | Yes | 插入的成员数据。 |
| index | int | Yes | 插入数据的位置下标。需要小于等于int32_max即2147483647。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The insert method cannot be bound. |
| 10200001 | The value of index is out of range. |

**Example**

```TypeScript
let list = new List<string | number | boolean>();
list.insert("A", 0);
list.insert(0, 1);
list.insert(true, 2);
console.info("result:", list.get(1));  // result: 0

```

## isEmpty

```TypeScript
isEmpty(): boolean
```

判断容器是否为空。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 为空返回true，不为空返回false。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The isEmpty method cannot be bound. |

**Example**

```TypeScript
let list = new List<number>()
list.add(2);
list.add(4);
list.add(5);
list.add(4);
let result = list.isEmpty();
console.info("result:", result);  // result: false

```

## remove

```TypeScript
remove(element: T): boolean
```

删除指定元素第一次出现的元素。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| element | T | Yes | 待删除的元素。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 成功删除元素返回true，否则返回false。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The remove method cannot be bound. |

**Example**

```TypeScript
let list = new List<number>()
list.add(2);
list.add(4);
list.add(5);
list.add(4);
let result = list.remove(2);
console.info("result:", result);  // result: true

```

## removeByIndex

```TypeScript
removeByIndex(index: number): T
```

根据下标删除元素。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | 待删除元素的下标。需要小于等于int32_max即2147483647。 |

**Return value:**

| Type | Description |
| --- | --- |
| T | 返回删除的元素。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The removeByIndex method cannot be bound. |
| 10200001 | The value of index is out of range. |

**Example**

```TypeScript
let list = new List<number>()
list.add(2);
list.add(4);
list.add(5);
list.add(2);
list.add(4);
let result = list.removeByIndex(2);
console.info("result:", result);  // result: 5

```

## removeByIndex

```TypeScript
removeByIndex(index: int): T | undefined
```

根据索引查找对应元素。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | int | Yes | 待查找元素的下标。  该值为整数。 |

**Return value:**

| Type | Description |
| --- | --- |
| T | T类型的值，如果下标超出范围（大于等于length或小于0），抛出异常。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 | The value of "index" is out of range. It must be >= 0 && &lt;= ${length - 1}.  Received value is: ${index} |

## replaceAllElements

```TypeScript
replaceAllElements(callbackFn: (value: T, index?: number, list?: List<T>) => T, thisArg?: Object): void
```

对List中的所有元素进行替换，并返回替换后的元素。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackFn | (value: T, index?: number, list?: List&lt;T>) => T | Yes | 回调函数。 |
| thisArg | Object | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The replaceAllElements method cannot be bound. |

**Example**

```TypeScript
let list = new List<number>()
list.add(2);
list.add(4);
list.add(5);
list.add(4);
list.replaceAllElements((value: number) => {
  // Add the user operation logic based on the actual scenario.
  if (value === 5) {
    return value * 2;
  }
  return value;
});

console.info("result:", list.get(2));  // result: 10

```

## replaceAllElements

```TypeScript
replaceAllElements(callbackFn: ListReplaceCb<T>): void
```

用对该元素应用操作符的结果替换list中的每个元素。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackFn | ListReplaceCb&lt;T> | Yes | 回调函数。 |

## set

```TypeScript
set(index: int, element: T): T
```

替换List实例中指定下标位置的元素。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | int | Yes | 替换元素的下标位置。需要小于等于int32_max即2147483647。 |
| element | T | Yes | 替换的元素。 |

**Return value:**

| Type | Description |
| --- | --- |
| T | 返回替换后的新元素。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The set method cannot be bound. |
| 10200001 | The value of index is out of range. |

**Example**

```TypeScript
let list = new List<number | string>();
list.add(2);
list.add(4);
list.add(5);
list.add(4);
let result = list.set(2, "b");
console.info("result:", JSON.stringify(list));  // result: {"0":2,"1":4,"2":"b","3":4}

```

## sort

```TypeScript
sort(comparator: ListComparatorFn<T>): void
```

对List中的元素进行排序。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| comparator | ListComparatorFn&lt;T> | Yes | 回调函数。 从API version 23起有兼容性变更。在API version 22及之前版本，类型为 `(firstValue: T, secondValue: T) => number`。 [since 23] |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The sort method cannot be bound. |

**Example**

```TypeScript
let list = new List<number>()
list.add(2);
list.add(1);
list.add(3);
list.add(4);
list.sort((a: number, b: number) => a - b);  // The elements are sorted in ascending order.
console.info("result:", list.convertToArray());  // result: 1,2,3,4

list.sort((a: number, b: number) => b - a);  // The elements are sorted in descending order.
console.info("result:", list.convertToArray());  // result: 4,3,2,1

```

## length

```TypeScript
length: number
```

List的元素个数。

**Type:** number

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

```TypeScript
get length(): int
```

获取List的元素个数。

**Type:** int

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## index

```TypeScript
[index: int]: T
```

返回指定下标的元素。

**Type:** T

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

