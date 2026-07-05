# ArrayList

ArrayList是一种线性数据结构，底层基于数组实现。 ArrayList会根据实际需要动态调整容量，每次扩容增加50%。

**Since:** 8

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { ArrayList } from '@kit.ArkTS';
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
| IterableIterator&lt;T> |  |

## [Symbol.iterator]

```TypeScript
[Symbol.iterator](): IterableIterator<T>
```

返回一个迭代器，每一项都是一个JavaScript对象。

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
let arrayList = new ArrayList<number>();
arrayList.add(2);
arrayList.add(4);
arrayList.add(5);
arrayList.add(4);

// Method 1:
for (let value of arrayList) {
  console.info("value:", value);
}
// value: 2
// value: 4
// value: 5
// value: 4

// Method 2:
let iter = arrayList[Symbol.iterator]();
let temp: IteratorResult<number> = iter.next();
while(!temp.done) {
  console.info("value:", temp.value);
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

在ArrayList尾部插入元素。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| element | T | Yes | 待插入的元素。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 插入成功返回true，失败返回false。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The add method cannot be bound. |

**Example**

```TypeScript
class C1 {
  name: string = ""
  age: string = ""
}
let arrayList = new ArrayList<string | number | boolean | Array<number> | C1>();
arrayList.add("a");
arrayList.add(1);
let b = [1, 2, 3];
arrayList.add(b);
let c : C1 = {name: "Dylan", age: "13"}
let result1 = arrayList.add(c);
let result2 = arrayList.add(false);
console.info("result1:", result1);  // result1: true
console.info("result2:", result2);  // result2: true
console.info("length:", arrayList.length);  // length: 5

```

## clear

```TypeScript
clear(): void
```

清除ArrayList中的所有元素，并把length置为0。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The clear method cannot be bound. |

**Example**

```TypeScript
let arrayList = new ArrayList<number>();
arrayList.add(2);
arrayList.add(4);
arrayList.add(5);
arrayList.add(4);
arrayList.clear();

```

## clone

```TypeScript
clone(): ArrayList<T>
```

克隆一个与ArrayList相同的实例，并返回克隆后的实例。修改克隆后的实例并不会影响原实例。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| ArrayList&lt;T> | 返回ArrayList对象实例。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The clone method cannot be bound. |

**Example**

```TypeScript
let arrayList = new ArrayList<number>();
arrayList.add(2);
arrayList.add(4);
arrayList.add(5);
arrayList.add(4);
let result:  ArrayList<number> = arrayList.clone();
console.info("result = ", result.length); // result = 4

```

## constructor

```TypeScript
constructor()
```

ArrayList的构造函数。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200012 | The ArrayList's constructor cannot be directly invoked. |

**Example**

```TypeScript
let arrayList = new ArrayList<string | number>();

```

## convertToArray

```TypeScript
convertToArray(): Array<T>
```

把当前ArrayList实例转换成数组，并返回转换后的数组。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;T> | 返回数组类型。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The convertToArray method cannot be bound. |

**Example**

```TypeScript
let arrayList = new ArrayList<number>();
arrayList.add(2);
arrayList.add(4);
arrayList.add(5);
arrayList.add(4);
let result: Array<number> = arrayList.convertToArray();
console.info("result = ", result); // result =  2,4,5,4

```

## forEach

```TypeScript
forEach(callbackFn: (value: T, index?: number, arrlist?: ArrayList<T>) => void, thisArg?: Object): void
```

在遍历ArrayList实例对象的过程中，对每个元素执行回调函数。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackFn | (value: T, index?: number, arrlist?: ArrayList&lt;T>) => void | Yes | 回调函数。 |
| thisArg | Object | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The forEach method cannot be bound. |

**Example**

```TypeScript
let arrayList = new ArrayList<number>();
arrayList.add(2);
arrayList.add(4);
arrayList.add(5);
arrayList.add(4);
arrayList.forEach((value: number, index?: number) => {
  console.info("value:" + value, "index:" + index);
});
// value:2 index:0
// value:4 index:1
// value:5 index:2
// value:4 index:3

```

## forEach

```TypeScript
forEach(callbackFn: ArrayListForEachCb<T>): void
```

遍历泛型ArrayList中的元素，并对每个元素执行回调函数。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackFn | ArrayListForEachCb&lt;T> | Yes | 对每个元素执行的回调函数。 |

## getCapacity

```TypeScript
getCapacity(): int
```

获取当前实例的容量大小。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| int | 获取当前实例的容量大小。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The getCapacity method cannot be bound. |

**Example**

```TypeScript
let arrayList = new ArrayList<number>();
arrayList.add(2);
arrayList.add(4);
arrayList.add(5);
arrayList.add(4);
let result: number = arrayList.getCapacity();
console.info("result = ", result); // result = 10

```

## getIndexOf

```TypeScript
getIndexOf(element: T): int
```

返回指定元素第一次出现的下标，查找失败返回-1。

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
let arrayList = new ArrayList<number>();
arrayList.add(2);
arrayList.add(4);
arrayList.add(5);
arrayList.add(2);
arrayList.add(1);
arrayList.add(2);
arrayList.add(4);
let result: number = arrayList.getIndexOf(2); 
console.info("result = ", result); // result = 0

```

## getLastIndexOf

```TypeScript
getLastIndexOf(element: T): int
```

返回指定元素最后一次出现的下标，查找失败返回-1。

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
let arrayList = new ArrayList<number>();
arrayList.add(2);
arrayList.add(4);
arrayList.add(5);
arrayList.add(2);
arrayList.add(1);
arrayList.add(2);
arrayList.add(4);
let result: number = arrayList.getLastIndexOf(2);
console.info("result = ", result); // result = 5

```

## has

```TypeScript
has(element: T): boolean
```

判断此ArrayList中是否包含该指定元素。

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
| boolean | 返回true表示包含指定元素，否则返回false。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The has method cannot be bound. |

**Example**

```TypeScript
let arrayList = new ArrayList<string>();
arrayList.add("squirrel");
let result: boolean = arrayList.has("squirrel");
console.info("result:", result);  // result: true

```

## increaseCapacityTo

```TypeScript
increaseCapacityTo(newCapacity: int): void
```

如果传入的新容量大于或等于ArrayList中的元素个数，将容量变更为新容量。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| newCapacity | int | Yes | 新容量。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The increaseCapacityTo method cannot be bound. |

**Example**

```TypeScript
let arrayList = new ArrayList<number>();
arrayList.add(2);
arrayList.add(4);
arrayList.add(5);
arrayList.add(4);
arrayList.increaseCapacityTo(2);
arrayList.increaseCapacityTo(8);
console.info("result = ", arrayList.length); // result = 4

```

## insert

```TypeScript
insert(element: T, index: int): void
```

在长度范围内指定位置index插入元素element。如果index超出范围，则插入失败。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| element | T | Yes | 被插入的元素。 |
| index | int | Yes | 被插入的位置索引。需要小于等于int32_max即2147483647。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 | The value of index is out of range. |
| 10200011 | The insert method cannot be bound. |

**Example**

```TypeScript
let arrayList = new ArrayList<number | string | boolean>();
arrayList.insert("A", 0);
arrayList.insert(0, 1);
arrayList.insert(true, 2);
console.info("length:", arrayList.length);  // length: 3

```

## isEmpty

```TypeScript
isEmpty(): boolean
```

判断该ArrayList是否为空。

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
let arrayList = new ArrayList<number>();
arrayList.add(2);
arrayList.add(4);
arrayList.add(5);
arrayList.add(4);
let result: boolean = arrayList.isEmpty();
console.info("result = ", result); // result =  false

```

## remove

```TypeScript
remove(element: T): boolean
```

删除查找到的第一个指定元素。

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
| boolean | 删除成功返回true，失败返回false。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The remove method cannot be bound. |

**Example**

```TypeScript
let arrayList = new ArrayList<number>();
arrayList.add(2);
arrayList.add(4);
arrayList.add(5);
arrayList.add(4);
let result: boolean = arrayList.remove(2);
console.info("result = ", result); // result =  true

```

## removeByIndex

```TypeScript
removeByIndex(index: int): T
```

根据元素的下标值查找元素，返回元素后将其删除。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | int | Yes | 指定元素的下标值。需要小于等于int32_max即2147483647。 |

**Return value:**

| Type | Description |
| --- | --- |
| T | 返回删除的元素。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 | The value of "index" is out of range. |
| 10200011 | The removeByIndex method cannot be bound. |

**Example**

```TypeScript
let arrayList = new ArrayList<number>();
arrayList.add(2);
arrayList.add(4);
arrayList.add(5);
arrayList.add(2);
arrayList.add(4);
let result: number = arrayList.removeByIndex(2);
console.info("result = ", result); // result = 5

```

## removeByRange

```TypeScript
removeByRange(fromIndex: int, toIndex: int): void
```

删除指定范围内的元素，区间包含fromIndex，但不包含toIndex，即左闭右开区间[fromIndex, toIndex)。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fromIndex | int | Yes | 起始下标。 |
| toIndex | int | Yes | 终止下标。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 | The value of fromIndex or toIndex is out of range. |
| 10200011 | The removeByRange method cannot be bound. |

**Example**

```TypeScript
let arrayList = new ArrayList<number>();
arrayList.add(2);
arrayList.add(4);
arrayList.add(5);
arrayList.add(4);
arrayList.removeByRange(2, 4);

```

## replaceAllElements

```TypeScript
replaceAllElements(callbackFn: (value: T, index?: number, arrlist?: ArrayList<T>) => T, thisArg?: Object): void
```

用户操作ArrayList中的元素，用操作后的元素替换原元素并返回操作后的元素。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackFn | (value: T, index?: number, arrlist?: ArrayList&lt;T>) => T | Yes | 回调函数。 |
| thisArg | Object | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The replaceAllElements method cannot be bound. |

**Example**

```TypeScript
let arrayList = new ArrayList<number>();
arrayList.add(2);
arrayList.add(4);
arrayList.add(5);
arrayList.add(4);
arrayList.replaceAllElements((value: number): number => {
  // Add the user operation logic based on the actual scenario.
  return value;
});

```

## replaceAllElements

```TypeScript
replaceAllElements(callbackFn: ArrayListReplaceCb<T>): void
```

用户操作此容器中的元素，用操作后的元素替换原元素并返回操作后的元素。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackFn | ArrayListReplaceCb&lt;T> | Yes | 用于替换的回调函数。 |

## sort

```TypeScript
sort(comparator?: ArrayListComparatorFn<T>): void
```

根据指定比较器所定义的顺序，对ArrayList中的元素进行排序。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| comparator | ArrayListComparatorFn&lt;T> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The sort method cannot be bound. |

**Example**

```TypeScript
let arrayList = new ArrayList<number>();
arrayList.add(2);
arrayList.add(4);
arrayList.add(5);
arrayList.add(4);
arrayList.sort((a: number, b: number) => a - b);
arrayList.sort((a: number, b: number) => b - a);
arrayList.sort();

```

## subArrayList

```TypeScript
subArrayList(fromIndex: int, toIndex: int): ArrayList<T>
```

根据下标截取ArrayList中的一段元素，并返回这一段ArrayList实例，区间包含fromIndex，但不包含toIndex， 即左闭右开区间[fromIndex, toIndex)。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fromIndex | int | Yes | 起始下标。 |
| toIndex | int | Yes | 终止下标。 |

**Return value:**

| Type | Description |
| --- | --- |
| ArrayList&lt;T> | 返回ArrayList对象实例。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 | The value of fromIndex or toIndex is out of range. |
| 10200011 | The subArrayList method cannot be bound. |

**Example**

```TypeScript
let arrayList = new ArrayList<number>();
arrayList.add(2);
arrayList.add(4);
arrayList.add(5);
arrayList.add(4);
let result: ArrayList<number> = arrayList.subArrayList(2, 4);
console.info("result = ", result.length); // result = 2

```

## trimToCurrentLength

```TypeScript
trimToCurrentLength(): void
```

释放ArrayList中预留的空间，把容量调整为当前的元素个数。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The trimToCurrentLength method cannot be bound. |

**Example**

```TypeScript
let arrayList = new ArrayList<number>();
arrayList.add(2);
arrayList.add(4);
arrayList.add(5);
arrayList.add(4);
arrayList.trimToCurrentLength();
console.info("result = ", arrayList.length); // result = 4

```

## length

```TypeScript
length: number
```

ArrayList的元素个数。

**Type:** number

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

```TypeScript
get length(): int
```

获取ArrayList的元素个数。

**Type:** int

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## index

```TypeScript
[index: int]: T
```

获取指定索引值对应位置的元素。

**Type:** T

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

