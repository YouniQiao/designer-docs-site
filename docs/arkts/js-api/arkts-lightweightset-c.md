# LightWeightSet

LightWeightSet可用于存储一系列值的集合，存储元素中value值唯一。

**Since:** 8

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { LightWeightSet } from '@kit.ArkTS';
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
| IterableIterator&lt;T> | LightWeightSet的迭代器。 |

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
let lightWeightSet = new LightWeightSet<string>();
lightWeightSet.add("squirrel");
lightWeightSet.add("sparrow");

// Method 1:
for (let value of lightWeightSet) {
  console.info("value:", value);
}
// value: sparrow
// value: squirrel

// Method 2:
let iter = lightWeightSet[Symbol.iterator]();
let temp: IteratorResult<string> = iter.next();
while(!temp.done) {
  console.info("value:", temp.value);
  temp = iter.next();
}
// value: sparrow
// value: squirrel


// You are not advised to use the add, remove, or removeAt APIs in Symbol.iterator because they may cause unpredictable risks such as infinite loops. You can use the for loop when inserting or deleting data.
let lightWeightSet = new LightWeightSet<string>();
for(let i = 0; i < 10; i++) {
  lightWeightSet.add(i + "123");
}
for(let i = 0; i < 10; i++) {
  lightWeightSet.remove(i + "123");
}

```

## add

```TypeScript
add(obj: T): boolean
```

向容器中添加数据。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| obj | T | Yes | 添加的成员数据。 |

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
let lightWeightSet = new LightWeightSet<string>();
let result = lightWeightSet.add("squirrel");
console.info("result:", result);  // result: true

```

## addAll

```TypeScript
addAll(set: LightWeightSet<T>): boolean
```

将另一个容器的所有元素组添加到当前容器。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| set | LightWeightSet&lt;T> | Yes | 提供添加元素的LightWeightSet。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 成功添加元素返回true，否则返回false。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The addAll method cannot be bound. |

**Example**

```TypeScript
let lightWeightSet = new LightWeightSet<string>();
lightWeightSet.add("squirrel");
lightWeightSet.add("sparrow");
let set = new LightWeightSet<string>();
set.add("gull");
lightWeightSet.addAll(set);
let result = lightWeightSet.has("gull");
console.info("result:", result);  // result: true

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
let lightWeightSet = new LightWeightSet<string>();
lightWeightSet.add("squirrel");
lightWeightSet.add("sparrow");
lightWeightSet.clear();
let result = lightWeightSet.isEmpty();
console.info("result:", result);  // result: true

```

## constructor

```TypeScript
constructor()
```

LightWeightSet的构造函数。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200012 | The LightWeightSet's constructor cannot be directly invoked. |

**Example**

```TypeScript
let lightWeightSet = new LightWeightSet<number | string>();

```

## entries

```TypeScript
entries(): IterableIterator<[T, T]>
```

返回包含此映射中包含的键值对的新迭代器对象。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| IterableIterator&lt;[T, T]> | 返回一个迭代器。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The entries method cannot be bound. |

**Example**

```TypeScript
let lightWeightSet = new LightWeightSet<string>();
lightWeightSet.add("squirrel");
lightWeightSet.add("sparrow");
let iter = lightWeightSet.entries();
for (let item of iter) {
  console.info("value:", item[1])
}
// value: sparrow
// value: squirrel


// You are not advised to use the add, remove, or removeAt APIs in entries because they may cause unpredictable risks such as infinite loops. You can use the for loop when inserting or deleting data.
let lightWeightSet = new LightWeightSet<string>();
for(let i = 0; i < 10; i++) {
  lightWeightSet.add(i + "123");
}
for(let i = 0; i < 10; i++) {
  lightWeightSet.remove(i + "123");
}

```

## equal

```TypeScript
equal(obj: Object): boolean
```

判断此容器与obj的构成元素是否相同。 > **说明** > > 此接口从API version 8开始支持，从API version 12开始废弃。无替代接口。

**Since:** 8

**Deprecated since:** 12

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| obj | Object | Yes | 比较对象。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 当obj为仅含string或number的LightWeightSet或数组，且对象内部元素构成相同时，返回true；其他情况返回false。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The equal method cannot be bound. |

**Example**

```TypeScript
let lightWeightSet = new LightWeightSet<string>();
lightWeightSet.add("squirrel");
lightWeightSet.add("sparrow");
let obj = ["sparrow", "squirrel"];
let result = lightWeightSet.equal(obj);
console.info("result:", result);  // result: true

```

## forEach

```TypeScript
forEach(callbackFn: (value?: T, key?: T, set?: LightWeightSet<T>) => void, thisArg?: Object): void
```

通过回调函数来遍历LightWeightSet实例对象上的元素以及元素对应的下标。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackFn | (value?: T, key?: T, set?: LightWeightSet&lt;T>) => void | Yes | 回调函数。 |
| thisArg | Object | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The forEach method cannot be bound. |

**Example**

```TypeScript
let lightWeightSet = new LightWeightSet<string>();
lightWeightSet.add("sparrow");
lightWeightSet.add("gull");
lightWeightSet.forEach((value: string, key: string) => {
  console.info("value:" + value, "key:" + key);
});
// value:gull key:gull
// value:sparrow key:sparrow


// You are not advised to use the add, remove, or removeAt APIs in forEach because they may cause unpredictable risks such as infinite loops. You can use the for loop when inserting or deleting data.
let lightWeightSet = new LightWeightSet<string>();
for(let i = 0; i < 10; i++) {
  lightWeightSet.add(i + "123");
}
for(let i = 0; i < 10; i++) {
  lightWeightSet.remove(i + "123");
}

```

## forEach

```TypeScript
forEach(callbackFn: LightWeightSetForEachCb<T>): void
```

通过回调函数遍历实例对象中实际的key。 不会对已删除的key执行回调。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callbackFn | LightWeightSetForEachCb&lt;T> | Yes | 对每个元素执行的回调函数。 |

## getIndexOf

```TypeScript
getIndexOf(key: T): int
```

获取指定key所对应的下标。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | T | Yes | 查找的指定key。 |

**Return value:**

| Type | Description |
| --- | --- |
| int | 在lightWeightSet中指定数据的下标。若lightWeightSet中没有要查找的元素，则返回一个负值。  表示目标哈希值应该插入的位置，插入位置是从1开始计数的，负号表示这是一个插入位置而不是索引。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The getIndexOf method cannot be bound. |

**Example**

```TypeScript
let lightWeightSet = new LightWeightSet<string>();
lightWeightSet.add("squirrel");
lightWeightSet.add("sparrow");
let result = lightWeightSet.getIndexOf("sparrow");
console.info("result:", result);  // result: 0

```

## getValueAt

```TypeScript
getValueAt(index: number): T
```

获取容器中指定下标对应的元素。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | 指定下标。需要小于等于int32_max即2147483647。 |

**Return value:**

| Type | Description |
| --- | --- |
| T | 返回指定下标对应的元素。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The getValueAt method cannot be bound. |

## getValueAt

```TypeScript
getValueAt(index: int): T | undefined
```

获取LightWeightSet容器中指定下标位置的对象。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | int | Yes | 检索值的下标位置。 |

**Return value:**

| Type | Description |
| --- | --- |
| T | 返回指定下标对应的值，如果下标超出范围则返回undefined。 |

## has

```TypeScript
has(key: T): boolean
```

判断容器中是否包含指定的key。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | T | Yes | 指定key。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 包含指定key时返回true，否则返回false。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The has method cannot be bound. |

**Example**

```TypeScript
let lightWeightSet = new LightWeightSet<number>();
lightWeightSet.add(123);
let result = lightWeightSet.has(123);
console.info("result:", result);  // result: true

```

## hasAll

```TypeScript
hasAll(set: LightWeightSet<T>): boolean
```

判断容器中是否包含指定set中的所有元素。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| set | LightWeightSet&lt;T> | Yes | 比较对象。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 包含所有元素时返回true，否则返回false。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The hasAll method cannot be bound. |

**Example**

```TypeScript
let lightWeightSet = new LightWeightSet<string>();
lightWeightSet.add("squirrel");
lightWeightSet.add("sparrow");
let set = new LightWeightSet<string>();
set.add("sparrow");
let result = lightWeightSet.hasAll(set);
console.info("result:", result);  // result: true

```

## increaseCapacityTo

```TypeScript
increaseCapacityTo(minimumCapacity: int): void
```

将当前LightWeightSet扩容至指定容量。如果传入的容量值大于或等于当前LightWeightSet中的元素个数，将容量变更为新容量，小于则不会变更。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| minimumCapacity | int | Yes | 需要容纳的元素数量。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The increaseCapacityTo method cannot be bound. |
| 10200001 | The value of minimumCapacity is out of range. |

**Example**

```TypeScript
let lightWeightSet = new LightWeightSet<string>();
lightWeightSet.increaseCapacityTo(10);

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
const lightWeightSet = new LightWeightSet<number>();
let result = lightWeightSet.isEmpty();
console.info("result:", result);  // result: true

```

## remove

```TypeScript
remove(key: T): T
```

删除并返回指定key对应的元素。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | T | Yes | 指定key。 |

**Return value:**

| Type | Description |
| --- | --- |
| T | 返回删除元素的值。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The remove method cannot be bound. |

**Example**

```TypeScript
let lightWeightSet = new LightWeightSet<string>();
lightWeightSet.add("squirrel");
lightWeightSet.add("sparrow");
let result = lightWeightSet.remove("sparrow");
console.info("result:", result);  // result: sparrow

```

## remove

```TypeScript
remove(key: T): T | undefined
```

删除LightWeightSet容器中指定Object类型的对象。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | T | Yes | 待删除元素的key。 |

**Return value:**

| Type | Description |
| --- | --- |
| T | 如果存在则返回被删除的值，否则返回undefined。 |

## removeAt

```TypeScript
removeAt(index: int): boolean
```

删除指定下标所对应的元素。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | int | Yes | 指定下标。需要小于等于int32_max即2147483647。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 确认是否成功删除元素，成功删除元素返回true，否则返回false。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The removeAt method cannot be bound. |

**Example**

```TypeScript
let lightWeightSet = new LightWeightSet<string>();
lightWeightSet.add("squirrel");
lightWeightSet.add("sparrow");
let result = lightWeightSet.removeAt(1);
console.info("result:", result);  // result: true

```

## toArray

```TypeScript
toArray(): Array<T>
```

获取包含此容器中所有对象的数组。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;T> | 返回对应数组。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The toArray method cannot be bound. |

**Example**

```TypeScript
let lightWeightSet = new LightWeightSet<string>();
lightWeightSet.add("squirrel");
lightWeightSet.add("sparrow");
let result = lightWeightSet.toArray();

```

## toString

```TypeScript
toString(): String
```

获取包含容器中所有键和值的字符串。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| String | 返回对应字符串。 |

**Example**

```TypeScript
let lightWeightSet = new LightWeightSet<string>();
lightWeightSet.add("squirrel");
lightWeightSet.add("sparrow");
let result = lightWeightSet.toString();
console.info("result:", result);  // result: sparrow,squirrel

```

## values

```TypeScript
values(): IterableIterator<T>
```

返回包含此映射中所有键值的新迭代器对象。

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| IterableIterator&lt;T> | 返回一个迭代器。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200011 | The values method cannot be bound. |

**Example**

```TypeScript
let lightWeightSet = new LightWeightSet<string>();
lightWeightSet.add("squirrel");
lightWeightSet.add("sparrow");
let values = lightWeightSet.values();
for (let value of values) {
  console.info("value:", value);
}
// value: sparrow
// value: squirrel

```

## length

```TypeScript
length: number
```

LightWeightSet的元素个数。

**Type:** number

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

```TypeScript
get length(): int
```

获取LightWeightSet的元素个数。

**Type:** int

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

