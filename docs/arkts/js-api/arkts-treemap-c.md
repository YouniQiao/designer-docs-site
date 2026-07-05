# TreeMap

TreeMap可用于存储具有关联关系的key-value键值对集合，存储元素中key值唯一，每个key对应一个value。 TreeMap底层使用红黑树实现，可以利用二叉树特性快速查找键值对。key值有序存储，可以实现快速的插入和删除。

**Since:** 8

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { TreeMap } from '@kit.ArkTS';
```

## $_iterator

```TypeScript
$_iterator(): IterableIterator<[K, V]>
```

返回一个迭代器，每一项都是一个JavaScript对象。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| IterableIterator&lt;[K, V]> | TreeMap的迭代器。 |

## [Symbol.iterator]

```TypeScript
[Symbol.iterator](): IterableIterator<[K, V]>
```

返回一个迭代器，迭代器的每一项都是一个JavaScript对象。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| IterableIterator&lt;[K, V]> |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The Symbol.iterator method cannot be bound. |

**Example**

```TypeScript
let treeMap = new TreeMap<string, number>();
treeMap.set("squirrel", 123);
treeMap.set("sparrow", 356);

// Method 1:
for (let item of treeMap) {
  console.info("TreeMap:", item[0], item[1]);
}
// Output:
// TreeMap: sparrow,356
// TreeMap: squirrel,123

// Method 2:
let iter = treeMap[Symbol.iterator]();
let temp: IteratorResult<Object[]> = iter.next();
while(!temp.done) {
  console.info("key:", temp.value[0]);
  console.info("value:", temp.value[1]);
  temp = iter.next();
}
// Output:
// key: sparrow
// value: 356
// key: squirrel
// value: 123


 // You are not advised to use the set or remove APIs in Symbol.iterator because they may cause unpredictable risks such as infinite loops. You can use the for loop when inserting or deleting data.
 let treeMap = new TreeMap<string, number>();
 for(let i = 0; i < 10; i++) {
   treeMap.set("sparrow" + i, 123);
 }
 for(let i = 0;i < 10; i++) {
   treeMap.remove("sparrow" + i);
 }

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
let treeMap = new TreeMap<string, number>();
treeMap.set("squirrel", 123);
treeMap.set("sparrow", 356);
treeMap.clear();
let result = treeMap.isEmpty();
console.info("result:", result); // result: true

```

## constructor

```TypeScript
constructor(comparator?: (firstValue: K, secondValue: K) => boolean)
```

TreeMap的构造函数，支持通过比较函数使元素按照自定义规则排序。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| comparator | (firstValue: K, secondValue: K) => boolean | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200012 | The TreeMap's constructor cannot be directly invoked. |

**Example**

```TypeScript
// Default constructor.
let treeMap = new TreeMap<number, number>();


// Use the comparator firstValue < secondValue if the elements are expected to be sorted in ascending order. Use firstValue > secondValue if the elements are expected to be sorted in descending order.
let treeMap: TreeMap<string,string> = new TreeMap<string,string>((firstValue: string, secondValue: string): boolean => {
  return firstValue > secondValue;
});
treeMap.set("aa","3");
treeMap.set("dd","1");
treeMap.set("cc","2");
treeMap.set("bb","4");
for (let item of treeMap) {
  console.info("key: " + item[0], "value: " + item[1]);
}
// Output:
// key: dd value: 1
// key: cc value: 2
// key: bb value: 4
// key: aa value: 3


// When a custom type is inserted, a comparator must be provided.
class TestEntry{
  public id: number = 0;
}

let ts1: TreeMap<TestEntry, string> = new TreeMap<TestEntry, string>((t1: TestEntry, t2: TestEntry): boolean => {
  return t1.id < t2.id;
});
let entry1: TestEntry = {
  id: 0
};
let entry2: TestEntry = {
  id: 1
}
ts1.set(entry1, "0");
ts1.set(entry2, "1");
console.info("length:", ts1.length); // length: 2

```

## constructor

```TypeScript
constructor(comparator?: TreeMapComparator<K>)
```

TreeMap的构造函数，支持通过比较函数使元素按照自定义规则排序。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| comparator | TreeMapComparator&lt;K> | No |  |

## entries

```TypeScript
entries(): IterableIterator<[K, V]>
```

返回包含此映射中键值对的新迭代器对象。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| IterableIterator&lt;[K, V]> |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The entries method cannot be bound. |

**Example**

```TypeScript
let treeMap = new TreeMap<string, number>();
treeMap.set("squirrel", 123);
treeMap.set("sparrow", 356);
let it = treeMap.entries();
let t: IteratorResult<Object[]> = it.next();
while(!t.done) {
  console.info("TreeMap:", t.value);
  t = it.next()
}
// Output:
// TreeMap: sparrow,356
// TreeMap: squirrel,123


 // You are not advised to use the set or remove APIs in entries because they may cause unpredictable risks such as infinite loops. You can use the for loop when inserting or deleting data.
 let treeMap = new TreeMap<string, number>();
 for(let i = 0; i < 10; i++) {
   treeMap.set("sparrow" + i, 123);
 }
 for(let i = 0;i < 10; i++) {
   treeMap.remove("sparrow" + i);
 }

```

## forEach

```TypeScript
forEach(callbackFn: (value?: V, key?: K, map?: TreeMap<K, V>) => void, thisArg?: Object): void
```

通过回调函数来遍历实例对象上的元素及其下标。 不会对已删除的key执行回调。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackFn | (value?: V, key?: K, map?: TreeMap&lt;K, V>) => void | Yes | 回调函数。  callbackFn（必填）接受最多三个参数的函数。  对每个元素调用的函数。 |
| thisArg | Object | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The forEach method cannot be bound. |

**Example**

```TypeScript
let treeMap = new TreeMap<string, number>();
treeMap.set("sparrow", 123);
treeMap.set("gull", 357);
treeMap.forEach((value: number, key: string): void => {
  console.info("value: " + value, "key: " + key);
});
// Output:
// value: 357 key: gull
// value: 123 key: sparrow


 // You are not advised to use the set or remove APIs in forEach because they may cause unpredictable risks such as infinite loops. You can use the for loop when inserting or deleting data.
 let treeMap = new TreeMap<string, number>();
 for(let i = 0; i < 10; i++) {
   treeMap.set("sparrow" + i, 123);
 }
 for(let i = 0;i < 10; i++) {
   treeMap.remove("sparrow" + i);
 }

```

## forEach

```TypeScript
forEach(callbackFn: TreeMapForEachCb<K, V>): void
```

通过回调函数来遍历实例对象上的元素及其下标。 不会对已删除的key执行回调。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackFn | TreeMapForEachCb&lt;K, V> | Yes | 回调函数。 |

## get

```TypeScript
get(key: K): V
```

获取指定key所对应的value，若为空则返回undefined。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | K | Yes | 指定key。 |

**Return value:**

| Type | Description |
| --- | --- |
| V | 返回值或undefined。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The get method cannot be bound. |

**Example**

```TypeScript
let treeMap = new TreeMap<string, number>();
treeMap.set("squirrel", 123);
treeMap.set("sparrow", 356);
let result = treeMap.get("sparrow");
console.info("result:", result); // result: 356

```

## get

```TypeScript
get(key: K): V | undefined
```

获取指定key所对应的value，若为空则返回undefined。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | K | Yes | 指定key。 |

**Return value:**

| Type | Description |
| --- | --- |
| V | 如果存在与key关联的值则返回该值，否则返回undefined。 |

## getFirstKey

```TypeScript
getFirstKey(): K
```

获取容器中排序第一的key，若为空则返回undefined。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| K | 返回值或undefined。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The getFirstKey method cannot be bound. |
| 10200010 | Container is empty. [since 23] [staticonly] |

**Example**

```TypeScript
let treeMap = new TreeMap<string, number>();
treeMap.set("squirrel", 123);
treeMap.set("sparrow", 356);
let result = treeMap.getFirstKey();
console.info("result:", result); // result: sparrow

```

## getHigherKey

```TypeScript
getHigherKey(key: K): K
```

获取容器中大于对比key值的最小键，如果不存在大于对比key值的键值，则返回undefined。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | K | Yes | 对比的key值。 |

**Return value:**

| Type | Description |
| --- | --- |
| K | 返回排序中key后一位的数据，为空时返回undefined。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The getHigherKey method cannot be bound. |

**Example**

```TypeScript
let treeMap = new TreeMap<number, string>();
treeMap.set(1, 'one');
treeMap.set(2, 'two');
treeMap.set(3, 'three');
treeMap.set(4, 'four');
let result = treeMap.getHigherKey(3);
console.info("result:", result); // result: 4

```

## getHigherKey

```TypeScript
getHigherKey(key: K): K | undefined
```

获取容器中大于对比key值的最小键，如果key不存在，则返回undefined。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | K | Yes | 对比的key值。 |

**Return value:**

| Type | Description |
| --- | --- |
| K | 返回值或undefined。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200010 | Container is empty. |
| 10200011 | The getHigherKey method cannot be bound. |

## getLastKey

```TypeScript
getLastKey(): K
```

获取容器中排序最后的key，若为空则返回undefined。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| K | 返回值或undefined。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The getLastKey method cannot be bound. |
| 10200010 | Container is empty. [since 23] [staticonly] |

**Example**

```TypeScript
let treeMap = new TreeMap<string, number>();
treeMap.set("squirrel", 123);
treeMap.set("sparrow", 356);
let result = treeMap.getLastKey();
console.info("result:", result); // result: squirrel

```

## getLowerKey

```TypeScript
getLowerKey(key: K): K
```

获取容器中小于对比key值的最大键，如果不存在小于对比key值的键值，则返回undefined。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | K | Yes | 对比的key值。 |

**Return value:**

| Type | Description |
| --- | --- |
| K | 返回排序中key前一位的数据，为空时返回undefined。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The getLowerKey method cannot be bound. |

**Example**

```TypeScript
let treeMap = new TreeMap<number, string>();
treeMap.set(1, 'one');
treeMap.set(2, 'two');
treeMap.set(3, 'three');
treeMap.set(4, 'four');
let result = treeMap.getLowerKey(3);
console.info("result:", result); // result: 2

```

## getLowerKey

```TypeScript
getLowerKey(key: K): K | undefined
```

获取容器中小于对比key值的最大键，如果key不存在，则返回undefined。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | K | Yes | 对比的key值。 |

**Return value:**

| Type | Description |
| --- | --- |
| K | 返回值或undefined。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200010 | Container is empty. |
| 10200011 | The getLowerKey method cannot be bound. |

## hasKey

```TypeScript
hasKey(key: K): boolean
```

判断容器中是否包含指定key。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | K | Yes | 指定key。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | boolean类型。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The hasKey method cannot be bound. |

**Example**

```TypeScript
let treeMap = new TreeMap<string, number>();
treeMap.set("squirrel", 123);
let result = treeMap.hasKey("squirrel");
console.info("result:", result);  // result: true

```

## hasValue

```TypeScript
hasValue(value: V): boolean
```

判断容器中是否包含该指定value。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | V | Yes | 指定value。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | boolean类型。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The hasValue method cannot be bound. |

**Example**

```TypeScript
let treeMap = new TreeMap<string, number>();
treeMap.set("squirrel", 123);
let result = treeMap.hasValue(123);
console.info("result:", result);  // result: true

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
let treeMap = new TreeMap<number, number>();
let result = treeMap.isEmpty();
console.info("result:", result);  // result: true

```

## keys

```TypeScript
keys(): IterableIterator<K>
```

返回包含此映射中所有键的新迭代器对象。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| IterableIterator&lt;K> |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The keys method cannot be bound. |

**Example**

```TypeScript
let treeMap = new TreeMap<string, number>();
treeMap.set("squirrel", 123);
treeMap.set("sparrow", 356);
let keys = treeMap.keys();
for (let key of keys) {
  console.info("key:", key);
}
// Output:
// key: sparrow
// key: squirrel

```

## remove

```TypeScript
remove(key: K): V
```

删除指定key对应的元素。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | K | Yes | 指定key。 |

**Return value:**

| Type | Description |
| --- | --- |
| V | 返回删除元素的值。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The remove method cannot be bound. |

**Example**

```TypeScript
let treeMap = new TreeMap<string, number>();
treeMap.set("squirrel", 123);
treeMap.set("sparrow", 356);
let result = treeMap.remove("sparrow"); // Delete data.
console.info("result = " + result); // result = 356

```

## remove

```TypeScript
remove(key: K): V | undefined
```

删除指定key对应的元素。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | K | Yes | 指定key。 |

**Return value:**

| Type | Description |
| --- | --- |
| V | 如果删除了元素则返回该元素的值，否则返回undefined。 |

## replace

```TypeScript
replace(key: K, newValue: V): boolean
```

对容器中一组数据进行更新（替换）。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | K | Yes | 指定key。 |
| newValue | V | Yes | 替换的元素。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | boolean类型（key是否指向目标元素）。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The replace method cannot be bound. |

**Example**

```TypeScript
let treeMap = new TreeMap<string, number>();
treeMap.set("sparrow", 123);
let result = treeMap.replace("sparrow", 357);
console.info("sparrow:", treeMap.get("sparrow")); // sparrow: 357

```

## set

```TypeScript
set(key: K, value: V): Object
```

向容器中添加或更新一组数据。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | K | Yes | 添加成员数据的键名。 |
| value | V | Yes | 添加成员数据的值。 |

**Return value:**

| Type | Description |
| --- | --- |
| Object | 返回添加后的TreeMap。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The set method cannot be bound. |

**Example**

```TypeScript
let treeMap = new TreeMap<string, number>();
treeMap.set("squirrel", 123);
console.info("squirrel:", treeMap.get("squirrel")); // squirrel: 123

```

## setAll

```TypeScript
setAll(map: TreeMap<K, V>): void
```

将一个TreeMap中的所有元素组添加到另一个TreeMap中。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| map | TreeMap&lt;K, V> | Yes | 该map会添加到其调用setAll接口的map对象中。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The setAll method cannot be bound. |

**Example**

```TypeScript
let treeMap = new TreeMap<string, number>();
treeMap.set("squirrel", 123);
treeMap.set("sparrow", 356);
let map : TreeMap<string, number> = new TreeMap();
map.set("demo", 12);
map.setAll(treeMap); // Add all elements in the treeMap to the map.
map.forEach((value ?: number, key ?: string) : void => {
  console.info("value: " + value, "key: " + key); 
})
// Output:
// value: 12 key: demo
// value: 356 key: sparrow
// value: 123 key: squirrel

```

## values

```TypeScript
values(): IterableIterator<V>
```

返回包含此映射中键值的新迭代器对象。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| IterableIterator&lt;V> |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The values method cannot be bound. |

**Example**

```TypeScript
let treeMap = new TreeMap<string, number>();
treeMap.set("squirrel", 123);
treeMap.set("sparrow", 356);
let values = treeMap.values();
for (let value of values) {
  console.info("value:", value);
}
// value: 356
// value: 123

```

## length

```TypeScript
length: number
```

TreeMap的元素个数。

**Type:** number

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

```TypeScript
get length(): int
```

获取TreeMap的元素个数。

**Type:** int

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

