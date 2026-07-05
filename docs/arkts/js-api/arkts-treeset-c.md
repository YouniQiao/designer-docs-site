# TreeSet

TreeSet基于[TreeMap]@ohos.util.TreeMap实现。在TreeSet中，仅处理value对象。 TreeSet可用于存储一系列值的集合，元素中value唯一且有序。

**Since:** 8

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { TreeSet } from '@kit.ArkTS';
```

## $_iterator

```TypeScript
$_iterator(): IterableIterator<T>
```

返回一个迭代器，每一项都是一个JavaScript对象。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| IterableIterator&lt;T> | TreeSet的迭代器。 |

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
let treeSet = new TreeSet<string>();
treeSet.add("squirrel");
treeSet.add("sparrow");
// Method 1:
for (let item of treeSet) {
  console.info("value:" + item);
}
// value:sparrow
// value:squirrel

// Method 2:
let iter = treeSet[Symbol.iterator]();
let temp: IteratorResult<string> = iter.next().value;
while(temp != undefined) {
  console.info("value:" + temp);
  temp = iter.next().value;
}
// value:sparrow
// value:squirrel


// You are not advised to use the set or remove APIs in Symbol.iterator because they may cause unpredictable risks such as infinite loops. You can use the for loop when inserting or deleting data.
let treeSet = new TreeSet<string>();
for(let i = 0; i < 10; i++) {
  treeSet.add("sparrow" + i);
}
for(let i = 0; i < 10; i++) {
  treeSet.remove("sparrow" + i);
}

```

## add

```TypeScript
add(value: T): boolean
```

向容器中添加一组数据。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | T | Yes | 添加的成员数据。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 该元素是否已存在。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The add method cannot be bound. |

**Example**

```TypeScript
let treeSet = new TreeSet<string>();
let result = treeSet.add("squirrel");
console.info("result:", result); // result: true

```

## clear

```TypeScript
clear(): void
```

清除容器中的所有元素，并将length置为0。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The clear method cannot be bound. |

**Example**

```TypeScript
let treeSet = new TreeSet<string>();
treeSet.add("squirrel");
treeSet.add("sparrow");
treeSet.clear();
let result = treeSet.isEmpty();
console.info("result:", result); // result: true

```

## constructor

```TypeScript
constructor(comparator?: (firstValue: T, secondValue: T) => boolean)
```

TreeSet的构造函数，支持通过比较函数对元素进行升序或降序排序。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| comparator | (firstValue: T, secondValue: T) => boolean | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200012 | The TreeSet's constructor cannot be directly invoked. |

**Example**

```TypeScript
// Default constructor.
let treeSet = new TreeSet<string | number | boolean | Object>();


// Use the comparator firstValue < secondValue if the elements are expected to be sorted in ascending order. Use firstValue > secondValue if the elements are expected to be sorted in descending order.
let treeSet: TreeSet<string> = new TreeSet<string>((firstValue: string, secondValue: string): boolean => {
  return firstValue < secondValue;
});
treeSet.add("a");
treeSet.add("c");
treeSet.add("d");
treeSet.add("b");
for (let value of treeSet) {
  console.info("value:", value);
}
// value: a
// value: b
// value: c
// value: d


// When a custom type is inserted, a comparator must be provided.
class TestEntry{
  public id: number = 0;
}
let ts1: TreeSet<TestEntry> = new TreeSet<TestEntry>((t1: TestEntry, t2: TestEntry): boolean => {return t1.id > t2.id;});
let entry1: TestEntry = {
  id: 0
};
let entry2: TestEntry = {
  id: 1
}
ts1.add(entry1);
ts1.add(entry2);
console.info("treeSet: ", ts1.length);

```

## constructor

```TypeScript
constructor(comparator?: TreeSetComparator<T>)
```

TreeSet的构造函数，支持通过比较函数对元素进行升序或降序排序。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| comparator | TreeSetComparator&lt;T> | No |  |

## entries

```TypeScript
entries(): IterableIterator<[T, T]>
```

返回包含此映射中键值对的新迭代器对象。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| IterableIterator&lt;[T, T]> |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The entries method cannot be bound. |

**Example**

```TypeScript
let treeSet = new TreeSet<string>();
treeSet.add("squirrel");
treeSet.add("sparrow");
let it = treeSet.entries();
let t: IteratorResult<Object[]> = it.next();
while(!t.done) {
  console.info("TreeSet: " + t.value[1]);
  t = it.next()
}
// TreeSet: sparrow
// TreeSet: squirrel


// You are not advised to use the set or remove APIs in entries because they may cause unpredictable risks such as infinite loops. You can use the for loop when inserting or deleting data.
let treeSet = new TreeSet<string>();
for(let i = 0; i < 10; i++) {
  treeSet.add("sparrow" + i);
}
for(let i = 0; i < 10; i++) {
  treeSet.remove("sparrow" + i);
}

```

## forEach

```TypeScript
forEach(callbackFn: (value?: T, key?: T, set?: TreeSet<T>) => void, thisArg?: Object): void
```

通过回调函数来遍历实例对象上的元素及其下标。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackFn | (value?: T, key?: T, set?: TreeSet&lt;T>) => void | Yes | 回调函数。  callbackFn（必填）接受最多三个参数的函数。  对每个元素调用的函数。 |
| thisArg | Object | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The forEach method cannot be bound. |

**Example**

```TypeScript
let treeSet = new TreeSet<string>();
treeSet.add("sparrow");
treeSet.add("gull");
treeSet.forEach((value: string, key: string): void => {
  console.info("value:" + value);
});
// value:gull
// value:sparrow


// You are not advised to use the set or remove APIs in forEach because they may cause unpredictable risks such as infinite loops. You can use the for loop when inserting or deleting data.
let treeSet = new TreeSet<string>();
for(let i = 0; i < 10; i++) {
  treeSet.add("sparrow" + i);
}
for(let i = 0; i < 10; i++) {
  treeSet.remove("sparrow" + i);
}

```

## forEach

```TypeScript
forEach(callbackFn: TreeSetForEachCb<T>): void
```

通过回调函数来遍历实例对象上的元素及其下标。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackFn | TreeSetForEachCb&lt;T> | Yes | 回调函数。 |

## getFirstValue

```TypeScript
getFirstValue(): T
```

获取容器中排序第一的数据，为空时返回undefined。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| T | 返回值或undefined。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The getFirstValue method cannot be bound. |
| 10200010 | Container is empty. [since 23] [staticonly] |

**Example**

```TypeScript
let treeSet = new TreeSet<string>();
treeSet.add("squirrel");
treeSet.add("sparrow");
let result = treeSet.getFirstValue();
console.info("result:", result); // result: sparrow

```

## getHigherValue

```TypeScript
getHigherValue(key: T): T
```

获取容器中比传入元素排序靠后一位的元素，为空时返回undefined。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | T | Yes | 对比的元素。 |

**Return value:**

| Type | Description |
| --- | --- |
| T | 返回排序中传入元素后一位的数据。为空时返回undefined。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The getHigherValue method cannot be bound. |

**Example**

```TypeScript
let treeSet = new TreeSet<string>();
treeSet.add("squirrel");
treeSet.add("sparrow");
treeSet.add("gander");
let result = treeSet.getHigherValue("sparrow");
console.info("result:", result); // result: squirrel

```

## getHigherValue

```TypeScript
getHigherValue(key: T): T | undefined
```

获取容器中比传入元素排序靠后一位的元素，如果key不存在，则返回undefined。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | T | Yes | 对比的元素值。 |

**Return value:**

| Type | Description |
| --- | --- |
| T | 如果存在则返回指定key元素的后一位值，否则返回undefined。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200010 | Container is empty. |

## getLastValue

```TypeScript
getLastValue(): T
```

获取容器中排序最后的数据，为空时返回undefined。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| T | 返回值或undefined。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The getLastValue method cannot be bound. |
| 10200010 | Container is empty. [since 23] [staticonly] |

**Example**

```TypeScript
let treeSet = new TreeSet<string>();
treeSet.add("squirrel");
treeSet.add("sparrow");
let result = treeSet.getLastValue();
console.info("result:", result); // result: squirrel

```

## getLowerValue

```TypeScript
getLowerValue(key: T): T
```

获取容器中比传入元素排序靠前一位的元素，为空时返回undefined。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | T | Yes | 对比的元素值。 |

**Return value:**

| Type | Description |
| --- | --- |
| T | 返回排序中对比元素前一位的数据，为空时返回undefined。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The getLowerValue method cannot be bound. |

**Example**

```TypeScript
let treeSet = new TreeSet<string>();
treeSet.add("squirrel");
treeSet.add("sparrow");
treeSet.add("gander");
let result = treeSet.getLowerValue("sparrow");
console.info("result:", result); // result: gander

```

## getLowerValue

```TypeScript
getLowerValue(key: T): T | undefined
```

获取容器中比传入元素排序靠前一位的元素，如果key不存在，则返回undefined。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | T | Yes | 对比的元素值。 |

**Return value:**

| Type | Description |
| --- | --- |
| T | 如果存在则返回指定key元素的前一位值，否则返回undefined。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200010 | Container is empty. |

## has

```TypeScript
has(value: T): boolean
```

判断容器中是否包含指定元素。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | T | Yes | 指定的元素。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | boolean类型。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The has method cannot be bound. |

**Example**

```TypeScript
let treeSet  = new TreeSet<number>();
treeSet.add(123);
let result = treeSet.has(123);
console.info("result:", result); // result: true

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
| boolean | boolean类型。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The isEmpty method cannot be bound. |

**Example**

```TypeScript
let treeSet = new TreeSet<string>();
let result = treeSet.isEmpty();
console.info("result:", result);  // result: true

```

## popFirst

```TypeScript
popFirst(): T
```

删除容器中排序最前的数据，为空时返回undefined。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| T | 排序最前的数据，为空时返回undefined。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The popFirst method cannot be bound. |
| 10200010 | Container is empty. [since 23] [staticonly] |

**Example**

```TypeScript
let treeSet = new TreeSet<string>();
treeSet.add("squirrel");
treeSet.add("sparrow");
let result = treeSet.popFirst();
console.info("result:", result); // result: sparrow

```

## popLast

```TypeScript
popLast(): T
```

删除容器中排序最后的数据，为空时返回undefined。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| T | 排序最后的数据，为空时返回undefined。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The popLast method cannot be bound. |
| 10200010 | Container is empty. [since 23] [staticonly] |

**Example**

```TypeScript
let treeSet = new TreeSet<string>();
treeSet.add("squirrel");
treeSet.add("sparrow");
let result = treeSet.popLast();
console.info("result:", result); // result: squirrel

```

## remove

```TypeScript
remove(value: T): boolean
```

删除指定的元素。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | T | Yes | 指定的元素。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | boolean类型（是否包含该元素）。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The remove method cannot be bound. |

**Example**

```TypeScript
let treeSet = new TreeSet<string>();
treeSet.add("squirrel");
treeSet.add("sparrow");
let result = treeSet.remove("sparrow");
console.info("result:", result); // result: true

```

## values

```TypeScript
values(): IterableIterator<T>
```

返回包含此映射中键值的新迭代器对象。

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
| 10200011 | The values method cannot be bound. |

**Example**

```TypeScript
let treeSet = new TreeSet<string>();
treeSet.add("squirrel");
treeSet.add("sparrow");
let values = treeSet.values();
for (let value of values) {
  console.info("value:", value)
}
// value: sparrow
// value: squirrel

```

## length

```TypeScript
length: number
```

TreeSet的元素个数。

**Type:** number

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

```TypeScript
get length(): int
```

获取TreeSet的元素个数。

**Type:** int

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

